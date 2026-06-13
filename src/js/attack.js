import Character from './character';

export class Magician extends Character {
    constructor(name) {
        super(name);
        this.baseAttack = 100;
    }
}

export class Daemon extends Character {
    constructor(name) {
        super(name);
        this.baseAttack = 100;
    }
}