from django.db import models

from core.models import CreatedUpdatedModel
from observations.enums import BehaviorChoices


class Observation(CreatedUpdatedModel):
    animal = models.CharField(max_length=200, blank=False)
    behavior = models.CharField(max_length=200, choices=BehaviorChoices)