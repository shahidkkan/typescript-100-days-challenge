function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' thr great';
    }
}
var magicians2 = ["shahis", "zakir", "adil"];
make_great(magicians2);
console.log(magicians2);
