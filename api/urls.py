from django.contrib import admin
from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.apiView),
    path('autocomplete/<str:title>/', views.autocomplete),
    path('search/<str:title>/', views.productsList),
    path('product/<str:product_id>/', views.productDetails),
    path('create/', views.productCreate),
    path('update/<str:pk>/', views.productUpdate),
    path('delete/<str:pk>/', views.productDelete),
    path('comments/<str:product_id>/', views.commentsList)
]
