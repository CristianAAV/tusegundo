/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TusegundoListComponent } from './tusegundo-list.component';

describe('TusegundoListComponent', () => {
  let component: TusegundoListComponent;
  let fixture: ComponentFixture<TusegundoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TusegundoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TusegundoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
