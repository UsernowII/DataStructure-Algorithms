
//TODO:  WORST CASE

// Siempre debemos pensar el peor escenario

const nemo = ['nemo'];

const everyone = ['dory', 'bruce', 'fred', 'nemo', 'squirt',
    'gill', 'nigel', 'hank' ];

const findNemo = ( array = []) =>{

    for (let i = 0; i < array.length; i++) {
        if( array[i] === 'nemo'){
            console.log('Found Nemo')
            break;
        }
    }
}


findNemo(everyone); 