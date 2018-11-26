from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.contrib.auth.models import User
from .models import ClssName, StudentName
from django.core.exceptions import ValidationError
from django_currentuser.middleware import (
    get_current_user, get_current_authenticated_user)
import json

@csrf_exempt
def createClass(request):
    data = json.loads(request.body)
    name_of_class = data['class_name']
    user = User.objects.get(pk=2)
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

