

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

const numbers = [2,1,1,2,3,5,1,2,4];

// O(n^2)
function firstRecurringCharacter1(nums) {

    const obj = [];

    for(const element of nums) {
        
        if(obj.find(n => n === element)){
            return element;
        }

        obj.push(element);  
    }

    return null;

}

// O(n)
function firstRecurringCharacter2(nums) {

    const obj = new Map();

    for(let i = 0; i < nums.length; i++ ) {
        
        if(obj.has(nums[i])){
            return nums[i];
           
        }

        obj.set(nums[i], i)       
    }
    
    return null;

}

// O(n^2)
function firstRecurringCharacter3(nums) {

    for(let i = 1; i < nums.length; i++ ){
        for(let j =  i -1; j >=0; j-- ){
            if( nums[i] === nums[j] ){
                return nums[i]
            }
        }
    }

    return null;

}
// O(n)
function firstRecurringCharacter4(nums) {

    const obj = {};

    for(const element of nums) {  
        if(obj[element]) return element;
        obj[element] = true;      
    }
    
    return null;

}

console.log(firstRecurringCharacter1(numbers));
console.log(firstRecurringCharacter2(numbers));
console.log(firstRecurringCharacter3(numbers));
console.log(firstRecurringCharacter4(numbers));