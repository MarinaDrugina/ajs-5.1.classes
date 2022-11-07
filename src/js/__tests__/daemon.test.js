import Daemon from '../daemon.js';

test('test for correct daemon character', () => {
  const result = new Daemon('daemon');
  const standard = {
    name: 'daemon',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(result).toEqual(standard);
});

test('test for invalid type of daemon character name', () => {
  expect(() => {
    const daemon = new Daemon(531);
    return daemon;
  }).toThrow('Неверные данные');
});

test('test for invalid length of daemon character name v.1', () => {
  expect(() => {
    const daemon = new Daemon('N');
    return daemon;
  }).toThrow('Неверные данные');
});

test('test for invalid length of daemon character name v.2', () => {
  expect(() => {
    const daemon = new Daemon('magicianMan');
    return daemon;
  }).toThrow('Неверные данные');
});

test('test for invalid type of bowman character type', () => {
  expect(() => {
    const daemon = new Daemon('daemon', 'Hobbit');
    return daemon;
  }).toThrow('Неверные данные');
});
