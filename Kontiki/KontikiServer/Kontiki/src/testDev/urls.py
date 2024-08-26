from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FormSectionViewSet 

router = DefaultRouter()
router.register(r'form-section', FormSectionViewSet, basename='formsection')

urlpatterns = [
    path('', include(router.urls)),
]
