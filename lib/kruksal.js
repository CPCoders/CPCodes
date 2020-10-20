var dsu = require("../lib/dsu.js");

function compare(a,b)
{
  if(a[2] > b[2]) return true;
  else return false;
}

function kruksal(v)
{
  var n = v.length;
  var cost = 0;
  var edges = [];
  var res = [];

  for(var i = 0; i < v.length; i++)
  {
    for(var j = 0; j < v[i].length; j++)
    {
      var e = [0,0,0];
      e[0] = i;
      e[1] = j;
      e[2] = v[i][j];
      edges.push(e);
    }
  }
  edges.sort(compare);
  
  for(var e in edges)
  {
    if(dsu.find_set(edges[e][0]) != dsu.find_set(edges[e][1]))
    {
      cost += edges[e][2];
      res.push([edges[e][0], edges[e][1]]);
      dsu.union_set(edges[e][0], edges[e][1]);
    }
  }
  return res;
}

module.exports.kruksal = function(v)
{
  return kruksal(v);
}
