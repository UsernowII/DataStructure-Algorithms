
/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
*/


const nums = [1,2,3,4,5,6,7];
const k = 3

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function(nums, k) {

    let array = []
    let l = nums.length;
    k = k % l;
    let temp = k;


    for(let i = 0; i < k; i++){
        array[i] = nums[l - temp]
        temp--;
    }

    temp = l -1;
    for(let i = l -k -1; i >= 0; i++){
        nums[temp] = nums[i];
        temp--;
    }

    for(let u = 0; u < k; u++){
        nums[u] = array[u];
    }

};


console.log(rotate(nums, k));
console.log(nums)