import {Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

    <h1>Helouda</h1>

    <h1>{{title}}</h1>


    <h1>{{someNumber}}</h1>

    <button (click)="increaseBy(1);"> +1 </button>
    <button (click)="resetCounter();"> Reset </button>
    <button (click)="increaseBy(-1);"> -1 </button>
    <!--<h1>{{1+1}}</h1>-->

  `
})

export class CounterComponent {
  constructor() {
  }

  public title: string = 'Contador App';
  public someNumber: number = 0;

  increaseBy(value: number): void {
    this.someNumber += value;
  }

  resetCounter(): void {
    this.someNumber = 0;
  }
}
