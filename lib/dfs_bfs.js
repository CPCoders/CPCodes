function bfs(adj)
{
  var V = adj.length;
  var s = 0;
  var visited = Array(V).fill(false);
  var ans = [];

  var queue = [];
  visited[s] = true;
  queue.push(s);

  while(queue.length != 0)
  {
    s = queue[0];
    ans.push(s);
    queue.shift();

    for(var i = 0; i != adj[s].length; ++i)
    {
      if (visited[adj[s][i]] === false)
      {
        visited[adj[s][i]] = true;
        queue.push(adj[s][i]);
      }
    }
  }
  return ans;
}

function dfs(adj)
{
  var s = 0;
  var V = adj.length;
  var visited = Array(V).fill(false);
  var ans = [];
  var stack = [];
  stack.push(s);

  while(stack.length != 0)
  {
    s = stack[stack.length - 1];
    stack.pop();

    if(visited[s] === false)
    {
      ans.push(s);
      visited[s] = true;
    }

    for(var i = 0; i != adj[s].length; ++i)
        if(visited[adj[s][i]] === false) stack.push(adj[s][i]);
  }
  return ans;
}

module.exports.dfs = function(adj)
{
  return dfs(adj);
}

module.exports.bfs = function(adj)
{
  return bfs(adj);
}
