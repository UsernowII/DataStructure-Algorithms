
// Write two functions that finds the factorial of any number
// One should use recursive, the other should just use a for a loop



const findFactorialRecursive = (number) =>{
    if(number !== 1){
        return number * (findFactorialRecursive(number-1));
    }    
    return number;
    
}


console.log(findFactorialRecursive(5));


const findFactorialIterative = (number) =>{
    
    let acum = number;
    for(let i = 2; i < number; i++){
        acum*= i
    }
    return acum;

}

console.log(findFactorialIterative(5));

const findFactorialRecursiveZTM = (number) =>{
    if(number <= 2){
        return 2;
    }
    return number * findFactorialRecursiveZTM(number-1);
    
}

console.log(findFactorialRecursiveZTM(5));