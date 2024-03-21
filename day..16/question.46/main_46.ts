import { describe } from "node:test";

let laptop = {
    make: "hp",
    model: "xps 15",
    year: "2023",
    describe: function(){
        console.log(`this laptop is a ${this.year} ${this.model} ${this.make}.`);
    }
};
laptop.describe();
