//TODO:  DIFFERENT TERMS FOR INPUTS

// diferentes entradas deben tener diferenets variables

const boxes1 = [1,2,3,4,5]
const boxes2 = [1,2,3,4,5]

function compressBoxesTwice( boxes1 = [], boxes2 = []) {
    
    boxes1.forEach(function (box) {
        console.log(box);
    });

    boxes2.forEach(function (box) {
        console.log(box);
    });
    

};


function logAllPairsOfArray(array = []) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i] + array[j]);
        }
    }
}



//compressBoxesTwice(boxes);
// O(a * b) si se encuentran anidados dos arreglos difeentes tamaños
// O(n)
// O(n log n)

logAllPairsOfArray(boxes1);
// O(n^2)
