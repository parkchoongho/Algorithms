# Graphs

### Objectives

- Explain what a graph is
- Compare and contrast different types of graphs and their use cases in the real world
- Implement a graph using an adjacency list
- Traverse through a graph using BFS and DFS
- Compare and contrast graph traversal algorithms

### What are Graphs

A **graph data structure** consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected **graph** or a set of ordered pairs for a directed **graph**. 

#### Graphs = Collections of Nodes + Connections

### Uses for Graphs

- Social Networks
- Location / Mapping
- Routing Algorithms
- Visual Hierarchy
- File System Optimizations
- **EVERYWHERE!**

### Types of Graphs

#### Essential Graph Terms

- **Vertex** - a node
- **Edge** - connection between nodes
- **Weighted / Unweighted** - values assigned to distances between vertices
- **Directed / Undirected** - directions assigned to distances between vertices

### Storing Graphs: Adjacency Matrix

| -     | A     | B     | C     | D     | E     | F     |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| **A** | 0     | **1** | 0     | 0     | 0     | **1** |
| **B** | **1** | 0     | **1** | 0     | 0     | 0     |
| **C** | 0     | **1** | 0     | **1** | 0     | 0     |
| **D** | 0     | 0     | **1** | 0     | **1** | 0     |
| **E** | 0     | 0     | 0     | **1** | 0     | **1** |
| **F** | **1** | 0     | 0     | 0     | **1** | 0     |

### Storing Graphs: Adjacency List

```javascript
    [
 0   [1, 5],
 1   [0, 2],
 2   [1, 3],
 3   [2, 4],
 4   [3, 5],
 5   [4, 0]
    ]
```

```javascript
{
    A: ["B", "F"],
    B: ["A", "C"],
    C: ["B", "D"],
    D: ["C", "E"],
    E: ["D", "F"],
    F: ["E", "A"]
}
```

### Adjacency Matrix vs List Big O

| OPERATION     | ADJACENCY MATRIX | ADJACENCY LIST |
| ------------- | ---------------- | -------------- |
| Add Vertex    | O(\|V^2\|)       | O(1)           |
| Add Edge      | O(1)             | O(1)           |
| Remove Vertex | O(\|V^2\|)       | O(\|V\|+\|E\|) |
| Remove Edge   | O(1)             | O(\|E\|)       |
| Query         | O(1)             | O(\|V\|+\|E\|) |
| Storage       | O(\|V^2\|)       | O(\|V\|+\|E\|) |

=> **|V|** - number of vertices, **|E|** - number of edges

#### Adjacency Matrix

- Takes up more space (in sparse graphs)
- Slower to iterate over all edges
- Faster to lookup specific edge

#### Adjacency List

- Can take up less space (in sparse graphs)
- Faster to iterate over all edges
- Can be slower to lookup specific edge

#### We use Adjacency List!!

### Add Vertex

- Write a method called addVertex, which accepts a name of a vertex
- It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array

```javascript
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
```

### Add an Edge

- This function should accept two vertices, we can call them vertex1 and vertex2
- The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
- The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
- Don't worry about handling errors/invalid vertices

```javascript
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
```

### Remove an Edge

- This function should accept two vertices, we'll call them vertex1 and vertex2
- The function should reassign the key of vertex1 to be an array that does not contain vertex2
- The function should reassign the key of vertex2 to be an array that does not contain vertex1
- Don't worry about handling errors/invalid vertices

```javascript
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
}

const graphList = new Graph();

graphList.addVertex("Seoul");
graphList.addVertex("Tokyo");
graphList.addVertex("NewYork");
graphList.addVertex("Beijing");

graphList.addEdge("Seoul", "Tokyo");
graphList.addEdge("NewYork", "Tokyo");
graphList.addEdge("Seoul", "NewYork");
graphList.addEdge("Seoul", "Beijing");

graphList.removeEdge("Seoul", "Beijing");
console.log(graphList.adjacencyList);
```

