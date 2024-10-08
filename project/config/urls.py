from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('web.urls')),
    path('dashboard/', include('apps.core.urls')),
    path('api/', include('apps.workspace.api.urls')),
    path('api/', include('apps.user.api.urls')),
    path('api/', include('apps.pages.contact.api.urls')),
    path("__reload__/", include("django_browser_reload.urls")),
]

# Local settings
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
