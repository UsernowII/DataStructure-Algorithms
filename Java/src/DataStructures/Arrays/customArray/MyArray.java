package DataStructures.Arrays.customArray;

public class MyArray {

    int length;
    int [] data;

    public MyArray() {
        this.length = 0;
        this.data = new int[5];
    }

    public int getIndex(int index) {
        return this.data[index];
    }

    public void push(int item){
        this.data[this.length] = item;
        length++;
    }

    public void pop(){
        int lastItem = this.data[this.length-1];
        this.data[lastItem] = 0;
        this.length--;
    }

    public void delete(int index){
        for (int i = index; i < this.length -1 ; i++) {
            this.data[i] = this.data[i+1];
        }

    }
}

class Main{
    public static void main(String[] args) {

        MyArray myArray = new MyArray();
        System.out.println(myArray.getIndex(0));
        System.out.println(myArray.length);
        myArray.push(1);
        myArray.push(2);
        myArray.push(3);
        myArray.push(4);
        System.out.println(myArray.length);
        System.out.println(myArray.getIndex(4));
        myArray.pop();
        System.out.println(myArray.length);
        myArray.delete(1);
        System.out.println(myArray.getIndex(2));
        System.out.println(myArray.getIndex(1));





    }
}
