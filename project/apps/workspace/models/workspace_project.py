from django.db import models

from utils.models.base_model import BaseModel
from .client_project import WorkspaceClient
from .workspace import Workspace

class WorkspaceProject(BaseModel):
    workspace = models.ForeignKey(
        Workspace,
        on_delete=models.CASCADE,
        related_name='workspace_projects'
    )
    client = models.ForeignKey(
        WorkspaceClient,
        on_delete=models.CASCADE,
        related_name='workspace_projects'
    )

    class Meta:
        unique_together = ['workspace', 'client']
    def __str__(self) -> str:
        return f'{self.client}'