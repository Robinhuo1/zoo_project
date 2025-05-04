from rest_framework import mixins
from rest_framework.viewsets import GenericViewSet

from observations.models import Observation
from observations.serializers import ObservationSerializer


class ObservationViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, GenericViewSet):
    serializer_class = ObservationSerializer
    queryset = Observation.objects.all()
