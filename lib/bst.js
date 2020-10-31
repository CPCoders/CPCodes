function Node(val)
{
  this.value = val;
  this.left = null;
  this.right = null;
}

function bst()
{
  this.root = null;
}

bst.prototype.search = function(root,val)
{
  if(root === null)return null;
  if(root.value === val) return root;
  if(root.left != null)
  {
    if(root.left.value >= val) return bst.prototype.search(root.left, val);
  }
  if(root.right != null)
  {
    if(root.right.value <= val) return bst.prototype.search(root.right, val);
  }
  else return null;
}

bst.prototype.push = function(val)
{
   var root = this.root;

   if(!root){
      this.root = new Node(val);
      return;
   }

   var currentNode = root;
   var newNode = new Node(val);

   while(currentNode){
      if(val < currentNode.value){
          if(!currentNode.left){
             currentNode.left = newNode;
             break;
          }
          else{
             currentNode = currentNode.left;
        }
     }
     else{
         if(!currentNode.right){
            currentNode.right = newNode;
            break;
         }
         else{
            currentNode = currentNode.right;
         }
     }
  }
}

module.exports = {
    bst: bst
}
