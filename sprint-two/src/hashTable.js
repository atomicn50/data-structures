

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};
/*{_.limit: 8,
   _.storage = LimitedArray(8) --> {get, set, each}
  }

*/
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  this._storage.set(index, v); 
  this._storage.see();    
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


