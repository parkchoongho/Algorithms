class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
}

const graphList = new Graph();

graphList.addVertex("Seoul");

console.log(graphList.adjacencyList);
