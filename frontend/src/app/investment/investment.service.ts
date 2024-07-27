import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  constructor(
    private http: HttpClient
  ) {
    console.log('api: ', environment.API_URL);
  }

  public getInvestments(
    ville: string = '',
    etat_d_avancement: string = '',
  ) {
    const filter_params = new HttpParams().set(
      'ville', ville.trim()
    ).set(
      'etat_d_avancement', etat_d_avancement.trim()
    )
    return this.http.get(
      `${environment.API_URL}/investments/`,
      { params: filter_params }
    );
  }

  public getInvestment(id: number) {
    return this.http.get(
      `${environment.API_URL}/investments/${id}/`
    );
  }
}
