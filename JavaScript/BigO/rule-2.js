
//TODO:  REMOVE CONSTANTS

// remover las constantes al caluclar Big O 

const printFirstItemThenFirstHalfThenSayHi100Times = (items) =>{
    
    
    middleIndex = Math.floor(items.length/2);
    index = 0;

    while ( index < middleIndex){
        console.log(items[index]);
        index++;
    }

    for (let i = 0; i < 100; i++) {
        console.log("Hi");
    }
}


printFirstItemThenFirstHalfThenSayHi100Times([1,2,3,4,5])

//O(2n) pero eliminamos las constantes
// O(n)