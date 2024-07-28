import {Component, OnInit} from '@angular/core';
import {InvestmentService} from "../investment.service";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {AgGridAngular} from 'ag-grid-angular'; // Angular Data Grid Component
import {ColDef} from 'ag-grid-community';
import {FormsModule} from "@angular/forms";
import {InvestmentDetailLinkComponent} from "./investment-detail-link/investment-detail-link.component";
import {GoogleMap} from "@angular/google-maps";
import {AgCharts} from "ag-charts-angular"; // Column Definition Type Interface

@Component({
  selector: 'app-investment-table',
  standalone: true,
  imports: [
    AgGridAngular,
    NgForOf,
    NgIf,
    AsyncPipe,
    FormsModule,
    GoogleMap,
    AgCharts,
  ],
  templateUrl: './investment-table.component.html',
  styleUrl: './investment-table.component.css'
})
export class InvestmentTableComponent implements OnInit {

  public isLoadingInvestments = true
  public investments = <any>[]


  constructor(private investmentService: InvestmentService) {
  }

  ngOnInit() {
    this.filter_investments();
  }

  columnDefs: ColDef[] = [
    {field: 'codeuai'},
    {field: 'ville'},
    {field: 'etatDAvancement'},
    {
      field: 'actions',
      cellRenderer: InvestmentDetailLinkComponent,
    }
  ];
  ville: any;
  etat_d_avancement: any;
  agChartOptions: any;

  filter_investments() {
    this.isLoadingInvestments = true
    this.investmentService.getInvestments(
      this.ville,
      this.etat_d_avancement
    ).subscribe(
      (data: any) => {
        this.investments = data
        this.isLoadingInvestments = false
        this.agChartOptions = {
          data: this.calculateAnneeDIndividualisationStats(),
          series: [
            {
              xKey: 'anneeDIndividualisation',
              yKey: 'count',
              type: 'line',
            }
          ]
        }
      }
    )
  }

  // We could do this in the backend, but we're doing it here for demonstration purposes
  private calculateAnneeDIndividualisationStats() {
    const anneeDIndividualisationStats = <any>{}
    for (const investment of this.investments) {
      if (investment.anneeDIndividualisation in anneeDIndividualisationStats) {
        anneeDIndividualisationStats[investment.anneeDIndividualisation] += 1
      } else {
        anneeDIndividualisationStats[investment.anneeDIndividualisation] = 1
      }
    }
    const anneeDIndividualisationStatsSeries = <any>[]
    for (const anneeDIndividualisation in anneeDIndividualisationStats) {
      anneeDIndividualisationStatsSeries.push({
        anneeDIndividualisation: anneeDIndividualisation,
        count: anneeDIndividualisationStats[anneeDIndividualisation]
      })
    }
    return anneeDIndividualisationStatsSeries
  }
}
