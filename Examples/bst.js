let algo = require("../lib/bst.js");
let BST = algo.bst;
var bst = new BST();
bst.push(10);
bst.push(2);
bst.push(11);
console.log(bst.search(bst.root,11));
