var algo = require("../lib/dfs_bfs.js");
var edge = [[0,1],[0,0],[2,1]];
console.log(algo.bfs(edge));
console.log(algo.dfs(edge));
