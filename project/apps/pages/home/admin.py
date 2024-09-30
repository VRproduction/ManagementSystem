from django.contrib import admin

from .models import (
    Partner, 
    HeroSection,
    HowToWork,
    Statistics,
    CustomerComment
)


class SingletonModelAdmin(admin.ModelAdmin):
    def has_add_permission(self, request):
        """Prevent adding more than one instance."""
        return not self.model.objects.exists()

    def has_delete_permission(self, request, obj=None):
        """Prevent deletion of the singleton instance."""
        return False


@admin.register(Partner)
class PartnerAdmin(admin.ModelAdmin):
    list_display = ['name', 'url']


@admin.register(HeroSection)
class HeroSectionAdmin(SingletonModelAdmin):
    pass


@admin.register(HowToWork)
class HowToWorkAdmin(admin.ModelAdmin):
    def has_add_permission(self, request):
        """Prevent adding more than one instance."""
        return not self.model.objects.count() == 4
    

@admin.register(Statistics)
class StatisticsAdmin(admin.ModelAdmin):
    list_display = ('title', 'number')
    
    def has_add_permission(self, request):
        """Prevent adding more than one instance."""
        return not self.model.objects.count() == 4
        
@admin.register(CustomerComment)
class CustomerCommentAdmin(admin.ModelAdmin):
    list_display = ('customer_name', 'location', 'title', 'rating')
    search_fields = ('customer_name', 'location', 'title')