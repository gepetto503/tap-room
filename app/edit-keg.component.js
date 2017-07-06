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
var EditKegComponent = (function () {
    function EditKegComponent() {
    }
    return EditKegComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", keg_model_1.Keg)
], EditKegComponent.prototype, "editKegSelector", void 0);
EditKegComponent = __decorate([
    core_1.Component({
        selector: 'edit-keg',
        template: "\n  <h3>Edit Beer</h3>\n  <label>Enter Beer Name:</label>\n  <input [(ngModel)]=\"editKegSelector.description\"><br>\n  <label>Enter Beer Price:</label>\n  <input [(ngModel)]=\"editKegSelector.price\"><br>\n  <label>Enter Alcohol Content:</label>\n  <input [(ngModel)]=\"editKegSelector.alcContent\"><br>\n  "
    })
], EditKegComponent);
exports.EditKegComponent = EditKegComponent;
//# sourceMappingURL=edit-keg.component.js.map