import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div class="container">
        <h1>{{currentFocus}}</h1>
        <ul>
          <li *ngFor="let currentKeg of kegs">{{currentKeg.description}} has %{{currentKeg.alcContent}} alcohol content, and is {{currentKeg.price}} dollar(s)<button (click)="editTask(currentTask)">Edit!</button></li>
        </ul>
        <hr>
        <div>
          <h3>{{selectedKeg.description}}</h3>
          <h3>Edit Task</h3>
          <label>Enter Task Description:</label>
          <input [(ngModel)]="selectedKeg.description">
          <label>Enter Task Priority (1-3):</label>
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

     editTask(clickedTask) {
     this.selectedKeg = clickedTask;
   }

  //   isDone(clickedTask: Task) {
  //    if(clickedTask.done === true) {
  //      alert("This task is done!");
  //    } else {
  //      alert("This task is not done. Better get to work!");
  //    }
  //  }

}

export class Keg {
  public done: boolean = false;
  constructor(public description: string, public price: number, public alcContent: number) { }
}
