

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233

const fibo = (n) =>{

    if( n < 2 ) return n;

    return fibo(n-1) + fibo(n-2);
}


console.log(fibo(6));



function fibonacciDynamicPro(){

    let cache = {};

    return function fibo(n){
        if( n in cache) return cache[n];

        if( n < 2) return n;
        cache[n] = fibo(n-1) + fibo(n-2);
        return cache[n];
    }
}

const fiboNumber  = fibonacciDynamicPro(); 
console.log(fiboNumber(6))