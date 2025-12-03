
// 1. Reverse String
// Description
// Reverse the characters of a string using two pointers.
// Input Example
// s = ["h","e","l","l","o"]
// Expected Output
// ["o","l","l","e","h"]

function reverseString(s: string[]): void {

    let leftPointer = 0
    let rightPointer = s.length - 1
    while (leftPointer < rightPointer) {
        [s[leftPointer], s[rightPointer]] = [s[rightPointer], s[leftPointer]]
        leftPointer++
        rightPointer--
    }
    console.log('s', s)
}

reverseString(["h", "e", "l", "l", "o"]);

