from rest_framework import viewsets
from .models import Formulaire
from .serializers import FormulaireSerializer

class FormulaireViewSet(viewsets.ModelViewSet):
    queryset = Formulaire.objects.all()
    serializer_class = FormulaireSerializer
