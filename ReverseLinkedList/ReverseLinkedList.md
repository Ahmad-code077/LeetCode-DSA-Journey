# Problem: Reverse a Singly Linked List

## 📖 Description

You are given the head of a singly linked list.

Your task is to **reverse the linked list** in-place and return the new head of the reversed list.

Example:

Input linked list: `1 -> 2 -> 3 -> 4 -> 5 -> null`  
Output linked list: `5 -> 4 -> 3 -> 2 -> 1 -> null`

---

## 💡 Approach

1. **Initialize two pointers**:
   - `prev` as `null`
   - `current` as `head`
2. Iterate through the list until `current` becomes `null`:
   - Save the next node: `nextNode = current.next`
   - Reverse the link: `current.next = prev`
   - Move pointers forward:
     - `prev = current`
     - `current = nextNode`
3. After the loop, `prev` will point to the **new head** of the reversed list.

This works because you reverse each node's pointer as you traverse the list, one by one.

## ⏱️ Complexity

- **Time Complexity:** O(n) — Each node is visited exactly once.

- **Space Complexity:** O(1) — Reversal is done in-place, no extra memory is used.
