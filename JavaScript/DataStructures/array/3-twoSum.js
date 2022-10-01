
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.


// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// const nums = [2,5,5,11]
// const target = 10;

const nums = [2,7,11,15];
const target = 9;


const twoSum = ( nums = [], target ) =>{

    const map = new Map();

    nums.forEach( (num, i) => map.set(num, i));

    console.log(map)

    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        console.log(complement = target - nums[i])
         if( map.has(complement) && map.get(complement) !== i){
            console.log(map.has(complement))
            return [i, map.get(complement)]
         }
    }
    return null;

   
}

//O(n)
console.log(twoSum(nums, target));