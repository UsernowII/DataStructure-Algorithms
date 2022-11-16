
// 1.Identify the base case
// 2.Identify the recursive case
// 3.Get closer and closer and return



let counter = 0;
function inception() {

    if(counter > 2){
        return "Done!!";
    }

    counter++;
    return inception();

}

console.log(inception());
