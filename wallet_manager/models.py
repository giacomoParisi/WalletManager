from wallet_manager.entities.transaction_type import TransactionType
from django.db import models

# Create your models here.


class Transaction(models.Model):
    type = models.CharField(
        max_length=20,
        choices=TransactionType.choices,
        default=TransactionType.MISCELLANEOUS,
    )
    descritpion = models.CharField(max_length=50)
    date = models.DateField()
