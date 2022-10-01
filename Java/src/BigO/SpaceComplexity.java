package BigO;

import java.util.Arrays;

public class SpaceComplexity {
    public static void main(String[] args) {

        int[] n = {1,2,3,4,5};
        boooo(n);

        String[] newArray = arrayOfHiNTimes(6);
        Arrays.stream(newArray).forEach(System.out::println);


    }
    //O(1)
    public static void boooo(int []n){
        for (int i = 0; i < n.length; i++) {
            System.out.println("booooo!");
        }
    }
    //O(n)
    public static String[] arrayOfHiNTimes(int n){
        String[] hiArray = new String[n];
        for (int i = 0; i < n; i++) {
            hiArray[i] = "hi";
        }
        return hiArray;
    }
}

