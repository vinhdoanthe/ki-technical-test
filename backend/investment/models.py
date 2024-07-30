from django.db import models


class Investment(models.Model):
    codeuai = models.CharField(max_length=10)
    longitude = models.FloatField(blank=True, null=True)
    latitude = models.FloatField(blank=True, null=True)
    lycee = models.CharField(max_length=255)
    ville = models.CharField(max_length=255)
    ppi = models.CharField(max_length=255)
    annee_d_individualisation = models.FloatField(blank=True, null=True)
    titreoperation = models.CharField(max_length=255)
    enveloppe_prev_en_meur = models.FloatField(blank=True, null=True)
    montant_des_ap_votes_en_meur = models.FloatField(blank=True, null=True)
    mandataire = models.CharField(max_length=255, blank=True, null=True)
    maitrise_d_oeuvre = models.CharField(max_length=255, blank=True, null=True)
    notification_du_marche = models.DateField(blank=True, null=True)
    entreprise = models.CharField(max_length=255, blank=True, null=True)
    mode_de_devolution = models.CharField(max_length=255, blank=True, null=True)
    nombre_de_lots = models.FloatField(blank=True, null=True)
    cao_attribution = models.DateField(blank=True, null=True)
    etat_d_avancement = models.CharField(max_length=255)
    annee_de_livraison = models.FloatField(blank=True, null=True)

    def __str__(self):
        return '{}-{}'.format(
            self.codeuai,
            self.ville,
        )
