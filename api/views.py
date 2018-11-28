from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
import json

from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions


@csrf_exempt
def register(request):
    data = json.loads(request.body)
    username = data['username']
    password1 = data['password1']
    password2 = data['password2']
    user=User(username=username)
    if len(username) < 3:
        response = JsonResponse({"error":"Username must be at least 3 characters."}, safe=True, status=500)
    elif len(password1) < 5:
        response = JsonResponse({"error":"Password must be at least 5 characters."}, safe=True, status=500)
    elif password1 != password2:
        response = JsonResponse({"error":"The two password fields didn't match."}, safe=True, status=500)
    else:
      try:
          user.validate_unique()
      except ValidationError:
          response = JsonResponse({"error":"A user with that username already exists."}, safe=True, status=500)
      else:
          user.set_password(password1)
          user.save()
          response = JsonResponse({"key":str(user.auth_token)}, safe=True, status=201)
    return response

@csrf_exempt
def login(request):
    data = json.loads(request.body)
    username = data['username']
    password = data['password']
    try:
        user = User.objects.get(username=username)
    except User.DoesNotExist:
        response = JsonResponse({"error":"User does not exist."}, safe=True, status=500)
    else:
        if user.check_password(password):
            response = JsonResponse({"key":str(user.auth_token)}, safe=True, status=200)
        else:
            response = JsonResponse({"error":"Unable to log in with provided credentials."}, safe=True, status=500)
    return response

@csrf_exempt
@api_view(["POST"])
@permission_classes((permissions.AllowAny,))
def tokenRegister(request):
    data = json.loads(request.body)
    print('here again', data)
    username = data['username']
    email = data['email']
    user=User(username=username)
    try:
      user.validate_unique()
    except ValidationError:
          response = JsonResponse({"error":"A user with that username already exists."}, safe=True, status=500)
    else:
          user.save()
          response = JsonResponse({"key":str(user.auth_token)}, safe=True, status=201)
    return response






# (Receive token by HTTPS POST)

# try:
#     # Specify the CLIENT_ID of the app that accesses the backend:
#     idinfo = id_token.verify_oauth2_token(token, requests.Request(), CLIENT_ID)

#     # Or, if multiple clients access the backend server:
#     # idinfo = id_token.verify_oauth2_token(token, requests.Request())
#     # if idinfo['aud'] not in [CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]:
#     #     raise ValueError('Could not verify audience.')

#     if idinfo['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
#         raise ValueError('Wrong issuer.')

#     # If auth request is from a G Suite domain:
#     # if idinfo['hd'] != GSUITE_DOMAIN_NAME:
#     #     raise ValueError('Wrong hosted domain.')

#     # ID token is valid. Get the user's Google Account ID from the decoded token.
#     userid = idinfo['sub']
# except ValueError:
#     # Invalid token
#     pass
