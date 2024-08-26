from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import (
    InformationPersonnel, SavoirFormation, Ponctualite, Tenacite,
    Integration, SensDuService, Autonomie, Organisation, Satisfaction,
    TestTechniquePython, TestTechniqueJs, TestTechniqueFullstack
)

from .serializers import (
    InformationPersonnelSerializer, SavoirFormationSerializer, PonctualiteSerializer, TenaciteSerializer,
    IntegrationSerializer, SensDuServiceSerializer, 
    AutonomieSerializer, OrganisationSerializer, 
    SatisfactionSerializer, TestTechniquePythonSerializer,
    TestTechniqueJsSerializer, TestTechniqueFullstackSerializer
)


#INFORMATION PERSONNEL 
class InfoPersoListCreateView(generics.ListCreateApiView): 
    queryset = InformationPersonnel.objects.all()
    serializer_class = InformationPersonnelSerializer
    
class InfoPersoDetailView(generics.RetrieveUpdateAPIView) : 
    queryset = InformationPersonnel.objects.all()
    serializer_class = InformationPersonnelSerializer
    
    

