from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import (
    InformationPersonnel, SavoirFormation, Ponctualite, 
    Tenacite, Integration, SensDuService, Autonomie, 
    Organisation, Satisfaction, TestTechniquePython, 
    TestTechniqueJavaScript, TestTechniqueFullstack
)
from .serializers import (
    InfoPersoSerializer, SavoirFormationSerializer, PonctualiteSerializer,
    TenaciteSerializer, IntegrationSerializer, SensDuServiceSerializer,
    AutonomieSerializer, OrganisationSerializer, SatisfactionSerializer,
    TestTechniquePythonSerializer, TestTechniqueJavaScriptSerializer,
    TestTechniqueFullstackSerializer
)


@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def test_dev(request): 
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
    
    models = {
        'information_personnel': InformationPersonnel,
        'savoir_formation': SavoirFormation,
        'ponctualite': Ponctualite,
        'tenacite': Tenacite,
        'integration': Integration,
        'sens_du_service': SensDuService,
        'autonomie': Autonomie,
        'organisation': Organisation,
        'satisfaction': Satisfaction,
        'test_technique_python': TestTechniquePython,
        'test_technique_javascript': TestTechniqueJavaScript,
        'test_technique_fullstack': TestTechniqueFullstack
    }
    
    # GET Method
    if request.method == 'GET': 
        data = {}
        for key, model in models.items(): 
            instances = model.objects.all()
            serializer_class = serializers[key]  # Correction : serializer → serializers
            serializer = serializer_class(instances, many=True)
            data[key] = serializer.data
        return Response(data, status=status.HTTP_200_OK)
    
    # POST Method
    elif request.method == 'POST':
        data = request.data 
        response_data = {}
        errors = {}
        
        for key, serializer_class in serializers.items(): 
            if key in data: 
                serializer = serializer_class(data=data[key])  # Correction : data[ke] → data[key]
                if serializer.is_valid(): 
                    serializer.save()
                    response_data[key] = serializer.data 
                else: 
                    errors[key] = serializer.errors
        
        if errors: 
            return Response({'status': 'error', 'errors': errors}, status=status.HTTP_400_BAD_REQUEST)
        
        return Response({'status': 'success', 'data': response_data}, status=status.HTTP_201_CREATED)  

    # PUT Method
    elif request.method == 'PUT': 
        data = request.data 
        response_data = {}
        errors = {}
        
        for key, serializer_class in serializers.items():  # Correction : serializer → serializers
            if key in data: 
                try: 
                    instance = models[key].objects.get(id=data[key].get('id'))
                    serializer = serializer_class(instance, data=data[key])
                    if serializer.is_valid():
                        serializer.save()
                        response_data[key] = serializer.data 
                    else: 
                        errors[key] = serializer.errors 
                except models[key].DoesNotExist: 
                    errors[key] = f"{key} instance with id {data[key].get('id')} not found"

        if errors: 
            return Response({'status': 'error', 'errors': errors}, status=status.HTTP_400_BAD_REQUEST)
           
        return Response({'status': 'success', 'data': response_data}, status=status.HTTP_200_OK) 
 
    
# @api_view(['GET','POST'])
# def submit_test(request):
#     data = request.data
#     # print("Received data : ", data)
#     serializers = {
#         'information_personnel': InfoPersoSerializer,
#         'savoir_formation': SavoirFormationSerializer,
#         'ponctualite': PonctualiteSerializer,
#         'tenacite': TenaciteSerializer,
#         'integration': IntegrationSerializer,
#         'sens_du_service': SensDuServiceSerializer,
#         'autonomie': AutonomieSerializer,
#         'organisation': OrganisationSerializer,
#         'satisfaction': SatisfactionSerializer,
#         'test_technique_python': TestTechniquePythonSerializer,
#         'test_technique_javascript': TestTechniqueJavaScriptSerializer,
#         'test_technique_fullstack': TestTechniqueFullstackSerializer
#     }

#     response_data = {}
#     errors = {}

#     for key, serializer_class in serializers.items():
#         if key in data:
#             serializer = serializer_class(data=data[key])
#             if serializer.is_valid():
#                 serializer.save()
#                 response_data[key] = serializer.data
#             else:
#                 errors[key] = serializer.errors

#     if errors:
#         # print("Validation errors:", errors)
#         return Response({'status': 'error', 'errors': errors}, status=status.HTTP_400_BAD_REQUEST)

#     return Response({'status': 'success', 'data': response_data}, status=status.HTTP_201_CREATED)

# @api_view(['GET'])
# def get_test(request):
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