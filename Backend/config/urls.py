from django.contrib import admin
from django.urls import path, include
from accounts.views import health_check

urlpatterns = [
    path('', health_check, name='health-check'),
    path('admin/', admin.site.urls),
    path('api/', include('accounts.urls')),
]