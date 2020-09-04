class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }

}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        target.res -= this.power;
        console.log(`${this.name} attacked ${target.name} for ${this.power} damage!`);
    }
}

class Effect extends Card {
    constructor(name, cost, desc, stat, mag) {
        super(name, cost);
        this.desc = desc;
        this.stat = stat;
        this.mag = mag;
    }
    play(target) {
        if( target instanceof Unit ) {
            target[this.stat] += this.mag;
            console.log(`${this.name} was played on ${target.name}`);
            console.log(this.desc);
        } 
        else {
            throw new Error( "Target must be a unit!" );
            }
        }
    }


const rbninja = new Unit("Red Belt Ninja", 3, 3, 4);
const hardalgo = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "resilience", 3);
hardalgo.play(rbninja);
const bbninja = new Unit("Black Belt Ninja", 4, 5, 4);
const uprejection = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "resilience", 2);
const pairprog = new Effect("Pair Programming", 3, 
"increase target's power by 2", "power", 2);
uprejection.play(rbninja);
pairprog.play(rbninja);
rbninja.attack(bbninja)
