from typing import Any
from django.contrib import admin
from django.urls import reverse
from django.utils.safestring import mark_safe

from .models import (
    Workspace,
    WorkspaceClient,
    WorkspaceClientProject,
    WorkspaceProject
)

admin.site.register(WorkspaceClientProject)

class WorkspaceProjectInline(admin.StackedInline):
    model = WorkspaceProject
    fields = ('client',)
    classes = ('collapse',)
    extra = 0
    

@admin.register(Workspace)
class WorkspaceAdmin(admin.ModelAdmin):
    list_display = (
        'title', 'display_description',
        'display_creator',
        'display_created_date'
    )
    list_filter = ('created',)
    search_fields = (
        'title', 'description',
    )
    ordering = ('-updated', 'title')
    date_hierarchy = 'created'
    list_per_page = 20
    readonly_fields = ('creator', 'slug')
    autocomplete_fields = ('members', 'admins')
    inlines = (WorkspaceProjectInline, )

    def save_model(self, request, obj, form, change):
        if not obj.pk:
            obj.creator = request.user
        super().save_model(request, obj, form, change)

    def display_description(self, obj):
        return obj.truncated_description
    display_description.short_description = 'Qısa təsvir'

    def display_creator(self, obj):
        url = reverse("admin:user_customuser_change", args=[obj.creator.id])
        link = '<a style="color: red;" href="%s">%s</a>' % (
            url, 
            obj.creator.email
        )
        return mark_safe(link)
    display_creator.short_description = 'Virtual ofis yaratdı'

    def display_created_date(self, obj):
        return obj.created_date
    display_created_date.short_description = 'Yaranma tarixi'


@admin.register(WorkspaceClient)
class WorkspaceClientAdmin(admin.ModelAdmin):
    list_display = (
        'full_name', 'company',
        'profession', 'phone_number',
        'email', 'display_created_date'
    )
    list_filter = ('created', 'company', 'profession')
    search_fields = (
        'full_name', 'company', 'description',
        'profession', 'phone_number', 'email'
    )
    ordering = ('-updated', 'full_name')
    date_hierarchy = 'created'
    list_per_page = 20
    readonly_fields = ('slug', )

    def save_model(self, request, obj, form, change):
        if not obj.pk:
            obj.client_creator = request.user
        super().save_model(request, obj, form, change)

    def display_created_date(self, obj):
        return obj.created_date
    display_created_date.short_description = 'Əlavə edilmə tarixi'
