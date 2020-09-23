// find the maximum sum of subarray with the length of number passed to the function
function maxSubarraySum(arr, len) {
    let maxSum = 0;
    for(let i=0; i<len; i++) {
        maxSum += arr[i];
    }

    for(let i=len; i<arr.length; i++) {
        let tempSum = maxSum - arr[i-len] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

