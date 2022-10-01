

//Create a function thatg reverses a string:
// 'Hi My name is Usernow' should be
// 'wonresU si eman yM iH'


const reverse = (str) => {
    let strRevsere = ''

   for(let i = str.length; i > 0; i--) {
        strRevsere += str[i-1]
    }
    
    return strRevsere;

}


const text  = 'Hi My name is Usernow';

// O(n)
console.log(reverse(text))


// Andrei
function reverse2 (str){
    if(!str || str.length < 2) return 'Not Good';

    const backwards = [];
    const totalItems = str.length -1;

    for (let i = totalItems; i >= 0; i--){
        backwards.push(str[i])
    }
    
    return backwards.join('')

}

console.log(reverse2(text));


const revserse3 = (str) =>{
    return str.split('').reverse().join('');

}

console.log(revserse3(text));

const revserse4 = (str) => [...str].reverse().join('');

console.log(revserse4(text));