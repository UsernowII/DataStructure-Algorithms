

// Bubble Sort

const nums = [6, 5, 3, 1, 8, 7, 2, 4];


const bubbleSort = (nums= []) =>{


    for (let i = 0; i < nums.length; i++){
        let j = 0;
        while ( j < nums.length){
            if(nums[j] > nums[j+1]){
                let temp = nums[j+1];
                nums[j+1]= nums[j];
                nums[j] = temp;
            }
            j++;
            
            
        }
    }

    return nums;
 
};


console.log(bubbleSort(nums))

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSortZTM(array) {

    const size = array.length;
    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            if( array[j] > array[j+1] ) {
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }    
        }       
    
    }
    return array;
}

console.log(bubbleSortZTM(numbers));
