const index = require('./index');


test('throw error', () => {
    expect(() => { index.stringLength('heytherecowboy'); } ).toThrow(new Error('Oops, does not meet requirements!'));
  })

test('return length of string', () => {
    expect(index.stringLength('heythere')).toEqual(8);
  })


test('reverse the string', () => {
    expect(index.reverseString('hello')).toBe('olleh');
  })