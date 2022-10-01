
class node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}


class Queue2 {

    constructor(node){
        this.head = node;
        this.tail = this.head;
    }


    enqueue(node){
        console.log(this.tail, 'TAIL')
        this.tail.next = node;
       
        this.tail = node;
    }
    


}


const qq2 = new Queue2(new node("Joy"));


qq2.enqueue(new node("Pedro"));
qq2.enqueue(new node("Mateo"));



console.log(qq2);