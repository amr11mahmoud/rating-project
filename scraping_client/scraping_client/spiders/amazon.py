import scrapy
from ..items import ScraperItem
from scrapy.selector import Selector
from scrapy.utils.response import open_in_browser
import re
from api.models import Comment
class QuoteSpider(scrapy.Spider):
    name = "phones"
    page_number = 2

    def start_requests(self):
        for i in range(4, 5):
            url = "https://www.amazon.com/s?k=phones&ref=nb_sb_noss_2&page="  + str(i)
            yield scrapy.Request(url=url, callback=self.parse)

    def parse(self, response):
        open_in_browser(response)
        products_links = response.xpath(
            "//span[@class='a-size-medium a-color-base a-text-normal']/ancestor::a/@href").extract()
        # products_images = response.xpath("//div[@class='a-section aok-relative s-image-fixed-height']/img/@src").extract()
        products_titles = response.css(".a-color-base.a-text-normal::text").extract()
        products_ratings = response.css(".aok-align-bottom > span.a-icon-alt::text").extract()
        products_no_reviews = response.xpath("//span[@class='a-size-base' and @dir='auto']/text()").extract()
        category = response.css(".a-color-state.a-text-bold::text").extract()

        for product in range(len(products_links)):
            result = products_links[product].find('dp/') + 3
            second = products_links[product].find('/ref')
            product_id = products_links[product][result:second]
            feature = "https://www.amazon.com/hz/reviews-render/ajax/lazy-widgets/stream?asin=" + products_links[product][result:second] + "&lazyWidget=cr-summarization-attributes"
            products_links[product] = "https://www.amazon.com" + products_links[product]
            request = scrapy.Request(url=str(feature), callback=properties)
            # request.cb_kwargs['image_urls'] = products_images[product]
            request.cb_kwargs['link'] = products_links[product]
            request.cb_kwargs['title'] = products_titles[product]
            request.cb_kwargs['rating'] = products_ratings[product]
            request.cb_kwargs['no_of_reviews'] = products_no_reviews[product]
            request.cb_kwargs['product_id'] = product_id
            request.cb_kwargs['category'] = category
            yield request


def properties(response, link, title, rating, no_of_reviews,product_id,category):
    filtering = response.text.replace("\\", "")
    advs = Selector(text=filtering).css("span.a-size-base.a-color-base").css("::text").extract()
    classifications = Selector(text=filtering).css("span.a-size-base.a-color-tertiary").css("::text").extract()
    final = advs + classifications
    request = scrapy.Request(url=link, callback=product_page)
    # request.cb_kwargs['image_urls'] = image_urls
    request.cb_kwargs['link'] = link
    request.cb_kwargs['title'] = title
    request.cb_kwargs['rating'] = rating
    request.cb_kwargs['no_of_reviews'] = no_of_reviews
    request.cb_kwargs['features'] = final
    request.cb_kwargs['product_id'] = product_id
    request.cb_kwargs['category'] = category

    yield request


def product_page(response, link, title, rating, no_of_reviews, features,product_id,category):
    images_selector = response.xpath("//*[@id='imageBlock_feature_div']/script[1]/text()").extract()
    indexes = [m.start() for m in re.finditer('large', images_selector[0])]
    image1_url = images_selector[0][indexes[0]+8:indexes[0]+80]
    image2_url = images_selector[0][indexes[1]+8:indexes[1]+80]
    image3_url = images_selector[0][indexes[2]+8:indexes[2]+80]
    image4_url = images_selector[0][indexes[3]+8:indexes[3]+80]
    image_urls = [image1_url, image2_url, image3_url, image4_url]
    comments = response.xpath("//div[@data-hook='review-collapsed']/span[ not(@*) or "
"@class='cr-original-review-content']/text()").extract()
    reviewers_names = response.xpath("//span[@class='a-profile-name']/text()").extract()
    customers_ratings = response.xpath(
        "//i[@data-hook='review-star-rating' or @data-hook='cmps-review-star-rating']/span[@class='a-icon-alt']/text()").extract()
    def convertString(rate):
        return rate[0:3]
    customers_ratings = map(convertString, customers_ratings)
    customers_ratings = list(customers_ratings)

    for i in range(0, len(comments)):
        comment = Comment.objects.create(
                product_id=product_id,
                comment=comments[i],
                comment_rate=customers_ratings[i],
                user_name=reviewers_names[i]
        )
        comment.save()

    description = response.xpath("//*[@id='productDescription']/p[1]/text()").extract()
    # description = description[0].replace("\n", "")
    rating_distribution = response.xpath(
        "//span[@class='a-size-base']/a[@class='a-link-normal']/@title").extract()
    store(image_urls, link, title, rating, no_of_reviews, description, rating_distribution, features,product_id,category)


def store(image_urls, link, title, rating, no_of_reviews, description, rating_distribution, features,product_id,category):
    item = ScraperItem()
    item['product_id'] = product_id
    item['image_urls'] = image_urls
    item['link'] = link
    item['title'] = title
    item['rating'] = rating
    item['no_of_reviews'] = no_of_reviews
    item['description'] = description
    item['rating_distribution'] = rating_distribution
    item['features'] = features
    item['category'] = category
    item.save()
