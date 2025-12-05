// ✅ 3. Two Sum II(Sorted Array)
// 📖 Description

// Given a sorted array, return the 1 - indexed positions of two numbers whose sum equals target.

// 🔢 Input Example

// numbers = [2, 7, 11, 15], target = 9

// 🎯 Output

// [1, 2]

// 🔒 Constraints

// 2 <= numbers.length <= 30,000

//     - 1000 <= numbers[i] <= 1000

// numbers is sorted in non - decreasing order

// Exactly one valid answer

// function twoSum(numbers: number[], target: number): number[] {
//     let first_point = 0
//     let second_point = numbers.length - 1
//     let sum = 0

//     while (first_point < second_point) {
//         sum = numbers[first_point] + numbers[second_point];

//         if (sum === target) {
//             return [first_point + 1, second_point + 1]
//         }

//         if (sum > target) {
//             second_point--
//         }
//         if (sum < target) {
//             first_point++
//         }
//     }
//     return []
// }

// console.log(twoSum([2, 3, 4, 8], 6))