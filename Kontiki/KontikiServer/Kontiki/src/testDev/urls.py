from django.urls import path
from .views import get_test, submit_test
from . import views

urlpatterns = [
    # path('information/<int:id>/', detail_information, name='detail_information'),
    path('get_test/', views.get_test, name='get_test'),
    path('submit_test/', views.submit_test, name='submit_test'),
]
