var guest_list = ['zakir', 'shahid', 'adil', 'faheem', 'zeeshan', 'saqab',];
console.log('table is not available i can invite');
var friend1 = guest_list.pop();
console.log("sory Mr.".concat(friend1, "you are not invited!"));
var friend2 = guest_list.pop();
console.log("sory Mr.".concat(friend2, "you are not invited!"));
var friend3 = guest_list.pop();
console.log("sory Mr.".concat(friend3, "you are not invited!"));
var friend4 = guest_list.pop();
console.log("sory Mr.".concat(friend4, "you are not invited!"));
for (var i = 0; i < guest_list.length; i++) {
    console.log("Mr ".concat(guest_list[i], "you are still inited"));
}
