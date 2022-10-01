package HowToSolveCodingProblems;

import java.util.HashMap;
import java.util.Map;


public class InterviewQuestion22 {

    public static void main(String[] args) {

        String [] array1 = {"a", "b", "c", "x"};
        String [] array2 = {"z", "y", "x"};

        System.out.println(arrayContains(array1,array2));

    }

    public static boolean arrayContains(String[] array1, String[] array2) {

        Map<String, Boolean> booleanHashMap = new HashMap<>();

        for (String s : array1) {
            booleanHashMap.put(s, true);
        }

        for (String s : array2) {
            if (booleanHashMap.containsKey(s)) {
                return booleanHashMap.get(s) ;
            }

        }
        return false;
    }
}
