var INF = 1000000000000000000;

function bfs(rGraph, s, t, parent)
{
  var visited = Array(parent.length).fill(false);
  var q = [];
  q.push(s);
  visited[s] = true;
  parent[s] = -1;
  while (q.length != 0)
  {
    var u = q[0];
    q.shift();
    for(var v = 0; v < parent.length; v++)
    {
      if(visited[v]==false && rGraph[u][v] > 0)
      {
        q.push(v);
        parent[v] = u;
        visited[v] = true;
      }
    }
  }
  return (visited[t] == true);
}

function edmondskarp(graph, s, t)
{
  var u, v, max_flow = 0;
  var rGraph = graph;
  var parent = Array(graph.length);

  while(bfs(rGraph, s, t, parent) == true)
  {
    var path_flow = INF;
    for(v = t; v != s; v = parent[v])
    {
      u = parent[v];
      path_flow = Math.min(path_flow, rGraph[u][v]);
    }
    for(v = t; v != s; v = parent[v])
    {
      u = parent[v];
      rGraph[u][v] -= path_flow;
      rGraph[v][u] += path_flow;
    }
    max_flow += path_flow;
  }
  return max_flow;
}

module.exports.edmondskarp = function(graph, s, t)
{
  return edmondskarp(graph, s, t);
}
