from django.views.generic import TemplateView



class RegisterPageView(TemplateView):
    template_name = 'pages/register/register.html'