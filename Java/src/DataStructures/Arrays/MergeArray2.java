package DataStructures.Arrays;

import java.util.*;

public class MergeArray2 {

    public static void main(String[] args) {

        int[] array1 = {0,3,4,31};
        int[] array2 = {4,6,30};

        List< Integer> mergeArray = mergeSortedArrays(array1, array2);
        mergeArray.forEach(System.out::print);


    }


    public static List<Integer> mergeSortedArrays(int[] arr1, int[] arr2){

        List <Integer > mergeArrays = new ArrayList<>();
        int array1Item = arr1[0];
        int array2Item = arr2[0];
        int j = 1;
        int i = 1;
        int sizeMax = arr1.length + arr2.length;



        while ( sizeMax > 0){
            System.out.println(array1Item + ":" + array2Item);
            if (array1Item < array2Item ){
                mergeArrays.add(array1Item);
                array1Item = arr1[i];
                i++;
            }else {
                mergeArrays.add(array2Item);
                array2Item = arr2[j];
                j++;
            }
            sizeMax--;
        }
        return mergeArrays;
    }
}
