import { Component, OnInit } from '@angular/core';
import { AnagrafEmployeeService } from 'src/app/servicies/anagraf-employee.service';

@Component({
  selector: 'app-prova-impiegato',
  templateUrl: './prova-impiegato.component.html',
  styleUrls: ['./prova-impiegato.component.css'],
})
export class ProvaImpiegatoComponent implements OnInit {
  impiegati: any[] = [];

  constructor(private anagrafEmploys: AnagrafEmployeeService) {}

  ngOnInit() {
    this.impiegati = this.anagrafEmploys.impiegati;
  }
}
