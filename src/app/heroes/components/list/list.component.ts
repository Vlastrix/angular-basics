import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ["Frutillita", "Iron-mandingo", "El increible Hulk", "Thorgasmo"];
  public deletedHero?: string;
  removeLastHero():void {
    this.deletedHero = this.heroNames.pop();

  }

}
