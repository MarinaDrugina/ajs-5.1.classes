import Bowman from '../bowman.js';

test('test for correct bowman character', () => {
  const result = new Bowman('bowman');
  const standard = {
    name: 'bowman',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(result).toEqual(standard);
});

test('test for invalid type of bowman character name', () => {
  expect(() => {
    const bowman = new Bowman(531);
    return bowman;
  }).toThrow('Неверные данные');
});

test('test for invalid length of bowman character name v.1', () => {
  expect(() => {
    const bowman = new Bowman('N');
    return bowman;
  }).toThrow('Неверные данные');
});

test('test for invalid length of bowman character name v.2', () => {
  expect(() => {
    const bowman = new Bowman('magicianMan');
    return bowman;
  }).toThrow('Неверные данные');
});

test('test for invalid type of bowman character type', () => {
  expect(() => {
    const bowman = new Bowman('bowman', 'Hobbit');
    return bowman;
  }).toThrow('Неверные данные');
});
