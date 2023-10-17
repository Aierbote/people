import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkZeldaComponent } from './link-zelda.component';

describe('LinkZeldaComponent', () => {
  let component: LinkZeldaComponent;
  let fixture: ComponentFixture<LinkZeldaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkZeldaComponent]
    });
    fixture = TestBed.createComponent(LinkZeldaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
