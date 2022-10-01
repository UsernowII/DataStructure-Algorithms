

// 1--> 10 --> 99 --> 5 --> 16 --> null
// 1--> 10 --> 99 --> 16 --> null
type pointer = {
    value: number,
    next: pointer | null,

}

class LinkedListTS {

    head: pointer;
    tail: pointer;
    length: number;

    constructor(value: number){
        this.head = {
            value : value,
            next : null,
        }

        this.tail = this.head;
        this.length = 1; 
    }

    append(value: number){

        const newNode: pointer = {
            value: value,
            next : null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
       
    }

    prepend(value: number){
        const newNode: pointer = {
            value: value,
            next: null
        }

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    nodeList(){
        const array: number[] = [];
        let currentNode: pointer | null = this.head;

        while(currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
            
        }
        return array;
    }

    insert( index: number, value: number){
        if( index === 0 ) return this.prepend( value );
        if( index >= this.length ) return this.append( value);

        let prev: any = this.head;
            
        for(let k= 1; k < index; k++){
            console.log(k)
            prev = prev.next;
               
        };
        const after:pointer = prev.next;
        const newNode: pointer = {
            value: value,
            next: null
        }    
        
        newNode.next = after;
        prev.next = newNode;

        this.length++;

    } 

    insertZTM(index: number, value: number){
        if( index === 0 ) return this.prepend( value );
        if( index >= this.length ) return this.append( value);

        const leaderPointer: pointer = this.traverseToIndex(index-1);
        const newNode: pointer ={
            value: value,
            next: null
        };

        const holdPointer= leaderPointer.next;
        leaderPointer.next = newNode;
        newNode.next = holdPointer;
        this.length++;

    }


    traverseToIndex(index: number): pointer{

        let currentPointer: any = this.head;
        let counter = 0;

        while( counter !== index ) {
            currentPointer = currentPointer.next;
            counter++;
        }

        return currentPointer;
    }

    remove(index: number): void{
        if(index === 0){
            let prev: any = this.head;
            this.head = prev.next;
            this.length--;
        }
        if( index >= this.length) index = this.length -1;

        let current: pointer | any = this.head;
        let prev: pointer | any;

        for(let k = 0; k < index; k++){
            prev = current;
            current = current.next;
        }

        const after: pointer = current.next;
        prev.next = after;
        this.length--;
    
    }

    removeZTM(index: number){
        const leader = this.traverseToIndex(index-1);
        const unwantedNode: any = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        console.log(leader);

    }

    reverse(){

        if(!this.head.next){
            return this.head;
        }

        let first = this.head;
        this.tail = this.head;
        let second = first.next;
        let contador = 1;

        while(second){
            console.log(contador)
            const temp = second.next;
           
            second.next = first;
            console.log(second.next.value);
            first = second;
            second = temp;
            contador++;

        }

        this.head.next = null;
        this.head = first;
        console.log(this.nodeList());



     
    }

}

const myLinkedListTS = new LinkedListTS(10);
myLinkedListTS.append(5);
myLinkedListTS.append(16);


myLinkedListTS.prepend(1);
console.log(myLinkedListTS)
console.log(myLinkedListTS.nodeList());
myLinkedListTS.insert(2, 99)
console.log(myLinkedListTS.nodeList());


console.log(myLinkedListTS.nodeList());
//myLinkedListTS.remove(1);

console.log(myLinkedListTS);
myLinkedListTS.removeZTM(2);
console.log("Remove indice ", 1)
console.log(myLinkedListTS.nodeList());

myLinkedListTS.reverse();