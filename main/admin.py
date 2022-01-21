from django.contrib import admin
from .models import Questions , Choice , Type_Pattern , MBTI_Res ,Result

admin.site.register(Questions)
admin.site.register(Choice)
admin.site.register(Type_Pattern)
admin.site.register(MBTI_Res)
admin.site.register(Result)
