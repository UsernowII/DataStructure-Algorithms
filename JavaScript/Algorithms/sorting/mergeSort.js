

// Merge Sort

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array = []){

    if( array.length === 1) return array;
    
    let left = [];
    let right = [];
    
    let middle = Math.ceil(array.length/2);

    let j = middle;
    for(let i = 0; i < middle; i++ ){
        left.push(array[i]);
        if( array[j] !== undefined ){
            right.push(array[j]);
            j++;
        }
    }

   return merge(mergeSort(left), mergeSort(right));
}


function merge ( leftArr = [], rightArr = [] ){

    let arrayRes = [];
    while( (leftArr.length && rightArr.length) > 0 ){
        if( leftArr[0] > rightArr[0] ){
            arrayRes.push(rightArr[0]);
            rightArr.shift();
        }else{
            arrayRes.push(leftArr[0]);
            leftArr.shift();
        }   
    }

    while( leftArr.length > 0 ){
        arrayRes.push(leftArr[0]);
        leftArr.shift();

    }

    while( rightArr.length > 0 ){
        arrayRes.push(rightArr[0]);
        rightArr.shift();
    }

    return arrayRes;

}



console.log(numbers)
//const answer = mergeSort(numbers);
//console.log(answer);



function mergeSortZTM(array = []){

    if( array.length === 1) return array;

    let middle = Math.floor(array.length/2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    
    //return mergeZTM(mergeSortZTM(left), mergeSortZTM(right));
    return mergeZTM2(mergeSortZTM(left), mergeSortZTM(right));
}

function mergeZTM(array1, array2) {

    let mergeArray = [];

    if(array1.length === 0) return mergeArray = array2;
    if(array2.length === 0) return mergeArray = array1;
    
    
    let itemArray1 = array1[0];
    let itemArray2 = array2[0];
    let i = 0;
    let j = 0;


    while( itemArray1  || itemArray2){
        if(itemArray2 === undefined || itemArray1 < itemArray2){
            mergeArray.push(itemArray1);
            itemArray1 = array1[i +1]
            i++;
        }else{
            mergeArray.push(itemArray2);
            itemArray2 = array2[j +1]
            j++;
        }  
    }

    return mergeArray;



}


console.log(mergeSortZTM(numbers));

function mergeZTM2(leftArray, rightArray) {

    let mergeArray = [];

    let leftIndex = 0;
    let rightIndex = 0;

    while( leftIndex < leftArray.length &&
        rightIndex < rightArray.length){
        if( leftArray[ leftIndex] < rightArray[rightIndex]){
            mergeArray.push(leftArray[leftIndex]);
            leftIndex++;
        }else{
            mergeArray.push(rightArray[rightIndex]);
            rightIndex++;
        }
    }

    
    return mergeArray
        .concat(leftArray.slice(leftIndex))
        .concat(rightArray.slice(rightIndex));

}