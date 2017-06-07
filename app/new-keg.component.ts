import { Component, Output, EventEmitter } from '@angular/core';
import { Keg }  from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <h1>New Keg</h1>
  <div>
    <div>
      <label>Kombucha Name:</label>
      <input #newName>
    </div>
    <div>
      <label>Brand:</label>
      <input #newBrand>
    </div>
    <div>
      <label>Flavor:</label>
      <input #newFlavor>
    </div>
    <div>
      <label>Price:</label>
      <input #newPrice>
    </div>
    <button (click)="saveNew(newName.value, newBrand.value, newFlavor.value, newPrice.value)">Add</button>
  </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  saveNew(name: string, brand: string, flavor: string, price: number) {
    let newKeg: Keg = new Keg(name, brand, flavor, price);
    this.newKegSender.emit(newKeg);
  }

}
