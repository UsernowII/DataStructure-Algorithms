//find two numbers whose sum matches the target as parameter
//input Array with nunmbers -- target int sum
//output two numbers from array true / false

const arrayNumbers = [6,4,8,5,1,3,7]
const target = 7;

// brute approach
const hasPairWithSum = (numbers = [], target) =>{

    for(let i = 0; i < numbers.length; i++){
        for(let j = 1; j < numbers.length -1; j++){
            
            if(numbers[i] + numbers[j] == target ){
                console.log('puto toto mkon ya lo encontre')
                return true;
            }
        }
    }

    return false;

}

// O(n^2)
console.log(hasPairWithSum(arrayNumbers, target));


// approach with map
const hasPairWithSum2 = (numbers = [], target) =>{

    const myMap = new Map();

    numbers.forEach( elem => myMap.set(elem, target));

    for (let i = 0; i < numbers.length; i++){
        const rest = (myMap.get(numbers[i]) - numbers[i]);
        if(myMap.get(rest) ){
            console.log(myMap.get(rest) - rest, ' + ', rest, '=', target)
            return true;
        }
        
    }
    
    return false;

}

// O(n)
// O(n) Space Complexity
console.log(hasPairWithSum2(arrayNumbers, target));


// Andrei Approach
const hasPairWithSum3 = (numbers = [], target) =>{

    const mySet = new Set();

    const len = numbers.length;
    for (let i = 0; i < len; i++){
        console.log(mySet.has(numbers[i]))
        if(mySet.has(numbers[i])) return true;
        mySet.add(target - numbers[i]);        
    }
    return false;

}

// O(n)
// O(n) Space Complexity
console.log(hasPairWithSum3(arrayNumbers, target));
