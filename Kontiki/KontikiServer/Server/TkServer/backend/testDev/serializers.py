# from rest_framework import serializers
# from .models import testDev
# from django.db import models

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
#     {
#       "Id": "form2",
#       "title": "SAVOIR-FORMATION",
#       "fields": [
#         { "label": "Poste envisagée chez KONTIKI et qu'est-ce qui vous attire, dans le poste proposé?", "type": "textarea" },
#         { "label": "Avez-vous suivi des formations ou vous êtes vous renseignés sur le poste si oui, racontez nous", "type": "textarea" },
#         { "label": "Quel est le dernier travai que vous avez occupé? Combien de temps? Et la raison pour laquelle vous avez quitté votre dernier emploi.", "type": "textarea" },
#         { "label": "Etes-vous aujourd'hui satisfait de votre carrière?", "type": "textarea" },
#         { "label": "Pouvez-vous nous donner quelques exemples de réalisations?", "type": "textarea" }
#       ]
#     },
#     {
#       "Id": "form3",
#       "title": "PONCTUALITE",
#       "fields": [
#         { "label": "La dernière fois que vous êtes arrivé en retard, comment avez-vous géré la sitation?", "type": "textarea" },
#         { "label": "Selon vous, à partir de combien de temps êtes-vous en retard?", "type": "textarea" }
#       ]
#     },
#     {
#       "Id": "form4",
#       "title": "TENACITE",
#       "fields": [
#         { "label": "Racontez-nous la dernière fois où vous avez été confroné à une difficulté en situation professionnelle. Qu'avez-vous fait? Comment avez-vous réagi?", "type": "textarea" },
#         { "label": "Dans vos expériences professionnelle, quelles ont été les activités les plus difficiles à réaliser pour vous?", "type": "textarea" },
#         { "label": "Donnez-moi un exemple de situation où votre travail a été critiqué", "type": "textarea" },
#         { "label": "Donnez-moi un exemple de situation professionnelle où vous avez dû faire face à un conflit d'intérêts.", "type": "textarea" }
#       ]
#     },
#     {
#       "Id": "form5",
#       "title": "INTEGRATION",
#       "fields": [
#         { "label": "Avec quels types de personnes aimez-vous le mieux travailler? Pour quel raisons?", "type": "textarea" },
#         { "label": "Un collègue vous fait une remarque négative sur la qualité de votre travail. Comment réagissez-vous?", "type": "textarea" },
#         { "label": "Avez-vous déjà été dépassé par la situation? Donnez-moi un exemple.", "type": "textarea" }
#       ]
#     },
#     {
#       "Id": "form6",
#       "title": "SENS DU SERVICE",
#       "fields": [
#         { "label": "Vous êtes salarié de notre société, affecté au département DEVELOPPEUR. Ce matin vous êtes occupé dans une tâche urgente et importante. L'un de vos collègues va vers vous et se plaint vivement auprès de vous, car il est en retard sur son travail parce que son ordi a des soucis (la connexion internet ne marche pas). Quelle est votre réaction?", "type": "textarea" },
#         { "label": "Vous remarquez quil y a une tâche qui est pas faite et pourtant cette tâche ne fait pas partie de votre fiche de poste. Que faites-vous?", "type": "textarea" },
#         { "label": "Avez-vous l'esprit d'initiative? Prouvez-le à l'aIde d'exemples.", "type": "textarea" }
#       ]
#     },
#     {
#       "Id": "form7",
#       "title": "AUTONOMIE",
#       "fields": [
#         { "label": "Avez-vous déjà travaillé seul? Qu'est-ce que vous avez trouvé difficile?", "type": "textarea" },
#         { "label": "Le client vous demande un travail non prévu sur votre fiche de poste? Que faites-vous?", "type": "textarea" }
#       ]
#     },
#     {
#       "Id": "form8",
#       "title": "ORGANISATION",
#       "fields": [
#         { "label": "Vous arrivez au bureau. Que faites-vous en premier? Comment vous organisez-vous?", "type": "textarea" }
#       ]
#     },
#     {
#       "Id": "form9",
#      " title": "SATISFACTION",
#       "fields": [
#         { "label": "Quelles ont été vos satisfactions dans les postes que vous avez occupés?", "type": "textarea" },
#         { "label": "Quel serait le poste Idéal pour vous?", "type": "textarea" },
#         { "label": "Si on vous propose le même salaire et le même nombre d\"heures, entre deux entreprises, laquelle choisissez-vous?", "type": "textarea" },
#         { "label": "Quand avez-vous senti dans vos précédents postes que vous avez été bien traité?", "type": "textarea" },
#         { "label": "Quand avez-vous senti dans vos précédents postes que vous avez été bien rémunéré?", "type": "textarea" },
#         { "label": "Est-ce un problème si l'on vous demande de travailler le soir et/ou le week-end?", "type": "textarea" },
#         { "label": "Quelle compétence pouvez-vous apporter à cette entreprise?", "type": "textarea" }
#       ]
#     },
#     {
#       "Id": "form10",
#       "title": "TEST TECHNIQUE-Python",
#       "fields": [
#         { "label": "Expliquez brièvement le processus d'exécution d'un fichier Python" , "type": "textarea" },
#         { "label": "Nous savons que Python est un langage orienté objet, mais a-t-il des spécificateurs d'accès ?" , "type": "textarea" },
#         { "label": "Quand devez-vous utiliser la copie superficielle au lieu de la copie profonde, et vice versa ?" , "type": "textarea" },
#         { "label": "Expliquez l'utilisation de décorateurs en Python. Donnez un exemple pratique de situation où vous utiliseriez un décorateur." , "type": "textarea" },
#         { "label": "Comment gérer les exceptions de manière robuste en Python? Donnez des exemples de situations où les exceptions seraient appropriées" , "type": "textarea" },
#         { "label": "Pouvez-vous expliquer comment une exception peut être attrapée dans un programme Python ?" , "type": "textarea" },
#         { "label": "Décrivez les différences entre le threading et le multiprocessing en Python. Quand choisiriez-vous l'un par rapport à l'autre?" , "type": "textarea" }
#       ]
#     },
#     {
#       "Id": "form11",
#       "title": "TEST TECHNIQUE-Javascript",
#       "fields": [
#         { "label": "Comparez les avantages et les inconvénients des états locaux (local state) et des états gérés globalement (global state) dans une application Vue.js ou React.js." , "type": "textarea" },
#         { "label": "Créez un composant fonctionnel nommé UserList qui reçoit une liste d'utilisateurs en tant que prop et affiche leurs noms dans une liste. Assurez-vous que le composant met à jour correctement le state avec la liste d'utilisateurs. (* sur vscode)" , "type": "textarea" },
#         { "label": "Créez un composant parent nommé App qui contient le state avec une liste initiale d'utilisateurs. Ce composant doit rendre le composant UserList créé précédemment et un nouveau composant UserForm qui permet d'ajouter un nouvel utilisateur à la liste. (* sur vscode)" , "type": "textarea" },
#         { "label": "Implémentez le composant UserForm avec un formulaire simple qui permet à l'utilisateur de saisir un nom. Lorsque le formulaire est soumis, ajoutez un nouvel utilisateur à la liste dans le state du composant parent (App). Assurez-vous que le state est mis à jour correctement. (* sur vscode)" ," type": "textarea" },
#       ]
#     }, 
#     {
#       "Id": "form12",
#       "title": "TEST TECHNIQUE-Fullstack",
#       "fields": [
#         { "label": "Mettez en place une route côté serveur (Django, Flask) qui renvoie une liste d'utilisateurs au format JSON. La liste d'utilisateurs peut être stockée dans un fichier json. (* sur vscode)" , "type": "textarea" },
#         { "label": "Comment optimisez-vous les requêtes vers une base de données pour améliorer les performances d'une application? Parlez de l'indexation, du caching, ou d'autres stratégies que vous avez déjà mise en œuvre dans vos expériences." , "type": "textarea" },
#         { "label": "Décrivez le processus de déploiement d'une application fullstack, en mettant l'accent sur les bonnes pratiques. Parlez de l'utilisation d'outils tels que Docker, Kubernetes, ou autres, selon votre expérience." , "type": "textarea" },
#       ]
#     }
# ] 

# def testDev(field_type): 
#     if field_type == "text":
#         return models.CharField(max_length=255)
#     pass