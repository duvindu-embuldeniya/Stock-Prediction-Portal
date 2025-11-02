from django.urls import path
from . views import *

urlpatterns = [
    path('predict/', StockPredictionAPIView.as_view(), name = 'stock_prediction'),
]