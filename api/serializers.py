from .models import User, Planet

from rest_framework import serializers

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class PlanetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Planet
        fields = '__all__'