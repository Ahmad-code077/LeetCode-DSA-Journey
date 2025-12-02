# Problem: Merge Two Sorted Linked Lists

## 📖 Description

You are given two **sorted singly linked lists**, `list1` and `list2`.

Merge them into a **single sorted linked list**. You should **reuse the nodes** from the original lists instead of creating new ones.

Return the **head of the merged linked list**.

---

## 💡 Examples

**Example 1:**  
Input: `list1 = 1 → 2 → 4`, `list2 = 0 → 3 → 4 → 5`  
Output: `0 → 1 → 2 → 3 → 4 → 4 → 5`

**Example 2:**  
Input: `list1 = []`, `list2 = 1 → 2`  
Output: `1 → 2`

**Example 3:**  
Input: `list1 = 1 → 3 → 5`, `list2 = 2 → 4 → 6`  
Output: `1 → 2 → 3 → 4 → 5 → 6`

---

## 🛠️ Approach

1. Create a **dummy node** to simplify handling the head of the merged list.
2. Maintain a pointer `tail` which always points to the last node of the merged list.
3. Traverse both lists while neither is null:
   - Compare the current nodes of both lists.
   - Append the smaller node to `tail.next`.
   - Move the pointer of the chosen list forward.
   - Move `tail` forward.
4. After the loop, if one list still has nodes left, attach it to `tail.next`.
5. Return `dummy.next` as the head of the merged list.

---

## ⏱️ Complexity

- **Time Complexity:** O(n + m) — traverse both lists once.
- **Space Complexity:** O(1) — no extra space except for pointers; nodes are reused.
