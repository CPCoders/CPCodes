var INF = 1000000000000000000;

function dijikstra(s, adj)
{
  var n = adj.length;
  var d = Array(n).fill(INF);
  var p = Array(n).fill(-1);
  var u = Array(n).fill(false);
  d[s] = 0;

  for(var i = 0; i < n; i++)
  {
    var v = -1;
    for(var j = 0; j < n; j++)
    {
      if(u[j] === false && (v == -1 || d[j] < d[v])) v = j;
    }

    if(d[v] === INF) break;
    u[v] = true;

    for(var i in adj[v])
    {
      var to = adj[v][i][0];
      var len = adj[v][i][1];
      if (d[v] + len < d[to])
      {
        d[to] = d[v] + len;
        p[to] = v;
      }
    }
  }
  return p;
}

function restore_path(s, t, p)
{
  var path = [];
  for(var v = t; v != s; v = p[v])
  {
      path.push(v);
  }
  path.push(s);

  return path.reverse();
}

module.exports.dijikstra = function(s, adj)
{
  return dijikstra(s, adj);
}

module.exports.restore_path = function(s, t, p)
{
  return restore_path(s, t, p);
}
