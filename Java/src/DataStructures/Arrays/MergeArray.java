package DataStructures.Arrays;


public class MergeArray {

    public static void main(String[] args) {

        int[] array1 = {0,3,4,31};
        int[] array2 = {4,6,30};

        int[] newArray = mergeSortedArrays(array1, array2);
        for (int n: newArray) {
            System.out.print(n +",");
        }

    }

    public static int[] mergeSortedArrays(int[] arr1, int[] arr2){

        int sizeMax = Math.max(arr1.length, arr2.length);

        int[] mergeArrays = new int[(arr1.length + arr2.length)];
        int j = 0;
        for (int i = 0; i < sizeMax; i++) {
            mergeArrays[j] = arr1[i];
            j++;
            if ( i < arr2.length){
                mergeArrays[j] = arr2[i];
                j++;
            }

        }


        return mergeArrays;
    }

    public static int[]sorted (int[] mergedArray){
        int[] sorted = new int[mergedArray.length];
        int actual;
        for (int i = 0; i < mergedArray.length -1; i++) {

        }


        return sorted;
    }

}
