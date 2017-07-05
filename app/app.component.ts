import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div class="container">
        <h1>{{currentFocus}}</h1>
        <ul>
          <li *ngFor="let currentKeg of kegs">{{currentKeg.description}}
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
          <label>Enter Keg Name:</label>
          <input [(ngModel)]="selectedKeg.description"><br>
          <label>Enter Alcohol Content:</label>
          <input [(ngModel)]="selectedKeg.description"><br>
          <label>Enter Keg Price:</label>
          <input [(ngModel)]="selectedKeg.description"><br>
       </div>
     </div>
  `
})


export class AppComponent {
  currentFocus: string = 'Deschutes Brewery Tap Room';
  kegs: Keg[] = [
    new Keg('Black Butte Porter', 1, 5.2, 124),
    new Keg('Mirror Pond Pale Ale', 2, 6, 124),
    new Keg('Inversion IPA', 2, 7, 124)
    ];
  selectedKeg: Keg = this.kegs[0];


  sellPint(clickedKeg: Keg) {
    clickedKeg.pintsLeft -= 1;
  }

}

export class Keg {
  public done: boolean = false;
  constructor(public description: string, public price: number, public alcContent: number, public pintsLeft: number) { }
}
