# Generated by Django 5.1 on 2024-10-09 07:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('testDev', '0005_autonomie_candidat_integration_candidat_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Formulaire',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=100)),
                ('prenom', models.CharField(max_length=100)),
                ('age', models.IntegerField()),
                ('situation_matrimoniale', models.CharField(max_length=50)),
                ('adresse_actuelle', models.CharField(max_length=255)),
                ('numero_telephone', models.CharField(max_length=15)),
                ('adresse_email', models.EmailField(max_length=254)),
                ('poste_envisage', models.CharField(max_length=100)),
                ('formations_suivies', models.TextField()),
                ('dernier_travail', models.CharField(max_length=100)),
                ('satisfaction_carriere', models.CharField(max_length=50)),
                ('exemples_realisations', models.TextField()),
                ('respect_horaires', models.CharField(max_length=50)),
                ('retard_justifie', models.BooleanField()),
                ('ponctualite_globale', models.CharField(max_length=50)),
                ('conflit', models.CharField(max_length=50)),
                ('perseverance', models.CharField(max_length=50)),
                ('resistance_aux_obstacles', models.CharField(max_length=50)),
                ('gestion_stress', models.CharField(max_length=50)),
                ('esprit_equipe', models.CharField(max_length=50)),
                ('collaboration', models.CharField(max_length=50)),
                ('relations_avec_collegues', models.CharField(max_length=50)),
                ('ecoute_client', models.CharField(max_length=50)),
                ('satisfaction_client', models.CharField(max_length=50)),
                ('service_apres_vente', models.CharField(max_length=50)),
                ('prise_initiative', models.CharField(max_length=50)),
                ('travail_independant', models.CharField(max_length=50)),
                ('planification', models.CharField(max_length=50)),
                ('respect_des_deadlines', models.CharField(max_length=50)),
                ('organisation_globale', models.CharField(max_length=50)),
                ('satisfaction_generale', models.CharField(max_length=50)),
                ('poste_ideal', models.CharField(max_length=100)),
                ('salaire', models.FloatField()),
                ('traite', models.BooleanField()),
                ('remunere', models.BooleanField()),
                ('travailler_soir', models.BooleanField()),
                ('competence_aporte', models.CharField(max_length=255)),
                ('processus', models.CharField(max_length=50)),
                ('oriente_objet', models.CharField(max_length=50)),
                ('superficielle', models.CharField(max_length=50)),
                ('decorateurs', models.CharField(max_length=50)),
                ('python_experience', models.CharField(max_length=50)),
                ('python_projets_realises', models.TextField()),
                ('python_niveau_competence', models.CharField(max_length=50)),
                ('comparez', models.CharField(max_length=50)),
                ('javascript_experience', models.CharField(max_length=50)),
                ('javascript_projets_realises', models.TextField()),
                ('javascript_niveau_competence', models.CharField(max_length=50)),
                ('fullstack_experience', models.CharField(max_length=50)),
                ('fullstack_projets_realises', models.TextField()),
                ('fullstack_niveau_competence', models.CharField(max_length=50)),
            ],
        ),
        migrations.RemoveField(
            model_name='tenacite',
            name='candidat',
        ),
        migrations.RemoveField(
            model_name='sensduservice',
            name='candidat',
        ),
        migrations.RemoveField(
            model_name='testtechniquefullstack',
            name='candidat',
        ),
        migrations.RemoveField(
            model_name='savoirformation',
            name='candidat',
        ),
        migrations.RemoveField(
            model_name='testtechniquepython',
            name='candidat',
        ),
        migrations.RemoveField(
            model_name='organisation',
            name='candidat',
        ),
        migrations.RemoveField(
            model_name='integration',
            name='candidat',
        ),
        migrations.RemoveField(
            model_name='testtechniquejavascript',
            name='candidat',
        ),
        migrations.RemoveField(
            model_name='ponctualite',
            name='candidat',
        ),
        migrations.RemoveField(
            model_name='satisfaction',
            name='candidat',
        ),
        migrations.DeleteModel(
            name='Autonomie',
        ),
        migrations.DeleteModel(
            name='Tenacite',
        ),
        migrations.DeleteModel(
            name='SensDuService',
        ),
        migrations.DeleteModel(
            name='TestTechniqueFullstack',
        ),
        migrations.DeleteModel(
            name='SavoirFormation',
        ),
        migrations.DeleteModel(
            name='TestTechniquePython',
        ),
        migrations.DeleteModel(
            name='Organisation',
        ),
        migrations.DeleteModel(
            name='Integration',
        ),
        migrations.DeleteModel(
            name='TestTechniqueJavascript',
        ),
        migrations.DeleteModel(
            name='Ponctualite',
        ),
        migrations.DeleteModel(
            name='InformationPersonnel',
        ),
        migrations.DeleteModel(
            name='Satisfaction',
        ),
    ]
