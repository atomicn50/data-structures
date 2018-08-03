var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // this.children.push({value: value});
  // var apple = this.children[this.count];

  // apple.children = []
  // apple.addChild = function(value) {
  //   this.children.push({value: value});
  // };
  
  // this.count++;
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  //input: target 
  //output: true or false, if target is in value
  //see if target is in value of children
  //look into newtree, check if value is target
// debugger;
// console.log(this);

  var result = false;
  if (this.value === target) {
    result = true;
  }

  for (let i = 0; i < this.children.length; i++) {
    result = result || this.children[i].contains(target);
  }

  return result;

};





/*
 * Complexity: What is the time complexity of the above functions?
 */
