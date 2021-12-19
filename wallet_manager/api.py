from wallet_manager.models import Transaction
from rest_framework import viewsets, permissions
from .serializer import TransactionSerializer
from wallet_manager import serializer

class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    permission_classes=[
        permissions.AllowAny
    ]  