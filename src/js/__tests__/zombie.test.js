import Zombie from '../zombie.js';

test('test for correct zombie character', () => {
  const result = new Zombie('zombie');
  const standard = {
    name: 'zombie',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(result).toEqual(standard);
});

test('test for invalid type of zombie character name', () => {
  expect(() => {
    const zombie = new Zombie(531);
    return zombie;
  }).toThrow('Неверные данные');
});

test('test for invalid length of zombie character name v.1', () => {
  expect(() => {
    const zombie = new Zombie('N');
    return zombie;
  }).toThrow('Неверные данные');
});

test('test for invalid length of zombie character name v.2', () => {
  expect(() => {
    const zombie = new Zombie('magicianMan');
    return zombie;
  }).toThrow('Неверные данные');
});

test('test for invalid type of undead character type', () => {
  expect(() => {
    const zombie = new Zombie('zombie', 'Hobbit');
    return zombie;
  }).toThrow('Неверные данные');
});
