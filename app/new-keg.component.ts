import { Component, Output, EventEmitter } from '@angular/core';
import { Keg }  from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
  <h1>New Keg</h1>
  <form class="form-inline">
      <label>Kombucha Name:</label>
      <input class="form-control" #newName>
      <label>Brand:</label>
      <input class="form-control" #newBrand>
      <label>Flavor:</label>
      <input class="form-control" #newFlavor>
      <label>Price:</label>
      <input class="form-control" #newPrice>
      <button class="btn btn-default" (click)="saveNew(newName.value, newBrand.value, newFlavor.value, newPrice.value)">Add</button>
  </form>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();

  saveNew(name: string, brand: string, flavor: string, price: number) {
    let newKeg: Keg = new Keg(name, brand, flavor, price);
    this.newKegSender.emit(newKeg);
  }

}
