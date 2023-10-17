import { TestBed } from '@angular/core/testing';

import { AnagrafEmployeeService } from './anagraf-employee.service';

describe('AnagrafEmployeeService', () => {
  let service: AnagrafEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnagrafEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
