const Calc = require('./calc');

describe("add", () => {
    test("8 + 19 = 27", () => {
      const num1 = 8;
      const num2 = 19;
     const Calc = new Calc(num1, num2);
     const result = Calc.add(num1, num2);
        expect(result).toBe(27);
    });
  });

  describe("subtract", () => {
    test("8 - 19 = -11", () => {
      const num1 = 8;
      const num2 = 19;
     const Calc = new Calc(num1, num2);
     const result = Calc.diff(num1, num2);
        expect(result).toBe(-11);
    });
  });
