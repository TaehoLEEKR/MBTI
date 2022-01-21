from django.db import models
#Questions , Choice , Type_Pattern , MBTI_Res ,Result

class Questions(models.Model): #문항
    Number = models.IntegerField(default=0)                     
    Content = models.CharField(max_length=100)
    
    def __str__(self):
        return f'{self.Number}. {self.Content}'
    # 문항 , 문항 번호
    
class Choice(models.Model): #선택지
    Content = models.CharField(max_length=100)
    FK_Questions_id = models.ForeignKey(to='main.Questions', on_delete=models.CASCADE)
    
    def __str__(self):
        return f'{self.Content}'
    # 선택지, 문항과연결된 외래키
    
class Type_Pattern(models.Model): # 유형 패턴 구분
    Sep = models.IntegerField(default=0) 
    FK_Section = models.ForeignKey(to='main.Questions', on_delete=models.CASCADE)
    FK_Choice = models.ForeignKey(to='main.Choice', on_delete=models.CASCADE)
    
    def __str__(self):
        return f'{self.Sep}_{self.FK_Section}_{self.FK_Choice}'
    # 구분 , 선택지의FK, 문항의 FK
    
class MBTI_Res(models.Model):
    Name = models.CharField(max_length=50)
    Animal = models.CharField(max_length=100)
    Rides = models.CharField(max_length=100)
    Cnt = models.IntegerField(default=0)
    
    def __str__(self):
        return f'{self.Name}'
    # 결과 , 이름, 동물 , 놀이기구 , 유형별 카운팅
    #
    #
class Result (models.Model):
    Res = models.IntegerField(default=0)
    FK_Res = models.ForeignKey(to='main.MBTI_Res',on_delete=models.CASCADE)
    
    def __str__(self):
        return f'{self.Res}.{self.FK_Res}'
    # 결과도출 과정 , 합산값 , 합산값FK
    
    
    
    # 디비 관계
    # FK_Res -- MBTI_Res
    # FK_Section -- Questions , FK_Questions_id -- Questions
    # FK_Choice -- FK_Choice
