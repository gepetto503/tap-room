import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <ul>
    <li *ngFor="let currentKeg of childKegs">{{currentKeg.description}}
      <ul>
        <li>%{{currentKeg.alcContent}} alcohol content</li>
        <li>{{currentKeg.price}} dollar(s)</li>
        <!--commented out from third li:  [class]="fullnessColor(currentKeg)"-->
        <li>there are {{currentKeg.pintsLeft}} pints left</li>
      </ul>

      <button (click)="sellPint(currentKeg)">Sell the pint!</button>


      <!--when user clicks this button, it runs the method editButtonHasBeenClicked on the keg object that corresponds to iteration of the loop associated with that <li>-->
      <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button></li>
  </ul>
  `
})

export class BeerListComponent {
  @Input() childKegs: Keg[]; //this receives data down from the parent
  @Output() clickSender = new EventEmitter(); //this pushes the current keg object up to the parent

  //tasktoEdit paramater is fed a Keg object argument based on the iteration of the ngFor loop in this component's template
  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
}
