class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (!this.head) return undefined;
    let poppedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = poppedNode.next;
      this.head.prev = null;
      poppedNode.next = null;
    }
    this.length--;
    return poppedNode;
  }
}
let newDoubly = new DoublyLinkedList();
newDoubly.push(3);
newDoubly.push(4);
newDoubly.push(5);

console.log(newDoubly);
console.log("==============");
console.log(newDoubly.shift());

console.log(newDoubly);
console.log("==============");
console.log(newDoubly.shift());

console.log(newDoubly);
console.log("==============");
console.log(newDoubly.shift());

console.log(newDoubly);
console.log("==============");
console.log(newDoubly.shift());
