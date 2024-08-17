import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <p>Contador: {{counter}}</p>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>


  `,
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public counter:number = 10;

  increaseBy(number:number):void {
    this.counter += number
  }

  reset():void {
    this.counter = 10;
  }
}
