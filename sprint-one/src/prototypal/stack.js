var Stack = function() {
  var obj = Object.create(stackMethods);
  obj.count = 0;
  obj.storage = {};

  return obj;
};

var stackMethods = {};

stackMethods.push = function(val) {
  this.count++;
  this.storage[this.count] = val;

};

stackMethods.pop = function() {
  if (this.count > 0) {
  	this.count--;
  }

  var lastItem = this.storage[this.count + 1];
  delete this.storage[this.count + 1];
  return lastItem;

};

stackMethods.size = function() {
  return this.count;
  
};


