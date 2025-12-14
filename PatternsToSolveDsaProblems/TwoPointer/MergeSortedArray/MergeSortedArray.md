# Problem: Merge Sorted Array (Two Pointers from End)

## 📖 Description

You are given two **sorted integer arrays** `nums1` and `nums2`, and two integers `m` and `n` representing the number of elements in `nums1` and `nums2` respectively.

Merge `nums2` into `nums1` **in-place**, so that `nums1` becomes a single sorted array of length `m + n`.

- `nums1` has a length of `m + n` where the last `n` elements are set to `0` and should be ignored.
- The merge must be done **in-place** without using extra space for another array.

---

## 🔢 Input Examples

```ts
(nums1 = [1, 2, 3, 0, 0, 0]), (m = 3);
(nums2 = [2, 5, 6]), (n = 3);
// Output: nums1 = [1,2,2,3,5,6]

(nums1 = [2, 5, 6, 0, 0, 0]), (m = 3);
(nums2 = [1, 3, 4]), (n = 3);
// Output: nums1 = [1,2,3,4,5,6]
```

## 🔒 Constraints

- `nums1.length == m + n`
- `nums2.length == n`
- `0 <= m, n <= 200`
- `1 <= m + n <= 200`
- `-10^9 <= nums1[i], nums2[j] <= 10^9`
- Both arrays are sorted in non-decreasing order

---

## 🛠️ Approach (Two Pointers from End)

1. Initialize three pointers:

   - `p1 = m - 1` → last element of the valid portion in `nums1`
   - `p2 = n - 1` → last element of `nums2`
   - `p = m + n - 1` → last index of `nums1`

2. While both `p1 >= 0` and `p2 >= 0`:

   - Compare `nums1[p1]` and `nums2[p2]`
   - Place the larger value at `nums1[p]`
   - Move the pointer of the array from which the value was taken
   - Decrement `p`

3. If any elements remain in `nums2`, copy them into `nums1`

**Why this works:**

- Since `nums1` has extra space at the end, starting from the back avoids overwriting values
- The largest elements are placed first, moving backwards
- No extra space is used, satisfying the in-place requirement

---

## ⏱️ Complexity

- **Time Complexity:** O(m + n) — Each element from both arrays is visited at most once
- **Space Complexity:** O(1) — No additional arrays or large data structures are used
