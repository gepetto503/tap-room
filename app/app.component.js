"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.currentFocus = 'Deschutes Brewery Tap Room';
        this.kegs = [
            new Keg('Black Butte Porter', 1, 5.2),
            new Keg('Mirror Pond Pale Ale', 2, 6),
            new Keg('Inversion IPA', 2, 7)
        ];
        this.selectedKeg = this.kegs[0];
        //   isDone(clickedTask: Task) {
        //    if(clickedTask.done === true) {
        //      alert("This task is done!");
        //    } else {
        //      alert("This task is not done. Better get to work!");
        //    }
        //  }
    }
    AppComponent.prototype.editTask = function (clickedTask) {
        this.selectedKeg = clickedTask;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n      <div class=\"container\">\n        <h1>{{currentFocus}}</h1>\n        <ul>\n          <li *ngFor=\"let currentKeg of kegs\">{{currentKeg.description}} has %{{currentKeg.alcContent}} alcohol content, and is {{currentKeg.price}} dollar(s)<button (click)=\"editTask(currentTask)\">Edit!</button></li>\n        </ul>\n        <hr>\n        <div>\n          <h3>{{selectedKeg.description}}</h3>\n          <h3>Edit Task</h3>\n          <label>Enter Task Description:</label>\n          <input [(ngModel)]=\"selectedKeg.description\">\n          <label>Enter Task Priority (1-3):</label>\n       </div>\n     </div>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
var Keg = (function () {
    function Keg(description, price, alcContent) {
        this.description = description;
        this.price = price;
        this.alcContent = alcContent;
        this.done = false;
    }
    return Keg;
}());
exports.Keg = Keg;
//# sourceMappingURL=app.component.js.map