class Queue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.lastIndex = 0;
  }

  enqueue(element) {
    this.items[this.rearIndex] = element;
    this.rearIndex++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }

    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;

    return item;
  }

  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }

    return this.items[this.frontIndex];
  }

  isEmpty() {
    return this.frontIndex === this.lastIndex;
  }

  size() {
    return this.lastIndex - this.frontIndex;
  }

  print() {
    const queueItems = [];
    for (let i = this.frontIndex; i < this.lastIndex; i++) {
      queueItems.push(this.items[i]);
    }

    console.log(queueItems.toString());
  }
}
