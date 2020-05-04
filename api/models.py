import jsonfield
from django.db import models
# #TODO set what you will use inside the URL the product_id or title
#

class Product(models.Model):
    product_id = models.CharField(max_length=200, null=True)
    category = jsonfield.JSONField(max_length=300,blank=True)
    title = models.CharField(max_length=400, null=True)
    link = models.CharField(max_length=400,blank=True)
    image_urls = models.CharField(blank=True, null=True,max_length=200)
    description = models.TextField(blank=True)
    rating = models.TextField(blank=True)
    rating_distribution = jsonfield.JSONField(blank=True)
    no_of_reviews = models.TextField(blank=True)
    comments = jsonfield.JSONField(blank=True)
    commentator_name = jsonfield.JSONField(blank=True)
    commentator_rate = jsonfield.JSONField(blank=True)
    features = jsonfield.JSONField(blank=True)

    def __str__(self):
        return f'  {self.title }'



