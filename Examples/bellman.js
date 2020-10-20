var algo = require("../lib/bellman.js");
var edge = [[0,1,4],[0,2,6]];

console.log(algo.bellman(edge, 3, 2, 0));
