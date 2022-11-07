import Undead from '../undead.js';

test('test for correct undead character', () => {
  const result = new Undead('undead');
  const standard = {
    name: 'undead',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(result).toEqual(standard);
});

test('test for invalid type of undead character name', () => {
  expect(() => {
    const undead = new Undead(531);
    return undead;
  }).toThrow('Неверные данные');
});

test('test for invalid length of undead character name v.1', () => {
  expect(() => {
    const undead = new Undead('N');
    return undead;
  }).toThrow('Неверные данные');
});

test('test for invalid length of undead character name v.2', () => {
  expect(() => {
    const undead = new Undead('magicianMan');
    return undead;
  }).toThrow('Неверные данные');
});

test('test for invalid type of undead character type', () => {
  expect(() => {
    const undead = new Undead('undead', 'Hobbit');
    return undead;
  }).toThrow('Неверные данные');
});
