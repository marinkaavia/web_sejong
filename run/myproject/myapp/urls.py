from django.urls import path 
from . import views
urlpatterns = [
    path('monday', views.index_m, name = 'monday'),
    path("tuesday", views.index_t, name = "tuesday")
]