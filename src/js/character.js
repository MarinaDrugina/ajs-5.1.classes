export default class Character {
  constructor(name, type, attack, defence, health = 100, level = 1) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;

    if ((name.length <= 2 || name.length >= 10) && Character.types.includes(type)) {
      throw new Error('Name length must be in [2;10] interval!');
    }
    if ((name.length >= 2 && name.length <= 10) && !Character.types.includes(type)) {
      throw new Error('Not valid character type!');
    }
    if ((name.length <= 2 || name.length >= 10) && !Character.types.includes(type)) {
      throw new Error('Not valid character name & type!');
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
