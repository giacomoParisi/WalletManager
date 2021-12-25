from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('wallet_manager.urls')),
    path('', include('frontend.urls'))
]
