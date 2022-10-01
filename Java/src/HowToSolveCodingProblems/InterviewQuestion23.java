package HowToSolveCodingProblems;

import java.util.HashMap;
import java.util.Map;


public class InterviewQuestion23 {

    public static void main(String[] args) {

        String [] array1 = {"a", "b", "c", "w"};
        String [] array2 = {"z", "y", "x"};

        System.out.println(arrayContains(array1,array2));

    }

    public static boolean arrayContains(String[] array1, String[] array2) {

        Map<String, Boolean> map = new HashMap<>();
        for (String value : array1) {
            if (!map.containsKey(value)) {
                String s = value;
                map.put(s, true);

            }
        }
        map.forEach( (a, b) -> System.out.println( a + ": " +b) );

        for (int i = 0; i < array2.length; i++) {
            if (map.containsKey(array2[i])){
                return true;
            }
        }

        return false;
    }
}


