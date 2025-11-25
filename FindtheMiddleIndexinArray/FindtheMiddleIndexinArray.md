# Problem: Find Middle Index

## 📖 Description

You are given an array of integers `nums`.

Return the **middle index** where the sum of elements **to the left** of the index is equal to the sum of elements **to the right** of the index.

If there are multiple answers, return the **left-most index**. If no such index exists, return `-1`.

---

## 💡 Examples

**Example 1:**  
Input: `nums = [1, 7, 3, 6, 5, 6]`  
Output: `3`  
Explanation: The sum of elements before index `3` is `1 + 7 + 3 = 11` and the sum after is `5 + 6 = 11`.

**Example 2:**  
Input: `nums = [1, 2, 3]`  
Output: `-1`  
Explanation: No index satisfies the condition.

**Example 3:**  
Input: `nums = [2, 1, -1]`  
Output: `0`  
Explanation: The sum to the left of index `0` is `0` and the sum to the right is `1 + -1 = 0`.

---

## 🛠️ Approach

1. Compute the **total sum** of the array.
2. Initialize `leftSum = 0`.
3. Iterate through the array:
   - Compute `rightSum = totalSum - leftSum - nums[i]`.
   - If `leftSum === rightSum`, return the current index `i`.
   - Otherwise, add `nums[i]` to `leftSum`.
4. If no index is found, return `-1`.

---

## ⏱️ Complexity

- **Time Complexity:** O(n) — we iterate through the array once and compute total sum once.
- **Space Complexity:** O(1) — only a few extra variables are used.
