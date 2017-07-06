"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var keg_model_1 = require("./keg.model");
var AppComponent = (function () {
    function AppComponent() {
        this.currentFocus = 'Deschutes Brewery Tap Room';
        this.kegs = [
            new keg_model_1.Keg('Black Butte Porter', 1, 5.2),
            new keg_model_1.Keg('Mirror Pond Pale Ale', 2, 6),
            new keg_model_1.Keg('Inversion IPA', 2, 7)
        ];
        this.selectedKeg = this.kegs[0];
    }
    //we need parameters from the add keg component to feed into this method
    AppComponent.prototype.addKeg = function (newKegFromChild) {
        this.kegs.push(newKegFromChild);
    };
    AppComponent.prototype.editKeg = function (currentKeg) {
        // makes whichever keg the user clicked the button on become stored in the selected keg variable.
        this.selectedKeg = currentKeg;
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
        template: "\n      <div class=\"container\">\n        <h1>{{currentFocus}}</h1>\n        <!--[childKegs]=\"kegs\" sends kegs array from this file to @Input() childKegs-->\n        <!--(clickSender=\"editBeer($event)\" takes keg object from @Output() clickSender within beer-list.component.ts and passes it into editBeer method in the class description below.-->\n        <keg-list [childKegs]=\"kegs\" (kegToEdit)=\"editKeg($event)\" (kegToSell)=\"sellPint($event)\"></keg-list>\n        <hr>\n        <div>\n          <div>\n            <!--square brackets is the output in the child file, round brackets is the input-->\n            <add-keg (addKegOutput)=\"addKeg($event)\"></add-keg>\n          </div>\n        </div>\n        <edit-keg [editKegSelector]=\"selectedKeg\"></edit-keg>\n     </div>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map