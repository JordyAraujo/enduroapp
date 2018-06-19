from django.db import models


class Team(models.Model):
    teamname = models.CharField(max_length=200)
    carnumber = models.IntegerField()
    costevent = models.DecimalField(max_digits=5, decimal_places=2)
    designevent = models.DecimalField(max_digits=5, decimal_places=2)
    salespresentation = models.DecimalField(max_digits=4, decimal_places=2)
    acceleration = models.DecimalField(max_digits=4, decimal_places=2)
    maneuverability = models.DecimalField(max_digits=4, decimal_places=2)
    hillclimb = models.DecimalField(max_digits=4, decimal_places=2)
    suspension = models.DecimalField(max_digits=4, decimal_places=2)
    endurance = models.IntegerField()
    penalties = models.DecimalField(max_digits=5, decimal_places=2)