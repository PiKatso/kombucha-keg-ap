import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Kat & Kane Kombucha Kegs</h1>
  <h3>Check Out Our Flavors Below!</h3>
  <div *ngFor="let keg of kegs" class="container">
    <h4><a (click)="showDetails(keg)">{{keg.name}}</a></h4>
  </div>
  <div *ngIf="kegToBeShown">
      <h3>{{kegToBeShown.name}}</h3>
      <p>{{kegToBeShown.brand}}</p>
      <p>{{kegToBeShown.flavor}}</p>
      <p>{{kegToBeShown.price}}</p>
      <p>{{kegToBeShown.pints}}</p>
  </div>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg('Love', 'Brew Dr. Kombucha', 'Jasmine & Lavender', 4, 124),
    new Keg('Herbal Uplift', 'Brew Dr. Kombucha', 'Green & Peppermint', 4, 124),
    new Keg('Bliss', 'LionHeart Kombucha', 'Lemon & Lavender', 5, 124),
  ];

  kegToBeShown = null;

  showDetails(keg) {
    this.kegToBeShown = keg;
  }
}

export class Keg {
  tapped: boolean = null;
  constructor (public name: string, public brand: string, public flavor: string, public price: number, public pints: number) { }
}
