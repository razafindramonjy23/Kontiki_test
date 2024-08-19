from django.contrib import admin
from django.urls import path, include
# from ..contact.urls import views



urlpatterns = [
    path('admin/', admin.site.urls),      
    path('contact/', include('contact.urls')),  
]
