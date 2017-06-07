import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg }  from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div>
    <div *ngIf="currentKeg">
      <h3>Edit Keg</h3>
      <label>Kombucha Name</label>
      <input [(ngModel)]="currentKeg.name">
      <label>Brand</label>
      <input [(ngModel)]="currentKeg.brand">
      <label>Flavor</label>
      <input [(ngModel)]="currentKeg.flavor">
      <label>Price</label>
      <input [(ngModel)]="currentKeg.price">

      <button (click)="finishedEditing()">Done</button>
    </div>
  </div>
  `
})

export class EditKegComponent {
  @Input() currentKeg: Keg;
  @Output() editCompleteSender = new EventEmitter();

  finishedEditing() {
    this.editCompleteSender.emit();
  }
}
