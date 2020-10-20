var INF = 1000000000000000000;

function bellman(edge, v, e, s)
{
  var dis = Array(v).fill(INF);
  dis[s] = 0;

  for(var i = 0; i < v - 1; i++)
  {
    for(var j = 0; j < e; j++)
    {
      if(dis[edge[j][0]] + edge[j][2] < dis[edge[j][1]])
      {
        dis[edge[j][1]] = dis[edge[j][0]] + edge[j][2];
      }
    }
  }

  for(var i = 0; i < e; i++)
  {
    var x = edge[i][0];
    var y = edge[i][1];
    var weight = edge[i][2];

    if (dis[x] != INF && dis[x] + weight < dis[y])
    {
      return "Graph contains negative weight cycle";
    }
  }

  return dis;
}

module.exports.bellman = function(edge, v, e, s)
{
  return bellman(edge, v, e, s);
}
