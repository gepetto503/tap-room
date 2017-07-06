import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
      <div class="container">
        <h1>{{currentFocus}}</h1>
        <!--[childKegs]="kegs" sends kegs array from this file to @Input() childKegs-->
        <!--(clickSender="editBeer($event)" takes keg object from @Output() clickSender within beer-list.component.ts and passes it into editBeer method in the class description below.-->
        <keg-list [childKegs]="kegs" (clickSender)="editKeg($event)"></keg-list>
        <hr>
        <div>
          <div>
            <!--square brackets is the output in the child file, round brackets is the input-->
            <add-keg (addKegOutput)="addKeg($event)"></add-keg>
          </div>
        </div>
        <edit-keg [editKegSelector]="selectedKeg"></edit-keg>
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

  //we need parameters from the add keg component to feed into this method
  addKeg(newKegFromChild: Keg) {
    this.kegs.push(newKegFromChild);
  }

  editKeg(currentKeg) {
    // makes whichever keg the user clicked the button on become stored in the selected keg variable.
    this.selectedKeg = currentKeg;
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
