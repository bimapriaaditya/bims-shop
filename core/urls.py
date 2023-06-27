from django.contrib import admin
from django.urls import path, include
# from django.conf.urls import url
from docs.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('rest-react/', ReactView.as_view(), name='django-reset-react')
]
