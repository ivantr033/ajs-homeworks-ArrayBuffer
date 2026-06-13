export default class Character {
    constructor(name) {
        this.name = name;
        this.baseAttack = 100; // Default value
        this.isStoned = false;
    }

    get stoned() {
        return this.isStoned;
    }

    set stoned(value) {
        this.isStoned = value;
    }

    set attack(value) {
        this.baseAttack = value;
    }

    get attack() {
        return this.baseAttack;
    }

    getAttackForDistance(distance) {
        let modifiedAttack = this.baseAttack * (1 - (distance - 1) * 0.1);
        if (modifiedAttack < 0) modifiedAttack = 0;
        if (this.isStoned) modifiedAttack -= Math.log2(distance) * 5;

        return modifiedAttack > 0 ? Math.round(modifiedAttack) : 0;
    }
}