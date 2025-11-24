# Problem: Best Time to Buy and Sell Stock

## 📖 Description

You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`-th day.

You want to maximize your profit by choosing a **single day to buy** one stock and choosing a **different day in the future to sell** that stock.

Return the **maximum profit** you can achieve from this transaction. If you cannot achieve any profit, return `0`.

---

## 💡 Examples

**Example 1:**  
Input: `prices = [7,1,5,3,6,4]`  
Output: `5`  
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5.

**Example 2:**  
Input: `prices = [7,6,4,3,1]`  
Output: `0`  
Explanation: Prices decrease every day, so no profit can be made.

**Example 3:**  
Input: `prices = [3,8,2,5,1,7]`  
Output: `6`  
Explanation: Buy on day 5 (price = 1) and sell on day 6 (price = 7), profit = 7 - 1 = 6.

---

## 🛠️ Approach

- Initialize two variables:
  - `minPrice` to track the **lowest price seen so far**.
  - `maxProfit` to track the **maximum profit** calculated.
- Loop through each day's price:
  - Update `minPrice` if the current price is lower than the previous `minPrice`.
  - Calculate `currentProfit = price - minPrice`.
  - Update `maxProfit` if `currentProfit` is greater.
- Return `maxProfit` at the end.

---

## ⏱️ Complexity

- **Time Complexity:** O(n) — single pass through the array.
- **Space Complexity:** O(1) — only two variables used, no extra data structures.
