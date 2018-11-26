from django.urls import include, path
from django.conf.urls import url
from . import views

urlpatterns = [
    url('class_list', views.createClass),
    url('add_student', views.createStudent),
    url('participate', views.createParticipation)
]