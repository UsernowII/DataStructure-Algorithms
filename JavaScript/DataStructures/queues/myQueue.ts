

interface NodeQQ  {
    value: string;
    next: NodeQQ | null;
}


class Queue {

    first: NodeQQ | null;
    last: NodeQQ | null;
    length: number;

    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }


    peek(){
        return this.first;

    }

    enqueue(value: string){
        const node: NodeQQ = {
            value: value,
            next: null
        }

        if(!this.last){
            this.first = node;
            this.last = node;
            this.length ++;

            return node;
           
        }

        this.last.next = node;
        this.last = node;
        this.length ++;

       
    }

    dequeue(){
        if (!this.first) return null;

        if (this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;
        this.length--;
        return this.first;

    }


}



const myQq = new Queue();

myQq.peek();
myQq.enqueue("Joy");
myQq.enqueue("Matt");
myQq.enqueue("pavel");
myQq.enqueue("pato");

console.log(myQq);

console.log("remove");
myQq.dequeue();



console.log(myQq);