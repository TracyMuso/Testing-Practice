const Calc = require('./calc');

describe("multiply", () => {
    test("8 + 11 = 88", () => {
      const num1 = 8;
      const num2 = 11;
     const Calculator = new Calc(num1, num2);
     const result = Calculator.prod(num1, num2);
        expect(result).toBe(88);
    });
  });

  describe("divide", () => {
    test("9 / 3 = 3", () => {
      const num1 = 9;
      const num2 = 3;
      const Calculator = new Calc(num1, num2);
      const result = Calculator.div(num1, num2);
        expect(result).toBe(3);
    });
  });
