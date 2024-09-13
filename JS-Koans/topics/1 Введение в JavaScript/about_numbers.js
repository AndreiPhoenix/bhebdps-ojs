describe("About Numbers (about_numbers.js)", function() {
  it("types", function() {
    let typeOfIntegers = typeof(6);
    let typeOfFloats = typeof(3.14159);
    // are ints and floats the same type?
    expect(typeOfIntegers === typeOfFloats).toBe(true); // int и float имеют один и тот же тип: "number"
    // what is the javascript numeric type?
    expect(typeOfIntegers).toBe("number"); // тип "number" - обозначение цифр в javascript
    // what is a integer number equivalent to 1.0?
    expect(1).toBe(1.0); // 1 и 1.0 эквивалентны
  });

  it("NaN", function() {
    let resultOfFailedOperations = 7 / 'apple';
    // what will satisfy the equals assertion?
    expect(true).toBe(isNaN(resultOfFailedOperations)); // isNaN вернет true, так как результат деления нечисловой строки
    // is NaN == NaN?
    expect(false).toBe(resultOfFailedOperations == NaN); // NaN не равен сам себе, поэтому результат будет false
  });
});
