var Stack = function() {
  var someInstance = {};

  var storage = {};

  var count = 0;

  someInstance.push = function(value) {
    count++;  
    storage[count] = value;

  };

  someInstance.pop = function() {
    if (count > 0) {
      count--;  
    }

    if (count === 0) {
      var lastItem = storage[1];
      delete storage[1];
      return lastItem;
    }
    
    var lastItem = storage[count + 1];
    delete storage[count + 1];
    return lastItem;
         
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
