from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.models import Game as gameModel
from api.models import actualGame

# Create your views here.


@api_view(['GET'])
def apiOverview(request):
    api_urls = {
        'List': '/task-list/',
        'Detail View': '/task-detail/<str:pk>/',
        'Create': '/task-create/',
        'Update': '/task-update/<str:pk>/',
        'Delete': '/task-delete/<str:pk>/',
    }

    return Response(api_urls)


@api_view(['GET'])
def addName(request):

    return JsonResponse({'data': list(gameModel.objects.values())})


@api_view(['GET'])
def set_name(request, pk):
    new = gameModel.objects.get(id=1)
    new.player_name = pk
    new.save()
    return JsonResponse({'data': list(gameModel.objects.values())})


@api_view(['GET'])
def returnData(request):
    return JsonResponse({'data': list(gameModel.objects.values())})


@api_view(['GET'])
def getname(request):
    gg = gameModel.objects.get(id=1)
    return Response(gg.player_name)


@api_view(['GET'])
def reset_settings(request):
    gameData = actualGame.objects.get(id=1)
    gameData.attempts_left = 7
    gameData.word_length = len(gameData.selected_word)
    gameData.attemptDone = False
    gameData.subject = "*"*gameData.word_length
    gameData.save()
    return Response(Response.status_code)


@api_view(['GET'])
def showDaddy(request):
    gameData = actualGame.objects.get(id=1)
    print(gameData.selected_word)
    return Response(Response.status_code)



@api_view(['GET'])
def attempt_left(request):
    print(actualGame.objects.get(id=1).attempts_left)
    return Response(actualGame.objects.get(id=1).attempts_left)

@api_view(['GET'])
def getWord(request):
    print(actualGame.objects.get(id=1).attempts_left)
    return Response(actualGame.objects.get(id=1).subject)



def index_Finder(charc):
    return [i for i, ltr in enumerate(actualGame.objects.get(id=1).selected_word) if ltr in charc]

@api_view(['GET'])
def attempt_me(requests, pk):
    gameData = actualGame.objects.get(id=1)
    SubjectList = list(gameData.subject)
    GameState = ""
    if len(index_Finder(pk)) <= 0:
        gameData.attempts_left=gameData.attempts_left - 1 
        print(f"Wrong!!")
    if gameData.attempts_left <= 0:
        print("GAME LOST!!!!")
        GameState = "LOST"
        gameData.attemptDone = True
    else:
        for x in index_Finder(pk):
            SubjectList[x] = pk
        gameData.subject = "".join(SubjectList)
    if "*" not in SubjectList:
        print("You Won")
        GameState = "WON"
    gameData.subject = "".join(SubjectList)
    gameData.save()
    print(gameData.attempts_left)
    print(gameData.subject)
    # Show user on frontend
    return Response(GameState)
