///Update the test to test the add function
import { length } from './strings.js';
const test = QUnit.test;

test('takes a string and returns the length of the string (hello returns 5)', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 5;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = length('hello');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('takes in a string and reverses it (hello to olleh)', (expect) => {
    const expected = 'olleh';
    const actual = reverse('hello');

    expect.equal(actual, expected);
});