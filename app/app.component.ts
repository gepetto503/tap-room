import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div class="container">
        <h1>{{currentFocus}}</h1>
        <ul>
          <li [class]="fullnessColor(currentKeg)" *ngFor="let currentKeg of kegs">{{currentKeg.description}}
            <ul>
              <li>%{{currentKeg.alcContent}} alcohol content</li>
              <li>{{currentKeg.price}} dollar(s)</li>
              <li>there are {{currentKeg.pintsLeft}} pints left</li>
            </ul>
            <button (click)="sellPint(currentKeg)">Sell the pint!</button></li>
        </ul>
        <hr>
        <div>
          <h3>Add keg:</h3>
          <label>Enter Burr Name:</label>
          <input #newBeerName><br>
          <label>Enter Alcohol Content:</label>
          <input #newAlcoholContent><br>
          <label>Enter Pint Price:</label>
          <input #newPintPrice><br>
          <button (click)="addKeg(newBeerName.value, newAlcoholContent.value, newPintPrice.value)">add a burr</button>
       </div>
     </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Deschutes Brewery Tap Room';
  kegs: Keg[] = [
    new Keg('Black Butte Porter', 1, 5.2),
    new Keg('Mirror Pond Pale Ale', 2, 6),
    new Keg('Inversion IPA', 2, 7)
    ];
  selectedKeg: Keg = this.kegs[0];

  addKeg(description: string, price: number, alcContent: number) {
    var newKeg = new Keg(description, price, alcContent);
    this.kegs.push(newKeg);
  }

  sellPint(clickedKeg: Keg) {
    clickedKeg.pintsLeft -= 1;
  }

  fullnessColor(currentKeg) {
    if (currentKeg.pintsLeft <= 10) {
      return "bg-danger";
    }
    if (currentKeg.pintsLeft <= 55) {
      return "bg-warning";
    } else {
      return "bg-info";
    }

  }

}

export class Keg {
  public pintsLeft = 124;
  constructor(public description: string, public price: number, public alcContent: number) { }
}
