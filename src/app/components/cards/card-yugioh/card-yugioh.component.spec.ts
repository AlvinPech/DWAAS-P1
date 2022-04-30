import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardYugiohComponent } from './card-yugioh.component';

describe('CardYugiohComponent', () => {
  let component: CardYugiohComponent;
  let fixture: ComponentFixture<CardYugiohComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardYugiohComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardYugiohComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
