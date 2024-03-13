function makeshirt(size, text) {
    if (size === void 0) { size = 'large'; }
    if (text === void 0) { text = 'i love typscript'; }
    console.log("you hava order a ".concat(size, ", shirt that says").concat(text));
}
makeshirt();
makeshirt("medium");
makeshirt('small', 'i need a big shirt wear');
