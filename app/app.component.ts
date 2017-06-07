import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Kat & Kane Kombucha Kegs</h1>
  <h3>Check Out Our Flavors Below!</h3>
  <div>
      <p *ngFor="let keg of kegs">{{keg.name}}</p>
  </div>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg('Love', 'Brew Dr. Kombucha', 'Jasmine & Lavender', 4, 124),
    new Keg('Herbal Uplift', 'Brew Dr. Kombucha', 'Green & Peppermint', 4, 124),
    new Keg('Bliss', 'LionHeart Kombucha', 'Lemon & Lavender', 5, 124),
  ];

}

export class Keg {
  tapped: boolean = null;
  constructor (public name: string, public brand: string, public flavor: string, public price: number, public pints: number) { }
}
