import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
    <div class="row">
      <div *ngFor="let keg of childKegList">
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

  kegToBeShown = null;

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
  }

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

}
