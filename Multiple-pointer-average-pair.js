// Given a sorted array of integers and a target average, determine if there is a
// pair of values in array whose average equals target average

function averagePair(nums, avg) {
    let head = 0;
    let tail = nums.length-1;
    while(head<tail) {
        let average = (nums[head]+nums[tail])/2;
        if(average === avg) {
            return true;
        } else if(average < avg) {
            head++;
        }else {
            tail--;
        }
    }
    return false;
}