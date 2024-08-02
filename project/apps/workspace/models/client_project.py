from django.db import models

from utils.models.base_model import BaseModel
from utils.slugify.custom_slugify import custom_slugify
from .workspace_client import WorkspaceClient

class WorkspaceClientProject(BaseModel):
    title = models.CharField(
        'Proyektin adı',
        max_length=200, unique=True
    )
    client = models.ForeignKey(
        WorkspaceClient,
        on_delete=models.CASCADE,
        related_name='client_projects',
        verbose_name='Virtual ofis müştərisi'
    )