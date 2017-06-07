import { Component } from '@angular/core';
import { Keg }  from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Kat & Kane Kombucha Kegs</h1>
  <h3>Check Out Our Flavors Below!</h3>
  <keg-list [childKegList]="kegsList"></keg-list>
  `
})

export class AppComponent {
  kegsList: Keg[] = [
    new Keg('Love', 'Brew Dr. Kombucha', 'Jasmine & Lavender', 4, 124),
    new Keg('Herbal Uplift', 'Brew Dr. Kombucha', 'Green & Peppermint', 4, 124),
    new Keg('Bliss', 'LionHeart Kombucha', 'Lemon & Lavender', 5, 124),
  ];

}
