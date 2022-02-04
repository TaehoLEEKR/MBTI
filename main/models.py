from django.db import models
#Questions , Choice , MBTI_Res ,Res

class Questions(models.Model): #문항
    Number = models.IntegerField(default=0)                     
    Content = models.CharField(max_length=100)
    
    def __str__(self):
        return f'{self.Number}. {self.Content}'
    # 문항 , 문항 번호
    
class Choice(models.Model): #선택지
    Content = models.CharField(max_length=100)
    FK_Questions_id = models.ForeignKey(to='main.Questions', on_delete=models.CASCADE)
    FK_Sep = models.ForeignKey(to='main.Sep_models', on_delete=models.CASCADE)
    
    def __str__(self):
        return f'{self.FK_Sep}. {self.Content}'

class Sep_models(models.Model):
    Sep = models.CharField(max_length=20)
    
    def __str__(self):
        return f'{self.Sep}'
    
    
class MBTI_Res(models.Model):
    Name = models.CharField(max_length=50)
    Cnt = models.IntegerField(default=0)
    Data_res = models.JSONField() 
    
    def __str__(self):
        return f'{self.Name}'
    # 결과 , 이름, 동물 , 놀이기구 , 유형별 카운팅

    
    # 디비 관계
    # FK_Res -- MBTI_Res
    # FK_Section -- Questions , FK_Questions_id -- Questions
    # FK_Choice -- FK_Choice
