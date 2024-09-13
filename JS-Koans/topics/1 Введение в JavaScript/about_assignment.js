
describe("About Assignment (about_assignment.js)", function() {
  it("local variables", function() {
    let temp = 1;
    // Присваиваем значение переменной temp
    expect(temp).toBe(1);
  });
  
  it("global variables", function() {
    temp = 1; // Not using let is an example. Always use let in practise.
    // Глобальные переменные присваиваются объекту window
    expect(window.temp).toBe(temp);
  });
});


