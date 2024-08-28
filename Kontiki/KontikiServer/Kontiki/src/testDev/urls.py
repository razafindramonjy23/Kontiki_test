from django.urls import path, include
from . import views

urlpatterns = [
    # URLs for InformationPersonnel
    path('information_personnel/', views.get_information_personnel, name='get_information_personnel'),
    path('information_personnel/create/', views.create_information_personnel, name='create_information_personnel'),
    path('information_personnel/<int:pk>/', views.information_personnel_detail, name='information_personnel_detail'),

    # URLs for SavoirFormation
    path('savoir_formation/', views.get_savoir_formation, name='get_savoir_formation'),
    path('savoir_formation/create/', views.create_savoir_formation, name='create_savoir_formation'),
    path('savoir_formation/<int:pk>/', views.savoir_formation_detail, name='savoir_formation_detail'),

    # URLs for Ponctualite
    path('ponctualite/', views.get_ponctualite, name='get_ponctualite'),
    path('ponctualite/create/', views.create_ponctualite, name='create_ponctualite'),
    path('ponctualite/<int:pk>/', views.ponctualite_detail, name='ponctualite_detail'),

    # URLs for Tenacite
    path('tenacite/', views.get_tenacite, name='get_tenacite'),
    path('tenacite/create/', views.create_tenacite, name='create_tenacite'),
    path('tenacite/<int:pk>/', views.tenacite_detail, name='tenacite_detail'),

    # URLs for Integration
    path('integration/', views.get_integration, name='get_integration'),
    path('integration/create/', views.create_integration, name='create_integration'),
    path('integration/<int:pk>/', views.integration_detail, name='integration_detail'),

    # URLs for SensDuService
    path('sens_du_service/', views.get_sens_du_service, name='get_sens_du_service'),
    path('sens_du_service/create/', views.create_sens_du_service, name='create_sens_du_service'),
    path('sens_du_service/<int:pk>/', views.sens_du_service_detail, name='sens_du_service_detail'),

    # URLs for Autonomie
    path('autonomie/', views.get_autonomie, name='get_autonomie'),
    path('autonomie/create/', views.create_autonomie, name='create_autonomie'),
    path('autonomie/<int:pk>/', views.autonomie_detail, name='autonomie_detail'),

    # URLs for Organisation
    path('organisation/', views.get_organisation, name='get_organisation'),
    path('organisation/create/', views.create_organisation, name='create_organisation'),
    path('organisation/<int:pk>/', views.organisation_detail, name='organisation_detail'),

    # URLs for Satisfaction
    path('satisfaction/', views.get_satisfaction, name='get_satisfaction'),
    path('satisfaction/create/', views.create_satisfaction, name='create_satisfaction'),
    path('satisfaction/<int:pk>/', views.satisfaction_detail, name='satisfaction_detail'),

    # URLs for TestTechniquePython
    path('test_python/', views.get_test_technique_python, name='get_test_technique_python'),
    path('test_python/create/', views.create_test_technique_python, name='create_test_technique_python'),
    path('test_python/<int:pk>/', views.test_technique_python_detail, name='test_technique_python_detail'),

    # URLs for TestTechniqueJavascript
    path('test_js/', views.get_test_technique_javascript, name='get_test_technique_javascript'),
    path('test_js/create/', views.create_test_technique_javascript, name='create_test_technique_javascript'),
    path('test_js/<int:pk>/', views.test_technique_javascript_detail, name='test_technique_javascript_detail'),

    # URLs for TestTechniqueFullstack
    path('test_fullstack/', views.get_test_technique_fullstack, name='get_test_technique_fullstack'),
    path('test_fullstack/create/', views.create_test_technique_fullstack, name='create_test_technique_fullstack'),
    path('test_fullstack/<int:pk>/', views.test_technique_fullstack_detail, name='test_technique_fullstack_detail'),
]
