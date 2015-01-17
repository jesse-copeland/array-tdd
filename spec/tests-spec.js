var arrayfun = require('../arrayfun');

describe("arrayfun", function() {

  it("Must have a function named first()", function() {
    expect( arrayfun.first ).toBeDefined();
  });

  it("first() function must return the first element of the first argument", function() {
    var testArray = ['a','b','c','d','e'];
    var result = arrayfun.first(testArray); 

    expect(result).toBe('a'); 
  });

  it("The first() function must return a new array filled with the first n elements of the first argument (array)", function() {
    var testArray = ['a','b','c','d','e'];
    var result1 = arrayfun.first(testArray, 1);
    var result2 = arrayfun.first(testArray, 2);
    var result4 = arrayfun.first(testArray, 4);
    
    expect(result1).toEqual(['a']);
    expect(result2).toEqual(['a','b']);
    expect(result4).toEqual(['a','b','c','d']);
  });
  
});