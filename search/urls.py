from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('ignorant/', views.ignorant_search, name='ignorant_search'),
    path('holehe/', views.holehe_search, name='holehe_search'),
    path('ghunt/', views.ghunt_search, name='ghunt_search'),
    path('sherlock/', views.sherlock_search, name='sherlock_search'),
]
