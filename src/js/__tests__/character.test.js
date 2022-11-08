import Character from '../character.js';

test('character is created', () => {
  const newCh = new Character('bowman1', 'Bowman');
  expect(newCh.name).toBe('bowman1');
  expect(newCh.type).toBe('Bowman');
});

test('daemon is created', () => {
  const newCh = new Character('daemon1', 'Daemon');
  expect(newCh.name).toBe('daemon1');
  expect(newCh.type).toBe('Daemon');
});

test('bowman error name', () => {
  expect(() => {
    const ch1 = new Character('b', 'Bowman');
    console.log(ch1);
  }).toThrow(new Error('Name length must be in [2;10] interval!'));
});

test('bowman error type', () => {
  expect(() => {
    const ch1 = new Character('bowman1', 'bowmann');
    console.log(ch1);
  }).toThrow(new Error('Not valid character type!'));
});

test('bowman error name & type', () => {
  expect(() => {
    const ch1 = new Character('b', 'bowmann');
    console.log(ch1);
  }).toThrow(new Error('Not valid character name & type!'));
});
