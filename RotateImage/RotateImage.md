# Problem: Rotate Image (90° Clockwise)

## 📖 Description

You are given an `n x n` 2D matrix representing an image.

Rotate the image **90 degrees clockwise** in-place.  
You **cannot allocate another 2D matrix**; you must modify the input matrix directly.

---

## 💡 Examples

**Example 1:**  
Input: `matrix = [[1,2,3],[4,5,6],[7,8,9]]`  
Output: `[[7,4,1],[8,5,2],[9,6,3]]`

**Example 2:**  
Input: `matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]`  
Output: `[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]`

---

## 🛠️ Approach

1. **Transpose the matrix**

   - Swap elements across the diagonal: `matrix[i][j] ↔ matrix[j][i]`
   - Only swap where `j > i` to avoid double-swapping.

2. **Reverse each row**
   - After transposing, reverse each row to complete the 90° rotation.

**Why it works:**

- Transpose flips rows and columns.
- Reversing rows shifts the elements into the correct clockwise positions.

**Step-by-step example (3x3):**

Original matrix:

```
1 2 3
4 5 6
7 8 9
```

After transpose:

```
1 4 7
2 5 8
3 6 9
```

After reversing rows:

```
7 4 1
8 5 2
9 6 3
```

## ⏱️ Complexity

- **Time Complexity:** O(n²) — every element is visited twice (transpose + reverse).
- **Space Complexity:** O(1) — rotation is done in-place, no extra memory needed.
