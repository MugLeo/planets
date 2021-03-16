from .serializers import UsersSerializer, PlanetSerializer
from rest_framework import viewsets

class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UsersSerializer
    queryset = UsersSerializer.Meta.model.objects.all()

class PlanetsViewSet(viewsets.ModelViewSet):
    serializer_class = PlanetSerializer
    queryset = PlanetSerializer.Meta.model.objects.all()