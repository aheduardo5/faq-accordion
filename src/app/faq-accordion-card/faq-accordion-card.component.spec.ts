import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqAccordionCardComponent } from './faq-accordion-card.component';

describe('FaqAccordionCardComponent', () => {
  let component: FaqAccordionCardComponent;
  let fixture: ComponentFixture<FaqAccordionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqAccordionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqAccordionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
