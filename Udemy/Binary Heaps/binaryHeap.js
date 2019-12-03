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
  remove() {
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
        if (this.values[leftChildIdx] >= this.values[parentIdx]) {
          let temp = this.values[parentIdx];
          this.values[parentIdx] = this.values[leftChildIdx];
          this.values[leftChildIdx] = temp;
        }
        break;
      }

      if (
        this.values[parentIdx] >= this.values[leftChildIdx] &&
        this.values[parentIdx] >= this.values[rightChildIdx]
      ) {
        break;
      }

      if (this.values[leftChildIdx] > this.values[rightChildIdx]) {
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

let binaryHeap = new MaxBinaryHeap();

binaryHeap.add(41);
binaryHeap.add(39);
binaryHeap.add(33);
binaryHeap.add(18);
binaryHeap.add(27);
binaryHeap.add(12);
binaryHeap.add(55);

console.log(binaryHeap.remove());
console.log(binaryHeap.remove());
console.log(binaryHeap.remove());
console.log(binaryHeap.remove());
console.log(binaryHeap.remove());
console.log(binaryHeap.remove());
console.log(binaryHeap.remove());
console.log(binaryHeap.remove());
