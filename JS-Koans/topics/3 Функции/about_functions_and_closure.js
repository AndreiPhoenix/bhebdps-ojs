describe("About Functions And Closure (about_functions_and_closure.js)", function() {
  it("defining functions directly", function() {
    let result = "a";
    function changeResult() {
      // the ability to access variables defined in the same scope as the function is known as 'closure'
      result = "b";
    };
    changeResult();
    // what is the value of result?
    expect("b").toBe(result); // FILL_ME_IN
  });

  it("assigning functions to variables", function() {
    let triple = function(input) {
      return input * 3;
    };
    // what is triple 4?
    expect(12).toBe(triple(4)); // FILL_ME_IN
  });

  it("self invoking functions", function() {
    let publicValue = "shared";

    // self invoking functions are used to provide scoping and to alias variables
    (function(pv) {
      let secretValue = "password";
      // what is the value of pv?
      expect("shared").toBe(pv); // FILL_ME_IN
      // is secretValue available in this context?
      expect("undefined").toBe(typeof(secretValue)); // FILL_ME_IN
      // is publicValue available in this context?
      expect("string").toBe(typeof(publicValue)); // FILL_ME_IN
    })(publicValue);

    // is secretValue available in this context?
    expect("undefined").toBe(typeof(secretValue)); // FILL_ME_IN
    // is publicValue available in this context?
    expect("string").toBe(typeof(publicValue)); // FILL_ME_IN
  });

  it("arguments array", function() {
    let add = function() {
      let total = 0;
      for(let i = 0; i < arguments.length; i++) {
        total += arguments[i]; // complete the implementation of this method so that it returns the sum of its arguments
      }
      return total; // FILL_ME_IN
    };

    // add 1,2,3,4,5
    expect(15).toBe(add(1,2,3,4,5));
    // add 4,7,-2
    expect(9).toBe(add(4,7,-2));
  });

  it("using call to invoke function",function(){
    let invokee = function( message ){
      return this + message;  
    };
    
    //another way to invoke a function is to use the call function which allows 
    //you to set the caller's "this" context.  Call can take any number of arguments: 
    //the first one is always the context that this should be set to in the called
    //function, and the arguments to be sent to the function, multiple arguments are separated by commas.
    let result = invokee.call("I am this!", " Where did it come from?");

    // what will the value of invokee's this be?
    expect("I am this! Where did it come from?").toBe(result); // FILL_ME_IN
  });

  it("using apply to invoke function",function(){
    let invokee = function( message1, message2 ){
      return this + message1 + message2;  
    };

    //similar to the call function is the apply function.  Apply only has two
    //arguments:  the first is the context that this should be set to in the called
    //function and the second is the array of arguments to be passed into the called function.
    let result = invokee.apply("I am this!", [" I am arg1"," I am arg2"]);

    // what will the value of invokee's this be?
    expect("I am this! I am arg1 I am arg2").toBe(result); // FILL_ME_IN
  });
});
