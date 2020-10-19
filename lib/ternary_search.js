function tsearch(k, l, u, arr)
{
  if (u < l)
  {
    return -1;
  }

  var mids = parseInt(l + (u - l) / 3);
  var midu = parseInt(u - (u - l) / 3);

  if(arr[mids] == k)
  {
    return mids;
  }

  if(arr[midu] == k)
  {
    return midu;
  }

  if(arr[mids] > k)
  {
    return tsearch(k, l, mids - 1, arr);
  }

  if(arr[midu] < k)
  {
    return tsearch(k, midu + 1, l, arr);
  }

  return tsearch(k, mids + 1, midu - 1, arr);
}

module.exports.tsearch = function(k, l, u, arr)
{
  return tsearch(k, l, u, arr);
}
