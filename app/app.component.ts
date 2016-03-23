import {Component, EventEmitter} from 'angular2/core';
import {Keg} from './keg.model';
import {KegListComponent} from './keg-list.component';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template:`
    <div class="container">
      <div class="row">
        <h1>Our Taps</h1>
        <keg-list [kegList]="kegs" (onKegSelect)="kegWasSelected($event)"></keg-list>
      </div>
    </div>
    `
})

export class AppComponent {
  public kegs: Keg[];
    constructor() {
      this.kegs = [
        new Keg(["Lents Lager", "Zoiglhaus", 5, 4.50]),
        new Keg(["Session Black", "Full Sail", 5.4, 3]),
        new Keg(["Ruinator IPA", "Stone", 8.4, 5]),
        new Keg(["Black Bear Stout", "Alameda", 6.8, 6])
      ];
    }
    kegWasSelected(clickedKeg: Keg): void{
      console.log(clickedKeg);
    }
}
