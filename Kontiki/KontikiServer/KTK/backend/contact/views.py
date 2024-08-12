from django.shortcuts import render
from django.forms import ModelForm
from Contact.models import Contact
from rest_framework import viewsets
from .models import MyModel
from .Serializer import MyModelSerializer

class MyModelViewSet(viewsets.ModelViewSet): 
    queryset = MyModel.objects.all()
    serializer_class = MyModelSerializer

class ContactForm(ModelForm):
    class Meta: 
        model = Contact
        fields = ('name', 'firstname', 'email', 'message')

def contact(request):
    contact_form = ContactForm()
    return render(request,"Contact.jsx", {"contact_form" : contact_form})
