from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import *
from .serializers import *

class vj:
    def viewjson(request):
        return JsonResponse("REST API end point. .." ,safe = False)

@api_view(['GET'])
def index(request):
    api_urls = {
        'List' : '/jsonlist/',
        'Detail' : '/jsonview/<str:pk>/',
        'Create' : '/Jsoninsert/',
        'Update' : '/Jsonupdate/<str:pk>/',
        'Delete' : '/Jsondelete/<str:pk>',
    }
    
    return Response(api_urls)

class Questions_Json:
    @api_view(['GET'])
    def list(request):

        Ques = Questions.objects.all()
        serializer = ApiSerializer(Ques, many = True)

        return Response(serializer.data)

    @api_view(['GET'])
    def View(request,pk):

        Ques = Questions.objects.get(id=pk)
        serializer = ApiSerializer(Ques, many = False)

        return Response(serializer.data)


    @api_view(['POST'])
    def Insert(request):

        serializer=ApiSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

        Ques = Questions.objects.get(id=pk)
        serializer = ApiSerializer(Ques, many = False)

        return Response(serializer.data)


    @api_view(['PUT'])
    def Update(request,pk):
        Ques = Questions.objects.get(id=pk)
        serializer=ApiSerializer(instance=Ques, data=request.data)

        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data)

    @api_view(['DELETE'])
    def Delete(request,pk):
        Ques = Questions.objects.get(id=pk)

        if Ques:
            Ques.delete()

        return Response("Deleted...")
##############################################################################
class SepM:
    @api_view(['GET'])
    def list(request):

        seps = Sep_models.objects.all()
        serializer = SepSerializer(seps, many = True)

        return Response(serializer.data)

    @api_view(['GET'])
    def View(request,pk):

        seps = Sep_models.objects.get(id=pk)
        serializer = SepSerializer(seps, many = False)

        return Response(serializer.data)


    @api_view(['POST'])
    def Insert(request):

        serializer=SepSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

        seps = Sep_models.objects.get(id=pk)
        serializer = SepSerializer(seps, many = False)

        return Response(serializer.data)


    @api_view(['PUT'])
    def Update(request,pk):
        seps = Sep_models.objects.get(id=pk)
        serializer=SepSerializer(instance=seps, data=request.data)

        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data)

    def Delete(request,pk):
        spes = Sep_models.objects.get(id=pk)

        if seps:
            seps.delete()

        return Response("Deleted...")
    

###############################################
class Mbti_R:
    @api_view(['GET'])
    def list(request):

        res = MBTI_Res.objects.all()
        serializer = ResSerializer(res, many = True)

        return Response(serializer.data)

    @api_view(['GET'])
    def View(request,pk):

        res = MBTI_Res.objects.get(id=pk)
        serializer = ResSerializer(res, many = False)

        return Response(serializer.data)


    @api_view(['POST'])
    def Insert(request):

        serializer=ResSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

        res = MBTI_Res.objects.get(id=pk)
        serializer = ResSerializer(res, many = False)

        return Response(serializer.data)


    @api_view(['PUT'])
    def Update(request,pk):
        res = MBTI_Res.objects.get(id=pk)
        serializer=ResSerializer(instance=res, data=request.data)

        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data)

    def Delete(request,pk):
        res = MBTI_Res.objects.get(id=pk)

        if res:
            res.delete()

        return Response("Deleted...")
    
    
###############################################
class Cho:
    @api_view(['GET'])
    def list(request):

        cho = Choice.objects.all()
        serializer = ChoiceSerializer(cho, many = True)

        return Response(serializer.data)

    @api_view(['GET'])
    def View(request,pk):

        cho = Choice.objects.get(id=pk)
        serializer = ChoiceSerializer(cho, many = False)

        return Response(serializer.data)


    @api_view(['POST'])
    def Insert(request):

        serializer=ChoiceSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

        cho = Choice.objects.get(id=pk)
        serializer = ChoiceSerializer(cho, many = False)

        return Response(serializer.data)


    @api_view(['PUT'])
    def Update(request,pk):
        cho = Choice.objects.get(id=pk)
        serializer=ChoiceSerializer(instance=cho, data=request.data)

        if serializer.is_valid():
            serializer.save()

        return Response(serializer.data)

    def Delete(request,pk):
        cho = Choice.objects.get(id=pk)

        if cho:
            cho.delete()

        return Response("Deleted...")


