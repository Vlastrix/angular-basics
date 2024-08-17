import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = "iron-man"
  public age: number = 34

  get capitalizeName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${ this.name } - ${this.age}`;
  }

  changeName():void {
    this.name = "spider-man";
  }

  changeAge():void {
    this.age = 46;
  }

  resetForm():void {
    this.name = 'iron-man';
    this.age = 34
  }
}
