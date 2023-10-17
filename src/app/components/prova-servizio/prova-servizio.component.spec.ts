import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaServizioComponent } from './prova-servizio.component';

describe('ProvaServizioComponent', () => {
  let component: ProvaServizioComponent;
  let fixture: ComponentFixture<ProvaServizioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProvaServizioComponent]
    });
    fixture = TestBed.createComponent(ProvaServizioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
