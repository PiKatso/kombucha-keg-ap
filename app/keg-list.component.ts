import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <div *ngFor="let keg of childKegList" class="container">
    <h4><a (click)="showDetails(keg)">{{keg.name}}</a></h4>
    <button (click)="subtractPint(keg)">Sold Pint</button>
  </div>
  <div *ngIf="kegToBeShown">
    <h3>{{kegToBeShown.name}}</h3>
    <p>{{kegToBeShown.brand}}</p>
    <p>{{kegToBeShown.flavor}}</p>
    <p>{{kegToBeShown.price}}</p>
    <p>{{kegToBeShown.pints}}</p>
    <button (click)="editButtonHasBeenClicked(kegToBeShown)">Edit</button>
  </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  kegToBeShown = null;

  showDetails(keg) {
    this.kegToBeShown = keg;
  }

  subtractPint(keg) {
    let pintsRemaining = keg.pints - 1;
    keg.pints = pintsRemaining;
  }

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

}
