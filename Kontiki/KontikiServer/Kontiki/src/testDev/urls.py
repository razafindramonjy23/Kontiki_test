from django.urls import path
from .views import get_all_sections, submit_responses

urlpatterns = [
    path('get-all-sections/', get_all_sections, name='get_all_sections'),
    path('submit-responses/', submit_responses, name='submit_responses'),
]
