class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
}

const graphList = new Graph();

graphList.addVertex("Seoul");
graphList.addVertex("Tokyo");
graphList.addEdge("Seoul", "Tokyo");

console.log(graphList.adjacencyList);
