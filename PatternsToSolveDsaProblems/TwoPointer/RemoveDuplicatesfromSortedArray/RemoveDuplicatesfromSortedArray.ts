function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;

    let write = 0;

    debugger
    for (let read = 1; read < nums.length; read++) {
        if (nums[write] !== nums[read]) {
            write++
            nums[write] = nums[read]
        }
    }
    return write + 1
}

// Example usage:
const arr = [1, 1, 2, 2, 3, 3];
const k = removeDuplicates(arr);
console.log(k);       
