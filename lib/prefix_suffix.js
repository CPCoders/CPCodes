function prefix(v)
{
  var res = Array(v.length).fill(0);
  var i = 0;
  for(i = 1; i < v.length; i++)
  {
    res[i] = res[i- 1] + v[i];
  }
  return res;
}

function suffix(v)
{
  v = prefix(v);
  var res = Array(v.length).fill(0);
  var i = 0;
  for(i = 1; i < v.length; i++)
  {
    res[i] = v[v.length - 1] + v[i - 1];
  }
  return res;
}

module.exports.prefix = function(v)
{
  return prefix(v);
}

module.exports.suffix = function(v)
{
  return suffix(v);
}
