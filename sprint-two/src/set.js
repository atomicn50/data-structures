var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
// input item
// output none 
// adding name to object
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
// input name
// output boolean if in object
// if statment verifying 
  if (this._storage[item]) {
    return true;
  } else {
    return false;
  }
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
