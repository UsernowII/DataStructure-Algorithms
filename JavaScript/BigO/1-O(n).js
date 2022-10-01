
const nemo = ['nemo'];

const everyone = ['dory', 'bruce', 'fred', 'nemo', 'squirt',
    'gill', 'nigel', 'hank' ];

const findNemo = ( array = []) =>{

    for (let i = 0; i < array.length; i++) {
        if( array[i] === 'nemo'){
            console.log('Found Nemo')
        }
    }
}


// O(n)
// Linear Time , A medida que suben la cantidad de elementos 
// incrementa de forma lineal la cantidad de operaciones

findNemo(everyone); 