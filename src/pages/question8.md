-   info
    -   Lv.0
    -   Math

# Weapon Production

## Problem Description

Gary is preparing to buy weapons by exchanging the jewels that SoulGom received in the Arctic for money. The forge Gary is visiting sells swords for 3000 coins per piece, and an additional 300 coins are needed for sharpening. As a regular customer, one unsharpened sword is provided for every 10 swords, and one sharpened sword is provided for every 100 swords.

If the budget for buying weapons is given, how many sharpened swords can Gary get?

---

## Constraints

-   The budget is always a positive integer and multiples of 100.
-   100 ≤ budget ≤ 1000000

---

## Examples

| Input | Output |
| ----- | ------ |
| 100   | 0      |
| 36600 | 12     |
| 66600 | 22     |

---

## Explanation for Examples

-   If the budget is 100 coins, Gary can buy 0 swords.
-   If the budget is 36600 coins, Gary can get 12 sharpened swords. (3300 coins * 11 + (complimentary sword * 1 + 300) = 36600 coins)
-   If the budget is 66600 coins, Gary can get 22 sharpened swords. (3300 coins * 20 + (complimentary sword * 2 + 300 * 2) = 66600 coins)
