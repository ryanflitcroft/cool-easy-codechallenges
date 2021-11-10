///Update the test to test the division function
import { divide } from "./division.js";
const test = QUnit.test;

test('divide one number by the other (10 / 2) to equal 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(10, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
