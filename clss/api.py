from rest_framework import serializers, viewsets
from .models import Clss

class ClssSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Clss
        fields = ('student_name_first', 'student_name_last')

class ClssViewSet(viewsets.ModelViewSet):
    serializer_class = ClssSerializer
    queryset = Clss.objects.all()