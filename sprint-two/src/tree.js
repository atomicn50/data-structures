var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.count = 0;
  newTree.children = [];  

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push({value: value});
  var apple = this.children[this.count];

  apple.children = [];
  apple.addChild = function(value) {
    this.children.push({value: value});
  };
  
  this.count++;

 
  
};

treeMethods.contains = function(target) {
  // for (var i = 0; i < this.children.length; i++) {
  //   if (this.children[i].value === target) {
  //     return true;
  //   }
 
     
  // }
  // return false;

  var findChildren = function(target, obj) {
    
  };
    
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
