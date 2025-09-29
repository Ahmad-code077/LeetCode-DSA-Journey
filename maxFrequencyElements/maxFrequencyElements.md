# Problem: Maximum Frequency Elements

## 📖 Description

You are given an array `nums` consisting of positive integers.

Return the **total frequencies** of elements in `nums` such that those elements all have the **maximum frequency**.

The frequency of an element is the number of times it appears in the array.

---

## 💡 Examples

**Example 1:**  
Input: `nums = [1, 2, 2, 3, 1, 4]`  
Output: `4`  
Explanation: The elements `1` and `2` both appear 2 times, which is the maximum frequency. Their combined occurrences = `2 + 2 = 4`.

**Example 2:**  
Input: `nums = [1, 2, 3, 4, 5]`  
Output: `5`  
Explanation: All elements appear once, which is the maximum frequency. Total = `1 + 1 + 1 + 1 + 1 = 5`.

**Example 3:**  
Input: `nums = [1, 1, 2, 2, 3, 3]`  
Output: `6`  
Explanation: The elements `1`, `2`, and `3` all appear 2 times. Their combined occurrences = `2 + 2 + 2 = 6`.

---

## 🛠️ Approach

- Use a **hash map** to count how many times each number appears in the array.
- Convert the map values (frequencies) into an array.
- Find the **maximum frequency** among those counts.
- Sum up the counts of all numbers whose frequency equals the maximum.
- Return this sum.

---

## ⏱️ Complexity

- **Time Complexity:** O(n) — one pass to build the frequency map, one pass to process counts.
- **Space Complexity:** O(n) — in the worst case, all numbers are unique, so the hash map stores `n` entries.
