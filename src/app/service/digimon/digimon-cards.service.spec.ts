import { TestBed } from '@angular/core/testing';

import { DigimonCardsService } from './digimon-cards.service';

describe('DigimonCardsService', () => {
  let service: DigimonCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigimonCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
