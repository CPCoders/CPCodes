var dsu = require("../lib/dsu.js");

function query(q, v)
{
  var p = Array(q.length).fill([]);
  var answer = Array(q.length);
  var s = [];

  for(var i = 0; i < p.length; i++)
  {
    p[q[i][1]].push([i,q[i][0]]);
  }

  for(var i = 0; i < q.length; i++)
  {

    while (s.length != 0 && v[s[s.length - 1]] > v[i])
    {
      dsu.parent[s[s.length - 1]] = i;
      s.pop();
    }
    s.push(i);

    for(j in p[i])
    {
      answer[p[i][j][0]] = v[dsu.find_set(p[i][j][1])];
    }
  }
  return answer;
}

module.exports.query = function(q, v)
{
  return query(q, v);
}
