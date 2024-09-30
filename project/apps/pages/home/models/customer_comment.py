from django.db import models

from utils.models.base_model import BaseModel

class CustomerComment(BaseModel):
    customer_name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    profile_image = models.ImageField(upload_to='customer-profile/', null=True, blank=True)
    title = models.CharField(max_length=100)
    comment = models.TextField(max_length=255)
    rating = models.IntegerField(choices=[(i, i) for i in range(1, 6)])  # 1-5 stars rating

    def __str__(self):
        return f'{self.customer_name} - {self.title}'

