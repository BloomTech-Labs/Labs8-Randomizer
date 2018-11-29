from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from django.http import JsonResponse
from django.contrib.auth.models import User
from .models import ClssName, StudentName, Participation
from django.core.exceptions import ValidationError
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
    newClass2 = ClssName.manager.create_class(user,name_of_class)
    newClass2.save()
    response = JsonResponse({"id":str(newClass2.id)}, safe=True, status=201)
    return response

@csrf_exempt
@api_view(["GET"])
@permission_classes((permissions.AllowAny,))
def listClass(request):
    user = request.user
    classlist = ClssName.manager.filter(teacher=user) #returns a QuerySet
    #now need to iterate through query set passing names into an array
    justnames = []
    for x in classlist:
        justnames.append({"className":x.class_name,"classID":x.id})
    response = JsonResponse({'list_of_classes':str(justnames)}, safe=True, status=201)
    return response

@csrf_exempt
@api_view(["POST"])
@permission_classes((permissions.AllowAny,))
def createStudent(request):
    data = json.loads(request.body)
    clssID = data['classID']
    first = data['firstName']
    last = data['lastName']
    course = ClssName.manager.get(id=clssID)
    newStudent = StudentName.objects.create_student(course,first,last)
    newStudent.save()
    response = JsonResponse({"key":str(newStudent.id)}, safe=True, status=201)
    return response

@csrf_exempt
@api_view(["POST"])
@permission_classes((permissions.AllowAny,))
def studentList(request):
    data = json.loads(request.body)
    clssID = data['classID']
    classlist = StudentName.objects.filter(enrolled=clssID) #returns a QuerySet
    studentNames = []
    for x in classlist:
        studentNames.append({"fullName":x.student_name_first+' '+x.student_name_last, "studentID":str(x.id)})
    response = JsonResponse( json.dumps(studentNames), safe=False, status=201)
    return response

@csrf_exempt
@api_view(["POST"])
@permission_classes((permissions.AllowAny,))
def createParticipation(request):
    data = json.loads(request.body)
    boo = data['particpated'] #value of true or false
    studentID = data['studentID']
    student = StudentName.objects.get(id=studentID)
    participating = Participation.manager.create_participation(student,boo)
    participating.save()
    response = JsonResponse({"key":str(participating.id)}, safe=True, status=201)
    return response

@csrf_exempt
@api_view(["POST"])
@permission_classes((permissions.AllowAny,))
def particpationTotal(request):
    data = json.loads(request.body)
    studentID = data['studentID']
    allParticipations = Participation.manager.filter(student=studentID)
    print(allParticipations)
    participationDictionary = {}
    for x in allParticipations:
        splitDate = str(x.date).split()
        if splitDate[0] not in participationDictionary:
            participationDictionary[splitDate[0]] = {"P":0, "NP":0}
        if x.participate == True:
            dicT = participationDictionary[splitDate[0]]
            dicT['P'] = dicT['P'] + 1
        else:
            dicT = participationDictionary[splitDate[0]]
            dicT['NP'] = dicT['NP']+ 1
    response = JsonResponse(json.dumps(participationDictionary), safe=False, status=201)
    return response