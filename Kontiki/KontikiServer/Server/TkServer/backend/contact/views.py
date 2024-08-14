from rest_framework import viewsets
from .models import Contact
from .serializers import ContactSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import ContactSerializer

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

def contact_create(request): 
    serializer = ContactSerializer(data=request.data)
    if serializer.is_valid(): 
        serializer.save()
        return Response (serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)