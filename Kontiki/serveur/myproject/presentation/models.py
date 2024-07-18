from django.db import models

# Create your models here.
class Product (models.Model): 
    nom = models.CharField(max_length=128) 
