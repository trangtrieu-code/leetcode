/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    // return a filteredArr
    // no array.filter
    let filteredArr = [];
    for(let i = 0; i < arr.length; i++) {
        let value = fn(arr[i], i);
        if(value) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
};