from rest_framework import serializers

from observations.models import Observation


class ObservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Observation
        fields = [
            'id',
            'animal',
            'behavior',
            'created',
        ]