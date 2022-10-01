

/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/


//const nums = [0,0,1]
const nums = [0,1,0,3,12]


const moveZeroes = function(nums = []) {

    let i = 0;
    let j = 0;
    let size = nums.length;

    for( i ; i < size; i++ ){
        if( nums[i] != 0 ){
            nums[j] = nums[i] ;
            j++;
        }
    }


    for( i = j ; i < size ; i++ ){
        nums[i] = 0 ;
    }
};


moveZeroes(nums)