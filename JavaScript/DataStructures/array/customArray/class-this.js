
// instantiation

class Player {

    name;
    type;

    constructor(name, type){
        console.log(this, 'player');
        this.name = name;
        this.type = type;
    }

    introduce(){
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }

}


class Wizard extends Player {

    constructor(name, type){
        super(name, type)
        console.log(this, 'Wizard');
    }

    play(){
        console.log(`Weeeee I'm a ${this.type}`)
    }
}


const mago1 = new Wizard('Shelly', 'Healer');
const mago2 = new Wizard('Ainz', 'Dark magic');


