import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/servicies/services.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
// provo a ottenere l'effetto material button sulla card con la direttiva/attributo `mat-button`
import { MatButtonModule } from '@angular/material/button';
// provo a ottenere l'effetto `mat-ripple` al click
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-prova-servizio',
  templateUrl: './prova-servizio.component.html',
  styleUrls: ['./prova-servizio.component.css'],
  standalone: true,
  imports: [MatCardModule, CommonModule, MatButtonModule, MatRippleModule],
  // CommonModule  ti permtte di usare le direttive NgIf, NgFor & Co. inserendole ne NgTemplateN
})
export class ProvaServizioComponent implements OnInit {
  isVisible = true;

  numero = 3;
  stringa = 'papero';
  color = 'green';
  oggi = Date.now();

  // per prendere l'array del Service
  skykids: any[] = [];

  /* Card made with Material Design */
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor(private servizioProva: ServicesService) {}

  ngOnInit() {
    this.skykids = this.servizioProva.skykids;

    console.log(
      'Prova elenca SkyKids \n',
      this.servizioProva.getOnlineFriends()
    );

    return this.servizioProva.getOnlineFriends();
  }
}
