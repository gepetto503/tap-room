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
    }
    AppComponent.prototype.addKeg = function (description, price, alcContent) {
        var newKeg = new Keg(description, price, alcContent);
        this.kegs.push(newKeg);
    };
    AppComponent.prototype.sellPint = function (clickedKeg) {
        clickedKeg.pintsLeft -= 1;
    };
    AppComponent.prototype.fullnessColor = function (currentKeg) {
        if (currentKeg.pintsLeft <= 10) {
            return "bg-danger";
        }
        if (currentKeg.pintsLeft <= 55) {
            return "bg-warning";
        }
        else {
            return "bg-info";
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n      <div class=\"container\">\n        <h1>{{currentFocus}}</h1>\n        <ul>\n          <li [class]=\"fullnessColor(currentKeg)\" *ngFor=\"let currentKeg of kegs\">{{currentKeg.description}}\n            <ul>\n              <li>%{{currentKeg.alcContent}} alcohol content</li>\n              <li>{{currentKeg.price}} dollar(s)</li>\n              <li>there are {{currentKeg.pintsLeft}} pints left</li>\n            </ul>\n            <button (click)=\"sellPint(currentKeg)\">Sell the pint!</button></li>\n        </ul>\n        <hr>\n        <div>\n          <h3>Add keg:</h3>\n          <label>Enter Burr Name:</label>\n          <input #newBeerName><br>\n          <label>Enter Alcohol Content:</label>\n          <input #newAlcoholContent><br>\n          <label>Enter Pint Price:</label>\n          <input #newPintPrice><br>\n          <button (click)=\"addKeg(newBeerName.value, newAlcoholContent.value, newPintPrice.value)\">add a burr</button>\n       </div>\n     </div>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
var Keg = (function () {
    function Keg(description, price, alcContent) {
        this.description = description;
        this.price = price;
        this.alcContent = alcContent;
        this.pintsLeft = 124;
    }
    return Keg;
}());
exports.Keg = Keg;
//# sourceMappingURL=app.component.js.map