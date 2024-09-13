
describe("About Operators (about_operators.js)", function() {
  it("addition", function() {
    let result = 0;
    //starting i at 0, add i to result and increment i by 1 until i is equal to 5
    for (let i = 0; i <= 5; i++) {
      result = result + i;
    }
    // What is the value of result?
    expect(result).toBe(15); // Сумма 0 + 1 + 2 + 3 + 4 + 5 = 15
  });

  it("assignment addition", function() {
    let result = 0;
    for (let i = 0; i <= 5; i++) {
      //the code below is just like saying result = result + i; but is more concise
      result += i;
    }
    // What is the value of result?
    expect(result).toBe(15); // Сумма 0 + 1 + 2 + 3 + 4 + 5 = 15
  });

  it("subtraction", function() {
    let result = 5;
    for (let i = 0; i <= 2; i++) {
      result = result - i;
    }
    // What is the value of result?
    expect(result).toBe(2); // 5 - 0 - 1 - 2 = 2
  });

  it("assignment subtraction", function() {
    let result = 5;
    for (let i = 0; i <= 2; i++) {
      result -= i;
    }
    // What is the value of result?
    expect(result).toBe(2); // 5 - 0 - 1 - 2 = 2
  });

  //Assignment operators are available for multiplication and division as well
  //let's do one more, the modulo operator, used for showing division remainder

  it("modulus", function() {
    let result = 10;
    let x = 5;
    //again this is exactly the same as result = result % x
    result %= x;
    // What is the value of result?
     expect(result).toBe(0); // Остаток от деления 10 на 5 равен 0
  });

  it("typeof", function() {
    // what is the type of an empty object?
    expect(typeof({})).toBe("object"); // пустой объект
    // what is the type of a string?
    expect(typeof('apple')).toBe("string"); // строка
    // what is the type of -5?
    expect(typeof(-5)).toBe("number"); // число
    // what is the type of false?
    expect(typeof(false)).toBe("boolean"); // логическое значение
  });
});
