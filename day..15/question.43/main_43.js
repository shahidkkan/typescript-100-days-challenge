function make_great2(magicians) {
    var greatmagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatmagicians.push(magicians[i], " the great");
    }
    return greatmagicians;
}
var magicians3 = ["shahid", "adil", "zakir"];
var greatmagicians2 = make_great2(magicians3);
console.log(magicians3);
console.log(greatmagicians2);
