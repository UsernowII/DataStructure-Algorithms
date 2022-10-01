
// Implementation for HashTables

class HashTable {

    length = 0;

    constructor( size ){
        this.data = new Array(size);
    }

    _hash (key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = ( hash + key.charCodeAt(i) * i ) 
            % this.data.length
        }

        return hash;
    }

    // O(1)
    set(key , value){
        let hash = this._hash(key);
        if(!this.data[hash]){
            this.data[hash] = [];
        }
        this.data[hash].push([key, value]);

    }
    // O(1)
    get(key){
        const hash = this._hash(key);
        const currentBucket = this.data[hash];
        console.log(currentBucket)
        if(currentBucket){
            return currentBucket.find(item => item[0] === key)[1];
        }
        return null;
    }
    // O(n^2)
    keys(){

        if(!this.data.length){
            return null;
        }

        let arraykeys = [];

        //loop through all the elements
        for(let i = 0; i < this.data.length; i++){
            // if it's not an empty memory cell
            if(this.data[i] && this.data[i].length){
                // but also loop through all the elements collisions
                if(this.data.length > 1){
                   for(let j = 0; j < this.data[i].length; j++){
                        arraykeys.push(this.data[i][j][0]);
                    }
                }else{
                    arraykeys.push(this.data[i][0]);
                }
            }
        
        }

        return arraykeys;
        
    }

}

const myHashTable = new HashTable(4);

myHashTable.set('Usernow', "Challenger");
myHashTable.set('Kabroun', "Gold");
myHashTable.set('Nelyaki', "Hierro");



const data1 =  myHashTable.get('Usernow');
const data2 =  myHashTable.get('Nelyaki');


console.log( myHashTable.keys());

