# Problem: Days Between Two Dates

## 📖 Description

Given two dates `date1` and `date2` in the format `"YYYY-MM-DD"`, return the number of **days between them**.

- The result should always be a non-negative number.
- If the input dates are invalid, return `-1`.

---

## 💡 Examples

**Example 1:**  
Input: `date1 = "2020-01-15", date2 = "2019-12-31"`  
Output: `15`

**Example 2:**  
Input: `date1 = "2019-06-29", date2 = "2019-07-29"`  
Output: `30`

**Example 3:**  
Input: `date1 = "2007-09-16", date2 = "2025-09-16"`  
Output: `2922`

---

## 🛠️ Approach

- Convert both input dates to **timestamps** in milliseconds using `new Date().getTime()`.
- Subtract one from the other and take the **absolute value** using `Math.abs` to avoid negatives.
- Convert the result from milliseconds → days:
  - `1 day = 1000 ms * 60 sec * 60 min * 24 hr`.
- If either date is invalid, return `-1`.

---

## ⏱️ Complexity

- **Time Complexity:** O(1) — date conversion and arithmetic are constant-time operations.
- **Space Complexity:** O(1) — only a few variables are used.
