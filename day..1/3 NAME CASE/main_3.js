var personName = "shahid khan";
console.log("lowercase:", personName.toLowerCase());
console.log("uppercase:", personName.toLocaleUpperCase());
console.log("titalcase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
