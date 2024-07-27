import {Component, inject, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {InvestmentService} from "../investment.service";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-investment',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './investment.component.html',
  styleUrl: './investment.component.css'
})
export class InvestmentComponent implements OnInit {

  private route = inject(ActivatedRoute)

  @Input() id: number = 0;
  public investment = <any>{}

  constructor(private investmentService: InvestmentService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id']
      this.investmentService.getInvestment(this.id).subscribe(
        (data: any) => {
          this.investment = data
        }
      )
    })
  }

  goBack() {

  }

  edit() {

  }
}
