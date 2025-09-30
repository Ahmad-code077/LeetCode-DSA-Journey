# Problem: Power of Two

## 📖 Description

You are given an integer `n`.

Return `true` if `n` is a power of two, otherwise return `false`.

An integer is a power of two if there exists an integer `x` such that:

---

## 💡 Examples

**Example 1:**  
Input: `n = 1`  
Output: `true`  
Explanation: `2^0 = 1`.

**Example 2:**  
Input: `n = 16`  
Output: `true`  
Explanation: `2^4 = 16`.

**Example 3:**  
Input: `n = 3`  
Output: `false`  
Explanation: `3` is not a power of two.

---

## 🛠️ Approach

- Use **recursion** to repeatedly divide `n` by 2.
- Base conditions:
  - If `n === 1`, return `true`.
  - If `n < 1`, return `false`.
- Otherwise, keep dividing `n` by 2 until one of the base conditions is met.

---

## ⏱️ Complexity

- **Time Complexity:** O(log n) — because `n` is divided by 2 on each recursive call.
- **Space Complexity:** O(log n) — recursion uses the call stack, with depth proportional to log₂(n).
