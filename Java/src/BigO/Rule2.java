package BigO;

public class Rule2 {

    public static void main(String[] args) {


    }

    public static void printFirstItemThenFirstHalfThenSayHi100Times(String[]items){
        int middleIndex = items.length/2;
        int index = 0;

        while ( index < middleIndex){
            System.out.println(items[index]);
            index++;
        }

        for (int i = 0; i < 100; i++) {
            System.out.println("Hi");
        }
    }
}
//O(2n) pero eliminamos las constantes
// O(n)