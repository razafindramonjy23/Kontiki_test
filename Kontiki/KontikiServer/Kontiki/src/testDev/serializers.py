from rest_framework import serializers
from .models import (InformationPersonnel, SavoirFormation, 
Ponctualite, Tenacite, Integration, SensDuService, Autonomie,
Organisation, Satisfaction, TestTechniquePython, 
TestTechniqueJavascript, TestTechniqueFullstack)

class InfoPersoSializer(serializers.ModelSerializer): 
    class Meta: 
        model = InformationPersonnel
        fields = '__all__'
        
class SavoirFormationSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = SavoirFormation
        fields = '__all__'

class PonctualiteSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Ponctualite
        fields = '__all__'
        
class TenaciteSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Tenacite
        fields = '__all__'
               
class IntegrationSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Integration
        fields = '__all__'
        
class SensDuServiceSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = SensDuService
        fields = '__all__'
        
class AutonomieSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Autonomie
        fields = '__all__'
        
class OrganisationSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Organisation
        fields = '__all__'
        
        
class SatisfactionSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Satisfaction
        fields = '__all__'
        
class TestTechPySerializer(serializers.ModelSerializer): 
    class Meta: 
        model = TestTechniquePython
        fields = '__all__'
        
        
class TestTechJsSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = TestTechniqueJavascript
        fields = '__all__'
    
class TestTechFullSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = TestTechniqueFullstack
        fields = '__all__'