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

}

class Effect extends Card {
    constructor(name, cost, desc, stat, mag) {
        super(name, cost);
        this.desc = desc;
        this.stat = stat;
        this.mag = mag;
    }
}

const rbninja = new Unit("Red Belt Ninja", 3, 3, 4);
const bbninja = new Unit("Black Belt Ninja", 4, 5, 4);
const hardalgo = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "resilience", 3);
const uprejection = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "resilience", 2);
const pairprog = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);
