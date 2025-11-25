
function findMiddleIndex(nums: number[]): number {

    let totalSum = nums.reduce((acc, curr) => {
        return acc += curr
    }, 0)
    let leftSideSum = 0
    let rightSideSum = 0
    for (let i = 0; i < nums.length; i++) {
        rightSideSum = totalSum - leftSideSum - nums[i]
        if (leftSideSum === rightSideSum) {
            return i
        }
        leftSideSum += nums[i]
    }
    return -1
};

console.log('vauels from the funtion ', findMiddleIndex([1, 7, 3, 6, 5, 6]))