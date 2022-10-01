

// merge two arrays and sorted them



const mergeSortedArrays = (array1, array2) =>{

    array2.forEach(element => { array1.push(element)});

    console.log(array1)

    for(let index = 0; index < array1.length; index++){
        if(array1[index+1] < array1[index] ){
            let temp = array1[index+1];
            array1[index+1] = array1[index];
            array1[index] = temp;
        }

    }
    return array1;
    
}


const mergeArrayECMA6 = (array1, array2) => [...array1, ...array2].sort( (a , b) =>  a - b );



// O(n)
console.log(mergeArrayECMA6([0,3,4,31], [4,6,30]));

// O(n)
console.log(mergeSortedArrays([0,3,4,31], [4,6,30])); 


// ==========================================
// Andrei Solution

function mergeSortedArrayAndrei(array1, array2){

    let mergeArray = [];

    if(array1.length === 0) return mergeArray = array2;
    if(array2.length === 0) return mergeArray = array1;
    
    
    let itemArray1 = array1[0];
    let itemArray2 = array2[0];
    let i = 0;
    let j = 0;

    while(itemArray1 || itemArray2){

        console.log(itemArray1, itemArray2);
        if(!itemArray2 || itemArray1 < itemArray2){
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


console.log(mergeSortedArrayAndrei([0,3,4,31], [4,6,30])); 