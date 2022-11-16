

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
                    currentNode.left = node;
                    return node;
                }
                currentNode = currentNode.left;
            }

        }

    }

    lookup(value ){

        let currentNode = this.root;
        if(currentNode.value === value) return currentNode.value;

        while(true){
            if( value > currentNode.value){
                //Right
                currentNode = currentNode.right;
                if(!currentNode) return null; 
            }else if(value < currentNode.value){
                //Left
                currentNode = currentNode.left;
                if(!currentNode) return null; 
            }else{
                return currentNode;
            }

        }

    }

    lookupsZTM( value){

        if(!this.root) return false;

        let currentNode = this.root;
        while(currentNode){
            if(value < currentNode.value){
                currentNode = currentNode.left;
            }else if(value > currentNode.value){
                currentNode = currentNode.right;
            }else if( currentNode.value === value){
                return currentNode;
            }
        }
        return false;
    }

    remove(value){
    
        if(!this.root) return false;
        
        let currentNode = this.root;
        let parent = null;
        while(currentNode){
            if(value < currentNode.value){
                parent = currentNode;
                currentNode = currentNode.left;        
            }else if(value > currentNode.value){
                parent = currentNode;
                currentNode = currentNode.right;

            // when value is matches    
            }else if( currentNode.value === value){
                
                // Option1: No rigth child
                if(currentNode.right === null){
                        //Doesn't exist parent
                    if(parent === null){ 
                        this.root = currentNode.left;
                    }else{

                        //if parent > current value, make current
                        // left child a child of parent
                        if(currentNode.value < parent.value){
                            parent.left = currentNode.left;

                        //if parent < current value, make left child
                        // a right child of parent

                        }else if( currentNode.value > parent.value){
                            parent.right = currentNode.left;
                        }
                    }
                
                }
                // Option2: Rigth child which doesn't have a left child
                else  if(currentNode.right.left === null){
                    currentNode.right.left = currentNode.left;
                    if( parent === null){
                        this.root = currentNode.right;
                    }else{
                        currentNode.right.left = currentNode.left;

                        //if parent > current value, make current
                        // left child a child of parent
                        if(currentNode.value < parent.value){
                            parent.left = currentNode.right;

                        //if parent < current value, make right child
                        // a child of parent
                        }else if( currentNode.value > parent.value){
                            parent.right = currentNode.right;
                        }
                    }
                }
                // Option3: right child that has a left child
                else{
                    //find the right child's left most child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while(leftmost.left != null){
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    //Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if(parent === null){
                        this.root = leftmost;
                    }else{
                        if(currentNode.value < parent.value){
                            parent.left = leftmost;
                        }else if( currentNode.value > parent.value){
                            parent.right = leftmost;
                        }
                    }
                }
            return true;              
            }
        }
    }
}


const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);



console.log(tree.lookup(6), 'Lookup');
console.log(tree.lookupsZTM(170), 'Lookup');

function traverse (node){
    const tree = {value : node.value};
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

tree.remove(170);

console.log(JSON.stringify(traverse(tree.root)));