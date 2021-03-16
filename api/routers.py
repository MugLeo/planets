from rest_framework.routers import DefaultRouter
from .api import UserViewSet, PlanetsViewSet

router = DefaultRouter()

router.register(r'users', UserViewSet)

router.register(r'planets', PlanetsViewSet)

urlpatterns = router.urls