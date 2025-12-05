# Problem: Two Sum II (Two Pointers)

## 📖 Description

Given a **sorted** array of integers `numbers` and an integer `target`, return the **1-indexed** positions of the **two numbers** that add up to `target`.

- You may not use the same element twice.
- There is exactly one valid answer.
- The array is sorted in non-decreasing order.
- The answer must use **constant extra space**.

---

## 💡 Examples

**Example 1:**  
Input: `numbers = [2,7,11,15], target = 9`  
Output: `[1,2]`

**Example 2:**  
Input: `numbers = [2,3,4], target = 6`  
Output: `[1,3]`

**Example 3:**  
Input: `numbers = [-1,0], target = -1`  
Output: `[1,2]`

---

## 🛠️ Approach (Two Pointers)

1. Initialize two pointers:
   - `left` at the start of the array (`0`)
   - `right` at the end of the array (`numbers.length - 1`)
2. Compute the sum of the two pointer values.
3. If the sum is:
   - **equal** to the target → return their 1-indexed positions.
   - **greater** than the target → move the right pointer left.
   - **less** than the target → move the left pointer right.
4. Continue until the correct pair is found.

**Why this works:**

- The array is sorted, so moving pointers inward adjusts the sum in a predictable way.
- This reduces the problem to a single linear scan.

- **Time Complexity:** O(n) — A single pass using two pointers.
- **Space Complexity:** O(1) —Only two variables (left and right) are used.
