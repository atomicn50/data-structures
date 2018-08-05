class Queue {
  constructor() {
  	this.count = 0;
  	this.storage = {};
  }

  enqueue(val) {
    this.count++;

    if (this.storage.hasOwnProperty(this.count)) {
      this.count++;
    }
    this.storage[this.count] = val;
  }

  dequeue() {
    if (this.count > 0) {
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
  }

  size() {
    return this.count;
  }
}
