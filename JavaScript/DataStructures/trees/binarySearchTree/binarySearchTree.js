

class Node {
    constructor(value){
        this.left =null;
        this.right =null;
        this.value =value;
    }
}


class BinarySearchTree {


    constructor(){
        this.root = null;
    }

    insert(value){
        const node = new Node(value);
    
        if(!this.root) return this.root = node;

        let currentNode = this.root;

        while(true){
            if( value > currentNode.value){
                //Right
                if(!currentNode.right){
                    currentNode.right = node;
                    return node;
                }
                currentNode = currentNode.right;
            }else{
                //Left
                if(!currentNode.left){
                    console.log(currentNode.left)
                    currentNode.left = node;
                    return node;
                }
                currentNode = currentNode.left;
                console.log(currentNode)
            }

        }

    }




}




const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(20);



function traverse (node){
    const tree = {value : node.value};
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}


console.log(JSON.stringify(traverse(tree.root)));