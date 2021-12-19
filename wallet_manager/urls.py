from django.urls import path
from . import views
from rest_framework import routers
from .api import TransactionViewSet

routers = routers.DefaultRouter(trailing_slash=False)
routers.register('api/transactions', TransactionViewSet, 'transactiomns')
#routers.register('', views.home)

urlpatterns = routers.urls
