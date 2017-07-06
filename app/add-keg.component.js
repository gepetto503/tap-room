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
var keg_model_1 = require("./keg.model");
var AddKegComponent = (function () {
    function AddKegComponent() {
        this.addKegOutput = new core_1.EventEmitter();
    }
    AddKegComponent.prototype.submitForm = function (beerName, pintPrice, alcoholContent) {
        var newTaskToAdd = new keg_model_1.Keg(beerName, pintPrice, alcoholContent);
        this.addKegOutput.emit(newTaskToAdd);
    };
    return AddKegComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AddKegComponent.prototype, "addKegOutput", void 0);
AddKegComponent = __decorate([
    core_1.Component({
        selector: 'add-keg',
        template: "\n  <h3>Add keg:</h3>\n  <label>Enter Burr Name:</label>\n  <input #newBeerName><br>\n  <label>Enter Alcohol Content:</label>\n  <input #newAlcoholContent><br>\n  <label>Enter Pint Price:</label>\n  <input #newPintPrice><br>\n  <button (click)=\"submitForm(newBeerName.value, newPintPrice.value, newAlcoholContent.value)\">Add</button>\n  "
    })
], AddKegComponent);
exports.AddKegComponent = AddKegComponent;
//# sourceMappingURL=add-keg.component.js.map