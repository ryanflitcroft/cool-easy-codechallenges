///Update the test to test the add function
import { add } from './add.js';

const test = QUnit.test;

test('add one number to the other (6 + 4) to equal 10', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(6, 4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
