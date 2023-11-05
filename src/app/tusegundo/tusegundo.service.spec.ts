/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TusegundoService } from './tusegundo.service';

describe('Service: Tusegundo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TusegundoService]
    });
  });

  it('should ...', inject([TusegundoService], (service: TusegundoService) => {
    expect(service).toBeTruthy();
  }));
});
