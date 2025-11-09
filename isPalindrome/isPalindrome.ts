
function isPalindrome(s: string): boolean {
    const incommingString = s.toLowerCase()
    let checkString = ''
    for (let i = 0; i < incommingString.length; i++) {
        const char = incommingString.charAt(i).charCodeAt(0)
        if ((char >= 97 && char <= 122) || (char >= 48 && char <= 57)) {
            checkString += incommingString[i]
        }
    }

    return checkString.split('').reverse().join('') === checkString
};
