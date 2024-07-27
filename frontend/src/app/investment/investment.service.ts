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
}
