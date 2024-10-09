from django.db import models

class Formulaire(models.Model):
    # Information Personnel
    nom = models.CharField(max_length=100)
    prenom = models.CharField(max_length=100)
    age = models.IntegerField()
    situation_matrimoniale = models.CharField(max_length=50)
    adresse_actuelle = models.CharField(max_length=255)
    numero_telephone = models.CharField(max_length=15)
    adresse_email = models.EmailField()

    # Savoir Formation
    poste_envisage = models.CharField(max_length=100)
    formations_suivies = models.TextField()
    dernier_travail = models.CharField(max_length=100)
    satisfaction_carriere = models.CharField(max_length=50)
    exemples_realisations = models.TextField()

    # Ponctualité
    respect_horaires = models.CharField(max_length=50)
    retard_justifie = models.BooleanField()
    ponctualite_globale = models.CharField(max_length=50)
    conflit = models.CharField(max_length=50)

    # Ténacité
    perseverance = models.CharField(max_length=50)
    resistance_aux_obstacles = models.CharField(max_length=50)
    gestion_stress = models.CharField(max_length=50)

    # Intégration
    esprit_equipe = models.CharField(max_length=50)
    collaboration = models.CharField(max_length=50)
    relations_avec_collegues = models.CharField(max_length=50)

    # Sens du Service
    ecoute_client = models.CharField(max_length=50)
    satisfaction_client = models.CharField(max_length=50)
    service_apres_vente = models.CharField(max_length=50)

    # Autonomie
    prise_initiative = models.CharField(max_length=50)
    travail_independant = models.CharField(max_length=50)

    # Organisation
    planification = models.CharField(max_length=50)
    respect_des_deadlines = models.CharField(max_length=50)
    organisation_globale = models.CharField(max_length=50)

    # Satisfaction
    satisfaction_generale = models.CharField(max_length=50)
    poste_ideal = models.CharField(max_length=100)
    salaire = models.FloatField()
    traite = models.BooleanField()
    remunere = models.BooleanField()
    travailler_soir = models.BooleanField()
    competence_aporte = models.CharField(max_length=255)

    # Test Technique Python
    processus = models.CharField(max_length=50)
    oriente_objet = models.CharField(max_length=50)
    superficielle = models.CharField(max_length=50)
    decorateurs = models.CharField(max_length=50)
    python_experience = models.CharField(max_length=50)
    python_projets_realises = models.TextField()
    python_niveau_competence = models.CharField(max_length=50)

    # Test Technique JavaScript
    comparez = models.CharField(max_length=50)
    javascript_experience = models.CharField(max_length=50)
    javascript_projets_realises = models.TextField()
    javascript_niveau_competence = models.CharField(max_length=50)

    # Test Technique Fullstack
    fullstack_experience = models.CharField(max_length=50)
    fullstack_projets_realises = models.TextField()
    fullstack_niveau_competence = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.prenom} {self.nom}"
