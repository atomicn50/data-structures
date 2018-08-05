var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.count = 0;
  obj.storage = {};

  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  this.count++;

  if (this.storage.hasOwnProperty(this.count)) {
  	this.count++;
  }

  this.storage[this.count] = val;

};

queueMethods.dequeue = function() {
  if(this.count > 0) {
  	this.count--;
  }

  if (this.count === 0) {
  	var firstItem = this.storage[1];
  	delete this.storage[1];
	  return firstItem;	
  }

  var firstItem = this.storage[this.count];
  delete this.storage[this.count];
  return firstItem;
  	
};

queueMethods.size = function() {
  return this.count;

};


