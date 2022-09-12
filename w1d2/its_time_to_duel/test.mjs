import {Unit, Effect} from "./its_time_to_duel.mjs"

// 1. Make an instance of "Red Belt Ninja"
const unit1 = new Unit("Red Belt Ninja", 3, 3, 4)

// 2. Make an instance of "Hard Algorithm" and play it on "Red Belt Ninja"
const effect1 = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3)
effect1.playEffect(unit1)

// 3. Make an instance "Black Belt Ninja"
const unit2 = new Unit("Black Belt Ninja", 4, 5, 4)

// 4. Make an instance of "Unhandled Promise Rejection" and play it on "Red Belt Ninja"
const effect2 = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2)
effect2.playEffect(unit1)

// 5. Make an instance of "Pair Programming" and play it on "Red Belt Ninja"
const effect3 = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2)
effect3.playEffect(unit1)

// 6. "Red Belt Ninja" uses the attack method on "Black Belt Ninja"
unit1.attack(unit2)

console.log(effect1.displayCard());