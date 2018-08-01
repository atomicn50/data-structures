var Stack = function() {
  var someInstance = {};

  var storage = {};

  var count = 0;

  var val = [];

  someInstance.push = function(value) {
    count++;  
    val[val.length] = value;

  };

  someInstance.pop = function() {
    count--;
    var popped = val[val.length - 1];
    val.splice(val.length - 1, 1);

    return popped;
  };

  someInstance.size = function() {
    if (count < 0) {
      return 0;
    }

    return count;
  };

  return someInstance;
};
