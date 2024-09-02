from rest_framework import serializers
from .models import (
    InformationPersonnel, SavoirFormation, Ponctualite, Tenacite, Integration,
    SensDuService, Autonomie, Organisation, Satisfaction, TestTechniquePython,
    TestTechniqueJavaScript, TestTechniqueFullstack
)

class InfoPersoSerializer(serializers.ModelSerializer):
    class Meta:
        model = InformationPersonnel
        fields = '__all__'

class SavoirFormationSerializer(serializers.ModelSerializer):
    candidat = serializers.PrimaryKeyRelatedField(queryset=InformationPersonnel.objects.all(), required=False)
    
    class Meta:
        model = SavoirFormation
        fields = '__all__'

class PonctualiteSerializer(serializers.ModelSerializer):
    candidat = serializers.PrimaryKeyRelatedField(queryset=InformationPersonnel.objects.all(), required=False)
    
    class Meta:
        model = Ponctualite
        fields = '__all__'

class TenaciteSerializer(serializers.ModelSerializer):
    candidat = serializers.PrimaryKeyRelatedField(queryset=InformationPersonnel.objects.all(), required=False)
    
    class Meta:
        model = Tenacite
        fields = '__all__'

class IntegrationSerializer(serializers.ModelSerializer):
    candidat = serializers.PrimaryKeyRelatedField(queryset=InformationPersonnel.objects.all(), required=False)
    
    class Meta:
        model = Integration
        fields = '__all__'

class SensDuServiceSerializer(serializers.ModelSerializer):
    candidat = serializers.PrimaryKeyRelatedField(queryset=InformationPersonnel.objects.all(), required=False)
    
    class Meta:
        model = SensDuService
        fields = '__all__'

class AutonomieSerializer(serializers.ModelSerializer):
    candidat = serializers.PrimaryKeyRelatedField(queryset=InformationPersonnel.objects.all(), required=False)
    
    class Meta:
        model = Autonomie
        fields = '__all__'

class OrganisationSerializer(serializers.ModelSerializer):
    candidat = serializers.PrimaryKeyRelatedField(queryset=InformationPersonnel.objects.all(), required=False)
    
    class Meta:
        model = Organisation
        fields = '__all__'

class SatisfactionSerializer(serializers.ModelSerializer):
    candidat = serializers.PrimaryKeyRelatedField(queryset=InformationPersonnel.objects.all(), required=False)
    
    class Meta:
        model = Satisfaction
        fields = '__all__'

class TestTechniquePythonSerializer(serializers.ModelSerializer):
    candidat = serializers.PrimaryKeyRelatedField(queryset=InformationPersonnel.objects.all(), required=False)
    
    class Meta:
        model = TestTechniquePython
        fields = '__all__'

class TestTechniqueJavaScriptSerializer(serializers.ModelSerializer):
    candidat = serializers.PrimaryKeyRelatedField(queryset=InformationPersonnel.objects.all(), required=False)
    
    class Meta:
        model = TestTechniqueJavaScript
        fields = '__all__'

class TestTechniqueFullstackSerializer(serializers.ModelSerializer):
    candidat = serializers.PrimaryKeyRelatedField(queryset=InformationPersonnel.objects.all(), required=False)
    
    class Meta:
        model = TestTechniqueFullstack
        fields = '__all__'
