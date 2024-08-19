// Create class below
class Food{
    constructor(name,  daysToSpoil, fresh=true){
        this.name = name;
        this.daysToSpoil = daysToSpoil;
        this.fresh = fresh;
    }
    prepare() {
        console.log(`${this.name} is being prepared.`);
    }
    isFresh(){
        console.log(`There are ${this.daysToSpoil} days left before ${this.name} spoils`);
    }
    aDayPasses(){
        this.daysToSpoil--;
        this.isFresh();
    }
}
// Do not edit below this line
module.exports = Food;

