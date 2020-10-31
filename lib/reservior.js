function sample(stream, n, k)
{
  stream.sort(() => Math.random() - 0.5);
  var i;
  var reservoir = Array(k);
  for (i = 0; i < k; i++) reservoir[i] = stream[i];

  for (; i < n; i++)
  {
      var j = Math.random() % (i + 1);
      if (j < k)
      reservoir[j] = stream[i];
  }

  var res = [];
  for(i = 0; i < k; i++)res.push(reservoir[i]);
  return res;
}

module.exports.sample = function(stream, n, k)
{
  return sample(stream, n, k);
}
