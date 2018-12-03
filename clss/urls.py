from django.urls import include, path
from django.conf.urls import url
from . import views

urlpatterns = [
    url('create_class', views.createClass), #POST request
    url('class_list', views.listClass), #GET request
    url('add_student', views.createStudent),
    url('list_students', views.studentList),
    url('participate', views.createParticipation),
    url('participation_list', views.particpationTotal),
    url('get_everything', views.getEverything),
    url('csv_post', views.csv_post)
]