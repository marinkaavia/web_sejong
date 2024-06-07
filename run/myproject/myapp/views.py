from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index_m(request):
    return HttpResponse("have a good monday")

def index_t(request):
    return HttpResponse("have a good tuesday")