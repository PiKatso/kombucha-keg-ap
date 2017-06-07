import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <div *ngFor="let keg of kegs" class="container">
    <h4><a (click)="showDetails(keg)">{{keg.name}}</a></h4>
    <button (click)="subtractPint(keg)">Sold Pint</button>
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

export class KegListComponent {
  kegs: Keg[] = [
    new Keg('Love', 'Brew Dr. Kombucha', 'Jasmine & Lavender', 4, 124),
    new Keg('Herbal Uplift', 'Brew Dr. Kombucha', 'Green & Peppermint', 4, 124),
    new Keg('Bliss', 'LionHeart Kombucha', 'Lemon & Lavender', 5, 124),
  ];

  kegToBeShown = null;

  showDetails(keg) {
    this.kegToBeShown = keg;
  }

  subtractPint(keg) {
    let pintsRemaining = keg.pints - 1;
    keg.pints = pintsRemaining;
  }

}
