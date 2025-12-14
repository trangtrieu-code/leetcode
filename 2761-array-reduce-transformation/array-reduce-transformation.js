/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    // return val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ...
    // if nums.length === 0; return init
    // no array.reduce
    let val = init;
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }

    if (nums.length === 0) {
        return init;
    } else {
        return val;
    }
};