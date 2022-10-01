

class newNode2{

    constructor(value){
        this.value = value,
        this.next = null;

    }
}


class Stack2{

    top;
    bot;

    constructor(){
        this.top = null;
        this.bot = null;
    }

    push( value ){

        const node = new newNode2(value)
        
        if(!this.top){
            this.top = node;
            this.bot = node;
            return this.top;
        }
        const holdP = this.top;
        this.top = node;
        node.next = holdP;
        return this.top;

    }

    pop(){
        this.top = this.top.next;
    }
}

const stack2 = new Stack2();

stack2.push("Google");
stack2.push("Udemy");
stack2.push("Discord");


//stack2.pop();

console.log(stack2)