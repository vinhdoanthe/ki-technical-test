import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentDetailLinkComponent } from './investment-detail-link.component';

describe('InvestmentDetailLinkComponent', () => {
  let component: InvestmentDetailLinkComponent;
  let fixture: ComponentFixture<InvestmentDetailLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentDetailLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentDetailLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
