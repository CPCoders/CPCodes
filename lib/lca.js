var dsu = require("../lib/dsu.js");

function dfs(v,res, adj, queries, visited, ancestor)
{
  visited[v] = true;
  ancestor[v] = v;
  for(var u in adj[v])
  {
    if(visited[adj[v][u]] === false)
    {
      res = dfs(adj[v][u], res, adj, queries, visited, ancestor);
      dsu.union_set(v, adj[v][u]);
      ancestor[dsu.find_set(v)] = v;
    }
  }
  for(var other_node in queries[v])
  {
    if(visited[queries[v][other_node]] === true)
    {
      res[v][queries[v][other_node]] = ancestor[dsu.find_set(queries[v][other_node])];
    }
  }
  return res;
}

function lca(adj, q)
{
  var queries = q;
  var ancestor = Array(adj.length).fill(-1);
  var visited = Array(adj.length).fill(false);
  res = Array(adj.length).fill(Array(q.length));
  res = dfs(0, res,adj, queries, visited, ancestor);
  return res;
}

module.exports.lca  = function(adj,q)
{
  return lca(adj, q);
}
