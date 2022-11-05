import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPropostaComponent } from './card-proposta.component';

describe('CardPropostaComponent', () => {
  let component: CardPropostaComponent;
  let fixture: ComponentFixture<CardPropostaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPropostaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPropostaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
