from rest_framework import serializers
from .models import *

class ApiSerializer(serializers.ModelSerializer):
    class Meta:
        model = Questions
        fields = ['pk','Number', 'Content']

class SepSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sep_models
        fields = ['pk','Sep']

class ResSerializer(serializers.ModelSerializer):
    class Meta:
        model = MBTI_Res
        fields = "__all__"

class ChoiceSerializer(serializers.ModelSerializer):
    class Meta:
        Fkque = serializers.StringRelatedField(many=True)
        Fksep = serializers.StringRelatedField(many=True)
        model = Choice
        fields = ['pk','Content','FK_Questions_id','FK_Sep']
        depth = 1