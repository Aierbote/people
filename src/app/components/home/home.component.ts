import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy, OnChanges {
  isOpen: boolean = false;
  numbers: number[] = [4, 8, 15, 16, 23, 42];
  stringa: string = '';

  constructor() {
    console.log('io sono il Costruttore');
    this.stringa = 'sono la stringa del Costruttore';

    if (this.isOpen) {
      // fai questo
    } else {
      // fai questo
    }
  }

  ngOnInit(): void {
    console.log('io sono OnInit');
    setTimeout(() => {
      this.stringa = "sono la stringa dell'OnInit";
    }, 5000);
  }

  ngOnDestroy(): void {
    console.log('Il Distruttore è stato qui');
  }

  ngOnChanges(): void {
    console.log('OnChanges ha fatto il suo');
  }
}
