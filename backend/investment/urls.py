from django.urls import path

from investment.views import (
    InvestmentDetailUpdateView,
    InvestmentListView,
)

urlpatterns = [
    path('', InvestmentListView.as_view(), name='investment-list'),
    path('<int:pk>/', InvestmentDetailUpdateView.as_view(), name='investment-detail-and-update'),
]
