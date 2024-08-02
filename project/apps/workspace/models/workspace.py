from django.db import models
from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError

from utils.models.base_model import BaseModel
from utils.slugify.custom_slugify import custom_slugify

User = get_user_model()


class Workspace(BaseModel):
    WORKSPACE_STATUS_CHOICES = [
        ('public', 'public'),
        ('private', 'private'),
    ]
    
    title = models.CharField(
        'Virtual ofis', 
        max_length = 200, 
        unique = True
    )
    description = models.TextField(
        'Qısa təsvir',
        null = True, 
        blank = True
    )
    members = models.ManyToManyField(
        User,
        related_name='member_workspaces',
        blank=True,
        verbose_name='üzvlər'
    )
    admins = models.ManyToManyField(
        User,
        related_name='admin_workspaces',
        blank=True,
        verbose_name='Adminlər'
    )
    super_admin = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='super_admin_workspaces',
        verbose_name='Super admin',
        null=True, blank=True,
    )
    status = models.CharField(
        choices=WORKSPACE_STATUS_CHOICES,
        max_length=10,
        default='private'
    )
    creator = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='creator_workspaces',
        verbose_name='Virtual ofis yaratdı'
    )
    slug = models.SlugField(
        "Link adı",
        help_text="Bu qismi boş buraxın. Avtomatik doldurulacaq.",
        null=True, blank=True        
    )

    class Meta:
        verbose_name = 'Virtual ofis'
        verbose_name_plural = 'Virtual ofis'

    @property
    def truncated_description(self):
        max_words = 3
        words = self.description.split()
        truncated_words = words[:max_words]
        truncated_content = ' '.join(truncated_words)

        if len(words) > max_words:
            truncated_content += ' ...'  

        return truncated_content

    def save(self, *args, **kwargs):
        self.slug = custom_slugify(self.title)
        super(Workspace, self).save(*args, **kwargs)

    def clean(self):
        super().clean()
        try:
            if self.super_admin and self.super_admin not in self.admins.all():
                raise ValidationError("Super admin must be listed in the admins.")
        except User.DoesNotExist: 
            raise ValidationError('User instance does not exist')

    def __str__(self) -> str:
        return self.title