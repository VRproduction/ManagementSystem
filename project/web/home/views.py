from django.views.generic import TemplateView
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page

from apps.pages.home.models import (
    Partner, 
    HeroSection,
    HowToWork,
    Statistics,
    CustomerComment
)
from apps.freelancer.models import FreelancerCategory

# @method_decorator(cache_page(60 * 5), name='dispatch')  # 15 dakika boyunca önbellekte kalacak
class HomePageView(TemplateView):
    template_name = 'pages/home/index.html'

    def get_context_data(self, **kwargs):
        context = super(HomePageView, self).get_context_data(**kwargs)
        context["partners"] = Partner.objects.all()
        context['hero_section'] = HeroSection.load()
        context['freelancer_categories'] = FreelancerCategory.objects.all()[:7]
        context['how_to_work'] = HowToWork.objects.all()[:4]
        context['statistics'] = Statistics.objects.all()[:4]
        context['customer_comments'] = CustomerComment.objects.all()
        return context