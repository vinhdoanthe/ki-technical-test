import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentEditComponent } from './investment-edit.component';

describe('InvestmentEditComponent', () => {
  let component: InvestmentEditComponent;
  let fixture: ComponentFixture<InvestmentEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestmentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
