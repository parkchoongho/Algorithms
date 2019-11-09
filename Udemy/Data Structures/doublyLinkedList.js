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
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let countIndex, currentNode;
    if (index <= this.length / 2) {
      console.log("WORKING FROM START");
      countIndex = 0;
      currentNode = this.head;
      while (index !== countIndex) {
        countIndex++;
        currentNode = currentNode.next;
      }
    } else {
      console.log("WORKING FROM END");
      countIndex = this.length - 1;
      currentNode = this.tail;
      while (index !== countIndex) {
        countIndex--;
        currentNode = currentNode.prev;
      }
    }
    return currentNode;
  }
}
let newDoubly = new DoublyLinkedList();
newDoubly.unshift(3);

newDoubly.unshift(4);

newDoubly.unshift(5);
console.log(newDoubly);
console.log("==============");
console.log(newDoubly.get(2));
