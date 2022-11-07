import Swordsman from '../swordsman.js';

test('test for correct swordsman character', () => {
  const result = new Swordsman('swordsman');
  const standard = {
    name: 'swordsman',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(result).toEqual(standard);
});

test('test for invalid type of swordsman character name', () => {
  expect(() => {
    const swordsman = new Swordsman(531);
    return swordsman;
  }).toThrow('Неверные данные');
});

test('test for invalid length of swordsman character name v.1', () => {
  expect(() => {
    const swordsman = new Swordsman('N');
    return swordsman;
  }).toThrow('Неверные данные');
});

test('test for invalid length of swordsman character name v.2', () => {
  expect(() => {
    const swordsman = new Swordsman('magicianMan');
    return swordsman;
  }).toThrow('Неверные данные');
});

test('test for invalid type of swordsman character type', () => {
  expect(() => {
    const swordsman = new Swordsman('swordsman', 'Hobbit');
    return swordsman;
  }).toThrow('Неверные данные');
});
