import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDigimonComponent } from './card-digimon.component';

describe('CardDigimonComponent', () => {
  let component: CardDigimonComponent;
  let fixture: ComponentFixture<CardDigimonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDigimonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDigimonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});