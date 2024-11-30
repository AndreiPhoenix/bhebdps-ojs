// https://developer.mozilla.org/en/JavaScript/Guide/Inheritance_and_the_prototype_chain
describe("About Prototype Chain (about_prototype_chain.js)", function() {
  let father = {
    b: 3,
    c: 4
  };
  
  let child = Object.create(father);
  child.a = 1;
  child.b = 2;
  
  /*
   * ---------------------- ---- ---- ----
   *                      [a]  [b]  [c]
   * ---------------------- ---- ---- ----
   * [child]               1    2
   * ---------------------- ---- ---- ----
   * [father]                   3    4
   * ---------------------- ---- ---- ----
   * [Object.prototype]
   * ---------------------- ---- ---- ----
   * [null]
   * ---------------------- ---- ---- ----
   * */
  
  it("Is there an 'a' and 'b' own property on child?", function () {
    // child.hasOwnProperty('a')?
    expect(child.hasOwnProperty('a')).toBe(true);
    // child.hasOwnProperty('b')?
    expect(child.hasOwnProperty('b')).toBe(true);
  });
  
  it("Is there an 'a' and 'b' property on child?", function () {
    // what is 'a' value?
    expect(child.a).toBe(1);
    // what is 'b' value?
    expect(child.b).toBe(2);
  });
  
  it("If 'b' was removed, whats b value?", function () {
    delete child.b;
    // what is 'b' value now?
    expect(child.b).toBe(3); // After deletion, it should access the prototype property from father
  });
  
  it("Is there a 'c' own property on child?", function () {
    // child.hasOwnProperty('c')?
    expect(child.hasOwnProperty('c')).toBe(false);
  });
  
  // Is there a 'c' own property on child? No, check its prototype
  // Is there a 'c' own property on child.[[Prototype]]? Yes, its value is...
  it("Is there a 'c' property on child?", function () {
    // what is the value of child.c?
    expect(child.c).toBe(4); // Accessing the property from father
  });
  
  // Is there a 'd' own property on child? No, check its prototype
  // Is there a 'd' own property on child.[[Prototype]]? No, check it prototype
  // child.[[Prototype]].[[Prototype]] is null, stop searching, no property found, return...
  it("Is there an 'd' property on child?", function () {
    // what is the value of child.d?
    expect(child.d).toBe(undefined); // 'd' does not exist in child or its prototype chain
  });
});
