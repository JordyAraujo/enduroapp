# Generated by Django 2.0.6 on 2018-06-15 21:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teams', '0002_auto_20180612_1801'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='team',
            name='endurance',
        ),
        migrations.AddField(
            model_name='team',
            name='endurancelaps',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
