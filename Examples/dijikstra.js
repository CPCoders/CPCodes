var algo = require("../lib/dijikstra.js");

var adj =[[[2,2],[0,2]],[[1,2],[2,2]],[[1,2],[2,2]]];
var path = algo.dijikstra(0,adj);
console.log(algo.restore_path(0, 2, path));
