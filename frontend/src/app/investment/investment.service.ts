import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpParams} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Investment, InvestmentAdapter} from "./investment.model";

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  constructor(
    private http: HttpClient,
    private adapter: InvestmentAdapter,
  ) {
  }

  public getInvestments(
    ville: string = '',
    etatDAvancement: string = '',
  ) : Observable<Investment[]> {
    const filter_params = new HttpParams().set(
      'ville', ville.trim()
    ).set(
      'etat_d_avancement', etatDAvancement.trim()
    )
    return this.http.get<any>(
      `${environment.API_URL}/investments/`,
      { params: filter_params }
    ).pipe(
      map((data: any[]) => data.map(item => this.adapter.adapt(item)))
    );
  }

  public getInvestment(id: number) {
    return this.http.get(
      `${environment.API_URL}/investments/${id}/`
    ).pipe(
      map((data: any) => this.adapter.adapt(data))
    );
  }

  public updateInvestment(investmentId: number, data: any) {
    return this.http.patch(
      `${environment.API_URL}/investments/${investmentId}/`,
      {
        'codeuai': data.codeuai,
        'longitude': data.longitude,
        'latitude': data.latitude,
        'lycee': data.lycee,
        'ville': data.ville,
        'ppi': data.ppi,
        'annee_d_individualisation': data.anneeDIndividualisation,
        'titreoperation': data.titreoperation,
        'enveloppe_prev_en_meur': data.enveloppePrevEnMeur,
        'montant_des_ap_votes_en_meur': data.montantDesApVotesEnMeur,
        'mandataire': data.mandataire,
        'maitrise_d_oeuvre': data.maitriseDOeuvre,
        'notification_du_marche': data.notificationDuMarche,
        'entreprise': data.entreprise,
        'mode_de_devolution': data.modeDeDevolution,
        'nombre_de_lots': data.nombreDeLots,
        'cao_attribution': data.caoAttribution,
        'etat_d_avancement': data.etatDAvancement,
        'annee_de_livraison': data.anneeDeLivraison,
      },
    ).pipe(
      map((data: any) => this.adapter.adapt(data))
    );
  }
}
