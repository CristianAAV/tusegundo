/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker} from '@faker-js/faker'

import { TusegundoListComponent } from './tusegundo-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TusegundoService } from '../tusegundo.service';
import { Tusegundo } from '../tusegundo';

describe('TusegundoListComponent', () => {
  let component: TusegundoListComponent;
  let fixture: ComponentFixture<TusegundoListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule],
      declarations: [ TusegundoListComponent ],
      providers: [TusegundoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TusegundoListComponent);
    component = fixture.componentInstance;
    
    for(let i=0; i<3; i++){
    
      const tusegundo = new Tusegundo(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
      );
      component.tusegundos.push(tusegundo);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table 3 carros', () => {
    expect(component.tusegundos.length).toEqual(3);
  });
  
});
