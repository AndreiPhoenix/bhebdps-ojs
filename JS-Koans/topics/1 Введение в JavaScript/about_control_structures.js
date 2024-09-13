describe("About Control Structures (about_control_structures.js)", function() {
  it("if", function() {
    let isPositive = false;
    if (2 > 0) {
      isPositive = true;
    }

    // what is the value of isPositive?
    expect(isPositive).toBe(true); // Значение isPositive будет true
  });

  it("for", function() {
    let counter = 10;
    for (let i = 1; i <= 3; i++) {
      counter = counter + i; // counter = 10 + 1 + 2 + 3
    }

    // what is the value of counter?
    expect(counter).toBe(16); // Значение counter будет 16
  });

  it("for in", function() {
    // this syntax will be explained in about objects
    let person = {
      name: "Amory Blaine",
      age: 102
    };
    let result = "";
    // for in enumerates the property names of an object
    for (let property_name in person) {
      result = result + property_name; // result будет "nameage"
    }

    // what is the value of result?
    expect(result).toBe("nameage"); // Значение result будет "nameage"
  });

  it("ternary operator", function() {
    let fruit = true ? "apple" : "orange";
    expect(fruit).toBe("apple", 'what is the value of fruit?'); // Значение fruit будет "apple"

    fruit = false ? "apple" : "orange";
    expect(fruit).toBe("orange", 'now what is the value of fruit?'); // Значение fruit будет "orange"
  });

  it("switch", function() {
    let result = 0;
    switch (2) {
      case 1:
        result = 1;
        break;
      case 1 + 1:
        result = 2; // 1 + 1 равно 2, поэтому выполнится этот блок
        break;
    }

    // what is the value of result?
    expect(result).toBe(2); // Значение result будет 2
  });

  it("switch default case", function() {
    let result = "Pippin";
    switch ("m") {
      case "f":
        result = "Frodo";
        break;
      case "s":
        result = "Samwise";
        break;
      default:
        result = "Merry"; // Так как ни один из case не соответствует, выполнится default
        break;
    }

    // what is the value of result?
    expect(result).toBe("Merry"); // Значение result будет "Merry"
  });

  it("null coalescing", function() {
    let result = null || "a value"; // Если первое значение null, вернется второе значение

    // what is the value of result?
    expect(result).toBe("a value"); // Значение result будет "a value"
  });
});
