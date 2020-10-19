var dsu = require("../lib/dsu.js");

var a = 10;
var b = 20;

console.log(dsu.find_set(a));
console.log(dsu.find_set(b));

console.log(dsu.is_same_set(a, b));
dsu.union_set(a, b);
console.log(dsu.is_same_set(a,b));

console.log(dsu.find_set(a));
console.log(dsu.find_set(b));
