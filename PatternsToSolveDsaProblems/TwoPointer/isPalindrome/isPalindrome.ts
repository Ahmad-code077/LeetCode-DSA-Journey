
// 2. Valid Palindrome
// Description

// Check if the string is a palindrome ignoring non-alphanumeric characters.

// Input Example

// s = "A man, a plan, a canal: Panama"

// Output

// true

function isPalindrome(s: string): boolean {
    let lowerCase = s.toLocaleLowerCase()

    let leftPointer = 0
    let rightPointer = lowerCase.length - 1

    while (leftPointer <= rightPointer) {

        const leftChar = lowerCase[leftPointer];
        const rightChar = lowerCase[rightPointer];

        if (!/[a-z0-9]/.test(leftChar)) {
            leftPointer++
            continue
        }
        if (!/[a-z0-9]/.test(rightChar)) {
            rightPointer--
            continue
        }
        if (leftChar !== rightChar) return false
        leftPointer++
        rightPointer--
    }

    return true

}

console.log(isPalindrome('A man, a plan, a canal: Panama'))