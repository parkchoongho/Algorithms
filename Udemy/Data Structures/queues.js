class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let addedNode = new Node(val);
    if (!this.first) {
      this.first = addedNode;
      this.last = addedNode;
    } else {
      this.last.next = addedNode;
      this.last = addedNode;
    }
    this.size++;
    return this;
  }
  dqueue() {
    if (!this.first) return undefined;
    let removedNode = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    removedNode.next = null;
    this.size--;
    return removedNode;
  }
}

let linkedQueue = new Queue();
linkedQueue.enqueue(1);
linkedQueue.enqueue(2);
console.log("===============");
console.log(linkedQueue.enqueue(3));
console.log(linkedQueue.dqueue());
console.log(linkedQueue);
console.log(linkedQueue.dqueue());
console.log(linkedQueue);
console.log(linkedQueue.dqueue());
console.log(linkedQueue);
console.log(linkedQueue.dqueue());
console.log(linkedQueue);
