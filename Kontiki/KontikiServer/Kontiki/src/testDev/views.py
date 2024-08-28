from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import (InformationPersonnel, SavoirFormation, 
Ponctualite, Tenacite, Integration, SensDuService, Autonomie,
Organisation, Satisfaction, TestTechniquePython, 
TestTechniqueJavascript, TestTechniqueFullstack)

from .serializers import (InfoPersoSializer, SavoirFormationSerializer, PonctualiteSerializer, TenaciteSerializer, IntegrationSerializer, SensDuServiceSerializer, OrganisationSerializer,
AutonomieSerializer, SatisfactionSerializer, 
TestTechPySerializer, TestTechJsSerializer,
TestTechFullSerializer)

# CRUD for InformationPersonnel
@api_view(['GET'])
def get_information_personnel(request):
    info_personnel = InformationPersonnel.objects.all()
    serializer = InfoPersoSializer(info_personnel, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_information_personnel(request):
    serializer = InfoPersoSializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def information_personnel_detail(request, pk):
    try:
        info_personnel = InformationPersonnel.objects.get(pk=pk)
    except InformationPersonnel.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'DELETE':
        info_personnel.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'PUT':
        serializer = InfoPersoSializer(info_personnel, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# CRUD for SavoirFormation
@api_view(['GET'])
def get_savoir_formation(request):
    savoir_formation = SavoirFormation.objects.all()
    serializer = SavoirFormationSerializer(savoir_formation, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_savoir_formation(request):
    serializer = SavoirFormationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def savoir_formation_detail(request, pk):
    try:
        savoir_formation = SavoirFormation.objects.get(pk=pk)
    except SavoirFormation.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'DELETE':
        savoir_formation.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'PUT':
        serializer = SavoirFormationSerializer(savoir_formation, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# CRUD for Ponctualite
@api_view(['GET'])
def get_ponctualite(request):
    ponctualite = Ponctualite.objects.all()
    serializer = PonctualiteSerializer(ponctualite, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_ponctualite(request):
    serializer = PonctualiteSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def ponctualite_detail(request, pk):
    try:
        ponctualite = Ponctualite.objects.get(pk=pk)
    except Ponctualite.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'DELETE':
        ponctualite.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'PUT':
        serializer = PonctualiteSerializer(ponctualite, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# CRUD for Tenacite
@api_view(['GET'])
def get_tenacite(request):
    tenacite = Tenacite.objects.all()
    serializer = TenaciteSerializer(tenacite, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_tenacite(request):
    serializer = TenaciteSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def tenacite_detail(request, pk):
    try:
        tenacite = Tenacite.objects.get(pk=pk)
    except Tenacite.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'DELETE':
        tenacite.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'PUT':
        serializer = TenaciteSerializer(tenacite, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# CRUD for Integration
@api_view(['GET'])
def get_integration(request):
    integration = Integration.objects.all()
    serializer = IntegrationSerializer(integration, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_integration(request):
    serializer = IntegrationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def integration_detail(request, pk):
    try:
        integration = Integration.objects.get(pk=pk)
    except Integration.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'DELETE':
        integration.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'PUT':
        serializer = IntegrationSerializer(integration, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# CRUD for SensDuService
@api_view(['GET'])
def get_sens_du_service(request):
    sens_du_service = SensDuService.objects.all()
    serializer = SensDuServiceSerializer(sens_du_service, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_sens_du_service(request):
    serializer = SensDuServiceSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def sens_du_service_detail(request, pk):
    try:
        sens_du_service = SensDuService.objects.get(pk=pk)
    except SensDuService.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'DELETE':
        sens_du_service.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'PUT':
        serializer = SensDuServiceSerializer(sens_du_service, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# CRUD for Autonomie
@api_view(['GET'])
def get_autonomie(request):
    autonomie = Autonomie.objects.all()
    serializer = AutonomieSerializer(autonomie, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_autonomie(request):
    serializer = AutonomieSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def autonomie_detail(request, pk):
    try:
        autonomie = Autonomie.objects.get(pk=pk)
    except Autonomie.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'DELETE':
        autonomie.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'PUT':
        serializer = AutonomieSerializer(autonomie, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# CRUD for Organisation
@api_view(['GET'])
def get_organisation(request):
    organisation = Organisation.objects.all()
    serializer = OrganisationSerializer(organisation, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_organisation(request):
    serializer = OrganisationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def organisation_detail(request, pk):
    try:
        organisation = Organisation.objects.get(pk=pk)
    except Organisation.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'DELETE':
        organisation.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'PUT':
        serializer = OrganisationSerializer(organisation, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# CRUD for Satisfaction
@api_view(['GET'])
def get_satisfaction(request):
    satisfaction = Satisfaction.objects.all()
    serializer = SatisfactionSerializer(satisfaction, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_satisfaction(request):
    serializer = SatisfactionSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def satisfaction_detail(request, pk):
    try:
        satisfaction = Satisfaction.objects.get(pk=pk)
    except Satisfaction.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'DELETE':
        satisfaction.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'PUT':
        serializer = SatisfactionSerializer(satisfaction, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# CRUD for TestTechniquePython
@api_view(['GET'])
def get_test_technique_python(request):
    test_tech_py = TestTechniquePython.objects.all()
    serializer = TestTechPySerializer(test_tech_py, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_test_technique_python(request):
    serializer = TestTechPySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def test_technique_python_detail(request, pk):
    try:
        test_tech_py = TestTechniquePython.objects.get(pk=pk)
    except TestTechniquePython.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'DELETE':
        test_tech_py.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'PUT':
        serializer = TestTechPySerializer(test_tech_py, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# CRUD for TestTechniqueJavascript
@api_view(['GET'])
def get_test_technique_javascript(request):
    test_tech_js = TestTechniqueJavascript.objects.all()
    serializer = TestTechJsSerializer(test_tech_js, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_test_technique_javascript(request):
    serializer = TestTechJsSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def test_technique_javascript_detail(request, pk):
    try:
        test_tech_js = TestTechniqueJavascript.objects.get(pk=pk)
    except TestTechniqueJavascript.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'DELETE':
        test_tech_js.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'PUT':
        serializer = TestTechJsSerializer(test_tech_js, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# CRUD for TestTechniqueFullstack
@api_view(['GET'])
def get_test_technique_fullstack(request):
    test_tech_full = TestTechniqueFullstack.objects.all()
    serializer = TestTechFullSerializer(test_tech_full, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_test_technique_fullstack(request):
    serializer = TestTechFullSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def test_technique_fullstack_detail(request, pk):
    try:
        test_tech_full = TestTechniqueFullstack.objects.get(pk=pk)
    except TestTechniqueFullstack.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'DELETE':
        test_tech_full.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'PUT':
        serializer = TestTechFullSerializer(test_tech_full, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
