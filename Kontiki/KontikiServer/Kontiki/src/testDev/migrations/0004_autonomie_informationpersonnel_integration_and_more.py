# Generated by Django 5.1 on 2024-08-27 17:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('testDev', '0003_alter_question_section_userresponse_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Autonomie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('travail_seul', models.TextField(verbose_name="Avez-vous déjà travaillé seul ? Qu'avez-vous trouvé difficile ?")),
                ('demande_travail_non_prevus', models.TextField(verbose_name='Le client vous demande un travail non prévu sur votre fiche de poste ? Que faites-vous ?')),
            ],
        ),
        migrations.CreateModel(
            name='InformationPersonnel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=200)),
                ('prenom', models.CharField(max_length=200)),
                ('age', models.IntegerField()),
                ('situation_matrimoniale', models.CharField(max_length=200)),
                ('adresse', models.CharField(max_length=200)),
                ('email', models.EmailField(max_length=254)),
                ('tel', models.CharField(max_length=25)),
            ],
        ),
        migrations.CreateModel(
            name='Integration',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type_personnes_preferees', models.TextField(verbose_name='Avec quels types de personnes aimez-vous le mieux travailler ? Pour quelle raison ?')),
                ('reaction_remarque_negative', models.TextField(verbose_name='Un collègue vous fait une remarque négative sur la qualité de votre travail. Comment réagissez-vous ?')),
                ('depasse_par_situation', models.TextField(verbose_name='Avez-vous déjà été dépassé par la situation ? Donnez-moi un exemple.')),
            ],
        ),
        migrations.CreateModel(
            name='Organisation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('organisation_journee', models.TextField(verbose_name='Vous arrivez au bureau. Que faites-vous en premier ? Comment vous organisez-vous ?')),
            ],
        ),
        migrations.CreateModel(
            name='Ponctualite',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('retard_dernier', models.TextField(verbose_name='La dernière fois que vous êtes arrivé en retard, comment avez-vous géré la situation ?')),
                ('definition_retard', models.TextField(verbose_name='Selon vous, à partir de combien de temps êtes-vous en retard ?')),
            ],
        ),
        migrations.CreateModel(
            name='Satisfaction',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('satisfactions_postes', models.TextField(verbose_name='Quelles ont été vos satisfactions dans les postes que vous avez occupés ?')),
                ('poste_ideal', models.TextField(verbose_name='Quel serait le poste idéal pour vous ?')),
                ('choix_entreprises', models.TextField(verbose_name="Si on vous propose le même salaire et le même nombre d'heures, entre deux entreprises, laquelle choisissez-vous ?")),
                ('bien_traite', models.TextField(verbose_name='Quand avez-vous senti dans vos précédents postes que vous avez été bien traité ?')),
                ('bien_remunere', models.TextField(verbose_name='Quand avez-vous senti dans vos précédents postes que vous avez été bien rémunéré ?')),
                ('travail_soir_weekend', models.TextField(verbose_name="Est-ce un problème si l'on vous demande de travailler le soir et/ou le week-end ?")),
                ('competence_apportee', models.TextField(verbose_name='Quelle compétence pouvez-vous apporter à cette entreprise ?')),
            ],
        ),
        migrations.CreateModel(
            name='SavoirFormation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('poste_envisage', models.TextField(verbose_name="Poste envisagé chez KONTIKI et qu'est-ce qui vous attire dans le poste proposé ?")),
                ('formation_renseignements', models.TextField(verbose_name='Avez-vous suivi des formations ou vous êtes-vous renseigné sur le poste ? Si oui, racontez-nous.')),
                ('dernier_travail', models.TextField(verbose_name='Quel est le dernier travail que vous avez occupé ? Combien de temps ? Et la raison pour laquelle vous avez quitté votre dernier emploi.')),
                ('satisfaction_carriere', models.TextField(verbose_name="Êtes-vous aujourd'hui satisfait de votre carrière ?")),
                ('exemples_realisation', models.TextField(verbose_name='Pouvez-vous nous donner quelques exemples de réalisations ?')),
            ],
        ),
        migrations.CreateModel(
            name='SensDuService',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reaction_collegue_probleme', models.TextField(verbose_name="Vous êtes salarié de notre société, affecté au département DEVELOPPEUR. Ce matin vous êtes occupé dans une tâche urgente et importante. L'un de vos collègues vient vers vous et se plaint vivement car il est en retard sur son travail parce que son ordinateur a des soucis (la connexion internet ne marche pas). Quelle est votre réaction ?")),
                ('tache_non_attribuee', models.TextField(verbose_name="Vous remarquez qu'il y a une tâche qui n'est pas faite et pourtant cette tâche ne fait pas partie de votre fiche de poste. Que faites-vous ?")),
                ('esprit_initiative', models.TextField(verbose_name="Avez-vous l'esprit d'initiative ? Prouvez-le à l'aide d'exemples.")),
            ],
        ),
        migrations.CreateModel(
            name='Tenacite',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('difficulte_professionnelle', models.TextField(verbose_name="Racontez-nous la dernière fois où vous avez été confronté à une difficulté en situation professionnelle. Qu'avez-vous fait ? Comment avez-vous réagi ?")),
                ('activites_difficiles', models.TextField(verbose_name='Dans vos expériences professionnelles, quelles ont été les activités les plus difficiles à réaliser pour vous ?')),
                ('critique_travail', models.TextField(verbose_name='Donnez-moi un exemple de situation où votre travail a été critiqué.')),
                ('conflit_interets', models.TextField(verbose_name="Donnez-moi un exemple de situation professionnelle où vous avez dû faire face à un conflit d'intérêts.")),
            ],
        ),
        migrations.CreateModel(
            name='TestTechniqueFullstack',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('route_serveur', models.TextField(verbose_name="Mettez en place une route côté serveur (Django, Flask) qui renvoie une liste d'utilisateurs au format JSON. La liste d'utilisateurs peut être stockée dans un fichier JSON.")),
                ('optimisation_requetes_bdd', models.TextField(verbose_name="Comment optimisez-vous les requêtes vers une base de données pour améliorer les performances d'une application ? Parlez de l'indexation, du caching, ou d'autres stratégies que vous avez déjà mises en œuvre dans vos expériences.")),
                ('deploiement_fullstack', models.TextField(verbose_name="Décrivez le processus de déploiement d'une application fullstack, en mettant l'accent sur les bonnes pratiques. Parlez de l'utilisation d'outils tels que Docker, Kubernetes, ou autres, selon votre expérience.")),
            ],
        ),
        migrations.CreateModel(
            name='TestTechniqueJavascript',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('local_state_vs_global_state', models.TextField(verbose_name='Comparez les avantages et les inconvénients des états locaux (local state) et des états gérés globalement (global state) dans une application Vue.js ou React.js.')),
                ('userlist_component', models.TextField(verbose_name="Créez un composant fonctionnel nommé UserList qui reçoit une liste d'utilisateurs en tant que prop et affiche leurs noms dans une liste. Assurez-vous que le composant met à jour correctement le state avec la liste d'utilisateurs.")),
                ('app_component', models.TextField(verbose_name="Créez un composant parent nommé App qui contient le state avec une liste initiale d'utilisateurs. Ce composant doit rendre le composant UserList créé précédemment et un nouveau composant UserForm qui permet d'ajouter un nouvel utilisateur à la liste.")),
                ('userform_component', models.TextField(verbose_name="Implémentez le composant UserForm avec un formulaire simple qui permet à l'utilisateur de saisir un nom. Lorsque le formulaire est soumis, ajoutez un nouvel utilisateur à la liste dans le state du composant parent (App). Assurez-vous que le state est mis à jour correctement.")),
            ],
        ),
        migrations.CreateModel(
            name='TestTechniquePython',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('execution_python', models.TextField(verbose_name="Expliquez brièvement le processus d'exécution d'un fichier Python.")),
                ('specificateurs_acces', models.TextField(verbose_name="Nous savons que Python est un langage orienté objet, mais a-t-il des spécificateurs d'accès ?")),
                ('copie_superficielle_profonde', models.TextField(verbose_name='Quand devez-vous utiliser la copie superficielle au lieu de la copie profonde, et vice versa ?')),
                ('utilisation_decorateurs', models.TextField(verbose_name="Expliquez l'utilisation de décorateurs en Python. Donnez un exemple pratique de situation où vous utiliseriez un décorateur.")),
                ('gestion_exceptions', models.TextField(verbose_name='Comment gérer les exceptions de manière robuste en Python ? Donnez des exemples de situations où les exceptions seraient appropriées.')),
                ('capture_exception', models.TextField(verbose_name='Pouvez-vous expliquer comment une exception peut être attrapée dans un programme Python ?')),
                ('threading_vs_multiprocessing', models.TextField(verbose_name="Décrivez les différences entre le threading et le multiprocessing en Python. Quand choisiriez-vous l'un par rapport à l'autre ?")),
            ],
        ),
        migrations.RemoveField(
            model_name='question',
            name='section',
        ),
        migrations.RemoveField(
            model_name='userresponse',
            name='question',
        ),
        migrations.RemoveField(
            model_name='userresponse',
            name='user',
        ),
        migrations.DeleteModel(
            name='FormSection',
        ),
        migrations.DeleteModel(
            name='Question',
        ),
        migrations.DeleteModel(
            name='UserResponse',
        ),
    ]
