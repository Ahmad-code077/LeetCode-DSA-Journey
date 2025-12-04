# Problem: Valid Palindrome

## 📖 Description

Given a string `s`, check if it is a palindrome after ignoring all non-alphanumeric characters and converting uppercase letters to lowercase.

A palindrome reads the same forward and backward.

---

## 💡 Examples

**Example 1:**  
Input: `s = "A man, a plan, a canal: Panama"`  
Output: `true`

**Example 2:**  
Input: `s = "race a car"`  
Output: `false`

**Example 3:**  
Input: `s = " "`  
Output: `true`

---

## 🛠️ Approach

- Convert the string to lowercase.
- Use two pointers from both ends.
- Skip characters that are not letters or digits.
- Compare the characters at both pointers.
- If any mismatch occurs, return `false`.

---

## 🧑‍💻 Code (TypeScript)

See **ValidPalindrome.ts**

---

## ⏱️ Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)
