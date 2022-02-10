
from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include

from . import views

urlpatterns = [
    path('',views.index, name='index'),
    path('viewjson/',views.vj.viewjson, name='viewjson'),
    #### quesitons
    path('quelist/',views.Questions_Json.list, name='quelist'),
    path('queview/<str:pk>/',views.Questions_Json.View, name='queview'),
    path('queinsert/',views.Questions_Json.Insert, name='queinsert'),
    path('queupdate/<str:pk>/',views.Questions_Json.Update, name='queupdate'),
    path('quedelete/<str:pk>/',views.Questions_Json.Delete, name='quedelete'),
    ##### SEP
    path('seplist/',views.SepM.list, name='seplist'),
    path('sepview/<str:pk>/',views.SepM.View, name='sepview'),
    path('sepinsert/',views.SepM.Insert, name='sepinsert'),
    path('sepupdate/<str:pk>/',views.SepM.Update, name='sepupdate'),
    path('sepdelete/<str:pk>/',views.SepM.Delete, name='sepdelete'),
    ##### RES
    path('mbtilist/',views.Mbti_R.list, name='mbtilist'),
    path('mbtiview/<str:pk>/',views.Mbti_R.View, name='mbtiview'),
    path('mbtiinsert/',views.Mbti_R.Insert, name='mbtiinsert'),
    path('mbtiupdate/<str:pk>/',views.Mbti_R.Update, name='mbtiupdate'),
    path('mbtidelete/<str:pk>/',views.Mbti_R.Delete, name='mbtidelete'),
     ##### Choice
    path('cholist/',views.Cho.list, name='chlist'),
    path('choview/<str:pk>/',views.Cho.View, name='choview'),
    path('choinsert/',views.Cho.Insert, name='choinsert'),
    path('choupdate/<str:pk>/',views.Cho.Update, name='choupdate'),
    path('chodelete/<str:pk>/',views.Cho.Delete, name='chodelete'),
    
]
