# Problem: Two Sum

## 📖 Description

Given an array of integers `nums` and an integer `target`, return the indices of the **two numbers** that add up to `target`.

- Each input has **exactly one solution**.
- You may not use the same element twice.
- You can return the answer in any order.

---

## 💡 Examples

**Example 1:**  
Input: `nums = [2,7,11,15], target = 9`  
Output: `[0,1]`

**Example 2:**  
Input: `nums = [3,2,4], target = 7`  
Output: `[1,3]`

**Example 3:**  
Input: `nums = [3,3], target = 6`  
Output: `[0,1]`

---

## 🛠️ Approach

- Create a `Map` to store numbers and their indices.
- Loop through the array:
  - Calculate the **complement**: `target - nums[i]`.
  - If the complement exists in the map, return `[map.get(complement), i]`.
  - Otherwise, add the current number and its index to the map.
- This way, we find the two numbers efficiently in **one pass**.

---

## 🧑‍💻 Code (TypeScript)

See [TwoSum.ts](./TwoSum.ts)

## ⏱️ Complexity

- **Time Complexity:** O(n) — we go through the array only once.
- **Space Complexity:** O(n) — we store elements in a map for quick lookup.
