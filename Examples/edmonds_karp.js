var algo = require("../lib/edmonds_karp");
var graph = [[0,1],[2,1],[1,3]];

console.log(algo.edmondskarp(graph, 0, 1));
