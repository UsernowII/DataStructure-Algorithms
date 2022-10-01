package DataStructures.Arrays;

import java.util.stream.Stream;

public class ReverseString {

    public static void main(String[] args) {

        System.out.println("-----Reverse 2-----");
        String strNew = reverse2("Hi my name is Andrei");
        System.out.println(strNew);

        System.out.println("-----Reverse 3-----");
        String[] reverse = reverse3("Hi my name is Andrei");
        for (String s:reverse) {
            System.out.print(s);
        }
        System.out.println();
        System.out.println("-----Reverse 4-----");
        System.out.println(reverse4("Hi my name is Andrei"));

    }


    public static String reverse(String str){
        String strReverse = "";
        char x ;
        for (int i = 0; i < str.length(); i++) {
            x =  str.charAt(str.length()-i-1);
            strReverse = strReverse.concat(String.valueOf(x));
        }
        return strReverse;
    }

    public static String reverse2(String str){
        String strReverse2 = "";
        char x ;
        for (int i = str.length()-1; i >= 0; i--) {
            x = str.charAt(i);
            strReverse2 = strReverse2.concat(String.valueOf(x));
        }
        return strReverse2;
    }

    public static String[] reverse3(String str){
        String [] arrayStr = new String[str.length()];
        int cont = 0;
        for (int i = str.length()-1; i >=0; i--) {
            arrayStr[cont] = String.valueOf(str.charAt(i));
            cont++;
        }

        return arrayStr;
    }

    public static String reverse4(String str){
        StringBuilder strReverse2 = new StringBuilder();
        for (int i = str.length()-1; i >= 0; i--) {
            strReverse2.append(str.charAt(i));
        }
        return strReverse2.toString();
    }


}
