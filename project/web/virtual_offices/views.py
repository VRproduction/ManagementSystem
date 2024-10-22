from django.views.generic import TemplateView, DetailView


from apps.workspace.models.workspace import Workspace

class VirtualOfficesPageView(TemplateView):
    template_name = 'pages/virtual_offices/index.html'

    def get_context_data(self, **kwargs):
        context = super(VirtualOfficesPageView, self).get_context_data(**kwargs)
        return context
    

class VirtualOfficeDetailPageView(TemplateView):
    template_name = 'pages/virtual_offices/detail.html'
    # model = Workspace
    context_object_name = 'workspace'
    slug_field = 'slug'
    slug_url_kwarg = 'slug'

    def get_context_data(self, **kwargs):
        context = super(VirtualOfficeDetailPageView, self).get_context_data(**kwargs)
        return context