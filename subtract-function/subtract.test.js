///Update the test to test the subtract function
import { subtract } from './subtract.js';

const test = QUnit.test;

test('subtract the second number from the first (16, 3) to equal 13', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 13;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(16, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
