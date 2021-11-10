///Update the test to test the add function

const test = QUnit.test;

test('takes a string and returns the length of the string (hello returns 5)', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = stringLength(hello);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
