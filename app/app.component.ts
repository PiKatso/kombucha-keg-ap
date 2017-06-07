import { Component } from '@angular/core';
import { Keg }  from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Kat & Kane Kombucha Kegs</h1>
  <h3>Check Out Our Flavors Below!</h3>
  <keg-list [childKegList]="kegsList"></keg-list>
  <new-keg (newKegSender)="addNewKeg($event)"></new-keg>
  `
})

export class AppComponent {
  kegsList: Keg[] = [
    new Keg('Love', 'Brew Dr. Kombucha', 'Jasmine & Lavender', 4),
    new Keg('Herbal Uplift', 'Brew Dr. Kombucha', 'Green & Peppermint', 4),
    new Keg('Bliss', 'LionHeart Kombucha', 'Lemon & Lavender', 5)
  ];

  addNewKeg(newKegFromChild: Keg) {
    this.kegsList.push(newKegFromChild);
  }

}
