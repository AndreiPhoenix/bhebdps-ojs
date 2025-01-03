describe("About Mutability (about_mutability.js)", function() {
  it("should expect object properties to be public and mutable", function () {
    let aPerson = { firstname: "John", lastname: "Smith" };
    aPerson.firstname = "Alan";

    expect(aPerson.firstname).toBe("Alan"); // FILL_ME_IN
  });

  it("should understand that constructed properties are public and mutable", function () {
    function Person(firstname, lastname){
      this.firstname = firstname;
      this.lastname = lastname;
    }
    let aPerson = new Person("John", "Smith");
    aPerson.firstname = "Alan";

    expect(aPerson.firstname).toBe("Alan"); // FILL_ME_IN
  });
  
  it("should expect prototype properties to be public and mutable", function () {
    function Person(firstname, lastname){
      this.firstname = firstname;
      this.lastname = lastname;
    }
    Person.prototype.getFullName = function () {
      return this.firstname + " " + this.lastname;
    };
  
    let aPerson = new Person("John", "Smith");
    expect(aPerson.getFullName()).toBe("John Smith"); // FILL_ME_IN
  
    aPerson.getFullName = function () {
      return this.lastname + ", " + this.firstname;
    };
  
    expect(aPerson.getFullName()).toBe("Smith, John"); // FILL_ME_IN
  });
  
  it("should know that variables inside a constructor and constructor args are private", function () {
    function Person(firstname, lastname){
      let fullName = firstname + " " + lastname;
  
      this.getFirstName = function () { return firstname; };
      this.getLastName = function () { return lastname; };
      this.getFullName = function () { return fullName; };
    }
    let aPerson = new Person("John", "Smith");

    aPerson.firstname = "Penny";
    aPerson.lastname = "Andrews";
    aPerson.fullName = "Penny Andrews";
  
    expect(aPerson.getFirstName()).toBe("John"); // FILL_ME_IN
    expect(aPerson.getLastName()).toBe("Smith"); // FILL_ME_IN
    expect(aPerson.getFullName()).toBe("John Smith"); // FILL_ME_IN

    aPerson.getFullName = function () {
      return aPerson.lastname + ", " + aPerson.firstname;
    };

    expect(aPerson.getFullName()).toBe("Andrews, Penny"); // FILL_ME_IN
  });
});
