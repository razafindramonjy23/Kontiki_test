from django.db import models
from contact.models import Contact


# Create your models here.
class ViewContact(models.Model): 
    contact = models.ForeignKey(Contact, on_delete=models.CASCADE)
    
    def __str__(self):
        pass