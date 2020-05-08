from rest_framework import serializers
from .models import Product, Comment


class ProductSerlizer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = '__all__'

class CommentSerlizer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = '__all__'