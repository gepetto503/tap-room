"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BeerListComponent = (function () {
    function BeerListComponent() {
        this.kegToEdit = new core_1.EventEmitter(); //this pushes the current keg object up to the parent
        this.kegToSell = new core_1.EventEmitter();
    }
    //tasktoEdit paramater is fed a Keg object argument based on the iteration of the ngFor loop in this component's template
    BeerListComponent.prototype.editButtonHasBeenClicked = function (kegToEdit) {
        this.kegToEdit.emit(kegToEdit);
    };
    BeerListComponent.prototype.sellButtonHasBeenClicked = function (kegToSell) {
        this.kegToSell.emit(kegToSell);
    };
    return BeerListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], BeerListComponent.prototype, "childKegs", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BeerListComponent.prototype, "kegToEdit", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BeerListComponent.prototype, "kegToSell", void 0);
BeerListComponent = __decorate([
    core_1.Component({
        selector: 'keg-list',
        template: "\n  <div class=\"beers\">\n    <div class=\"beer\" *ngFor=\"let currentKeg of childKegs\">\n      <div class=\"name\">\n        <h3>{{currentKeg.description}}</h3>\n      </div>\n      <div class=\"details\">\n        <ul>\n          <li>%{{currentKeg.alcContent}} alcohol content</li>\n          <li>{{currentKeg.price}} dollar(s)</li>\n          <!--commented out from third li:  [class]=\"fullnessColor(currentKeg)\"-->\n          <li>there are {{currentKeg.pintsLeft}} pints left</li>\n        </ul>\n\n      </div>\n      <div class=\"buttons\">\n        <button (click)=\"sellButtonHasBeenClicked(currentKeg)\">Sell the pint!</button>\n        <!--when user clicks this button, it runs the method editButtonHasBeenClicked on the keg object that corresponds to iteration of the loop associated with that <li>-->\n        <button (click)=\"editButtonHasBeenClicked(currentKeg)\">Edit!</button>\n      </div>\n    </div>\n  </div>\n  "
    })
], BeerListComponent);
exports.BeerListComponent = BeerListComponent;
//# sourceMappingURL=beer-list.component.js.map