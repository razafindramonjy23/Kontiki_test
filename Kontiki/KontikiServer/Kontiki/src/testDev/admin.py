from django.contrib import admin
from .models import InformationPersonnel

@admin.register(InformationPersonnel)
class testDevAmin(admin.ModelAdmin):
    list_display = ('nom', 'prenom', 'email')
    
