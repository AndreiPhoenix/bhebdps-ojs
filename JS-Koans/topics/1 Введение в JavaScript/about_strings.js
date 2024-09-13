
describe("About Strings (about_strings.js)", function() {
  it("delimiters", function() {
    let singleQuotedString = 'apple';
    let doubleQuotedString = "apple";
    // are the two strings equal?
     expect(singleQuotedString === doubleQuotedString).toBe(true);
  });

  it("concatenation", function() {
    let fruit = "apple";
    let dish = "pie";
    // are the two strings equal?
    expect(fruit + " " + dish).toBe("apple pie");
  });

  it("character Type", function() {
    let characterType = typeof("Amory".charAt(1)); // typeof will be explained in about reflection
    // Javascript has no character type
    expect(characterType).toBe("string");
  });

  it("escape character", function() {
    let stringWithAnEscapedCharacter  = "\u0041pple";
    // what  is the value of stringWithAnEscapedCharacter?
    expect(stringWithAnEscapedCharacter).toBe("Apple");
  });

  it("string.length", function() {
    let fruit = "apple";
    // what is the value of fruit.length?
    expect(fruit.length).toBe(5);
  });

  it("slice", function() {
    let fruit = "apple pie";
    // what is the value of fruit.slice(0,5)?
    expect(fruit.slice(0,5)).toBe("apple");
  }); 
});
