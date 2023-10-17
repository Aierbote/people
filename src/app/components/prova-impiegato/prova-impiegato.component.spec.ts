import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaImpiegatoComponent } from './prova-impiegato.component';

describe('ProvaImpiegatoComponent', () => {
  let component: ProvaImpiegatoComponent;
  let fixture: ComponentFixture<ProvaImpiegatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProvaImpiegatoComponent]
    });
    fixture = TestBed.createComponent(ProvaImpiegatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
