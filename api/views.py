from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ProductSerlizer, CommentSerlizer
from .models import Product, Comment
from scraping_client.scraping_client.items import ScraperItem

@api_view(['GET'])

def apiView(request):
    api_urls = {
        'List':'products',
        'Detail View':'product/id',
        'Create' : 'create/id',
        'Update': 'update/id',
        'Update': 'delete/id'
    }
    return Response(api_urls)

@api_view(['GET'])
def productsList(request, title):
    products = Product.objects.filter(title__startswith=title)
    serializer = ProductSerlizer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def productDetails(request,product_id):
    products = Product.objects.get(product_id__exact= product_id)
    serializer = ProductSerlizer(products, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def productCreate(request):
    serializer = ProductSerlizer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
    return Response(serializer.data)


@api_view(['POST'])
def productUpdate(request, pk):
    product = Product.objects.get(id=pk)
    serializer = ProductSerlizer(instance=product, data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
    return Response(serializer.data)


@api_view(['DELETE'])
def productDelete(request, pk):
    product = Product.objects.get(id=pk)
    product.delete()
    return Response('Product Successfully Deleted ')


@api_view(['GET'])
def autocomplete(request, title):
    products = Product.objects.filter(title__startswith=title)
    serializer = ProductSerlizer(products, many=True)
    return Response(serializer.data)


# GETTING COMMENTS

@api_view(['GET'])
def commentsList(request, product_id):
    comments = Comment.objects.filter(product_id__exact=product_id)
    serializer = CommentSerlizer(comments, many=True)
    return Response(serializer.data)