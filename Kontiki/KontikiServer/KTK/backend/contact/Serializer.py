from rest_framework import serializers;
from .models import MyModel 

class MyModelSerializer(serializers.ModelSerializers): 
    class Meta: 
        model = MyModel
        fields = '__all__'