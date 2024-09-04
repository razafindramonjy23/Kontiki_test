from django.db import models

class InformationPersonnel(models.Model):
    nom = models.CharField(max_length=200) 
    prenom = models.CharField(max_length=200) 
    age = models.IntegerField()
    situation_matrimoniale = models.CharField(max_length=200)
    adresse = models.CharField(max_length=200)
    email = models.EmailField() 
    tel = models.CharField(max_length=25)

    def __str__(self):
        return f"{self.nom} {self.prenom}"

class SavoirFormation(models.Model):
    candidat = models.ForeignKey(InformationPersonnel, on_delete=models.CASCADE, null=True)
    poste_envisage = models.TextField("Poste envisagé chez KONTIKI et qu'est-ce qui vous attire dans le poste proposé ?")
    formation_renseignements = models.TextField("Avez-vous suivi des formations ou vous êtes-vous renseigné sur le poste ? Si oui, racontez-nous.")
    dernier_travail = models.TextField("Quel est le dernier travail que vous avez occupé ? Combien de temps ? Et la raison pour laquelle vous avez quitté votre dernier emploi.")
    satisfaction_carriere = models.TextField("Êtes-vous aujourd'hui satisfait de votre carrière ?")
    exemples_realisation = models.TextField("Pouvez-vous nous donner quelques exemples de réalisations ?")

class Ponctualite(models.Model):
    candidat = models.ForeignKey(InformationPersonnel, on_delete=models.CASCADE, null=True)
    retard_dernier = models.TextField("La dernière fois que vous êtes arrivé en retard, comment avez-vous géré la situation ?")
    definition_retard = models.TextField("Selon vous, à partir de combien de temps êtes-vous en retard ?")

class Tenacite(models.Model):
    candidat = models.ForeignKey(InformationPersonnel, on_delete=models.CASCADE, null=True)
    difficulte_professionnelle = models.TextField("Racontez-nous la dernière fois où vous avez été confronté à une difficulté en situation professionnelle. Qu'avez-vous fait ? Comment avez-vous réagi ?")
    activites_difficiles = models.TextField("Dans vos expériences professionnelles, quelles ont été les activités les plus difficiles à réaliser pour vous ?")
    critique_travail = models.TextField("Donnez-moi un exemple de situation où votre travail a été critiqué.")
    conflit_interets = models.TextField("Donnez-moi un exemple de situation professionnelle où vous avez dû faire face à un conflit d'intérêts.")

class Integration(models.Model):
    candidat = models.ForeignKey(InformationPersonnel, on_delete=models.CASCADE, null=True)  # Rendre le champ nullable
    type_personnes_preferees = models.TextField()
    reaction_remarque_negative = models.TextField()
    depasse_par_situation = models.TextField()

class SensDuService(models.Model):
    candidat = models.ForeignKey(InformationPersonnel, on_delete=models.CASCADE, null=True)
    reaction_collegue_probleme = models.TextField("Vous êtes salarié de notre société, affecté au département DEVELOPPEUR. Ce matin vous êtes occupé dans une tâche urgente et importante. L'un de vos collègues vient vers vous et se plaint vivement car il est en retard sur son travail parce que son ordinateur a des soucis (la connexion internet ne marche pas). Quelle est votre réaction ?")
    tache_non_attribuee = models.TextField("Vous remarquez qu'il y a une tâche qui n'est pas faite et pourtant cette tâche ne fait pas partie de votre fiche de poste. Que faites-vous ?")
    esprit_initiative = models.TextField("Avez-vous l'esprit d'initiative ? Prouvez-le à l'aide d'exemples.")

class Autonomie(models.Model):
    candidat = models.ForeignKey(InformationPersonnel, on_delete=models.CASCADE, null=True)  # Rendre le champ nullable
    travail_seul = models.TextField("Avez-vous déjà travaillé seul ? Qu'avez-vous trouvé difficile ?")
    demande_travail_non_prevus = models.TextField("Le client vous demande un travail non prévu sur votre fiche de poste ? Que faites-vous ?")

class Organisation(models.Model):
    candidat = models.ForeignKey(InformationPersonnel, on_delete=models.CASCADE, null=True)
    organisation_journee = models.TextField("Vous arrivez au bureau. Que faites-vous en premier ? Comment vous organisez-vous ?")

class Satisfaction(models.Model):
    candidat = models.ForeignKey(InformationPersonnel, on_delete=models.CASCADE, null=True)
    satisfactions_postes = models.TextField("Quelles ont été vos satisfactions dans les postes que vous avez occupés ?")
    poste_ideal = models.TextField("Quel serait le poste idéal pour vous ?")
    choix_entreprises = models.TextField("Si on vous propose le même salaire et le même nombre d'heures, entre deux entreprises, laquelle choisissez-vous ?")
    bien_traite = models.TextField("Quand avez-vous senti dans vos précédents postes que vous avez été bien traité ?")
    bien_remunere = models.TextField("Quand avez-vous senti dans vos précédents postes que vous avez été bien rémunéré ?")
    travail_soir_weekend = models.TextField("Est-ce un problème si l'on vous demande de travailler le soir et/ou le week-end ?")
    competence_apportee = models.TextField("Quelle compétence pouvez-vous apporter à cette entreprise ?")

class TestTechniquePython(models.Model):
    candidat = models.ForeignKey(InformationPersonnel, on_delete=models.CASCADE, null=True)
    execution_python = models.TextField("Expliquez brièvement le processus d'exécution d'un fichier Python.")
    specificateurs_acces = models.TextField("Nous savons que Python est un langage orienté objet, mais a-t-il des spécificateurs d'accès ?")
    copie_superficielle_profonde = models.TextField("Quand devez-vous utiliser la copie superficielle au lieu de la copie profonde, et vice versa ?")
    utilisation_decorateurs = models.TextField("Expliquez l'utilisation de décorateurs en Python. Donnez un exemple pratique de situation où vous utiliseriez un décorateur.")
    gestion_exceptions = models.TextField("Comment gérer les exceptions de manière robuste en Python ? Donnez des exemples de situations où les exceptions seraient appropriées.")
    capture_exception = models.TextField("Pouvez-vous expliquer comment une exception peut être attrapée dans un programme Python ?")
    threading_vs_multiprocessing = models.TextField("Décrivez les différences entre le threading et le multiprocessing en Python. Quand choisiriez-vous l'un par rapport à l'autre ?")

class TestTechniqueJavaScript(models.Model):
    candidat = models.ForeignKey(InformationPersonnel, on_delete=models.CASCADE, null=True)
    local_state_vs_global_state = models.TextField("Comparez les avantages et les inconvénients des états locaux (local state) et des états gérés globalement (global state) dans une application Vue.js ou React.js.")
    userlist_component = models.TextField("Créez un composant fonctionnel nommé UserList qui reçoit une liste d'utilisateurs en tant que prop et affiche leurs noms dans une liste. Assurez-vous que le composant met à jour correctement le state avec la liste d'utilisateurs.")
    app_component = models.TextField("Créez un composant parent nommé App qui contient le state avec une liste initiale d'utilisateurs. Ce composant doit rendre le composant UserList créé précédemment et un nouveau composant UserForm qui permet d'ajouter un nouvel utilisateur à la liste.")
    userform_component = models.TextField("Implémentez le composant UserForm avec un formulaire simple qui permet à l'utilisateur de saisir un nom. Lorsque le formulaire est soumis, ajoutez un nouvel utilisateur à la liste dans le state du composant parent (App). Assurez-vous que le state est mis à jour correctement.")

class TestTechniqueFullstack(models.Model):
    candidat = models.ForeignKey(InformationPersonnel, on_delete=models.CASCADE, null=True)
    route_serveur = models.TextField("Mettez en place une route côté serveur (Django, Flask) qui renvoie une liste d'utilisateurs au format JSON. La liste d'utilisateurs peut être stockée dans un fichier JSON.")
    optimisation_requetes_bdd = models.TextField("Comment optimisez-vous les requêtes vers une base de données pour améliorer les performances d'une application ? Parlez de l'indexation, du caching, ou d'autres stratégies que vous avez déjà mises en œuvre dans vos expériences.")
    deploiement_fullstack = models.TextField("Décrivez le processus de déploiement d'une application fullstack, en mettant l'accent sur les bonnes pratiques. Parlez de l'utilisation d'outils tels que Docker, Kubernetes, ou autres, selon votre expérience.")
