package BigO;

import java.util.Arrays;


public class Rule4 {

    public static void main(String[] args) {

        int[] numbers = {1,2,3,4,5};
        printAllNumbersThenPairsSums(numbers);

    }

    public static void printAllNumbersThenPairsSums(int[] numbers){
        //O(n^2)
        System.out.println("these are the numbers: ");
        Arrays.stream(numbers).forEach(System.out::println);

        //Foreach anidado
        System.out.println("and these are their susms: ");
        for (int firstNumber : numbers) {
            for (int secondNumber : numbers) {
                System.out.println(firstNumber + secondNumber);
            }
        }

        System.out.println("and these are their susms using Lambda Java8: ");
        Arrays.stream(numbers).forEach( firstNumber -> {
            for (int secondNumber :numbers) {
                System.out.println(firstNumber + secondNumber);
            }
        });
    }
}

//O(n^2)
