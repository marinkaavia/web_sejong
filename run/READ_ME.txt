Instruction for Django
1. Create virtual enviromrent  python -m venv venv source venv/bin/activate 
2. django-admin startproject myproject
3. cd myproject python manage.py startapp myapp
4. python manage.py runserver # to run server
5. Create a view: In the file myapp directory myapp/views.py: from django.http import HttpResponse def index(request): #index - main function that we would        return HttpResponse("Hello, World!")
6. In a myapp/urls.py we create url from django.urls import path from . import views urlpatterns = [      path('hello/', views.index, name='hello'), # using hello/ adding to your link, you can run the function index ]
7. Modify myproject/urls.py from django.contrib import admin from django.urls import path, include # <-- 1. add this  urlpatterns = [ path('admin/', admin.site.urls), # 2. add this line too path('', include('myapp.urls')), ]
8. To the myproject/settings.py add INSTALLED_APP = [ …, “my app”, …]
