from django.urls import path
from . import views
urlpatterns = [
    path('api/team/', views.TeamListCreate.as_view() ),
]