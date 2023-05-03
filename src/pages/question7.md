-   info
    -   Lv.1
    -   Two Pointers | Sliding Window

# Sum of Two Numbers

![SoulGom visits a mine in the Arctic](./7_1.webp)

## Problem Description

SoulGom had no hometown. She was an NPC created by Pie and Sun! But by receiving a Soul Stone, she gained a soul as well as great wisdom and the ability to see the world of souls.

SoulGom thought to herself,

" What can I do to help?

Through the wisdom she gained from the Soul Stone, SoulGom was able to predict that she would soon need a huge amount of war funds. She headed for the Arctic. It is a place where no living creatures can survive due to extreme cold. Because her body was not that of a living creature, she could move around freely. She went deeper into the area to the place where the ancient treasure was hidden untouched by anyone's hand.

There were a tremendous amount of jewels hidden there, more than all the world's treasures combined. SoulGom thought that if war broke out, the value of money would plummet infinitely, hyperinflation would engulf Weniv World, and so the value of jewels would shine even more brightly. Looking at the jewels, SoulGom smiled faintly.

Faith, worth, role, reason for existence, innovation and revolution, cartels, and more... As she swung her pickaxe, SoulGom mulled over many pieces of knowledge that had only been stored in her head as simple words until now and transformed them into wisdom and soul.

SoulGom made a mining cart and was able to move even more jewels. The mining cart has a weight capacity and can only carry up to two items at a time. Please find the two jewels that can be combined to match the weight of the mining cart, given the weight of each jewel.

---

## Constraints

-   2 ≤ length of list ≤ 99
-   There is only one correct answer.
-   The index of the result should be returned in ascending order.
-   Input is given as a two-dimensional list in the form of `[ weight of jewels list, weight of mining cart ]`.

---

## Examples

| Weight of Jewels List | Weight of Mining Cart | Output |
| --------------------- | --------------------- | ------ |
| [4, 9, 11, 2]         | 6                     | [0, 3] |
| [2, 2]                | 4                     | [0, 1] |
| [1, 5, 10, 20, 93]    | 103                   | [2, 4] |
| [3, 4, 5]             | 9                     | [1, 2] |

---

## Explanation for Examples

-   There are no cases with no answer.
-   Always two jewels are needed to match the weight of the mining cart.
-   The index values of the two jewels should be output as the result.
