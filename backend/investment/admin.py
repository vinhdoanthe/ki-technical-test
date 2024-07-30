from django.contrib import admin

from investment.models import Investment


@admin.register(Investment)
class InvestmentAdmin(admin.ModelAdmin):
    list_display = ('codeuai', 'ville', 'annee_de_livraison', 'etat_d_avancement')
    search_fields = ('ville', 'etat_d_avancement')
    ordering = ('codeuai', 'ville', 'annee_de_livraison')
    fields = ('ville', 'annee_de_livraison', 'etat_d_avancement')
