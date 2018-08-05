var Stack = function() {
  this.count = 0;
  this.storage = {};

};

Stack.prototype.push = function(val) {
    this.count++;
    this.storage[this.count] = val;
  };

Stack.prototype.pop = function() {
  if (this.count > 0) {
    this.count--;
  }

   var lastItem = this.storage[this.count + 1];
   delete this.storage[this.count + 1];
   return lastItem;
    
};

Stack.prototype.size = function() {
  return this.count;;
};




