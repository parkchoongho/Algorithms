class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  add(val) {
    this.values.push(val);
    this.bubbleUp();
  }
  bubbleUp() {
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    // console.log(index, parentIndex);

    while (parentIndex >= 0 && this.values[index] > this.values[parentIndex]) {
      let temp = this.values[index];
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = temp;
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }

    // console.log(this.values);
  }
}

let binaryHeap = new MaxBinaryHeap();

binaryHeap.add(10);
binaryHeap.add(50);
binaryHeap.add(30);
binaryHeap.add(40);
binaryHeap.add(70);
binaryHeap.add(110);
binaryHeap.add(90);
binaryHeap.add(150);
binaryHeap.add(80);

console.log(binaryHeap);
