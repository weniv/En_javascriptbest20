-   info
    -   Lv.1
    -   Sorting

# Selecting Personnel for Expedition

![Javadog giving a speech](./3_1.webp)

## Problem Description

Javadog has returned to the village. The village looked strange with only children and teenagers remaining, as all the capable young men have been called away to various tasks. Javadog brought in the special engineers who have never had a decent meal for decades since being dragged around by various hazardous tasks and prepared a lavish dinner for them. The special engineers started to open up to Javadog as they gathered often.

Javadog's stone is the Mind Stone! With the Mind Stone, Javadog showed them the next 30 and 50 years after a revolution and the future of the next generation.

" Not for our future, but the future of our children!

Javadog selected talented individuals among them. However, they decided to take an exam to minimize the sacrifices. Only the top 30% of those who took the exam would be selected for the expedition.

" If no one comes out, no one will go out!

```py
army = [['A', 25, 24, 11, 12], ['B', 13, 22, 16, 14]]
```

Each input value is given in the form of `name, strength, mentality, technical skills, defensive power`. If only two people apply as shown above, top 30% cannot be selected, so no one will go out. If four people apply and all have different scores, only one person can go out. Complete the solution function that returns the name of the technician corresponding to the 30% selection criteria.

---

## Constraints

-   0 ≤ strength, mentality, technical skills, defensive power ≤ 25
-   1 ≤ number of technicians ≤ 10
-   The technician list is given as a two-dimensional list. Each list of input consists of the technician's name, strength, mentality, technical skills, and defensive power.
-   The top 30% of applicants should be selected in the order of high scores by obtaining the sum of their strength, mentality, technical skills, and defense. Even if there is a tie, the total number of people should not exceed 30%.
-   Technician names are not duplicated.
-   In case of a tie, only one person is considered.
-   If the number of tied technicians who get the highest score exceeds 30% of the total, no one can be selected.
-   The names of the technicians are returned in reversed alphabetical order.

---

## Examples

| Input                                                                                        | Output |
| -------------------------------------------------------------------------------------------- | ------ |
| [['A', 25, 24, 11, 12], ['B', 13, 22, 16, 14]]                                               | []     |
| [['A', 25, 25, 25, 25], ['B', 10, 12, 13, 11], ['C', 24, 22, 23, 21], ['D', 13, 22, 16, 14]] | ['A']  |

---

## Explanation for Examples

-   No one can be selected because selecting one of two equals 50%.
-   Only 'A' with the highest score can be selected because selecting one of the four people equals 25% which is less than 30%.
