import { Component } from '@angular/core';
import { Keg }  from './keg.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="jumbotron">
    <h1>Kat & Kane<br>Kombucha Kegs</h1>
    <h3>Check Out Our Flavors Below!</h3>
  </div>

  <keg-list [childKegList]="kegsList" (clickSender)="editKeg($event)"></keg-list>
  <div class="edit-keg">
    <edit-keg [currentKeg]="selectedKeg" (editCompleteSender)="finishedEditing()"></edit-keg>
  </div>

  <div class="footer">
    <new-keg (newKegSender)="addNewKeg($event)"></new-keg>
  </div>
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
