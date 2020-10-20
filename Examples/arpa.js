var algo = require("../lib/arpa.js");

var q = [[0,1], [0,2], [1,2]];
var v = [1,2,4,5,7,8,7];

console.log(algo.query(q, v));
