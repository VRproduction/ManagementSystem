from django.urls import path, include

from .views import VirtualOfficesPageView, VirtualOfficeDetailPageView

urlpatterns = [
    path("", VirtualOfficesPageView.as_view(), name = 'virtual-offices'),
    path('<slug:slug>/', VirtualOfficeDetailPageView.as_view(), name='virtual-office'),
]
