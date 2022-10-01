

class NodeStack {
    value: number | string;
    next: null | NodeStack;

    constructor(value: number | string){
        this.value = value;
        this.next = null;

    }
}

class Stack {

    top: NodeStack | null;
    bottom: NodeStack | null;
    length: number;

    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
        
    }

    peek(){
        return this.top?.value;
    }

    push(value: string | number){

        const node = new NodeStack(value);
        if( this.length === 0){
            this.top = node;
            this.bottom = node;
        }else{
            const holdingPointer = this.top;
            this.top = node;
            this.top.next = holdingPointer;
        }

        
        this.length++;
        return this;

    }

    pop(){
        if(!this.top) return undefined;
        
        if(this.top === this.bottom){
            this.bottom = null;
            this.top = null;
            this.length--;
            return null;
        } 

        this.top = this.top.next;
        this.length--;
        return this;

    }
    

}


const myStack = new Stack();

console.log(myStack.peek());

myStack.push("Google");
myStack.push("Udemy");
myStack.push("Platzi");


console.log(myStack.peek());
console.log(myStack)

myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack)
