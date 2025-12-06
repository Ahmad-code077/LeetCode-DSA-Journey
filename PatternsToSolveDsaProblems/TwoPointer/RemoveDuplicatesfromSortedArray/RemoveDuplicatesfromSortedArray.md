# 4. Remove Duplicates from Sorted Array

## 📖 Description

Given a **sorted** array `nums`, remove the duplicates **in-place** so that each unique element appears **only once**.

Return the number of unique elements `k`.  
After the function runs, the first `k` elements of `nums` should contain the unique values in order.

The values beyond `k` can be ignored.

---

## 🔢 Example

**Input:**  
nums = [1,1,2]

**Output:**  
2  
Updated array → [1,2,_]

---

## 🔒 Constraints

- `1 <= nums.length <= 100000`
- `-10^4 <= nums[i] <= 10^4`
- `nums` is sorted in **non-decreasing** order
- Your algorithm must run in **O(n)** time and use **O(1)** extra space

---

## 🧑‍💻 Function

```ts
function removeDuplicates(nums: number[]): number {
  // your code here
}
```
