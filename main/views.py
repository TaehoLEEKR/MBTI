from django.shortcuts import render
from .models import Questions , Choice , Sep_models, MBTI_Res


def test(request):
    ques = Questions.objects.count()
    words = Sep_models.objects.all()
    keywords = []
    keywords_revers = []
    slice_cnt = []
    stack_res=[]
    res_str = ""
    
    for c in range(1,len(words),2):
        keywords.append(Sep_models.objects.get(id=c).Sep)
        
    for k in range(2,len(words)+1,2):
        keywords_revers.append(Sep_models.objects.get(id=k).Sep)
        
    print(keywords,'\n',keywords_revers)
    
    for n in range(1,ques+1): # post 체크
        stack_res.append((request.POST[f'question--{n}'][0]))
        
    for i in range(0,len(keywords)):
        slice_cnt.append((stack_res.count(keywords[i])))
        
    print(slice_cnt)
    for res in range(0,len(slice_cnt)):
        if slice_cnt[res] >=2 : 
            res_str += keywords[res]
        else:
            res_str += keywords_revers[res]
        
    print(f'POST : {request.POST}')
    
    print(stack_res)
    print(res_str)
    context = {
        'stack_res' : stack_res,
        'res_str' : res_str,
    }
    
    return render(request, 'test.html',context)

        
def index(request):
    mbti_res =MBTI_Res.objects.all() # MBTI 유형 16가지 데이터 전부 가져오는 함수
    #.count 를 쓰면 디비 수를 가져올수 있다.
    
    Cnt_mb = 0 # 메인페이지 index 에서 여태 참여한 MBTI 유형 카운팅 수
    
    
    for i in range(1,len(mbti_res)+1):
        Cnt_mb += MBTI_Res.objects.get(pk=i).Cnt # 모든 MBTI_Res 에서 pk가 i번째에 있는 Cnt 변수를 모두 카운팅 한다.
        
    
    context = {
        'Cnt_mb' : Cnt_mb,
    }
        
    
    return render(request,'index.html',context)



def form(request):
    questions = Questions.objects.all()
    sep = Sep_models.objects.all()
    
        
    context = {
        'questions' : questions,
        'sep' : sep,
    }

    
    return render(request,'form.html',context=context)