// the function returns true if a single value in array
// returns true when passed to the callback
function someRecursive(arr, callback) {
    if(arr.length === 0) return false;
    if(callback(arr[0])) return true;
    return someRecursive(arr.splice(1), callback);
}


// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false