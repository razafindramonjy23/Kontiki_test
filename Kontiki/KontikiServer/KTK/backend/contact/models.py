from django.contrib import adminfrom 
from django.db import models

# Create your models here.
class Contact (models.Model):
    name = models.CharField(max_length=150)
    firstname = models.CharField(max_length = 150)
    email = models.CharField(max_length = 150)
    message = models.CharField(max_length = 2000)
    