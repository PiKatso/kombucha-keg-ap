import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <div class="row">
    <div class="tapped-selector">
      <label>View Kegs By:</label>
      <select (change)="onChange($event.target.value)">
        <option value="tapped">Tapped Kegs</option>
        <option value="untapped">Untapped Kegs</option>
        <option value="allKegs" selected="selected">All Kegs</option>
      </select>
    </div>
  </div>

    <div class="row">
      <div *ngFor="let keg of childKegList | tappedness:filterByTappedness">
        <div class="col-md-4 keg-item">
          <div [class]="priceColor(keg)">
            <h4><a (click)="showDetails(keg)">{{keg.name}}</a></h4>
            <button class="btn btn-default" (click)="subtractPint(keg)">Sold Pint</button>
          </div>
        </div>
      </div>
    </div>

    <div *ngIf="kegToBeShown" class="keg-details">
      <h3>{{kegToBeShown.name}}</h3>
      <p>Brand: {{kegToBeShown.brand}}</p>
      <p>Flavor: {{kegToBeShown.flavor}}</p>
      <p>Price: {{kegToBeShown.price}}</p>
      <p>Pints Remaining: {{kegToBeShown.pints}}</p>
      <button class="btn btn-default" (click)="editButtonHasBeenClicked(kegToBeShown)">Edit</button>
    </div>

    <div class="pints-low">
      <h3>Gettin' Low! </h3>
      <div *ngFor="let keg of childKegList | pintsRemaining">
        <h4>{{keg.name}}</h4>
        <p>Pints Remaining: {{keg.pints}}</p><hr>
      </div>
    </div>
  `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  filterByTappedness: string = "allKegs";

  kegToBeShown = null;

  onChange(selectionFromMenu) {
    this.filterByTappedness = selectionFromMenu;
  }

  priceColor(kegToBeEvaluated: Keg) {
    if (kegToBeEvaluated.price > 5) {
      return "price-expensive";
    } else if (kegToBeEvaluated.price < 4) {
      return "price-cheap";
    } else {
      return "price-average";
    }
  }

  showDetails(keg) {
    this.kegToBeShown = keg;
  }

  subtractPint(keg) {
    let pintsRemaining = keg.pints - 1;
    keg.pints = pintsRemaining;
    keg.tapped = true;
  }

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

}
