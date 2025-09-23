
function twoSum(nums: number[], target: number) {

    let myMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        let compliment = target - nums[i]
        if (myMap.has(compliment)) {
            console.log(myMap.get(compliment))

            return [myMap.get(compliment), i]
        }
        myMap.set(nums[i], i)
    }
    return []

}

console.log(twoSum([3, 4, 2, 20, 10, 12], 32))