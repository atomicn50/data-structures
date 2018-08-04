var BinarySearchTree = function(value) {

  var binaryTree = Object.create(binaryTreePrototype);
  binaryTree.value = value; 

  return binaryTree;
};

var binaryTreePrototype = {};


binaryTreePrototype.insert = function (value) {
// If value is less than parent value 
  // If parent.left.value is undefined, instantiate a value
  // Else, parent.left.insert (Recurse)

// If value is greater than parent value 
  // If parent.right.value is undefined, instantiate a value
  // Else, parent.right.insert (Recurse)
  if (value < this.value) {
    if (this.left === undefined) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }

  if ( value > this.value) {
    if (this.right === undefined) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
console.log(this)
};

binaryTreePrototype.contains = function (value) {
};

binaryTreePrototype.depthFirstLog = function (cb) {
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

