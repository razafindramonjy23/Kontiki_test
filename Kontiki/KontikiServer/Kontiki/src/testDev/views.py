from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import (
    InfoPersoSerializer, SavoirFormationSerializer, PonctualiteSerializer,
    TenaciteSerializer, IntegrationSerializer, SensDuServiceSerializer,
    AutonomieSerializer, OrganisationSerializer, SatisfactionSerializer,
    TestTechniquePythonSerializer, TestTechniqueJavaScriptSerializer, TestTechniqueFullstackSerializer
)

from .models import (
    InformationPersonnel, SavoirFormation, Ponctualite, 
    Tenacite, Integration, SensDuService, Autonomie, 
    Organisation, Satisfaction, TestTechniquePython, TestTechniqueJavaScript,
    TestTechniqueFullstack
)
@api_view(['POST'])
def submit_responses(request):
    data = request.data
    
    serializers = {
        'information_personnel': InfoPersoSerializer,
        'savoir_formation': SavoirFormationSerializer,
        'ponctualite': PonctualiteSerializer,
        'tenacite': TenaciteSerializer,
        'integration': IntegrationSerializer,
        'sens_du_service': SensDuServiceSerializer,
        'autonomie': AutonomieSerializer,
        'organisation': OrganisationSerializer,
        'satisfaction': SatisfactionSerializer,
        'test_technique_python': TestTechniquePythonSerializer,
        'test_technique_javascript': TestTechniqueJavaScriptSerializer,
        'test_technique_fullstack': TestTechniqueFullstackSerializer
    }

    response_data = {}
    errors = {}

    for key, serializer_class in serializers.items():
        if key in data:
            try:
                serializer = serializer_class(data=data[key], many=isinstance(data[key], list))
                if serializer.is_valid():
                    serializer.save()
                    response_data[key] = serializer.data
                else:
                    errors[key] = serializer.errors
            except Exception as e:
                errors[key] = str(e)
    
    if errors:
        return Response({'status': 'error', 'errors': errors}, status=status.HTTP_400_BAD_REQUEST)
    
    return Response({'status': 'success', 'data': response_data}, status=status.HTTP_201_CREATED)

@api_view(['GET'])
def get_all_sections(request):
    info_personnel = InformationPersonnel.objects.all()
    savoir_formation = SavoirFormation.objects.all()
    ponctualite = Ponctualite.objects.all()
    tenacite = Tenacite.objects.all()
    integration = Integration.objects.all()
    sens_du_service = SensDuService.objects.all()
    autonomie = Autonomie.objects.all()
    organisation = Organisation.objects.all()
    satisfaction = Satisfaction.objects.all()
    test_tech_python = TestTechniquePython.objects.all()
    test_tech_javascript = TestTechniqueJavaScript.objects.all()
    test_tech_fullstack = TestTechniqueFullstack.objects.all()

    data = {
        'information_personnel': InfoPersoSerializer(info_personnel, many=True).data,
        'savoir_formation': SavoirFormationSerializer(savoir_formation, many=True).data,
        'ponctualite': PonctualiteSerializer(ponctualite, many=True).data,
        'tenacite': TenaciteSerializer(tenacite, many=True).data,
        'integration': IntegrationSerializer(integration, many=True).data,
        'sens_du_service': SensDuServiceSerializer(sens_du_service, many=True).data,
        'autonomie': AutonomieSerializer(autonomie, many=True).data,
        'organisation': OrganisationSerializer(organisation, many=True).data,
        'satisfaction': SatisfactionSerializer(satisfaction, many=True).data,
        'test_technique_python': TestTechniquePythonSerializer(test_tech_python, many=True).data,
        'test_technique_javascript': TestTechniqueJavaScriptSerializer(test_tech_javascript, many=True).data,
        'test_technique_fullstack': TestTechniqueFullstackSerializer(test_tech_fullstack, many=True).data
    }

    return Response(data, status=status.HTTP_200_OK)
