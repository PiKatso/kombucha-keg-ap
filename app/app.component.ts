import { Component } from '@angular/core';
import { Keg }  from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Kat & Kane Kombucha Kegs</h1>
  <h3>Check Out Our Flavors Below!</h3>
  <keg-list [childKegList]="kegsList" (clickSender)="editKeg($event)"></keg-list>
  <edit-keg [currentKeg]="selectedKeg" (editCompleteSender)="finishedEditing()"></edit-keg>
  <new-keg (newKegSender)="addNewKeg($event)"></new-keg>
  `
})

export class AppComponent {
  selectedKeg: Keg = null;
  kegsList: Keg[] = [
    new Keg('Love', 'Brew Dr. Kombucha', 'Jasmine & Lavender', 4),
    new Keg('Herbal Uplift', 'Brew Dr. Kombucha', 'Green & Peppermint', 4),
    new Keg('Bliss', 'LionHeart Kombucha', 'Lemon & Lavender', 5)
  ];

  addNewKeg(newKegFromChild: Keg) {
    this.kegsList.push(newKegFromChild);
  }

  editKeg(kegToEdit: Keg) {
    this.selectedKeg = kegToEdit;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }
}
