describe("About inheritance (about_inheritance.js)", function() {
  beforeEach(function(){
    this.muppet = new Muppet(2, "coding");
    this.swedishChef = new SwedishChef(2, "cooking", "chillin");
  });

  it("should be able to call a method on the derived object", function() {
    expect(this.swedishChef.cook()).toEqual("Mmmm soup!");
  });

  it("should be able to call a method on the base object", function() {
    expect(this.swedishChef.answerNanny()).toEqual("Everything's cool!");
  });

  it("should set constructor parameters on the base object", function() {
    expect(this.swedishChef.age).toEqual(2);
    expect(this.swedishChef.hobby).toEqual("cooking");
  });

  it("should set constructor parameters on the derived object", function() {
    expect(this.swedishChef.mood).toEqual("chillin");
  });
});

describe("About Crockford's inheritance improvement", function() {
  beforeEach(function(){
    // Define the Gonzo constructor and initialize
    function Gonzo(age, hobby, trick) {
      Muppet.call(this, age, hobby);
      this.trick = trick;

      this.doTrick = function() {
        return this.trick;
      }
    }

    // Create an instance of Gonzo
    this.gonzo = new Gonzo(3, "daredevil performer", "eat a tire");

    // Define the beget method for prototypal inheritance
    Object.prototype.beget = function () {
      function F() {}
      F.prototype = this;
      return new F();
    }

    // Set Gonzo's prototype to be an instance of Muppet
    Gonzo.prototype = Muppet.prototype.beget();
  });

  it("should be able to call a method on the derived object", function() {
    expect(this.gonzo.doTrick()).toEqual("eat a tire");
  });

  it("should be able to call a method on the base object", function() {
    expect(this.gonzo.answerNanny()).toEqual("Everything's cool!");
  });

  it("should set constructor parameters on the base object", function() {
    expect(this.gonzo.age).toEqual(3);
    expect(this.gonzo.hobby).toEqual("daredevil performer");
  });

  it("should set constructor parameters on the derived object", function() {
    expect(this.gonzo.trick).toEqual("eat a tire");
  });
});
