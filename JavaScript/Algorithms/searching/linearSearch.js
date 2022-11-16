

const beasts = ['Centaur', 'Godzilla', 'Mosura',
    'Minotaur', 'Hydra', 'Nessie']


console.log(beasts.indexOf('Godzilla')); // O(n)

console.log(beasts.findIndex(function(item){ // O(n)
      return item === 'Godzilla';
    }));
    
console.log(beasts.find(function(item){ // O(n)
      return item === 'Godzilla';
    }));
    
console.log(beasts.includes('Godzilla')); // O(n)
    