function samplesub(arr, size)
{
  var shuffled = arr.slice(0), i = arr.length, min = i - size, temp, index;
  while (i-- > min)
  {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}

function sample(arr, size)
{
  var shuffled = arr.slice(0), i = arr.length, temp, index;
  while (i--)
  {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(0, size);
}

module.exports.samplesub = function(arr, size)
{
  return samplesub(arr, size);
}

module.exports.sample = function(arr, size)
{
  return sample(arr, size);
}
