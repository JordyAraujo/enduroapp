# Generated by Django 2.0.6 on 2018-06-12 18:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('teams', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='team',
            old_name='car_number',
            new_name='carnumber',
        ),
        migrations.RenameField(
            model_name='team',
            old_name='cost_event',
            new_name='costevent',
        ),
        migrations.RenameField(
            model_name='team',
            old_name='design_event',
            new_name='designevent',
        ),
        migrations.RenameField(
            model_name='team',
            old_name='hill_climb',
            new_name='hillclimb',
        ),
        migrations.RenameField(
            model_name='team',
            old_name='sales_presentation',
            new_name='salespresentation',
        ),
        migrations.RenameField(
            model_name='team',
            old_name='team_name',
            new_name='teamname',
        ),
    ]
