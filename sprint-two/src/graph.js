

// Instantiate a new graph
var Graph = function() {
  this.graph = {};
  
  
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.graph[node] = {};

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.graph[node]) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.graph[node]) {
    if (Object.keys(this.graph[node]).length > 0) {
      var keys = Object.keys(this.graph[node]);
      delete this.graph[keys[0]][node];
    }
    delete this.graph[node];
    
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.graph[fromNode][toNode] && this.graph[toNode][fromNode]) {
    return true;
  } else {
    return false;
  }

};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.graph[fromNode][toNode] = this.graph[toNode];
  this.graph[toNode][fromNode] = this.graph[fromNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.graph[fromNode][toNode];
  delete this.graph[toNode][fromNode];

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  _.each(this.graph, function(value, key) {
    cb(key);
  });
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


