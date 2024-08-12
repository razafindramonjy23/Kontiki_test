from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from Contact import views


router = routers.DefaultRouter()
router.register(r'myendpoint', 
    views.MyModelViewSet
                )

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]

