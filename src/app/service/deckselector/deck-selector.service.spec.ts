import { TestBed } from '@angular/core/testing';

import { DeckSelectorService } from './deck-selector.service';

describe('DeckSelectorService', () => {
  let service: DeckSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeckSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
