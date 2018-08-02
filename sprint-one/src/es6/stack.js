class Stack {
  constructor() {
  	this.count = 0;
  	this.storage = {};
  }

  push(val) {
    this.count++;
    this.storage[this.count] = val;
  }

  pop() {
    if (this.count > 0) {
      this.count--;	
    }

    var lastItem = this.storage[this.count + 1];
    delete this.storage[this.count + 1];
    return lastItem;
  }

  size() {
    return this.count;
  }

}
