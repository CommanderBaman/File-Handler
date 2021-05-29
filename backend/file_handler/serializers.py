from rest_framework import serializers
from .models import File


# Create your serializers here
class FileSerializer(serializers.HyperlinkedModelSerializer):
    
    class Meta:
        model = File
        fields = '__all__'