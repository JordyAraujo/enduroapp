from teams.models import Team
from teams.serializers import TeamSerializer
from rest_framework import generics

class TeamListCreate(generics.ListCreateAPIView):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer