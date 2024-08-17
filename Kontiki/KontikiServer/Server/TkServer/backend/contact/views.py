from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Contact
from .serializers import ContactSerializer

# def index(request): 
#     return render(request, 'base.html')

@api_view(['GET'])
def get_contacts(request): 
    contacts = Contact.objects.all()
    serializerData = ContactSerializer(contacts, many = True).data
    return Response(serializerData)

@api_view(['POST'])
def create_contacts(request): 
    data = request.data
    serializer= ContactSerializer (data = data)
    if serializer.is_valid(): 
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST )