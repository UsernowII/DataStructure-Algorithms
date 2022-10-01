
const boxes= [0, 1, 2, 3, 4, 5, 6, 7,];


    const logFirstTwoBoxes = ( boxes = []) =>{

    console.log(boxes[0]); // O(1)
    console.log(boxes[1]); // O(2)

}


// O(1)
// constant Time , A medida que suben la cantidad de elementos 
// el numero de operaciones se mantiene igual

logFirstTwoBoxes(boxes); 