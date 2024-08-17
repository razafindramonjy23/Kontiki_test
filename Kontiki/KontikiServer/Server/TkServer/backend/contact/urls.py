from django.urls import path, include
# from rest_framework.routers import DefaultRouter
# from .views import ContactViewSet 
# from . import views
from .views import get_contacts
from .views import create_contacts

# router = DefaultRouter() 
# router.register(r'contacts', ContactViewSet)

urlpatterns = [ 
    path('contacts/', get_contacts, name='get_contacts'),
    path('contacts/create/', create_contacts, name='create_contacts')
]
