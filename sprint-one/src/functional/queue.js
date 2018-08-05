var Queue = function() {
  var someInstance = {};

  var storage = {};

  var count = 0;

  someInstance.enqueue = function(value) {
    count++;

    if (someInstance.hasOwnProperty(count)) {
      count++;
    }

    someInstance[count] = value;

  };

  someInstance.dequeue = function() {
    if (count > 0) {
      count--;  
    }

    if (count === 0) {
      var firstItem = someInstance[1];
      delete someInstance[1];
      return firstItem;
    }

    var firstItem = someInstance[count];

    delete someInstance[count];

    return firstItem;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
