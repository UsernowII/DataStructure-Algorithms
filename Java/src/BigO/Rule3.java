package BigO;

public class Rule3 {

    public static void main(String[] args) {


        String [] boxes = {"a", "b", "c", "d", "e"};
        logAllPairsOfArray(boxes);

    }

    public static void logAllPairsOfArray(String [] array){
        for (int i = 0; i < array.length; i++) {
            for (int j = 0; j < array.length; j++) {
                System.out.println(array[i] + array[j]);
            }
        }
    }
}

//O(n^2) FOr anindado se eleva a su potencia