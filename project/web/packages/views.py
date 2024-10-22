from django.views.generic import TemplateView


class PackagePageView(TemplateView):
    template_name = 'pages/packages/index.html'

    def get_context_data(self, **kwargs):
        context = super(PackagePageView, self).get_context_data(**kwargs)
        return context
    

class PackageDetailPageView(TemplateView):
    template_name = 'pages/packages/detail.html'
    # model = Workspace
    context_object_name = 'package'
    slug_field = 'slug'
    slug_url_kwarg = 'slug'

    def get_context_data(self, **kwargs):
        context = super(PackageDetailPageView, self).get_context_data(**kwargs)
        return context
    
class PackageCreatePageView(TemplateView):
    template_name = 'pages/packages/create.html'

    def get_context_data(self, **kwargs):
        context = super(PackageCreatePageView, self).get_context_data(**kwargs)
        return context