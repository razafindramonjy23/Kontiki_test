# Generated by Django 5.0.6 on 2024-08-19 12:17

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('contact', '0002_rename_name_contact_nom'),
    ]

    operations = [
        migrations.CreateModel(
            name='ViewContact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('contact', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='contact.contact')),
            ],
        ),
    ]