export default class Character {
  constructor(name, type, attack, defence, health = 100, level = 1) {
    if ((name.length >= 2 && name.length <= 10) && (Character.types.includes(type))) {
      this.name = name;
      this.type = type;
      this.health = health;
      this.level = level;
      this.attack = attack;
      this.defence = defence;
    } else {
      throw new Error('Неверные данные');
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
