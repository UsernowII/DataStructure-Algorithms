
// Given 2 arrays, create a function that let's a user know
//  (true / false) whether these two arrays conatayn any common items


const array1 = [ 'a', 'b', 'c', 'x'];
const array2 = [ 'z', 'y', 'i'];
// false

// const array1 = [ 'a', 'b', 'c', 'x'];
// const array2 = [ 'z', 'y', 'x'];
// true


// 2 parameters
// return boolean

// brute approach
const hasPairWithSum = (array1, array2) =>{

    for(let i = 0; i < array1.length; i++) {
        for(let j = 0; j < array2.length; j++){ 
            if(array1[i] === array2[j]){
                return true;
            }else{
                return false;
            }
        }
    }

}


const res1 = hasPairWithSum(array1, array2);
console.log(res1);