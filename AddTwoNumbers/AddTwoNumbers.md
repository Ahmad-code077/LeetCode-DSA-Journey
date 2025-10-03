# Problem: Add Two Numbers

## 📖 Description

You are given two non-empty linked lists representing two non-negative integers.  
The digits are stored in **reverse order**, and each of their nodes contains a single digit.

Add the two numbers and return the sum as a **linked list**.

You may assume the two numbers do not contain any leading zeros, except the number `0` itself.

---

## 💡 Examples

**Example 1:**  
Input: `l1 = [2,4,3]`, `l2 = [5,6,4]`  
Output: `[7,0,8]`  
Explanation: `342 + 465 = 807`.

**Example 2:**  
Input: `l1 = [0]`, `l2 = [0]`  
Output: `[0]`

**Example 3:**  
Input: `l1 = [9,9,9,9,9,9,9]`, `l2 = [9,9,9,9]`  
Output: `[8,9,9,9,0,0,0,1]`

---

## 🛠️ Approach

- Use a **dummy head node** to simplify handling of the result list.
- Keep a variable `carry` to handle sums greater than `9`.
- Traverse both lists simultaneously:
  - Add corresponding values from `l1`, `l2`, and `carry`.
  - Compute the new digit as `sum % 10`.
  - Update `carry = Math.floor(sum / 10)`.
  - Append the digit to the result list.
- Continue until both lists and the carry are processed.
- Return the result list starting from `dummyHead.next`.

---

## ⏱️ Complexity

- **Time Complexity:** O(max(m, n)) — where `m` and `n` are the lengths of the two linked lists.
- **Space Complexity:** O(max(m, n)) — the result list length is at most `max(m, n) + 1`.
