let algo = require("../lib/heap.js");
let HEAP = algo.heap;
var heap = new HEAP(function(x){return x;});
[10, 3, 4, 8, 2, 9, 7, 1, 2, 6, 5].forEach((item, i) => {
  heap.push(item);});

heap.remove(2);
while (heap.size() > 0) console.log(heap.pop());
