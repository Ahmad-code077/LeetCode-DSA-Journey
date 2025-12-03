# Problem: Reverse String (Two Pointers)

## 📖 Description

Given an array of characters `s`, **reverse the array in-place**.

- You must do this by modifying the input array **directly**.
- Do not allocate extra space for another array.

---

## 💡 Examples

**Example 1:**  
Input: `s = ["h","e","l","l","o"]`  
Output: `["o","l","l","e","h"]`

**Example 2:**  
Input: `s = ["H","a","n","n","a","h"]`  
Output: `["h","a","n","n","a","H"]`

---

## 🛠️ Approach (Two Pointers)

1. Initialize two pointers:
   - `left` at the start of the array (`0`)
   - `right` at the end of the array (`s.length - 1`)
2. While `left < right`:
   - Swap the elements at `left` and `right`.
   - Move `left` one step to the right (`left++`).
   - Move `right` one step to the left (`right--`).
3. Repeat until `left >= right`.
4. The array is now reversed **in-place**.

**Why this is Two Pointers:**

- Two indices traverse the array simultaneously from opposite ends.
- No extra space is used.
- The problem is solved in linear time.

⏱️ Complexity

- **Time Complexity:** O(n) — each element is visited at most once.
- **Space Complexity:** O(1) — only two pointers are used, no extra array.
