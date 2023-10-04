import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleInitComponent } from './example-init.component';

describe('ExampleInitComponent', () => {
  let component: ExampleInitComponent;
  let fixture: ComponentFixture<ExampleInitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleInitComponent]
    });
    fixture = TestBed.createComponent(ExampleInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
