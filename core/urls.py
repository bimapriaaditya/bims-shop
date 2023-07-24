from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from docs.views import *
import product.views as viewProduct

urlpatterns = [
    path('', viewProduct.DashboardProduct.as_view(), name='dj-index'),
    path('admin/', admin.site.urls),
    path('rest-react/', ReactView.as_view(), name='django-reset-react'),
] + static(settings.STATIC_URL,document_root=settings.STATIC_ROOT, show_indexes=True)
