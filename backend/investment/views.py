from django_filters.rest_framework import DjangoFilterBackend
from investment.filters import InvestmentFilter
from investment.models import Investment
from investment.serializers import InvestmentSerializer
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    UpdateAPIView,
)


class InvestmentListView(ListAPIView):
    queryset = Investment.objects.all()
    serializer_class = InvestmentSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_class = InvestmentFilter


class InvestmentDetailView(RetrieveAPIView):
    queryset = Investment.objects.all()
    serializer_class = InvestmentSerializer


class InvestmentUpdateView(UpdateAPIView):
    queryset = Investment.objects.all()
    serializer_class = InvestmentSerializer
