Problem: Valid Palindrome

📖 Description

Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring case differences.

A palindrome reads the same forward and backward after removing all non-alphanumeric characters and converting all letters to lowercase.

💡 Examples

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: After removing non-alphanumeric characters and converting to lowercase, amanaplanacanalpanama is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: After cleaning, raceacar is not the same reversed.

Example 3:
Input: s = " "
Output: true
Explanation: An empty string is considered a palindrome.

🛠️ Approach

Convert the input string to lowercase.

Build a new string that includes only letters (a-z) and digits (0-9).

Reverse the filtered string and compare it with the original filtered version.

Return true if they are equal, otherwise false.

⏱️ Complexity

Time Complexity: O(n) — each character is checked once, and reversal also takes O(n).

Space Complexity: O(n) — extra space for the filtered string and its reversed copy.
