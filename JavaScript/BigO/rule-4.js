//TODO:  DROP NON DOMINANTS

// Deshacerse de los no dominantes y calcular basado en el dominante



function printAllNumbersThenPairsSums(numbers = []){
  
    console.log("these are the numbers: ");
    numbers.forEach( number => console.log(number)); // O(n)

    //Foreach anidado
    console.log("and these are their susms: ");

    for (let i = 0; i < numbers.length; i++) { // O(n^2)
        for (let j = 0; j < numbers.length; j++) {
            console.log( numbers[i] + numbers[j]);
            
        }
        console.log(" =======")
    }

    // console.log("and these are their susms using Lambda Java8: ");
    // Arrays.stream(numbers).forEach( firstNumber -> {
    //     for (int secondNumber :numbers) {
    //         System.out.println(firstNumber + secondNumber);
    //     }
    // });
}

printAllNumbersThenPairsSums([1,2,3,4,5])
// O( n + n^2) pero eliminamos los que no son dominantes
// O(n^2)