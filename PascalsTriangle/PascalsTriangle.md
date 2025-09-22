# Problem: Pascal's Triangle

## 📖 Description

Given an integer `numRows`, return the first `numRows` of **Pascal's Triangle**.

In Pascal's Triangle:

- Each number is the sum of the two numbers directly above it.
- The first and last numbers of each row are always `1`.

---

## 💡 Example

Input:

```bash
numRows = 5
```

Output:

```bash
[
[1],
[1,1],
[1,2,1],
[1,3,3,1],
[1,4,6,4,1]
]
```

Explanation:  
Each row is formed by adding adjacent numbers from the row above, with 1’s at the edges.

---

## 🛠️ Approach

- Step 1: Initialize an empty array `mainArray` to hold all rows.
- Step 2: For each row index `i`, create an empty `rows` array.
- Step 3: Loop through each column `j` in the row:
  - If `j === 0` or `j === i`, push `1` (edge values).
  - Otherwise:
    - Get the left value: `mainArray[i - 1][j - 1]`.
    - Get the right value: `mainArray[i - 1][j]`.
    - Compute their sum: `leftValue + rightValue`.
    - Push the sum into `rows`.
- Step 4: Push the completed row into `mainArray`.
- Step 5: Return the triangle.

---

## 🧑‍💻 Code (TypeScript)

See [PascalsTriangle.ts](./PascalsTriangle.ts)

---

## ⏱️ Complexity

- **Time Complexity:** O(n²) — because we fill each row up to `numRows`, and each row takes proportional time.
- **Space Complexity:** O(n²) — we store all rows of the triangle in memory.
