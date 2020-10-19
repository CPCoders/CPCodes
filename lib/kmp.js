function kmp(t, p)
{
  var n = t.length;
  var m = p.length;
  var lps = new Array(m).fill(0);
  var len = 0;
  var i = 1;
  var j = 0;

  while(i < m)
  {
    if(p[i] === p[len])
    {
      len++;
      lps[i] = len;
      i++;
    }
    else {
      if(len != 0)
      {
        len = lps[len - 1];
      }
      else
      {
        lps[i] = 0;
        i++;
      }
    }
  }

  console.log(lps);

  i = 0;
  j = 0;

  while(i < n)
  {
    if(p[j] === t[i])
    {
      j++;
      i++;
    }
    if(j === m)
    {
      return "Pattern Found at index = " + (i - j);
      j = lps[j - 1];
    }
    else if(i < n && p[j] != t[i])
    {
      if(j != 0)
      {
        j = lps[j - 1];
      }
      else
      {
        i++;
      }
    }
  }
  return "Pattern Not Found";
}

module.exports.kmp = function(t, p)
{
  return kmp(t, p);
}
