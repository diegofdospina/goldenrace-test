import { TestBed } from '@angular/core/testing';

import { RunningGameService } from './running-game.service';

describe('RunningGameService', () => {
  let service: RunningGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RunningGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
