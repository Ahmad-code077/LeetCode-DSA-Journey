# Problem: Remove Duplicates from Sorted Array

## 📖 Description

Given a **sorted array** `nums`, remove the **duplicates in-place** such that each element appears only once.  
Return the **new length** of the array after duplicates are removed.

- Do not allocate extra space for another array.
- You must do this **in-place** with O(1) extra memory.

---

## 🔢 Input Examples

**Example 1:**  
Input: `nums = [1,1,2]`  
Output: `2`  
Explanation: The array becomes `[1,2,_]` (the underscores are irrelevant).

**Example 2:**  
Input: `nums = [0,0,1,1,1,2,2,3,3,4]`  
Output: `5`  
Explanation: The array becomes `[0,1,2,3,4,_,_,_,_,_]`.

**Example 3:**  
Input: `nums = [1,1,2,2,3,3]`  
Output: `3`  
Explanation: The array becomes `[1,2,3,_,_,_]`.

---

## 🛠️ Approach (Two Pointers)

1. Initialize a `write` pointer at index `0`. This marks the position where the next **unique value** will be written.
2. Iterate through the array with a `read` pointer starting from index `1`.
3. For each `read` position:
   - If `nums[write] !== nums[read]`, increment `write` and copy `nums[read]` to `nums[write]`.
   - Otherwise, continue to the next element.
4. After finishing, return `write + 1` as the **new length** of the array.

**Why this works:**

- The array is sorted, so duplicates are consecutive
- The `write` pointer ensures that each unique element is placed in order
- This method uses constant extra space

---

## ⏱️ Complexity

- **Time Complexity:** O(n) — Each element is visited once
- **Space Complexity:** O(1) — Only two pointers are used
