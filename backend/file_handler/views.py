from rest_framework.parsers import FormParser, MultiPartParser, FileUploadParser

from .serializers import FileSerializer

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from .models import File
from rest_framework.viewsets import ModelViewSet

# Create your views here.
class FileUploadViewSet(ModelViewSet):
    queryset = File.objects.all()
    print(type(File.objects), queryset)

    serializer_class = FileSerializer
    parser_classes = (FormParser, MultiPartParser, FileUploadParser, )

    def perform_create(self, serializer):
        if serializer.is_valid():
            print('YES!!')
            print(self.request)
            serializer.save(owner=self.request.user,
                            datafile=self.request.data.get('datafile'))
        else:
            print('NO!!')
            print(self.request)

# Doesn't work??

class FileUploadView(APIView):
    parser_classes = (FormParser, MultiPartParser, FileUploadParser, )

    def post(self, request, *args, **kwargs):
        file_serializer = FileSerializer(data=request.data)

        if file_serializer.is_valid():
            file_serializer.save()
            return Response(file_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

