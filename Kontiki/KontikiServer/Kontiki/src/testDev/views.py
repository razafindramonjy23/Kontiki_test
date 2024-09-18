from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import ValidationError
from django.db import transaction

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

# Vue pour soumettre des réponses
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

    try:
        # Transaction atomique pour garantir que tout est sauvegardé ou rien n'est sauvegardé
        with transaction.atomic():
            for key, serializer_class in serializers.items():
                if key in data:
                    serializer = serializer_class(data=data[key], many=isinstance(data[key], list))
                    if serializer.is_valid():
                        serializer.save()
                        response_data[key] = serializer.data
                    else:
                        errors[key] = serializer.errors

            # Si des erreurs de validation sont présentes
            if errors:
                raise ValidationError(errors)

    except ValidationError as e:
        return Response({'status': 'error', 'errors': e.detail}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return Response({'status': 'error', 'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    return Response({'status': 'success', 'data': response_data}, status=status.HTTP_201_CREATED)

# Vue pour récupérer toutes les sections
@api_view(['GET'])
def get_all_sections(request):
    models_serializers = {
        'information_personnel': (InformationPersonnel, InfoPersoSerializer),
        'savoir_formation': (SavoirFormation, SavoirFormationSerializer),
        'ponctualite': (Ponctualite, PonctualiteSerializer),
        'tenacite': (Tenacite, TenaciteSerializer),
        'integration': (Integration, IntegrationSerializer),
        'sens_du_service': (SensDuService, SensDuServiceSerializer),
        'autonomie': (Autonomie, AutonomieSerializer),
        'organisation': (Organisation, OrganisationSerializer),
        'satisfaction': (Satisfaction, SatisfactionSerializer),
        'test_technique_python': (TestTechniquePython, TestTechniquePythonSerializer),
        'test_technique_javascript': (TestTechniqueJavaScript, TestTechniqueJavaScriptSerializer),
        'test_technique_fullstack': (TestTechniqueFullstack, TestTechniqueFullstackSerializer)
    }

    data = {}
    for key, (model, serializer_class) in models_serializers.items():
        instances = model.objects.all()
        serializer = serializer_class(instances, many=True)
        data[key] = serializer.data

    return Response(data, status=status.HTTP_200_OK)
