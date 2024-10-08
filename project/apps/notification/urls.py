from django.urls import path, include
from .views.home_page import HomePageView

from ..reserve.views import reserve
urlpatterns = [
    path("", HomePageView.as_view(), name = 'home'),
    path("workspaces/", include("apps.workspace.urls")),
    path("", include("apps.user.urls")),
    path("reserve/", reserve)

    # path('workspaces/', views.WorkspacesPageView.as_view(), name = 'workspaces'),
    # path('workspaces/<slug:slug>/', views.WorkspaceDetailPageView.as_view(), name = 'workspace-detail'),
    # path('create-workspace/', views.WorkspaceCreateAPIView.as_view(), name = 'create-workspace'),

    # path('workspaces/<slug:slug>/<slug:project_slug>/tasks/', views.TasksPageView.as_view(), name = 'tasks'),
]
