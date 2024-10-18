from django.views.generic import TemplateView


class VirtualOfficesPageView(TemplateView):
    template_name = 'pages/virtual_offices/index.html'

    def get_context_data(self, **kwargs):
        context = super(VirtualOfficesPageView, self).get_context_data(**kwargs)
        return context