describe("About Functions (about_functions.js)", function() {

  it("should declare functions", function() {
    function add(a, b) {
      return a + b;
    }

    expect(add(1, 2)).toBe(3); // FILL_ME_IN
  });

  it("should know internal variables override outer variables", function () {
    let message = "Outer";

    function getMessage() {
      return message;
    }

    function overrideMessage() {
      let message = "Inner";
      return message;
    }

    expect(getMessage()).toBe("Outer"); // FILL_ME_IN
    expect(overrideMessage()).toBe("Inner"); // FILL_ME_IN
    expect(message).toBe("Outer"); // FILL_ME_IN
  });

  it("should have lexical scoping", function () {
    let variable = "top-level";
    function parentfunction() {
      let variable = "local";
      function childfunction() {
        return variable;
      }
      return childfunction();
    }
    expect(parentfunction()).toBe("local"); // FILL_ME_IN
  });

  it("should use lexical scoping to synthesise functions", function () {
    function makeMysteryFunction(makerValue){
      let newFunction = function doMysteriousThing(param){
        return makerValue + param;
      };
      return newFunction;
    }

    let mysteryFunction3 = makeMysteryFunction(3);
    let mysteryFunction5 = makeMysteryFunction(5);

    expect(mysteryFunction3(10) + mysteryFunction5(5)).toBe(18); // FILL_ME_IN
  });

  it("should allow extra function arguments", function () {
    function returnFirstArg(firstArg) {
      return firstArg;
    }

    expect(returnFirstArg("first", "second", "third")).toBe("first"); // FILL_ME_IN

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }

    expect(returnSecondArg("only give first arg")).toBe(undefined); // FILL_ME_IN

    function returnAllArgs() {
      let argsArray = [];
      for (let i = 0; i < arguments.length; i += 1) {
        argsArray.push(arguments[i]);
      }
      return argsArray.join(",");
    }

    expect(returnAllArgs("first", "second", "third")).toBe("first,second,third");
  });

  it("should pass functions as values", function () {
    let appendRules = function (name) {
      return name + " rules!";
    };

    let appendDoubleRules = function (name) {
      return name + " totally rules!";
    };

    let praiseSinger = { givePraise: appendRules };
    expect(praiseSinger.givePraise("John")).toBe("John rules!"); // FILL_ME_IN

    praiseSinger.givePraise = appendDoubleRules;
    expect(praiseSinger.givePraise("Mary")).toBe("Mary totally rules!"); // FILL_ME_IN
  });
});
