import {Injectable} from "@angular/core";

export class Investment {
  id = 0;
  codeuai = '';
  longitude = 0;
  latitude = 0;
  lycee = '';
  ville = '';
  ppi = '';
  anneeDIndividualisation = 0;
  titreoperation = '';
  enveloppePrevEnMeur = 0;
  montantDesApVotesEnMeur = 0;
  mandataire = '';
  maitriseDOeuvre = '';
  notificationDuMarche = '';
  entreprise = '';
  modeDeDevolution = '';
  nombreDeLots = 0;
  caoAttribution = '';
  etatDAvancement = '';
  anneeDeLivraison = 0;

  constructor(
    id: number = 0,
    codeuai: string = '',
    longitude: number = 0,
    latitude: number = 0,
    lycee: string = '',
    ville: string = '',
    ppi: string = '',
    anneeDIndividualisation: number = 0,
    titreoperation: string = '',
    enveloppePrevEnMeur: number = 0,
    montantDesApVotesEnMeur: number = 0,
    mandataire: string = '',
    maitriseDOeuvre: string = '',
    notificationDuMarche: string = '',
    entreprise: string = '',
    modeDeDevolution: string = '',
    nombreDeLots: number = 0,
    caoAttribution: string = '',
    etatDAvancement: string = '',
    anneeDeLivraison: number = 0,
  ) {
    this.id = id;
    this.codeuai = codeuai;
    this.longitude = longitude;
    this.latitude = latitude;
    this.lycee = lycee;
    this.ville = ville;
    this.ppi = ppi;
    this.anneeDIndividualisation = anneeDIndividualisation;
    this.titreoperation = titreoperation;
    this.enveloppePrevEnMeur = enveloppePrevEnMeur;
    this.montantDesApVotesEnMeur = montantDesApVotesEnMeur;
    this.mandataire = mandataire;
    this.maitriseDOeuvre = maitriseDOeuvre;
    this.notificationDuMarche = notificationDuMarche;
    this.entreprise = entreprise;
    this.modeDeDevolution = modeDeDevolution;
    this.nombreDeLots = nombreDeLots;
    this.caoAttribution = caoAttribution;
    this.etatDAvancement = etatDAvancement;
    this.anneeDeLivraison = anneeDeLivraison
  }
}

@Injectable(
  {providedIn: 'root'}
)

export class InvestmentAdapter {
  // Adapt the item from the API to the model
  adapt(item: any): Investment {
    return new Investment(
      item.id,
      item.codeuai,
      item.longitude,
      item.latitude,
      item.lycee,
      item.ville,
      item.ppi,
      item.annee_d_individualisation,
      item.titreoperation,
      item.enveloppe_prev_en_meur,
      item.montant_des_ap_votes_en_meur,
      item.mandataire,
      item.maitrise_d_oeuvre,
      item.notification_du_marche,
      item.entreprise,
      item.mode_de_devolution,
      item.nombre_de_lots,
      item.cao_attribution,
      item.etat_d_avancement,
      item.annee_de_livraison
    );
  }
}
