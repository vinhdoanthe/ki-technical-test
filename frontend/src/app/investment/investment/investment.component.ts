import {Component, inject, Input, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {InvestmentService} from "../investment.service";
import {JsonPipe, KeyValuePipe, NgForOf} from "@angular/common";
import {GoogleMap} from "@angular/google-maps";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-investment',
  standalone: true,
  imports: [
    JsonPipe,
    KeyValuePipe,
    NgForOf,
    RouterLink,
    GoogleMap,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './investment.component.html',
  styleUrl: './investment.component.css'
})
export class InvestmentComponent implements OnInit {

  investmentForm = new FormGroup(<any>{});

  @Input() id: number = 0;
  public investment = <any>{};
  public editMode = false;

  constructor(
    private investmentService: InvestmentService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']
      this.investmentService.getInvestment(this.id).subscribe(
        (data: any) => {
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
        }
      )
    })
  }

  goBack() {
    window.history.back();
  }

  onClickCancel() {
    this.editMode = false
  }

  onClickEdit() {
    this.editMode = true
  }

  onSubmit() {
    const formValue = this.investmentForm.value
    const postData = {
      'codeuai': formValue.codeuai,
      'ville': formValue.ville,
      'titreoperation': formValue.titreoperation,
      'etat_d_avancement': formValue.etatDAvancement,
    }
    this.investmentService.updateInvestment(this.investment.id, postData).subscribe(
      (data: any) => {
        this.investment = data
        this.editMode = false
      }
    )
  }
}
