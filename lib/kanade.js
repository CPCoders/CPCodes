var MIN = -1000000000000;
function maxSubArraySum(a)
{
  var max_so_far = MIN, max_ending_here = 0;
  for(var i = 0; i < a.length; i++)
  {
    max_ending_here = max_ending_here + a[i];
    if(max_so_far < max_ending_here) max_so_far = max_ending_here;
    if(max_ending_here < 0) max_ending_here = 0;
  }
  return max_so_far;
}

module.exports.maxSubArraySum = function(a)
{
  return maxSubArraySum(a);
}
