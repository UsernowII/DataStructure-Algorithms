
class Graph {


    constructor(){
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }


    addvertex(node){
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }

    addEdge(node1, node2){
        // Undirected Graph
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);


    }


    showConections(){
        const allNodes = Object.keys(this.adjacentList);

        for(let node of allNodes){
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;
            for(vertex of nodeConnections){
                connections += vertex + " ";
            }
            console.log(node + "-->" + connections);
        }
    }

}


const myGraph = new Graph();

myGraph.addvertex("0");
myGraph.addvertex("1");
myGraph.addvertex("2");
myGraph.addvertex("3");
myGraph.addvertex("4");
myGraph.addvertex("5");
myGraph.addvertex("6");


myGraph.addEdge('3', '1'); 
myGraph.addEdge('3', '4'); 
myGraph.addEdge('4', '2'); 
myGraph.addEdge('4', '5'); 
myGraph.addEdge('1', '2'); 
myGraph.addEdge('1', '0'); 
myGraph.addEdge('0', '2'); 
myGraph.addEdge('6', '5');


myGraph.showConections();