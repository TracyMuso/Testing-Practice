const stringLength = require('./index');

test('throw error', () => {
    expect(() => { stringLength('heytherecowboy'); } ).toThrow(new Error('Oops, does not meet requirements!'));
  })

  test('return length of string', () => {
    expect(stringLength('heythere')).toEqual(8);
  })

  const reverseString = require('./index');

  it('reverse the string'), () => {
    expect(reverseString('hello')).toMatch('olleh');
  }