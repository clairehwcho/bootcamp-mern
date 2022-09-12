// Abstraction
class Card {
    constructor (name = "", cost = 0) {
        this.name = name;
        this.cost = cost;
    }
    // Polymorphism
    displayCard () {
        let output = "*********************\n" + "Name: " + this.name + "\n" + "Cost: " + this.cost + "\n"
        return output;
    }
}

export class Unit extends Card {
    constructor (name = "", cost = 0, power = 0, res = 0) {
        super(name, cost)
        this.power = power;
        this.res = res;
    }

    attack (target) {
        target.res -= this.power;
    }

    alterAttribute (effectCard) {
        this[effectCard.stat] += effectCard.mag
    }

    displayCard () {
        let output = super.displayCard();
        output += "Power: " + this.power + "\n" + "Resilience: " + this.res + "\n"
        return output;
    }
}

export class Effect extends Card {
    constructor (name = "", cost = 0, text = "", stat = "", mag = 0) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.mag = mag;
    }

    playEffect (target) {
        target.alterAttribute(this)
    }

    displayCard () {
        let output = super.displayCard();
        output += "Stat: " + this.stat + "\n" + "Magnitude: " + this.mag + "\n" + "Text: " + this.text + "\n"
        return output;
    }
}