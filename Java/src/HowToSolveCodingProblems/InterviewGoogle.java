package HowToSolveCodingProblems;

//find two numbers whose sum matches the target as parameter
//input Array with nunmbers -- target int sum
//output two numbers from array true / false


import java.util.HashSet;
import java.util.Set;

public class InterviewGoogle {

    public static void main(String[] args) {



        int[] array1 = {1,2,3,9}; // 8
        int[] array2 = {6,4,3,2,1,7}; // 9



        System.out.println(hasPairWithSum3(array2, 9));


    }

    public static boolean hasPairWithSum(int[] array, int target){

        for (int i = 0; i < array.length; i++) {
            for (int j = 0; j <array.length ; j++) {
                if (array[i] + array[j] == target){
                    System.out.println(target);
                    System.out.println(array[i] + " : " + array[j]);
                    return true;
                }
            }
        }
        return false;
    }

    public static boolean hasPairWithSum2(int[] array, int target){
        int anterior = 0;
        for (int i = 0; i < array.length; i++) {
            int inicial = array[i];
            anterior +=inicial;
            int second = array[array.length-1];

            if ( (inicial + second) == target || ((anterior + inicial) == target) && anterior != target){
                System.out.println(inicial + " : " + second);
                System.out.println(second + " : " + anterior);
                return true;
            }

        }
        return false;
    }

    public static boolean hasPairWithSum3(int[] array, int target){

        Set<Integer> mySet = new HashSet<>();
        for (int i = 0; i < array.length ; i++) {
            if (mySet.contains(i)) {
                return true;
            }
            mySet.add(target - array[i]);
        }
        return false;
    }
}
