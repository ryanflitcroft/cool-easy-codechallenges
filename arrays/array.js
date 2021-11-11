/// directions in markdown


                                    
export function addOneToEndOfArray(array, num1) {
    /// the first function is here as a example but I want you to finish it using the .push() method.
    ///it takes in two parameters, the first is the array and the second is the value to add to the end of the array.
  ///this is just there to to pass the test
    array.push(num1);
    return array;
}
 
export function removeLast(array) {
    array.pop();
    return array;
}

export function addToStart(array, item) {
    array.unshift(item);
    return array;
}

export function removeFromStart(array) {
    array.shift();
    return array;
}