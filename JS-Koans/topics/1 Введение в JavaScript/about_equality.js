
describe("About Equality (about_equality.js)", function() {
  it("numeric equality", function() {
    expect(3 + 4).toBe(7); 
  });

  it("string equality", function() {
    // concatenate the strings
    expect("3" + "4").toBe("37"); // Конкатенация строк "3" и "4" дает "34"
  });

  it("equality without type coercion", function() {
    // what is exactly equal to 3?
    expect(3 === 3).toBeTruthy(); // 3 строго равно 3
  });

  it("equality with type coercion", function() {
    // what string is equal to 3, with type coercion?
    expect(3 == "3").toBeTruthy(); // Строка "3" эквивалентна числу 3 с приведением типов
  });

  it("string literals", function() {
    // quote types are interchangable, but must match.
    expect("frankenstein" === "frankenstein").toBeTruthy(); 
    // quote types can use both single and double quotes.
    expect('frankenstein' === 'frankenstein').toBeTruthy(); 
  });
});
