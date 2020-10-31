function heap_sort(arr)
{
  let algo = require("../lib/heap.js");
  let HEAP = algo.heap;
  var heap = new HEAP(function(x){return x;});
  arr.forEach((item, i) => {heap.push(item);});
  var res = [];
  while (heap.size() > 0) res.push(heap.pop());
  return res;
}

module.exports.heap_sort = function(arr)
{
  return heap_sort(arr);
}
