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
};

binaryTreePrototype.contains = function (value) {
  var result = false;

  if (value === this.value) {
    result = true;  
  }

  if (value > this.value) {
    if (this.right) {
      result = result || this.right.contains(value);
    } 
  }

  if (value < this.value) {
    if (this.left) {
      result = result || this.left.contains(value);
    } 
  }
  
  return result;

  
};

binaryTreePrototype.depthFirstLog = function (cb) {
console.log(this);
  for (let key in this) {
    if (key === 'value') {
      cb(this.value);
    }

    if (this.left) {
      this.left.depthFirstLog(cb);
    }
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */

