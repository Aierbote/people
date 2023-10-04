import { Component } from '@angular/core';

// ogni `enum` va definito fuori da una classe
enum Job {
  'developer',
  'marketing',
  'manager',
  'janitor',
}

@Component({
  selector: 'app-example-init',
  templateUrl: './example-init.component.html',
  styleUrls: ['./example-init.component.css'],
})
export class ExampleInitComponent {
  id!: string | number; // con `!` specifichiamo che deve finarsi, è una proprietà `undefinied` anche se non inizializzato
  birthday: any; // anche se non inizializzata, un tipo `any` non necessita neanche il `!`, poichè any può essere tutto, anche `undefinied`
  devJob: Job = Job.developer; // esempio di proprietà presa da un enumerate
}
