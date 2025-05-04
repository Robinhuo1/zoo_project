from django.db.models import TextChoices


class BehaviorChoices(TextChoices):
    FEEDING = 'Feeding'
    RESTING = 'Resting'
    ACTIVE = 'Active'
    OTHER = 'Other'
