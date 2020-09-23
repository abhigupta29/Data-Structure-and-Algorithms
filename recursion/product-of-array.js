function productOfArray(arr) {
    if(arr.length === 1) return arr[0];
    return arr[0] * productOfArray(arr.splice(1));
}