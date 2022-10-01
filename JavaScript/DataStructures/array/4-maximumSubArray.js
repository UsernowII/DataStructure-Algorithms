/*
Given an integer array nums, find the contiguous subarray (containing at least one number) 
which has the largest sum and return its sum.
A subarray is a contiguous part of an array.


Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/

const nums = [-2,1,-3,4,-1,2,1,-5,4];


const maxSubArray = (nums =[]) => {

    let max = nums[0];

    let curr = 0;

    for(const element of nums){
    
        curr = curr + element
        
        if( curr > max) {
            max = curr;
        }

        if( curr < 0){
            curr = 0
        }
    }

   

    return max;

};


console.log(maxSubArray(nums));