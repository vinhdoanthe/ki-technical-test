import {Component, OnInit} from '@angular/core';
import {InvestmentService} from "../investment.service";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {AgGridAngular} from 'ag-grid-angular'; // Angular Data Grid Component
import {ColDef} from 'ag-grid-community';
import {FormsModule} from "@angular/forms";
import {InvestmentDetailLinkComponent} from "./investment-detail-link/investment-detail-link.component"; // Column Definition Type Interface

@Component({
  selector: 'app-investment-table',
  standalone: true,
  imports: [
    AgGridAngular,
    NgForOf,
    NgIf,
    AsyncPipe,
    FormsModule,
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
    this.investmentService.getInvestments().subscribe(
      (data: any) => {
        this.investments = data
        this.isLoadingInvestments = false
      }
    )
  }

  columnDefs: ColDef[] = [
    {field: 'ville'},
    {field: 'etat_d_avancement'},
    {
      field: 'actions',
      cellRenderer: InvestmentDetailLinkComponent,
    }
  ];
  ville: any;
  etat_d_avancement: any;

  filter_investments() {
    console.log('filtering investments')
    this.isLoadingInvestments = true
    this.investmentService.getInvestments(
      this.ville,
      this.etat_d_avancement
    ).subscribe(
      (data: any) => {
        this.investments = data
        this.isLoadingInvestments = false
      }
    )
  }
}
