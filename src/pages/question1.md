-   info
    -   lv0
    -   Implementation

# Proof of Qualification

## Problem Description

" Those who seek to sit on the throne! Prove your qualification!

Those who want to sit on the throne of algorithms must prove their qualification. If you cannot pass this test 'on your own,' you must review basic syntax and come back. There will be no easier problem than this one from now on.

Pie and Sun have hidden the 7 algorithm stones that can decipher any algorithm somewhere in the world, and have announced it. It is designed so that only those who have overcome the harsh trials can pass this test. The text they left behind is as follows.

```py
Those who seek to qualify! Head this way!

"  + +-+ -+-  "
"  ++ -- +-+  "
"  ++-+ -+ -  "
"  + ++-+ -+  "

Sun(1) and Moon(0),
Into the world of Code! (En-Coding)
```

![The King of Coding, Pie and Sun](./1_2.webp)

Convert the given string to 1 and 0 and convert them into characters within the ASCII code table.

---

## Constraints

-   65 ≤ converted number ≤ 122
-   The string will not contain anything other than +, -, and space.
-   Each string will be given as a one-dimensional array.
-   The space may or may not be given.

---

## Examples

| Input                                                                       | Output  |
| --------------------------------------------------------------------------- | ------- |
| [' + - - + - + - ', ' + + + - + - + ', ' + + - + + + - ']                   | 'Jun'   |
| [' + + + - - + + ', ' + + + - + - - ', '++----+', '+++ --+ -', '+++-+ - -'] | 'start' |
| [' + + - - - - + ', ' + + - + + - - ', '+ +-- +++ ', ' ++- ++++']           | 'algo'  |

---

## Explanation for Examples

The `+` becomes `1`, and the `-` becomes `0`, so ' + - - + - + - ' becomes 1001010. When this number is converted to decimal, it becomes 74. In the ASCII code table, 74 represents the uppercase letter J. By converting the other two strings in the same way and combining them, we get 'Jun.'
