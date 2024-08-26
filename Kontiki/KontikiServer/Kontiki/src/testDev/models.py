from django.db import models

class FormSection(models.Model): 
    title = models.CharField(max_length=100)
    icon_url = models.URLField(max_length=225, blank=True, null=True)
    
    def __str__(self): 
        return self.title
    
class Question(models.Model): 
    section = models.ForeignKey(FormSection, related_name="questions", on_delete=models.CASCADE)
    label = models.CharField(max_length=225)
    input_type = models.CharField(max_length=20)
    
    def __str__(self): 
        return self.label
    
class UserResponse(models.Model): 
    question = models.ForeignKey(Question, related_name="responses", on_delete=models.CASCADE)
    user = models.ForeignKey("auth.User", on_delete=models.CASCADE)
    response_text = models.TextField()
    
    def __str__(self): 
        return f"Response to {self.question.label} by {self.user.username()}"
