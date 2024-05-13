"use strict";
var Names;
(function (Names) {
    Names[Names["shahid"] = 0] = "shahid";
    Names[Names["khan"] = 1] = "khan";
    Names[Names["adil"] = 2] = "adil";
    Names[Names["faheem"] = 3] = "faheem";
    Names[Names["haha"] = 4] = "haha";
})(Names || (Names = {}));
let Name = Names.shahid; // it will return index
console.log(Name); // output 3
let returnValue = Names[Name]; // it will return value
console.log(returnValue); // output sarim
console.log(Names);
