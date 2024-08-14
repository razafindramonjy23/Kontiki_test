from django.contrib import admin
from django.urls import path, include
# from .views import contact_create
 

urlpatterns = [
    #path('admin/', admin.site.urls),
    path('', include("contact.urls")),
    # path('api/contacts', contact_create, name='contact_create'),
    
]
