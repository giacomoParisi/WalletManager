from django.db import models


class TransactionType(models.TextChoices):
    HOME = 'HOME'
    FOOD = 'FOOD'
    SERVICES = 'SERVICES'
    CLOTHING = 'CLOTHING'
    HEALTH = 'HEALTH'
    TRANSPORT = 'TRANSPORT'
    ENTERTAINMENT = 'ENTERTAINMENT'
    MISCELLANEOUS = 'MISCELLANEOUS'
