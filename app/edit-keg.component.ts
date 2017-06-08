import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg }  from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <form class="form-inline">
    <div *ngIf="currentKeg">
      <h3>Edit Keg</h3>
      <label>Kombucha Name</label>
      <input class="form-control" [(ngModel)]="currentKeg.name" [ngModelOptions]="{standalone: true}">
      <label>Brand</label>
      <input class="form-control" [(ngModel)]="currentKeg.brand" [ngModelOptions]="{standalone: true}">
      <label>Flavor</label>
      <input class="form-control" [(ngModel)]="currentKeg.flavor" [ngModelOptions]="{standalone: true}">
      <label>Price</label>
      <input class="form-control" [(ngModel)]="currentKeg.price" [ngModelOptions]="{standalone: true}">

      <button class="btn btn-default" (click)="finishedEditing()">Done</button>
    </div>
  </form>
  `
})

export class EditKegComponent {
  @Input() currentKeg: Keg;
  @Output() editCompleteSender = new EventEmitter();

  finishedEditing() {
    this.editCompleteSender.emit();
  }
}
