


class StackList {

    data: Array<string>;

    constructor(){
      this.data = [];
    }

    peek(){
        return this.data[this.data.length - 1]    
    }


    push(value: string | number) {
        this.data.push(value as string)
        return this.data;
    }

    pop(){
        return this.data.pop();
    }


    

}


const myStackList = new StackList();

console.log(myStackList.peek());
myStackList.push("Google");
myStackList.push("Udemy");
myStackList.push("Platzi");
console.log(myStackList.peek());

// console.log(myStackList.peek());
// console.log(myStackList)

// myStackList.pop()
// myStackList.pop()
// myStackList.pop()

// console.log(myStackList)