///Update the test to test the array functions
import { addOneToEndOfArray, removeLast, addToStart, removeFromStart, makeCopy } from './array.js';

const test = QUnit.test;
/// remove skip from test to run it

test('time to test add one the end of the array', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = [1, 2, 3, 4, 5];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addOneToEndOfArray([1, 2, 3, 4], 5);

    //Expect
    // Make assertions about what is expected versus the actual result

    expect.deepEqual(actual, expected);
});

test('removes last item from an array', (expect) => {

    const expected = [1, 2, 3, 4];

    const actual = removeLast([1, 2, 3, 4, 5]);

    expect.deepEqual(actual, expected);
});

test('adds new item to beginning of array', (expect) => {

    const expected = [0, 1, 2, 3, 4, 5];

    const actual = addToStart([1, 2, 3, 4, 5], 0);

    expect.deepEqual(actual, expected);
});

test('removes item from beginning of array', (expect) => {

    const expected = [1, 2, 3, 4, 5];

    const actual = removeFromStart([0, 1, 2, 3, 4, 5], 0);

    expect.deepEqual(actual, expected);
});

test('makes a copy of an array', (expect) => {

    const expected = [1, 2, 3, 4, 5];

    const actual = makeCopy([1, 2, 3, 4, 5]);

    expect.deepEqual(actual, expected);
});