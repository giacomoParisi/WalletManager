from django.contrib import admin
from .models import Transaction

# Register your models here.
class TransactionModelAdmin(admin.ModelAdmin):
    list_display = ('id', 'type', 'descritpion', 'date', 'created_at', 'last_modified')
    readonly_fields = ('id',)

admin.site.register(Transaction, TransactionModelAdmin)