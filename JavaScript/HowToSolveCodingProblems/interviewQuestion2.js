
// Given 2 arrays, create a function that let's a user know
//  (true / false) whether these two arrays conatayn any common items


const array1 = [ 'a', 'b', 'c', 'x'];
const array2 = [ 'z', 'y', 'i'];
// false

const array3 = [ 'z', 'y', 'x'];
// true


// 2 parameters
// return boolean

// brute approach
const containsCommonItem1 = (array1, array2) => {

    for(let i = 0; i < array1.length; i++) {
        for(let j = 0; j < array2.length; j++){ 
            if(array1[i] === array2[j]){
                return true;
            }
        }
    }
    return false;

}

// O(a * b)
// O(1) Space Complexity
console.log(containsCommonItem1(array1, array2));

// hash table approach
const containsCommonItem2 = (array1, array2) => {

    const obj = {};
    let flag = false;

    array1.forEach(element => {
        obj[element] = true;
    });

    console.log(obj)
    
    array2.forEach(element => {
        console.log(obj[element] === true);
        if(obj[element]){
            flag = true;
        }

    });

    return flag;
    
}
// O(a + b)
// O(n)
// O(n) Space Complexity
console.log(containsCommonItem2(array1, array3));


function containsCommonItem3(array1, array2){

    return  array1.some(item => array2.includes(item));
}

console.log(containsCommonItem3(array1, array3));