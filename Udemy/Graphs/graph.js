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
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      ele => ele !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      ele => ele !== vertex1
    );
  }
  removeVertex(vertex) {
    this.adjacencyList[vertex].forEach(ele => {
      this.removeEdge(vertex, ele);
    });
    delete this.adjacencyList[vertex];
  }
}

const graphList = new Graph();

graphList.addVertex("Seoul");
graphList.addVertex("Tokyo");
graphList.addVertex("NewYork");
graphList.addVertex("Beijing");

graphList.addEdge("Seoul", "Tokyo");
graphList.addEdge("Seoul", "NewYork");
graphList.addEdge("Seoul", "Beijing");
graphList.addEdge("NewYork", "Tokyo");
graphList.addEdge("NewYork", "Beijing");
graphList.addEdge("Tokyo", "Beijing");

graphList.removeEdge("Seoul", "Beijing");
console.log(graphList.adjacencyList);
graphList.removeVertex("Beijing");
console.log(graphList.adjacencyList);
