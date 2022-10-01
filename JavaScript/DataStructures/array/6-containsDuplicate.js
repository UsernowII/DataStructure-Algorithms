

/*
Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct.

Input: nums = [1,2,3,1]
Output: true
*/


const nums = [1,2,3,1];

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums = []) => {
   return  new Set(nums).size  < nums.length
};


const containsDuplicate2 = (nums = []) =>{ 
    const map = new Map();
    
    for(const num of nums) {
    if(map.get(num) === true) {
        return true;
    } else {
        map.set(num, true);
    }
    }

    return false;
} 
  

console.log(containsDuplicate2(nums));