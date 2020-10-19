function next_greater_left(arr)
{
  var v = [];
  var s = [];
  for(var i = 0; i < arr.length; i++)
  {
    if(s.length == 0)
    {
      v.push(-1);
    }
    else if(s.length > 0 && s[s.length - 1] > arr[i])
    {
      v.push(s[s.length - 1]);
    }
    else if(s.length > 0 && s[s.length - 1] <= arr[i])
    {
      while(s.length > 0 && s[s.length - 1] <= arr[i])
      {
        s.pop();
      }
      if(s.length == 0)
      {
        v.push(-1);
      }
      else
      {
        v.push(s[s.length - 1]);
      }
    }
    s.push(arr[i]);
  }
  return v;
}

module.exports.next_greater_left = function(arr)
{
  return next_greater_left(arr);
}

function next_smaller_left(arr)
{
  var v = [];
  var s = [];
  for(var i = 0; i < arr.length; i++)
  {
    if(s.length == 0)
    {
      v.push(-1);
    }
    else if(s.length > 0 && s[s.length - 1] < arr[i])
    {
      v.push(s[s.length - 1]);
    }
    else if(s.length > 0 && s[s.length - 1] >= arr[i])
    {
      while(s.length > 0 && s[s.length - 1] >= arr[i])
      {
        s.pop();
      }
      if(s.length == 0)
      {
        v.push(-1);
      }
      else
      {
        v.push(s[s.length - 1]);
      }
    }
    s.push(arr[i]);
  }
  return v;
}

module.exports.next_smaller_left = function(arr)
{
  return next_smaller_left(arr);
}

function next_greater_right(arr)
{
  var v = [];
  var s = [];
  for(var i = arr.length - 1; i >= 0; i--)
  {
    if(s.length == 0)
    {
      v.push(-1);
    }
    else if(s.length > 0 && s[s.length - 1] > arr[i])
    {
      v.push(s[s.length - 1]);
    }
    else if(s.length > 0 && s[s.length - 1] <= arr[i])
    {
      while(s.length > 0 && s[s.length - 1] <= arr[i])
      {
        s.pop();
      }
      if(s.length == 0)
      {
        v.push(-1);
      }
      else
      {
        v.push(s[s.length - 1]);
      }
    }
    s.push(arr[i]);
  }
  v.reverse();
  return v;
}

module.exports.next_greater_right = function(arr)
{
  return next_greater_right(arr);
}

function next_smaller_right(arr)
{
  var v = [];
  var s = [];
  for(var i = arr.length - 1; i >= 0; i--)
  {
    if(s.length == 0)
    {
      v.push(-1);
    }
    else if(s.length > 0 && s[s.length - 1] < arr[i])
    {
      v.push(s[s.length - 1]);
    }
    else if(s.length > 0 && s[s.length - 1] >= arr[i])
    {
      while(s.length > 0 && s[s.length - 1] >= arr[i])
      {
        s.pop();
      }
      if(s.length == 0)
      {
        v.push(-1);
      }
      else
      {
        v.push(s[s.length - 1]);
      }
    }
    s.push(arr[i]);
  }
  v.reverse();
  return v;
}

module.exports.next_smaller_right = function(arr)
{
  return next_smaller_right(arr);
}
