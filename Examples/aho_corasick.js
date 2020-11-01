let algo = require("../lib/aho_corasick.js");
let AHO = algo.aho;
var aho = new AHO(["happy","sad"]);

console.log(aho.search("i am sad and happy"));
