import { Component, Output, EventEmitter } from '@angular/core';
import { Keg }  from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <h1>New Keg</h1>
  <div>
    <label>Kombucha Name:</label>
    <input #newName>
    <label>Brand:</label>
    <input #newBrand>
    <label>Flavor:</label>
    <input #newFlavor>
    <label>Price:</label>
    <input #newPrice>
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
