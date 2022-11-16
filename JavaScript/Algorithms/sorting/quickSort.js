
// Quick Sort

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right){
    if( left < right ){
        let partitionIndex = partition(array, left, right);
        console.log(partitionIndex)
        quickSort(array, left, partitionIndex-1);
        quickSort(array, partitionIndex+1, right);
      
    }
    
    return array;
}


console.log(numbers);
//Select first and last index as 2nd and 3rd parameters
console.log(quickSort(numbers, 0, numbers.length-1));



function partition(array, left , right) {
    // pivote el de la derecha
    let pivot = array[right];

    // pointer mas pqueño
    let min = left-1;

    for(let i = left; i < right; i++){
        if(array[i] < pivot){
            console.log(array[i])
            let temp = array[min+1];
            array[min+1] = array[i];
            array[i] = temp;
            min++;
        }
    }

    min++;
    let temp = array[min];
    array[min] = pivot;
    array[right] = temp;
    
    return  min;

}


function quickSortJS(arr){

    if( arr.length == 0 ) return [];

    let mediumIndex = Math.floor(arr.length/2);
    let pivot = arr[mediumIndex];
    let leftArr = [];
    let rightArr = [];

    for(let i= 0; i <arr.length; i++){
        if(i != mediumIndex){
            if(arr[i] > pivot){
                rightArr.push(arr[i]);
            }else {
                leftArr.push(arr[i]);
            }
        }
    }

    leftArr = quickSortJS(leftArr);
    rightArr = quickSortJS(rightArr);
    return leftArr.concat(pivot).concat(rightArr);
}


console.log(quickSortJS([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));






function quickSortZTM(array, left, right){
    let pivot;
    let partitionIndex;

    if( left < right ){
        pivot = right;
        partitionIndex = partitionZTM(array, pivot, left, right);
        quickSortZTM(array, left, partitionIndex-1);
        quickSortZTM(array, partitionIndex+1, right);
      
    }
    
    return array;
}


console.log(numbers);
//Select first and last index as 2nd and 3rd parameters
//console.log(quickSortZTM(numbers, 0, numbers.length-1));



function partitionZTM(array, pivot, left, right){
    let pivotValue = array[pivot];
    let partitionIndex = left;


    for(let i = left; i < right; i++) {
        if(array[i] < pivotValue){
          swap(array, i, partitionIndex);
          partitionIndex++;
        }
      }
      swap(array, right, partitionIndex);
      return partitionIndex;

}


function swap(array, firstIndex, secondIndex){
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}
