from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import FormSection, Question, UserResponse
from .serializers import FormSectionSerializer, UserResponseSerializer
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated

class FormSectionViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]  

    def list(self, request):
        sections = FormSection.objects.prefetch_related('questions').all()
        serializer = FormSectionSerializer(sections, many=True)
        return Response(serializer.data)

    @action(detail=False, methods=['POST'])
    def submit_responses(self, request):
        user = request.user
        for key, value in request.data.items():
            if key.startswith('question_'):
                question_id = key.split('_')[1]
                try:
                    question = Question.objects.get(id=question_id)
                    UserResponse.objects.create(question=question, user=user, response_text=value)
                except Question.DoesNotExist:
                    continue
        return Response({"status": "success"}, status=status.HTTP_200_OK)
