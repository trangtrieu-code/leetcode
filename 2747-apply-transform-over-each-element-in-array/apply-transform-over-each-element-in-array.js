/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    // return a new array with transformation applied to each element
    // returnedArray[i] = fn(arr[i], i)
    // no use array.map
    const returnedArray = [];
    let value = 0;
    for (let i = 0; i < arr.length; i++) {
        value = fn(arr[i], i);
        returnedArray.push(value);
    }
    return returnedArray;
};