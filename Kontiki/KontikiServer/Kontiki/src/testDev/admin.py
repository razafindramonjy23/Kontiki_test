from django.contrib import admin
from .models import (
    InformationPersonnel, SavoirFormation, Ponctualite, Tenacite, Integration,
    SensDuService, Autonomie, Organisation, Satisfaction, TestTechniquePython,
    TestTechniqueJavaScript, TestTechniqueFullstack
)

class SavoirFormationInline(admin.TabularInline):
    model = SavoirFormation
    extra = 0

class PonctualiteInline(admin.TabularInline):
    model = Ponctualite
    extra = 0

class TenaciteInline(admin.TabularInline):
    model = Tenacite
    extra = 0

class IntegrationInline(admin.TabularInline):
    model = Integration
    extra = 0

class SensDuServiceInline(admin.TabularInline):
    model = SensDuService
    extra = 0

class AutonomieInline(admin.TabularInline):
    model = Autonomie
    extra = 0

class OrganisationInline(admin.TabularInline):
    model = Organisation
    extra = 0

class SatisfactionInline(admin.TabularInline):
    model = Satisfaction
    extra = 0

class TestTechniquePythonInline(admin.TabularInline):
    model = TestTechniquePython
    extra = 0

class TestTechniqueJavaScriptInline(admin.TabularInline):
    model = TestTechniqueJavaScript
    extra = 0

class TestTechniqueFullstackInline(admin.TabularInline):
    model = TestTechniqueFullstack
    extra = 0

@admin.register(InformationPersonnel)
class InformationPersonnelAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'email')  # Modifiez ces champs selon vos besoins
    inlines = [
        SavoirFormationInline,
        PonctualiteInline,
        TenaciteInline,
        IntegrationInline,
        SensDuServiceInline,
        AutonomieInline,
        OrganisationInline,
        SatisfactionInline,
        TestTechniquePythonInline,
        TestTechniqueJavaScriptInline,
        TestTechniqueFullstackInline,
    ]
    
    def get_queryset(self, request):
        queryset = super().get_queryset(request)
        return queryset.prefetch_related(
            'savoirformation_set',
            'ponctualite_set',
            'tenacite_set',
            'integration_set',
            'sensduservice_set',
            'autonomie_set',
            'organisation_set',
            'satisfaction_set',
            'testtechniquepython_set',
            'testtechniquejavascript_set',
            'testtechniquefullstack_set'
        )

    def name(self, obj):
        return obj.name

    def email(self, obj):
        return obj.email

    name.admin_order_field = 'name'
    email.admin_order_field = 'email'
