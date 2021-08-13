/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { JogoLotofacilComponent } from './jogo-lotofacil.component';

describe('JogoLotofacilComponent', () => {
  let component: JogoLotofacilComponent;
  let fixture: ComponentFixture<JogoLotofacilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogoLotofacilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoLotofacilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
