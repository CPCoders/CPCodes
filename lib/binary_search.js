function bsearch(k, l, u, arr)
{
  if (u < l)
  {
    return -1;
  }

  var mid = parseInt((l + u) / 2);

  if(arr[mid] == k)
  {
    return mid;
  }

  else
  {
    if(arr[mid] > k)
    {
      return bsearch(k, l ,mid - 1 ,arr);
    }
    else
    {
      return bsearch(k ,mid + 1 ,u ,arr);
    }
  }
}

module.exports.bsearch = function(k, l, u, arr)
{
  return bsearch(k, l, u, arr)
}
