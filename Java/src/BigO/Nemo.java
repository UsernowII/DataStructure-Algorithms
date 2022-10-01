package BigO;

import java.time.LocalTime;
import java.util.Arrays;
import java.util.concurrent.TimeUnit;

public class Nemo {

    public static void main(String[] args) {


        String[] nemo = new String[1];
        nemo[0] = "nemo";

        findNemo(nemo);
        finNemoJava8(nemo);

    }

    public static void findNemo(String[]array) {
        long t1 = System.currentTimeMillis();
        for (int i = 0; i < array.length; i++) {
            if (array[i] == "nemo") {
                System.out.println("Found NEMO");
            }
        }
        long t2 = System.currentTimeMillis();
        System.out.println("Call to find nemo took " + (t1 - t2));
    }


    public static void finNemoJava8(String [] array){
        String found = Arrays.stream(array).filter( x -> x == "nemo").findAny().get();
        System.out.println("Encontrado Lambdas " + found);
    }
}
