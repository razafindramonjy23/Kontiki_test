from django.urls import path
from .views import get_all_sections, submit_responses

urlpatterns = [
    path('api/get_all_sections/', get_all_sections, name='get_all_sections'),
    path('api/submit_responses/', submit_responses, name='submit_responses'),
]
