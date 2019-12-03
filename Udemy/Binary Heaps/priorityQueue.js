class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enQueue(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (
      parentIndex >= 0 &&
      this.values[index].priority < this.values[parentIndex].priority
    ) {
      let temp = this.values[index];
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = temp;
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }

    console.log(this.values);
  }
  deQueue() {
    if (this.values.length === 0) return undefined;

    if (this.values.length === 1) {
      return this.values.pop();
    }

    const popedValue = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    this.sinkDown();

    return popedValue;
  }
  sinkDown() {
    let parentIdx = 0;
    let leftChildIdx = parentIdx * 2 + 1;
    let rightChildIdx = parentIdx * 2 + 2;

    while (this.values[leftChildIdx]) {
      if (!this.values[rightChildIdx]) {
        if (
          this.values[leftChildIdx].priority < this.values[parentIdx].priority
        ) {
          let temp = this.values[parentIdx];
          this.values[parentIdx] = this.values[leftChildIdx];
          this.values[leftChildIdx] = temp;
        }
        break;
      }

      if (
        this.values[parentIdx].priority < this.values[leftChildIdx].priority &&
        this.values[parentIdx].priority < this.values[rightChildIdx].priority
      ) {
        break;
      }

      if (
        this.values[leftChildIdx].priority < this.values[rightChildIdx].priority
      ) {
        let temp = this.values[parentIdx];
        this.values[parentIdx] = this.values[leftChildIdx];
        this.values[leftChildIdx] = temp;
        parentIdx = leftChildIdx;
      } else {
        let temp = this.values[parentIdx];
        this.values[parentIdx] = this.values[rightChildIdx];
        this.values[rightChildIdx] = temp;
        parentIdx = rightChildIdx;
      }
      leftChildIdx = parentIdx * 2 + 1;
      rightChildIdx = parentIdx * 2 + 2;
    }
    console.log(this.values);
  }
}

let node1 = new Node("Soccer", 1);
let node2 = new Node("Video Game", 7);
let node3 = new Node("Baseball", 5);
let node4 = new Node("Math", 6);
let node5 = new Node("English", 3);
let node6 = new Node("Basketball", 2);
let node7 = new Node("Science", 4);
let node8 = new Node("Music", 4);

let priorityQueue = new PriorityQueue();

priorityQueue.enQueue(node1);
priorityQueue.enQueue(node2);
priorityQueue.enQueue(node3);
priorityQueue.enQueue(node4);
priorityQueue.enQueue(node5);
priorityQueue.enQueue(node6);
priorityQueue.enQueue(node7);
priorityQueue.enQueue(node8);

console.log(priorityQueue);

priorityQueue.deQueue();
priorityQueue.deQueue();
priorityQueue.deQueue();
priorityQueue.deQueue();
priorityQueue.deQueue();
priorityQueue.deQueue();
priorityQueue.deQueue();
