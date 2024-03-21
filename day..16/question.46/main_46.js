"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var laptop = {
    make: "hp",
    model: "xps 15",
    year: "2023",
    describe: function () {
        console.log("this laptop is a ".concat(this.year, " ").concat(this.model, " ").concat(this.make, "."));
    }
};
laptop.describe();
