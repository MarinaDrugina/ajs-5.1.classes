export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;

    if ((name.length <= 2 || name.length >= 10)) {
      throw new Error('Name length must be in [2;10] interval!');
    }
    if (!Character.types.includes(type)) {
      throw new Error('Not valid character type!');
    }
  }
}

Character.types = [
  'Bowman',
  'Swordsman',
  'Magician',
  'Undead',
  'Zombie',
  'Daemon',
];
