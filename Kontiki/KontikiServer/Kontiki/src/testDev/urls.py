from django.urls import path
from .views import test_dev
from . import views

urlpatterns = [
    # path('information/<int:id>/', detail_information, name='detail_information'),
    # path('get_test/', get_test, name='get_test'),
    # path('submit_test/', submit_test, name='submit_test'),
    path('test_dev/', test_dev, name='test_dev')
]
