
function maxFrequencyElements(nums: number[]): number {
    const myHashTable = new Map<number, number>()

    for (let i = 0; i < nums.length; i++) {
        myHashTable.set(nums[i], (myHashTable.get(nums[i]) || 0) + 1)
    }

    const arrayOfFrequency = Array.from(myHashTable.values())
    const maxCount = Math.max(...arrayOfFrequency);

    const countForFrequency = arrayOfFrequency.reduce((acc, curr) => acc + (curr === maxCount ? curr : 0), 0)
    return countForFrequency
}


// console.log(maxFrequencyElements([1, 2, 2, 3, 1, 4])); // 4
// console.log(maxFrequencyElements([1, 2, 3, 4, 5]));    // 5
// console.log(maxFrequencyElements([1, 1, 2, 2, 3, 3])); // 6
// console.log(maxFrequencyElements([1, 1, 1, 1]));       // 4
// console.log(maxFrequencyElements([5, 5, 5, 6, 6, 7])); // 3
// console.log(maxFrequencyElements([7]));                // 1
// console.log(maxFrequencyElements([2, 2, 2, 3, 3, 3])); // 6
// console.log(maxFrequencyElements([9, 9, 8, 8, 7, 7])); // 6
