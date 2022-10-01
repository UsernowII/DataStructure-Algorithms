// Doubly LinkdedList

class DoublyLinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
        prev: null,
      };
      this.tail = this.head;
      this.length = 1;
    }

    append(value) {
      const newNode = {
        value: value,
        next: null,
        prev: null,
      };
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    prepend(value) {
      const newNode = {
        value: value,
        next: null,
        prev: null,
      };
    
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
    }

    printList() {
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null){
          array.push(currentNode.value)
          currentNode = currentNode.next
      }
      return array;
    }
    insert(index, value){
      //Check for proper parameters;
      if(index >= this.length) {
        return this.append(value);
      }
      
      const newNode = {
        value: value,
        next: null,
        prev: null,
      }
      const leader = this.traverseToIndex(index-1);
      const follower = leader.next;
      leader.next = newNode;
      newNode.prev = leader;

      newNode.next = follower;
      follower.prev = newNode;

      this.length++;
      return this.printList();
    }
    traverseToIndex(index) {
      //Check parameters
      let counter = 0;
      let currentNode = this.head;
      while(counter !== index){
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
    remove(index) {
      // Check Parameters      
      const leader = this.traverseToIndex(index-1);
      const unwantedNode = leader.next;
      const follower = unwantedNode.next;
      leader.next = follower;
      follower.prev = leader;  
      this.length--;
      return this.printList();
    }
}
  
let myDoublyLinkedList = new DoublyLinkedList(10);
myDoublyLinkedList.append(5);
myDoublyLinkedList.append(16);
myDoublyLinkedList.prepend(1);
myDoublyLinkedList.insert(2, 99);
myDoublyLinkedList.remove(2);


console.log(myDoublyLinkedList.printList());
console.log(myDoublyLinkedList.head.next.next.next.prev)
  
  