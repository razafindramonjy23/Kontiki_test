from django.contrib import admin
from .models import (
    InformationPersonnel, SavoirFormation, Ponctualite, 
    Tenacite, Integration, SensDuService, Autonomie, 
    Organisation, Satisfaction, TestTechniquePython, 
    TestTechniqueJavaScript, TestTechniqueFullstack
)

admin.site.register(InformationPersonnel)
admin.site.register(SavoirFormation)
admin.site.register(Ponctualite)
admin.site.register(Tenacite)
admin.site.register(Integration)
admin.site.register(SensDuService)
admin.site.register(Autonomie)
admin.site.register(Organisation)
admin.site.register(Satisfaction)
admin.site.register(TestTechniquePython)
admin.site.register(TestTechniqueJavaScript)
admin.site.register(TestTechniqueFullstack)
