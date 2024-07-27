import {Component, Input, OnInit} from '@angular/core';
import {InvestmentService} from "../investment.service";
import {ActivatedRoute} from "@angular/router";
import {Investment} from "../investment.model";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {KeyValuePipe, NgForOf} from "@angular/common";
import {subscribeOn} from "rxjs";

@Component({
  selector: 'app-investment-edit',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    KeyValuePipe,
    NgForOf
  ],
  templateUrl: './investment-edit.component.html',
  styleUrl: './investment-edit.component.css'
})
export class InvestmentEditComponent implements OnInit {

  @Input() id: number = 0;
  isLoadingInvestment = true;
  investment = new Investment();
  investmentForm = new FormGroup(<any>{});

  constructor(
    private investmentService: InvestmentService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']
      this.investmentService.getInvestment(this.id).subscribe(
        (data: any) => {
          console.log(data)
          this.investment = data
          this.investmentForm = this.formBuilder.group({
            codeuai: [this.investment?.codeuai],
            longitude: [this.investment?.longitude],
            latitude: [this.investment?.latitude],
            lycee: [this.investment?.lycee],
            ville: [this.investment?.ville],
            ppi: [this.investment?.ppi],
            anneeDIndividualisation: [this.investment?.anneeDIndividualisation],
            titreoperation: [this.investment?.titreoperation],
            enveloppePrevEnMeur: [this.investment?.enveloppePrevEnMeur],
            montantDesApVotesEnMeur: [this.investment?.montantDesApVotesEnMeur],
            mandataire: [this.investment?.mandataire],
            maitriseDOeuvre: [this.investment?.maitriseDOeuvre],
            notificationDuMarche: [this.investment?.notificationDuMarche],
            entreprise: [this.investment?.entreprise],
            modeDeDevolution: [this.investment?.modeDeDevolution],
            nombreDeLots: [this.investment?.nombreDeLots],
            caoAttribution: [this.investment?.caoAttribution],
            etatDAvancement: [this.investment?.etatDAvancement],
            anneeDeLivraison: [this.investment?.anneeDeLivraison],
          })
          this.isLoadingInvestment = false
        }
      )
    })
  }

  goBack() {
      window.history.back();
  }

  onSubmit() {
    console.log(this.investmentForm.value)
  }
}
