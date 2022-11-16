

//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str = "") {
    
    if( str.length < 2) return str;

    return str.slice(-1) + reverseString(str.slice(0, -1));
   
}

console.log(reverseString('yoyo mastery')); // yretsam oyoy
//should return: 'yretsam oyoy'