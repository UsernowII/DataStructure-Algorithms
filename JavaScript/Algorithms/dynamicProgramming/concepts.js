

function memo(n){

    console.log("loong time")
    return n + 80;
}




function memoizedAddto80(){
    let cache = {};

    return function(n){
        if( n in cache ){
            return cache[n];
        }
    
        console.log("long time...");
        cache[n] = n + 80;
        return cache[n];    
    }
   
}

const memoized = memoizedAddto80()

console.log('1', memoized(5));
console.log('2', memoized(10));


// 1. Can be divided into subproblem
// 2. Recursive Solution
// 3. Are there repetitive subproblems?
// 4. Memoize subproblems
// 5. Demand a raise from your boss