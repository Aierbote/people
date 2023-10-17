import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnagrafEmployeeService {
  impiegati = [
    {
      nome: 'Alberto',
      cognome: 'Cangialosi',
      codFisc: 'CNGLRT00E00D123Z',
      stipendio: 1_300,
      natoIl: new Date(),
    },
    {
      nome: 'Fatima',
      cognome: 'Cangialosi',
      codFisc: 'CNGFTM00E40D456Z',
      stipendio: 1500.141592679,
      natoIl: new Date(),
    },
  ];

  constructor() {}
}
