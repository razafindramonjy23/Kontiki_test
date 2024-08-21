from django.db import models

# # Model abstrait de base pour tous les models.
# steps = [
#      {
#       'Id': "form1",
#       'title': "Information personnel",
#       'fields': [
#         { 'label': "Nom", "type": "text" },
#         { 'label': "Prenom", "type": "text" },
#         { 'label': "Age", "type": "text" },
#         { 'label': "Situation matrimoniale", "type": "text" },
#         { 'label': "Adresse actuelle", "type": "text" },
#         { 'label': "Numéro de téléphone", "type": "text" },
#         { 'label': "Adresse e-mail", "type": "email" }
#       ]
#     },

class InformationPersonnel(models.Model):
  nom = models.CharField(max_length=200) 
  prenom = models.CharField(max_length=200) 
  age = models.IntegerField()
  situation_matrimoniale = models.CharField(max_length=200)
  adresse = models.CharField(max_length=200)
  email = models.EmailField() 
  tel = models.CharField(max_length=25)
  
class Form(models.Model): 
  id = models.CharField(max_length=10, primary_key=True)
  title = models.CharField(max_length=100)

  def __str__(self): 
    return self.title
   
class Field(models.Model): 
  form = models.ForeignKey(Form, related_name='fields', on_delete=models.CASCADE)
  label = models.CharField(max_length=555)
  type = models.CharField(max_length=20)
  
  def __str__(self): 
    return f'{self.label}({self.type})'