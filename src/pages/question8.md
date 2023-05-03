-   info
    -   Lv.0
    -   Math

# Weapon Production

## Problem Description

Gary is preparing to buy weapons by exchanging the jewels that SoulGom received in the Arctic. The forge Gary is visiting sells swords for 3000 won per piece, and an additional 300 won is added for sharpening. As a regular customer, one unsharpened sword is provided for every 10 swords, and one sharpened sword is provided for every 100 swords.

If the budget for buying weapons is given, how many sharpened swords can Gary get?

---

## Constraints

-   The budget is always a positive integer and multiples of 100.
-   100 ≤ Budget ≤ 1000000

---

## Examples

| Input | Output |
| ----- | ------ |
| 100   | 0      |
| 36600 | 12     |
| 66600 | 22     |

---

## Explanation for Examples

-   If the budget is 100 won, Gary can buy 0 swords.
-   If the budget is 36600 won, Gary can get 12 sharpened swords. (3300 won _ 11 + (complimentary sword _ 1 + 300) = 36600 won)
-   If the budget is 66600 won, Gary can get 22 sharpened swords. (3300 won _ 20 + (complimentary sword _ 2 + 300 \* 2) = 66600 won)
