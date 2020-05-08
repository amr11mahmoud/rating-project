import jsonfield
from django.db import models
# #TODO set what you will use inside the URL the product_id or title
#


class Product(models.Model):
    product_id = models.CharField(max_length=200, null=False,primary_key=True, default='' )
    category = jsonfield.JSONField(max_length=300,blank=True)
    title = models.CharField(max_length=400, null=True)
    link = models.CharField(max_length=400,blank=True)
    image_urls = models.TextField(blank=True, default="")
    description = models.TextField(blank=True)
    rating = models.TextField(blank=True)
    rating_distribution = jsonfield.JSONField(blank=True)
    no_of_reviews = models.TextField(blank=True)
    features = jsonfield.JSONField(blank=True)

    def __str__(self):
        return f'  {self.title }'


class Comment(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    comment = models.TextField(blank=False, default=' empty ')
    user_name = models.TextField(blank=False, default='user01')
    comment_rate = models.CharField(blank=False, default='0', max_length=10)

    def __str__(self):
        return f'  {self.user_name}'