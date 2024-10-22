from django.views.generic import TemplateView


class DashboardPageView(TemplateView):
    template_name = 'pages/dashboard/test.html'

    def get_context_data(self, **kwargs):
        context = super(DashboardPageView, self).get_context_data(**kwargs)

        context["categories"] = [
            {'title': 'Category 1 '},
            {'title': 'Category 2'},
            {'title': 'Category 3'},
        ]

        context["statuses"] = [
            {'title': 'Category 1'},
            {'title': 'Category 2'},
            {'title': 'Category 3'},
        ]
        return context