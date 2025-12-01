# Problem: Reorder Linked List

## 📖 Description

You are given the `head` of a singly linked list.  
Reorder the list to the following form:

L0 → Ln → L1 → Ln-1 → L2 → Ln-2 → …

---

## 💡 Example

**Example 1:**  
Input: `head = [1,2,3,4]`  
Output: `[1,4,2,3]`

**Example 2:**  
Input: `head = [1,2,3,4,5]`  
Output: `[1,5,2,4,3]`

---

## 🛠️ Approach

1. **Find the middle of the list** using the fast & slow pointer technique:

   - `slow` moves **1 step** at a time.
   - `fast` moves **2 steps** at a time.
   - At the end, `slow` points to the middle.

2. **Reverse the second half** of the list starting from `slow.next`.

3. **Merge the two halves**:
   - Let `first` point to the head of the first half.
   - Let `second` point to the head of the reversed second half.
   - While `second` is not `null`:
     - Temporarily store `first.next` and `second.next`.
     - Set `first.next = second`.
     - Set `second.next = tmp1`.
     - Move `first` to `tmp1` and `second` to `tmp2`.

---

## ⏱️ Complexity

- **Time Complexity:** O(n) — traverse the list a few times.
- **Space Complexity:** O(1) — only pointers are used, no extra nodes.
