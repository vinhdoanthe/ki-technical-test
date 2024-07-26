import django_filters
from investment.models import Investment


class InvestmentFilter(django_filters.FilterSet):
    ville = django_filters.CharFilter(lookup_expr='icontains')
    etat_d_avancement = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Investment
        fields = ['ville', 'etat_d_avancement']
