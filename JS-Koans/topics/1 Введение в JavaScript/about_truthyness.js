
describe("About Truthyness (about_truthyness.js)", function() {
  it("truthyness of positive numbers", function() {
    let oneIsTruthy = 1 ? true : false;
    // is one truthy?
     expect(oneIsTruthy).toBe(true);
  });

  it("truthyness of negative numbers", function() {
    let negativeOneIsTruthy = -1 ? true : false;
    // is -1 truthy?
    expect(negativeOneIsTruthy).toBe(true);
  });

  it("truthyness of zero", function() {
    let zeroIsTruthy = 0 ? true : false;
    // is 0 truthy?
    expect(zeroIsTruthy).toBe(false);
  });

  it("truthyness of null", function() {
    let nullIsTruthy = null ? true : false;
    // is null truthy?
    expect(nullIsTruthy).toBe(false);
  });
});
