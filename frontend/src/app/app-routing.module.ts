import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InvestmentTableComponent} from "./investment/investment-table/investment-table.component";
import {InvestmentComponent} from "./investment/investment/investment.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {InvestmentEditComponent} from "./investment/investment-edit/investment-edit.component";

const routes: Routes = [
  { path: '', redirectTo: '/investments', pathMatch: 'full' },
  { path: 'investments', component: InvestmentTableComponent },
  { path: 'investments/:id', component: InvestmentComponent },
  { path: 'investments/:id/edit', component: InvestmentEditComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
