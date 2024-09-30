from django.db import models

from utils.models.singleton import SingletonModel
from utils.models.base_model import BaseModel


class AboutUs(SingletonModel, BaseModel):
    description = models.TextField(
        'Haqqımızda məlumat'
    )
    image = models.ImageField(upload_to = 'about')
    class Meta:
        verbose_name = 'Haqqımızda'
        verbose_name_plural = 'Haqqımızda'

    def __str__(self) -> str:
        return f'Haqqımızda məlumat'