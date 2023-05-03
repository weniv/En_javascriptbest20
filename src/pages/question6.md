-   info
    -   lv1
    -   Stack | Queue

# Sandwich Packaging

## Problem Description

Licat has come down to his hometown to prepare for a revolution. Licat's Fish Inc., which he established before leaving to get the original stone, has grown from 20 employees to 10,000.

Licat traveled around the city without telling anyone about his return. Despite the large economic growth centered around Licat's Fish Inc., there were still shady areas. Some people could not go to the hospital, some were begging, and more and more people were forced into labor in Lion Town because even with many cats, they could not beat the lions. They were persecuted, looted, and threatened more as much as they achieved significant economic growth.

Licat settled in the village where people who returned from Lion Town gathered. Their minds and spirits got exhausted and no one cared about them, so they comforted each other and built a village.

Licat set up a free sandwich cafeteria here and took care of the packaging work without asking anyone. Licat got up early in the morning and prepared the ingredients. However, since there was a limit to what could be obtained from the village, he prepared the ingredients from the surrounding villages. Once the ingredients were ready, he packaged a sandwich one by one in the order of `bread → egg → bacon → vegetable → bread`.

1. When the ingredients come in the order of [bread, bread, egg, bacon, vegetable, bread, egg, bacon, vegetable, bread],
2. You can package one sandwich from the second to sixth ingredients.
3. Now, you can package one sandwich with the first ingredient and the seventh to tenth ingredients.
4. Therefore, a total of two sandwiches can be made. Sandwiches cannot be packaged if the order of the ingredients is reversed.

Given the ingredients that Licat receives in a list, output the number of sandwiches that can be packaged.

---

## Constraints

-   1 ≤ length of the ingredients ≤ 1,000,000
-   The ingredients are as follows:
    -   1: bread
    -   2: egg
    -   3: bacon
    -   4: vegetable
-   There is only one correct answer.

---

## Examples

| Input                             | Output |
| --------------------------------- | ------ |
| [1, 2, 3, 4, 1, 1, 2, 3, 4]       | 1      |
| [1, 1, 1, 2, 3, 4, 1, 2, 3, 4, 1] | 2      |
| [1, 2, 3, 4, 2, 3, 4, 1]          | 0      |

---

## Explanation for Examples

-   A list of numbers is inputted.
-   The order of the sandwich must always follow 1, 2, 3, 4, 1.
-   The ingredients cannot be taken out in the middle by changing the order. Only packaged sandwiches can be removed from the input list.
-   The number of sandwiches that can be made from the list is outputted as the result.
