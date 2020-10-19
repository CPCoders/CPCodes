function manacher(text)
{
  var N = text.length;
  if(N == 0) return;
  N = 2*N + 1;
  var  L = Array(N);
  L[0] = 0;
  L[1] = 1;

  var C = 1;
  var R = 2;
  var i = 0;
  var iMirror;
  var maxLPSLength = 0;
  var maxLPSCenterPosition = 0;
  var start = -1;
  var end = -1;
  var diff = -1;

  for(i = 2; i < N; i++)
  {
      iMirror  = 2*C-i;
      L[i] = 0;
      diff = R - i;

      if(diff > 0)
          L[i] = Math.min(L[iMirror], diff);

      while ( ((i + L[i]) < N && (i - L[i]) > 0) &&
          ( ((i + L[i] + 1) % 2 == 0) ||
          (text[parseInt((i + L[i] + 1)/2)] == text[parseInt((i - L[i] - 1)/2)])))
      {
          L[i]++;
      }

      if(L[i] > maxLPSLength)
      {
          maxLPSLength = L[i];
          maxLPSCenterPosition = i;
      }

      if (i + L[i] > R)
      {
          C = i;
          R = i + L[i];
      }

  }

  start = parseInt((maxLPSCenterPosition - maxLPSLength)/2);
  end = start + maxLPSLength - 1;

  var ans = "";
  for(i=start; i<=end; i++) ans += text[i];
  return ans;
}

module.exports.manacher = function(text)
{
  return manacher(text);
}
