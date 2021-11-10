///Update the test to test the multiply function

const test = QUnit.test;

test('multiply one number by the other (12 * 2) to equal 24', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 24;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(12, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
