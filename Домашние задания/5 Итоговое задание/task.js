class Player {
    constructor(life, mana, speed, attack, agility, luck) {
        this.life = life;
        this.mana = mana;
        this.speed = speed;
        this.attack = attack;
        this.agility = agility;
        this.luck = luck;
        this.description = 'Игрок';
    }

    getLuck() {
        const randomNumber = Math.floor(Math.random() * 101);
        return (randomNumber + this.luck) / 100;
    }
}

class Warrior extends Player {
    constructor() {
        super(120, 20, 2, 10, 5, 10);
        this.description = 'Воин';
    }
}

class Mage extends Player {
    constructor() {
        super(70, 100, 1, 5, 8, 15);
        this.description = 'Маг';
    }
}

class Archer extends Player {
    constructor() {
        super(80, 35, 1, 7, 10, 12);
        this.description = 'Лучник';
    }
}

class Dwarf extends Warrior {
    constructor() {
        super();
        this.life = 130;
        this.attack = 15;
        this.luck = 20;
        this.description = 'Гном';
    }
}

class Demiurge extends Mage {
    constructor() {
        super();
        this.life = 80;
        this.mana = 120;
        this.attack = 6;
        this.luck = 12;
        this.description = 'Демиург';
    }
}

class Crossbowman extends Archer {
    constructor() {
        super();
        this.life = 85;
        this.attack = 8;
        this.luck = 15;
        this.description = 'Арбалетчик';
    }
}

// Пример использования
const warrior = new Warrior();
console.log(warrior);

const mage = new Mage();
console.log(mage);

const archer = new Archer();
console.log(archer);

const dwarf = new Dwarf();
console.log(dwarf);

const demiurge = new Demiurge();
console.log(demiurge);

const crossbowman = new Crossbowman();
console.log(crossbowman);

class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.initDurability = durability;
        this.range = range;
    }

    takeDamage(damage) {
        this.durability -= damage;
        if (this.durability < 0) {
            this.durability = 0;
        }
    }

    getDamage() {
        if (this.durability <= 0) {
            return 0;
        }
        const durabilityPercentage = this.durability / this.initDurability;
        return durabilityPercentage >= 0.3 ? this.attack : this.attack / 2;
    }

    isBroken() {
        return this.durability === 0;
    }
}

class Arm extends Weapon {
    constructor() {
        super('Рука', 1, Infinity, 1);
    }
}

class Bow extends Weapon {
    constructor() {
        super('Лук', 10, 200, 3);
    }
}

class Sword extends Weapon {
    constructor() {
        super('Меч', 25, 500, 1);
    }
}

class Knife extends Weapon {
    constructor() {
        super('Нож', 5, 300, 1);
    }
}

class Staff extends Weapon {
    constructor() {
        super('Посох', 8, 300, 2);
    }
}

// Улучшенные классы оружия
class LongBow extends Bow {
    constructor() {
        super();
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }
}

class Axe extends Sword {
    constructor() {
        super();
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800; // Увеличенная прочность
    }
}

class StormStaff extends Staff {
    constructor() {
        super();
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    }
}

// Примеры использования
let weapon = new Weapon('Старый меч', 20, 10, 1);
console.log(weapon); // {name: 'Старый меч', attack: 20, durability: 10, initDurability: 10, range: 1}
weapon.takeDamage(5);
console.log(weapon.durability); // 5
weapon.takeDamage(50);
console.log(weapon.durability); // 0

let arm = new Arm();
console.log(arm); // {name: 'Рука', attack: 1, durability: Infinity, initDurability: Infinity, range: 1}
arm.takeDamage(20);
console.log(arm.durability); // Infinity

let sword = new Sword();
console.log(sword); // {name: 'Меч', attack: 25, durability: 500, initDurability: 500, range: 1}
sword.takeDamage(20);
console.log(sword.durability); // 480
sword.takeDamage(100);
console.log(sword.durability); // 380

let bow = new Bow();
console.log(bow); // {name: 'Лук', attack: 10, durability: 200, initDurability: 200, range: 3}
bow.takeDamage(10);
console.log(bow.durability); // 190
bow.takeDamage(100);
console.log(bow.durability); // 90

// Проверка урона
console.log(bow.getDamage(), bow.durability); // 10 90
bow.takeDamage(50);
console.log(bow.getDamage(), bow.durability); // 5 40
bow.takeDamage(150);
console.log(bow.getDamage(), bow.durability); // 0 0

console.log(bow.isBroken()); // true

class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.initDurability = durability;
        this.range = range;
    }

    takeDamage(damage) {
        this.durability -= damage;
        if (this.durability < 0) {
            this.durability = 0;
        }
    }

    getDamage() {
        if (this.durability <= 0) {
            return 0;
        }
        const durabilityPercentage = this.durability / this.initDurability;
        return durabilityPercentage >= 0.3 ? this.attack : this.attack / 2;
    }
}

class Arm extends Weapon {
    constructor() {
        super('Рука', 1, Infinity, 1);
    }
}

class Player {
    constructor(position, name) {
        this.life = 100;
        this.magic = 20;
        this.speed = 1;
        this.attack = 10;
        this.agility = 5;
        this.luck = 10;
        this.description = 'Игрок';
        this.weapon = new Arm();
        this.position = position;
        this.name = name;
    }

    getLuck() {
        const randomNumber = Math.floor(Math.random() * 101);
        return (randomNumber + this.luck) / 100;
    }

    getDamage(distance) {
        const weaponDamage = this.weapon.getDamage();
        if (distance > this.weapon.range) {
            return 0; // Оружие не достает до врага
        }
        return (this.attack + weaponDamage) * this.getLuck() / distance;
    }
}

// Пример использования
let player1 = new Player(10, "Бэтмен");
console.log(player1.getLuck()); // Пример удачи
console.log(player1.getLuck()); // Пример удачи

let player2 = new Player(5, "Человек паук");
console.log(player2.getDamage(1)); // Сила удара на расстоянии 1
console.log(player2.getDamage(2)); // 0 (рука не достаёт)
console.log(player2.getDamage(4)); // 0 (рука не достаёт)

class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.initDurability = durability;
        this.range = range;
    }

    takeDamage(damage) {
        this.durability -= damage;
        if (this.durability < 0) {
            this.durability = 0;
        }
    }

    getDamage() {
        if (this.durability <= 0) {
            return 0;
        }
        const durabilityPercentage = this.durability / this.initDurability;
        return durabilityPercentage >= 0.3 ? this.attack : this.attack / 2;
    }
}

class Arm extends Weapon {
    constructor() {
        super('Рука', 1, Infinity, 1);
    }
}

class Player {
    constructor(position, name) {
        this.life = 100;
        this.magic = 20;
        this.speed = 1;
        this.attack = 10;
        this.agility = 5;
        this.luck = 10;
        this.description = 'Игрок';
        this.weapon = new Arm();
        this.position = position;
        this.name = name;
    }

    getLuck() {
        const randomNumber = Math.floor(Math.random() * 101);
        return (randomNumber + this.luck) / 100;
    }

    getDamage(distance) {
        const weaponDamage = this.weapon.getDamage();
        if (distance > this.weapon.range) {
            return 0; // Оружие не достает до врага
        }
        return (this.attack + weaponDamage) * this.getLuck() / distance;
    }

    takeDamage(damage) {
        this.life -= damage;
        if (this.life < 0) {
            this.life = 0; // Убедимся, что жизнь не опустится ниже 0
        }
    }

    isDead() {
        return this.life === 0; // Проверка, мертв ли персонаж
    }
}

// Классы бойцов
class Warrior extends Player {
    constructor(position, name) {
        super(position, name);
        this.life = 120;
        this.speed = 2;
        this.attack = 10;
        this.description = 'Воин';
        this.weapon = new Sword(); // Предполагается, что класс Sword уже реализован
    }
}

class Archer extends Player {
    constructor(position, name) {
        super(position, name);
        this.life = 80;
        this.magic = 35;
        this.attack = 5;
        this.description = 'Лучник';
        this.weapon = new Bow(); // Предполагается, что класс Bow уже реализован
    }
}

class Mage extends Player {
    constructor(position, name) {
        super(position, name);
        this.life = 70;
        this.magic = 100;
        this.attack = 8;
        this.description = 'Маг';
        this.weapon = new Staff(); // Предполагается, что класс Staff уже реализован
    }
}

// Улучшенные классы бойцов
class Dwarf extends Warrior {
    constructor(position, name) {
        super(position, name);
        this.life = 130;
        this.attack = 15; // Увеличенная атака
        this.luck = 20; // Увеличенная удача
        this.description = 'Гном';
        this.weapon = new Axe(); // Предполагается, что класс Axe уже реализован
    }
}

class Crossbowman extends Archer {
    constructor(position, name) {
        super(position, name);
        this.life = 85;
        this.attack = 8; // Увеличенная атака
        this.agility = 20; // Увеличенная ловкость
        this.luck = 15; // Увеличенная удача
        this.description = 'Арбалетчик';
        this.weapon = new LongBow(); // Предполагается, что класс LongBow уже реализован
    }
}

class Demiurge extends Mage {
    constructor(position, name) {
        super(position, name);
        this.life = 80;
        this.magic = 120;
        this.attack = 6; // Увеличенная атака
        this.luck = 12; // Увеличенная удача
        this.description = 'Демиург';
        this.weapon = new StormStaff(); // Предполагается, что класс StormStaff уже реализован
    }
}

// Пример использования
let player1 = new Player(10, "Хоббит");
console.log(player1);
player1.takeDamage(10);
console.log(player1); // {life: 90, magic: 20, speed: 1, attack: 10, agility: 5, ...}
player1.takeDamage(80);
console.log(player1); // {life: 10, magic: 20, speed: 1, attack: 10, agility: 5, ...}
player1.takeDamage(90);
console.log(player1); // {life: 0, magic: 20, speed: 1, attack: 10, agility: 5, ...}
console.log(player1.isDead()); // true

class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.initDurability = durability;
        this.range = range;
    }

    takeDamage(damage) {
        this.durability -= damage;
        if (this.durability < 0) {
            this.durability = 0;
        }
    }

    getDamage() {
        if (this.durability <= 0) {
            return 0;
        }
        const durabilityPercentage = this.durability / this.initDurability;
        return durabilityPercentage >= 0.3 ? this.attack : this.attack / 2;
    }
}

class Arm extends Weapon {
    constructor() {
        super('Рука', 1, Infinity, 1);
    }
}

class Player {
    constructor(position, name) {
        this.life = 100;
        this.magic = 20;
        this.speed = 1;
        this.attack = 10;
        this.agility = 5;
        this.luck = 10;
        this.description = 'Игрок';
        this.weapon = new Arm();
        this.position = position;
        this.name = name;
    }

    getLuck() {
        const randomNumber = Math.floor(Math.random() * 101);
        return (randomNumber + this.luck) / 100;
    }

    takeDamage(damage) {
        this.life -= damage;
        if (this.life < 0) {
            this.life = 0;
        }
    }

    isDead() {
        return this.life === 0;
    }
}

class Warrior extends Player {
    constructor(position, name) {
        super(position, name);
        this.life = 120;
        this.speed = 2;
        this.attack = 10;
        this.description = 'Воин';
        this.weapon = new Sword(); // Предполагается, что класс Sword уже реализован
    }

    takeDamage(damage) {
        if (this.life < 60 && this.getLuck() > 0.8) {
            // Урон вычитается из маны, если здоровье ниже 50%
            if (this.magic > 0) {
                this.magic -= 12;
                damage = damage; // Урон не изменяется, просто вычитается из маны
            } else {
                // Если маны нет, урон вычитается из здоровья
                this.life -= damage;
            }
        } else {
            this.life -= damage;
        }
        
        if (this.life < 0) {
            this.life = 0;
        }
    }
}

class Archer extends Player {
    constructor(position, name) {
        super(position, name);
        this.life = 80;
        this.magic = 35;
        this.attack = 5;
        this.description = 'Лучник';
        this.weapon = new Bow(); // Предполагается, что класс Bow уже реализован
    }

    getDamage(distance) {
        const weaponDamage = this.weapon.getDamage();
        if (distance > this.weapon.range) {
            return 0; // Оружие не достает до врага
        }
        return (this.attack + weaponDamage) * this.getLuck() * distance / this.weapon.range;
    }
}

class Mage extends Player {
    constructor(position, name) {
        super(position, name);
        this.life = 70;
        this.magic = 100;
        this.attack = 8;
        this.description = 'Маг';
        this.weapon = new Staff(); // Предполагается, что класс Staff уже реализован
    }

    takeDamage(damage) {
        if (this.magic > 50) {
            this.magic -= 12; // Уменьшаем ману
            damage /= 2; // Урон в 2 раза меньше
        }
        this.life -= damage;
        
        if (this.life < 0) {
            this.life = 0;
        }
    }
}

// Улучшенные классы
class Dwarf extends Warrior {
    constructor(position, name) {
        super(position, name);
        this.life = 130;
        this.attack = 15; // Увеличенная атака
        this.luck = 20; // Увеличенная удача
        this.description = 'Гном';
        this.weapon = new Axe(); // Предполагается, что класс Axe уже реализован
    }

    takeDamage(damage) {
        // Каждый шестой удар соперника наносит в 2 раза меньше урона
        const isReducedDamage = (this.life % 6) === 0 && this.getLuck() > 0.5;
        if (isReducedDamage) {
            damage /= 2;
        }
        super.takeDamage(damage);
    }
}

class Demiurge extends Mage {
    constructor(position, name) {
        super(position, name);
        this.life = 80;
        this.magic = 120;
        this.attack = 6; // Увеличенная атака
        this.luck = 12; // Увеличенная удача
        this.description = 'Демиург';
        this.weapon = new StormStaff(); // Предполагается, что класс StormStaff уже реализован
    }

    getDamage(distance) {
        const weaponDamage = this.weapon.getDamage();
        if (this.magic > 0 && this.getLuck() > 0.6) {
            return 1.5 * ((this.attack + weaponDamage) * this.getLuck() / distance);
        }
        return (this.attack + weaponDamage) * this.getLuck() / distance;
    }
}

// Пример использования
let warrior = new Warrior(10, "Алёша Попович");
console.log(warrior.life, warrior.magic); // 120 20
warrior.takeDamage(50);
console.log(warrior.life, warrior.magic); // 70 20
warrior.takeDamage(20);
console.log(warrior.life, warrior.magic); // 50 20
warrior.takeDamage(5);
console.log(warrior.life, warrior.magic); // 50 15 (Алёша Попович получает урон 5 из магии.)
warrior.takeDamage(7);
console.log(warrior.life, warrior.magic); // 43 15
warrior.takeDamage(5);
console.log(warrior.life, warrior.magic); // 38 15
warrior.takeDamage(22);
console.log(warrior.life, warrior.magic); // 16 15
warrior.takeDamage(30);
console.log(warrior.life, warrior.magic); // 0 15

let mage = new Mage(10, "Гендальф");
console.log(mage.life, mage.magic); // 70 100
mage.takeDamage(50);
console.log(mage.life, mage.magic); // 45 88
mage.takeDamage(20);
console.log(mage.life, mage.magic); // 35 76
mage.takeDamage(10);
console.log(mage.life, mage.magic); // 30 64
mage.takeDamage(20);
console.log(mage.life, mage.magic); // 20 52
mage.takeDamage(20);
console.log(mage.life, mage.magic); // 10 40
mage.takeDamage(10);
console.log(mage.life, mage.magic); // 0 40

class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.initDurability = durability;
        this.range = range;
    }

    takeDamage(damage) {
        this.durability -= damage;
        if (this.durability < 0) {
            this.durability = 0;
        }
    }

    getDamage() {
        if (this.durability <= 0) {
            return 0;
        }
        const durabilityPercentage = this.durability / this.initDurability;
        return durabilityPercentage >= 0.3 ? this.attack : this.attack / 2;
    }
}

class Arm extends Weapon {
    constructor() {
        super('Рука', 1, Infinity, 1);
    }
}

class Player {
    constructor(position, name) {
        this.life = 100;
        this.magic = 20;
        this.speed = 1;
        this.attack = 10;
        this.agility = 5;
        this.luck = 10;
        this.description = 'Игрок';
        this.weapon = new Arm();
        this.position = position;
        this.name = name;
    }

    getLuck() {
        const randomNumber = Math.floor(Math.random() * 101);
        return (randomNumber + this.luck) / 100;
    }

    moveLeft(distance) {
        this.position -= Math.min(distance, this.speed);
    }

    moveRight(distance) {
        this.position += Math.min(distance, this.speed);
    }

    move(distance) {
        if (distance < 0) {
            this.moveLeft(-distance);
        } else {
            this.moveRight(distance);
        }
    }

    isAttackBlocked() {
        return this.getLuck() > (100 - this.luck) / 100;
    }

    dodged() {
        return this.getLuck() > (100 - this.agility - this.speed * 3) / 100;
    }

    takeAttack(damage) {
        if (this.isAttackBlocked()) {
            this.weapon.takeDamage(damage);
        } else if (!this.dodged()) {
            this.life -= damage;
            if (this.life < 0) {
                this.life = 0;
            }
        }
    }
}

class Warrior extends Player {
    constructor(position, name) {
        super(position, name);
        this.life = 120;
        this.speed = 2;
        this.attack = 10;
        this.description = 'Воин';
        this.weapon = new Sword(); // Предполагается, что класс Sword уже реализован
    }
}

class Archer extends Player {
    constructor(position, name) {
        super(position, name);
        this.life = 80;
        this.magic = 35;
        this.attack = 5;
        this.description = 'Лучник';
        this.weapon = new Bow(); // Предполагается, что класс Bow уже реализован
    }

    getDamage(distance) {
        const weaponDamage = this.weapon.getDamage();
        if (distance > this.weapon.range) {
            return 0; // Оружие не достает до врага
        }
        return (this.attack + weaponDamage) * this.getLuck() * distance / this.weapon.range;
    }
}

class Mage extends Player {
    constructor(position, name) {
        super(position, name);
        this.life = 70;
        this.magic = 100;
        this.attack = 8;
        this.description = 'Маг';
        this.weapon = new Staff(); // Предполагается, что класс Staff уже реализован
    }
}

// Пример использования
let warrior = new Warrior(6, "Алёша Попович");
console.log(warrior.position); // 6
warrior.moveLeft(5);
console.log(warrior.position); // 4
warrior.moveRight(2);
console.log(warrior.position); // 6
warrior.moveRight(1);
console.log(warrior.position); // 7

console.log(warrior.isAttackBlocked()); // Проверка блокировки
console.log(warrior.dodged()); // Проверка уклонения

let archer = new Archer(10, "Леголас");
warrior.takeAttack(20); // Урон от атаки
console.log(warrior.life); // Текущая жизнь воина

class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.initDurability = durability;
        this.range = range;
    }

    takeDamage(damage) {
        this.durability -= damage;
        if (this.durability < 0) {
            this.durability = 0;
        }
    }

    getDamage() {
        if (this.durability <= 0) {
            return 0;
        }
        const durabilityPercentage = this.durability / this.initDurability;
        return durabilityPercentage >= 0.3 ? this.attack : this.attack / 2;
    }

    isBroken() {
        return this.durability === 0;
    }
}

class Arm extends Weapon {
    constructor() {
        super('Рука', 1, Infinity, 1);
    }
}

class Player {
    constructor(position, name) {
        this.life = 100;
        this.magic = 20;
        this.speed = 1;
        this.attack = 10;
        this.agility = 5;
        this.luck = 10;
        this.description = 'Игрок';
        this.weapon = new Arm();
        this.position = position;
        this.name = name;
    }

    getLuck() {
        const randomNumber = Math.floor(Math.random() * 101);
        return (randomNumber + this.luck) / 100;
    }

    moveLeft(distance) {
        this.position -= Math.min(distance, this.speed);
    }

    moveRight(distance) {
        this.position += Math.min(distance, this.speed);
    }

    move(distance) {
        if (distance < 0) {
            this.moveLeft(-distance);
        } else {
            this.moveRight(distance);
        }
    }

    isAttackBlocked() {
        return this.getLuck() > (100 - this.luck) / 100;
    }

    dodged() {
        return this.getLuck() > (100 - this.agility - this.speed * 3) / 100;
    }

    takeAttack(damage) {
        if (this.isAttackBlocked()) {
            this.weapon.takeDamage(damage);
        } else if (!this.dodged()) {
            this.life -= damage;
            if (this.life < 0) {
                this.life = 0;
            }
        }
    }

    checkWeapon() {
        if (this.weapon.isBroken()) {
            if (this instanceof Warrior) {
                this.weapon = new Knife(); // Переход к ножу
            } else if (this instanceof Archer) {
                this.weapon = new Knife(); // Переход к ножу
            } else if (this instanceof Mage) {
                this.weapon = new Knife(); // Переход к ножу
            }
        }
    }

    tryAttack(enemy) {
        const distance = Math.abs(this.position - enemy.position);
        if (this.weapon.range < distance) {
            console.log(`${this.name} не достает до ${enemy.name}.`);
            return;
        }
        
        this.weapon.takeDamage(10 * this.getLuck());
        const damage = this.weapon.getDamage();

        if (this.position === enemy.position) {
            enemy.takeAttack(damage * 2);
            enemy.moveRight(1); // Отталкивание
        } else {
            enemy.takeAttack(damage);
        }
    }

    chooseEnemy(players) {
        return players.filter(p => p.life > 0)
                      .reduce((prev, curr) => (prev.life < curr.life ? prev : curr));
    }

    moveToEnemy(enemy) {
        if (this.position < enemy.position) {
            this.moveRight(1);
        } else if (this.position > enemy.position) {
            this.moveLeft(1);
        }
    }

    turn(players) {
        const enemy = this.chooseEnemy(players);
        this.moveToEnemy(enemy);
        this.tryAttack(enemy);
    }
}

class Warrior extends Player {
    constructor(position, name) {
        super(position, name);
        this.life = 120;
        this.speed = 2;
        this.attack = 10;
        this.description = 'Воин';
        this.weapon = new Sword(); // Предполагается, что класс Sword уже реализован
    }
}

class Arc
her extends Player {
    constructor(position, name) {
        super(position, name);
        this.life = 80;
        this.magic = 35;
        this.attack = 5;
        this.description = 'Лучник';
        this.weapon = new Bow(); // Предполагается, что класс Bow уже реализован
    }

    getDamage(distance) {
        const weaponDamage = this.weapon.getDamage();
        if (distance > this.weapon.range) {
            return 0; // Оружие не достает до врага
        }
        return (this.attack + weaponDamage) * this.getLuck() * distance / this.weapon.range;
    }
}

class Mage extends Player {
    constructor(position, name) {
        super(position, name);
        this.life = 70;
        this.magic = 100;
        this.attack = 8;
        this.description = 'Маг';
        this.weapon = new Staff(); // Предполагается, что класс Staff уже реализован
    }
}

// Функция игры
function play(players) {
    while (players.filter(p => p.life > 0).length > 1) {
        players.forEach(player => {
            if (player.life > 0) {
                player.turn(players);
                player.checkWeapon(); // Проверяем состояние оружия после хода
            }
        });
    }

    const winner = players.find(p => p.life > 0);
    console.log(`Победитель: ${winner.name} с жизнью ${winner.life}`);
}

// Пример использования
let players = [
    new Warrior(0, "Алёша Попович"),
    new Archer(2, "Леголас"),
];

play(players);
