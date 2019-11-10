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
  set(index, val) {
    let validNode = this.get(index);
    if (validNode) {
      validNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return this.push(val);

    let newNode = new Node(val);
    let foundNode = this.get(index - 1);

    foundNode.next.prev = newNode;
    newNode.next = foundNode.next;

    foundNode.next = newNode;
    newNode.prev = foundNode;

    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let foundNode = this.get(index);
    let beforeNode = foundNode.prev;
    let afterNode = foundNode.next;

    beforeNode.next = foundNode.next;
    afterNode.prev = foundNode.prev;
    // foundNode.prev.next = foundNode.next;
    // foundNode.next.prev = foundNode.prev;

    foundNode.next = null;
    foundNode.prev = null;
    this.length--;
    return foundNode;
  }
}
let newDoubly = new DoublyLinkedList();
newDoubly.push(3);

newDoubly.push(4);

newDoubly.push(5);
console.log(newDoubly);
console.log("==============");
console.log(newDoubly.remove(1));
console.log("==============");
console.log(newDoubly);
console.log(newDoubly.remove(1));
console.log("==============");
console.log(newDoubly);
