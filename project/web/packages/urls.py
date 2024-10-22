from django.urls import path, include

from .views import PackagePageView, PackageCreatePageView ,PackageDetailPageView

urlpatterns = [
    path("", PackagePageView.as_view(), name = 'packages'),
    path("create/", PackageCreatePageView.as_view(), name = 'package-create'),
    path('<slug:slug>/', PackageDetailPageView.as_view(), name='package-detail'),
]
