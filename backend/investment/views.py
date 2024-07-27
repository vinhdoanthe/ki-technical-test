from django_filters.rest_framework import DjangoFilterBackend
from investment.filters import InvestmentFilter
from investment.models import Investment
from investment.serializers import InvestmentSerializer
from rest_framework.generics import (
    ListAPIView,
    RetrieveUpdateAPIView,
)


class InvestmentListView(ListAPIView):
    queryset = Investment.objects.all()
    serializer_class = InvestmentSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_class = InvestmentFilter


class InvestmentDetailUpdateView(RetrieveUpdateAPIView):
    queryset = Investment.objects.all()
    serializer_class = InvestmentSerializer
