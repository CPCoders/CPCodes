function search(pat, txt, q)
{

  var M = pat.length;
  var N = txt.length;
  var d = 256;

  var i = 0;
  var j = 0;
  var p = 0;
  var t = 0;
  var h = 1;

  for (i = 0; i < M - 1; i++) h = (h * d) % q;

  for (i = 0; i < M; i++)
  {
      p = (d * p + pat[i].charCodeAt(0)) % q;
      t = (d * t + txt[i].charCodeAt(0)) % q;
  }

  for (i = 0; i <= N - M; i++)
  {
    if ( p === t )
    {
      for (j = 0; j < M; j++)
      {
          if (txt[i+j] != pat[j]) break;
      }
      if (j === M) return "Pattern found at index= " + i;
    }

    if ( i < N-M )
    {
      t = (d*(t - txt[i].charCodeAt(0)*h) + txt[i+M].charCodeAt(0))%q;
      if (t < 0) t = (t + q);
    }
  }

  return "Pattern not found";
}

module.exports.search = function(txt, pat)
{
  return search(pat, txt, 101);
}
