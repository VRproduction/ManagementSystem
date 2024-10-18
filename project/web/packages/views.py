from django.views.generic import TemplateView


class PackagePageView(TemplateView):
    template_name = 'pages/packages/index.html'

    def get_context_data(self, **kwargs):
        context = super(PackagePageView, self).get_context_data(**kwargs)
        return context