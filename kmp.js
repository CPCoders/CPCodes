function kmp(p, t)
{
  var lps = new Array(p.length).fill(0);
  var len = 0
  var i = 1
  var j = 0;
  while(i < p.length)
  {
    if(p[i] === p[len])
    {
      lps[i++] = ++len;
    }
    else if(len)
    {
      len = lps[len - 1];
    }
    else
    {
      lps[i++] = 0;
    }
  }
  i = j = 0;
  while(i < t.length)
  {
    if(p[j] === t[i])
    {
      j++;
      i++;
    }
    if(j === p.length)
    {
      j = lps[j - 1];
    }
    else if(i < t.length && p[j] != t[i])
    {
      if(j)
      {
        j = lps[j - 1];
      }
      else
      {
        i++;
      }
    }
  }
  return lps;
}

module.exports.kmp = function(p, t)
{
  return kmp(p, t);
}
