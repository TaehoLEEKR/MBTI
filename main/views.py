from django.shortcuts import render
from .models import Questions, Choice, Type_Pattern, MBTI_Res, Result

def index(request):
    mbti_res =MBTI_Res.objects.all() # MBTI 유형 16가지 데이터 전부 가져오는 함수
    Cnt_mb = 0 # 메인페이지 index 에서 여태 참여한 MBTI 유형 카운팅 수
    for i in range(1,len(mbti_res)+1):
        Cnt_mb += MBTI_Res.objects.get(pk=i).Cnt # 모든 MBTI_Res 에서 pk가 i번째에 있는 Cnt 변수를 모두 카운팅 한다.
    
    context = {
        'Cnt_mb' : Cnt_mb,
    }
    
    return render(request,'index.html',context)

def form(request):
    questions = Questions.objects.all()
    
    context = {
        'questions' : questions,
    }
    return render(request,'form.html',context=context) 
