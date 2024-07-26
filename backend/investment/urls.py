from django.urls import path

from investment.views import InvestmentListView, InvestmentDetailView, InvestmentUpdateView

urlpatterns = [
    path('', InvestmentListView.as_view(), name='investment-list'),
    path('<int:pk>/', InvestmentDetailView.as_view(), name='investment-detail'),
    path('<int:pk>/update/', InvestmentUpdateView.as_view(), name='investment-update'),
]
