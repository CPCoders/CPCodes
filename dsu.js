 var rank = new Array(100000).fill(0);
 var num = new Array(1000000).fill(1);
 var parent = new Array(1000000);
 for(var i = 0; i < 1000000; i++)parent[i] = i;

 function find_set(i)
 {
   if(i == parent[i]) return i;
   return parent[i] = find_set(parent[i]);
 }

 function is_same_set(i, j)
 {
   if(find_set(i) == find_set(j))return true;
   return false;
 }

 function union_set(i, j)
 {
   if(!is_same_set(i, j))
   {
       var u = find_set(i);
       var v = find_set(j);
       if(rank[u] == rank[v])
       {
           parent[v] = u;
           rank[u] += 1;
           num[u] += num[v];
       }
       else if(rank[u] > rank[v])
           parent[v] = u, num[u] += num[v];
       else
           parent[u] = v, num[v] += num[u];
   }
 }

 module.exports.find_set = function(i)
 {
   return find_set(i);
 }

 module.exports.is_same_set = function(i, j)
 {
   return is_same_set(i, j);
 }

 module.exports.union_set = function(i, j)
 {
   union_set(i, j);
 }
