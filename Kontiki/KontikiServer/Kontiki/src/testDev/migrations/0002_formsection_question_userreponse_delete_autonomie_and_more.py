# Generated by Django 5.1 on 2024-08-26 13:29

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('testDev', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='FormSection',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('icon_url', models.URLField(blank=True, max_length=225, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('label', models.CharField(max_length=225)),
                ('input_type', models.CharField(max_length=20)),
                ('section', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='question', to='testDev.formsection')),
            ],
        ),
        migrations.CreateModel(
            name='UserReponse',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reponse_text', models.TextField()),
                ('question', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reponse', to='testDev.question')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.DeleteModel(
            name='Autonomie',
        ),
        migrations.DeleteModel(
            name='InformationPersonnel',
        ),
        migrations.DeleteModel(
            name='Integration',
        ),
        migrations.DeleteModel(
            name='Organisation',
        ),
        migrations.DeleteModel(
            name='Ponctualite',
        ),
        migrations.DeleteModel(
            name='Satisfaction',
        ),
        migrations.DeleteModel(
            name='SavoirFormation',
        ),
        migrations.DeleteModel(
            name='SensDuService',
        ),
        migrations.DeleteModel(
            name='Tenacite',
        ),
        migrations.DeleteModel(
            name='TestTechniqueFullstack',
        ),
        migrations.DeleteModel(
            name='TestTechniqueJs',
        ),
        migrations.DeleteModel(
            name='TestTechniquePython',
        ),
    ]
