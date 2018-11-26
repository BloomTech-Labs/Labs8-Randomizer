from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from django.http import JsonResponse
from django.contrib.auth.models import User
from .models import ClssName, StudentName, Participation
from django.core.exceptions import ValidationError
#from django_currentuser.middleware import (
    #get_current_user, get_current_authenticated_user)
import json
from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions


@csrf_exempt
@api_view(["POST"])
@permission_classes((permissions.AllowAny,))
def createClass(request):
    data = json.loads(request.body)
    name_of_class = data['class_name']
    user = request.user
    print(user.username)
    newClass2 = ClssName.manager.create_class(user,name_of_class)
    newClass2.save()
    response = JsonResponse({"id":str(newClass2.id)}, safe=True, status=201)
    return response

@csrf_exempt
def createStudent(request):
    data = json.loads(request.body)
    first = data['firstName']
    last = data['lastName']
    course = ClssName.manager.get(id='bab9e1ac-90b8-48ce-b5b9-c08f73f62774')
    newStudent = StudentName.objects.create_student(course,first,last)
    newStudent.save()
    response = JsonResponse({"key":str(newStudent.id)}, safe=True, status=201)
    return response

@csrf_exempt
def createParticipation(request):
    data = json.loads(request.body)
    boo = data['particpated'] #value of true or false
    student = StudentName.objects.get(id='5742de86d6d24336820def7195f32ac8')
    participating = Participation.manager.create_participation(student,boo)
    participating.save()
    response = JsonResponse({"key":str(participating.id)}, safe=True, status=201)
    return response