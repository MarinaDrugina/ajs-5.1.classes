import Magician from '../magician.js';

test('test for correct magician character', () => {
  const result = new Magician('magician');
  const standard = {
    name: 'magician',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(result).toEqual(standard);
});

test('test for invalid type of magician character name', () => {
  expect(() => {
    const magician = new Magician(531);
    return magician;
  }).toThrow('Неверные данные');
});

test('test for invalid length of magician character name v.1', () => {
  expect(() => {
    const magician = new Magician('N');
    return magician;
  }).toThrow('Неверные данные');
});

test('test for invalid length of magician character name v.2', () => {
  expect(() => {
    const magician = new Magician('magicianMan');
    return magician;
  }).toThrow('Неверные данные');
});

test('test for invalid type of magician character type', () => {
  expect(() => {
    const magician = new Magician('magician', 'Hobbit');
    return magician;
  }).toThrow('Неверные данные');
});
