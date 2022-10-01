package HowToSolveCodingProblems;

import java.util.Arrays;


public class InterviewQuestion2 {

    public static void main(String[] args) {

        String [] array1 = {"a", "b", "c", "x"};
        String [] array2 = {"z", "y", "x"};

        System.out.println(arrayContains(array1,array2));

        System.out.println("Usando Lambdas");
        Arrays.asList(array1).forEach( string -> {
            if (Arrays.asList(array2).contains(string)){
                System.out.println(string);
            }
        });

    }

    public static boolean arrayContains(String[] array1, String[] array2){
        for (int i = 0; i < array1.length; i++) {
            for (int j = 0; j < array2.length; j++) {
                if (array1[i] == array2[j]) {
                    System.out.println("Encontro " + array1[i] + " en el index: " + i);
                    return true;
                }
            }

        }
        return false;
    }


}
