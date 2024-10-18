from django.urls import path, include

from .views import PackagePageView

urlpatterns = [
    path("", PackagePageView.as_view(), name = 'packages'),
]
