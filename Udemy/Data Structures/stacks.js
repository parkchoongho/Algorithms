class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    let poppedNode = this.first;
    if (this.size === 1) {
      this.last = null;
      this.first = null;
    } else {
      this.first = poppedNode.next;
    }

    poppedNode.next = null;
    this.size--;
    return poppedNode.val;
  }
}

let linkedStack = new Stack();

console.log(linkedStack.push(1));
console.log(linkedStack.push(2));
console.log(linkedStack.push(3));

console.log(linkedStack.pop());
console.log(linkedStack);
console.log(linkedStack.pop());
console.log(linkedStack);
console.log(linkedStack.pop());
console.log(linkedStack);
