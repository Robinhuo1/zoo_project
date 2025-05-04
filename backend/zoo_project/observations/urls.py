from django.urls import include
from django.urls import path
from rest_framework.routers import DefaultRouter

from observations import views

router = DefaultRouter()
router.register(r'observations', views.ObservationViewSet, basename='observation')

urlpatterns = [
    path('', include(router.urls)),
]
