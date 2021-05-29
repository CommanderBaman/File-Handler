from django.urls import path, include
from .views import FileUploadView, FileUploadViewSet

from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('thing', FileUploadViewSet, basename='File Upload')

urlpatterns = [
    path('', include(router.urls)),
    path('test/', FileUploadView.as_view()),
]
