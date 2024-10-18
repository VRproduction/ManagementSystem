from django.urls import path, include

from .views import VirtualOfficesPageView

urlpatterns = [
    path("", VirtualOfficesPageView.as_view(), name = 'virtual-offices'),
]
