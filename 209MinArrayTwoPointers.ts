function minSubArrayLen(target: number, nums: number[]): number {
   
    if (nums.length===0) { return 0};
    let sum = 0;
    let right = 0;
    let left = 0;
    let smallestLen = nums.length+1;

    while (left < nums.length) {
        if (right < nums.length && sum < target) {
            sum+=nums[right];
            
            right++;            
        } else if (sum >= target) {
            smallestLen = Math.min(smallestLen, right-left);
            sum-=nums[left]
            left++
        } else {
            break;
        }
    }
    return smallestLen === nums.length+1?0:smallestLen
};