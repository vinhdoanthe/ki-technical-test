import { Component } from '@angular/core';
import {ICellRendererAngularComp} from "ag-grid-angular";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-investment-detail-link',
  standalone: true,
  imports: [
    RouterLink
  ],
  template: `<a routerLink="/investments/{{params.data.id}}">View</a>`,
})
export class InvestmentDetailLinkComponent implements ICellRendererAngularComp {

  public params: any

  constructor() {
  }

  agInit(params: any): void {
    this.params = params
  }

  refresh(params: any): boolean {
    return false
  }

  invokeDetailLink() {
    console.log('invokeDetailLink')
  }

}
