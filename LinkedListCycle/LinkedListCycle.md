# Problem: Linked List Cycle Detection

## 📖 Description

You are given the `head` of a linked list.

Return `true` if the linked list contains a **cycle**, otherwise return `false`.

A linked list has a cycle if there is some node in the list that can be reached again by continuously following the `next` pointer.

---

## 💡 Examples

**Example 1:**  
Input: `head = [3, 2, 0, -4]`, `pos = 1`  
Output: `true`  
Explanation: The tail connects to the node at index 1, forming a cycle.

**Example 2:**  
Input: `head = [1, 2]`, `pos = 0`  
Output: `true`  
Explanation: The tail connects to the node at index 0, forming a cycle.

**Example 3:**  
Input: `head = [1, 2, 3]`, `pos = -1`  
Output: `false`  
Explanation: The linked list does not contain a cycle.

---

## 🛠️ Approach

- Use **two pointers**, `slow` and `fast`.
  - `slow` moves **1 step** at a time.
  - `fast` moves **2 steps** at a time.
- Iterate through the list:
  1. If `fast` or `fast.next` becomes `null`, the list ends → **no cycle**.
  2. If `slow === fast` at any point → **cycle detected**.

This method works because in a cycle, the faster pointer eventually "laps" the slower pointer.

---

## ⏱️ Complexity

- **Time Complexity:** O(n) — both pointers traverse the list at most once.
- **Space Complexity:** O(1) — no extra memory is needed for storage.
