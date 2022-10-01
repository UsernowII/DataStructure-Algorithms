

function boooo (n ){
    for( let i=0; i< n.length; i++ ){
        console.log('Booooo')
    }

}


boooo ([1,2,3,4,5])
// O(1) space complexity


function arrayOfHiNTimes(n){

    let hiArray = [];
    for( let i=0; i< n; i++ ){
        hiArray[i] = "hi";
    }

    console.log(hiArray);
    return hiArray;

}

// O(n)
arrayOfHiNTimes(4);
