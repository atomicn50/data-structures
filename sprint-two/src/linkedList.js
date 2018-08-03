var LinkedList = function() {
  var list = {};

  list.head = null;
  list.tail = null;

  
  list.addToTail = function(value) {
    var node = Node(value);
    
    if (list.head === null) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node;
      list.tail = node;
    }

  };

  list.removeHead = function() {
    list.head = list.head.next || list.head;
    return list.head.value;
  };

  list.contains = function(target) {
    var start = list.head;

    while (start.next !== null) {
      if (start.value === target) {
        return true;
      }

      start = start.next;

      if (start.value === target) {
        return true;
      }
    } 
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
