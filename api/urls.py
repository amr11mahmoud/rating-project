from django.contrib import admin
from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.apiView),
    path('search/<str:title>/', views.productsList),
    path('product/<str:title>/', views.productDetail),
    path('create/', views.productCreate),
    path('update/<str:pk>/', views.productUpdate),
    path('delete/<str:pk>/', views.productDelete),
    path('autocomplete/<str:title>/', views.autocomplete),
]
