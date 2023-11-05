/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


import { TusegundoService } from './tusegundo.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Tusegundo', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TusegundoService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      providers: [TusegundoService]
    });
    
  });

  it('should ...', inject([TusegundoService], (service: TusegundoService) => {
    expect(service).toBeTruthy();
  }));
});
