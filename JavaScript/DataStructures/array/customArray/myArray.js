

class MyArray {

    constructor() {
      this.length = 0;
      this.data = {}
        
    };

    // O(1);
    get(index){
        return this.data[index];
    }
    // O(1);
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    // O(1);
    pop(){
        delete this.data[this.length-1];
        this.length--;
    }
    // O(n);
    delete(index){
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index){
        for(let i = index; i < this.length -1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length -1];
        this.length--;
    }

}



const array = new MyArray();
array.push('Hi')
array.push('Toto')
array.push('Manco');
array.push('x2')

console.log(array);

array.pop();
console.log(array);

array.delete(1);
console.log(array);