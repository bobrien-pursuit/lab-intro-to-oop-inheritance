// Create class below
class Tamagotchi{
    constructor(name, energy=9, full=8, mood=6, sick=false, rehomed=false) {
        this.name = name;
        this.energy = energy;
        this.full = full;
        this.mood = mood;
        this.sick = sick;
        this.rehomed = rehomed;
    }
    greet(){
        console.log(`Hello I'm ${this.name}`)
    }
    status(){
        console.log(`My mood is: ${this.mood}\nI am this full: ${this.full}\nMy energy is: ${this.energy}`);
        this.energy ? console.log(`I am not sick`) : console.log(`I am sick`);
    }
    eat(){
        this.full += 2;
        this.energy--;
        this.full > 10 ? this.sick = true : this.sick = false;
    }
    medicate(){
        if (this.sick === false) {
            console.log(`refusal to take medicine`)
            this.energy--;
        } else {
            this.full = 9;
            this.energy -= 3;
        }
    }
    play(){
        if(this.sick === true){
            console.log(`I am sick I will not play.`);
            this.mood--;
            this.energy--;
        }
        if(this.mood > 9){
            console.log(`I am busy I will not play.`);
            this.energy -= 2;
            this.full++;
        }
        if(this.mood <= 3){
            console.log(`I am too tired to play.`);
            this.energy--;
        }
    }
    sleep(){
        this.full -= 3;
        this.energy += 4;
    }
    timePasses(){
        if (this.sick === false) {
            this.mood -= 2;
            this.full--;
            this.energy--;
        } else {
            this.mood -= 3;
            this.full -= 2;
            this.energy -= 2;
        }
    }
    badGuardian(){
        console.log(`You\'re fired!`)
        if (this.energy < 0)
            this.rehomed = true;
        else if(this.mood < 0)
            this.rehomed = true;
        else if(this.full <= true)
            this.rehomed = true;
    }
}

const myTamagotchi = new Tamagotchi('Fido');
console.log(myTamagotchi);
myTamagotchi.status();

// Do not edit below this line
module.exports = Tamagotchi;
