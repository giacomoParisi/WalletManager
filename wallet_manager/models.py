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
    value = models.FloatField()
    date = models.DateField(auto_now=False)
    created_at = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.id) + '-' + self.descritpion
