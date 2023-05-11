-   info
    -   Lv.1
    -   Regular Expression

# Dream Design

![Binky with Real Stone](./4_1.webp)

## Problem Description

Binky who has the Real Stone can create a fantasy world just like reality. Binky decides to show the future through this illusion like how many things can be achieved by those who live autonomously and independently.

Although the Real Stone cannot actually help them make it happen, it can at least become a ray of hope in the desperate Weniv World.

```py
['Binky trained 10 times "A". Binky trained 20 times "B" even though the weather was bad. Binky trained 10 times "B" while it was raining.',
'Binky contemplated about "A" as much as 30. Binky thought about "B" as much as 40. Binky thought about "A" as much as 70. Surprisingly, Binky thought 10 times "C".']
```

Each item in the list represents 'training value' and 'consideration value'. Extract all the numbers from the first string. The number of times "A" was trained is 10 and the number of times "B" was trained is 30. Extract numbers from the second string as well. The number of times "A" was thought about is 100, the number of times "B" was thought about is 40, and the number of times "C" was thought about is 10. Calculate this value as `training value X consideration value`. "C" disappears because it was not trained.

Original future: When multiplying the number of times "A" was trained by the number of times "A" was thought about, the result is 1000. When multiplying the number of times "B" was trained by the number of times "B" was thought about, the result is 1200. Sum of these values is the original future.

Changed future: Add 100 to the value that was trained most and thought about most. Therefore, the number of times "B" was trained becomes 130 and the number of times "A" was thought about becomes 200. Finally, since the number of times "A" was trained is 10 and the number of times "A" was thought about is 200, the result is 2000. The number of times "B" was trained is 130, and the number of times "B" was thought about is 40, so  the result of multiplication becomes 5200.

The result is as follows.

```py
'The final design of the dream was originally 2200 but changed to 7200. We create Vision based on these numbers.'
```

---

## Constraints

-   The length of the input list is 2. Strings are entered in the form of [training value, consideration value].
-   Strings are always sentence-separated by a period. There is always a unique number and a unique alphabet wrapped in double quotation marks(`""`) in each split sentence.
-   If there is no matching consideration value or training value, the output should be "The future is not visible.".
-   1 ≤ number of split sentences ≤ 10
-   1 ≤ numeric value ≤ 1000
-   A ≤ alphabet ≤ z

---

## Examples

| Input                                                                                                                                                                                      | Output                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| ['Trained 100 times "A". 201 for "B". Practiced "B" twenty more than 120.', 'Contemplated "A" as much as 30. Contemplated "B" as much as 40. 70 for "A". "C" 10. "D" 10. "A" 10. "z" 10.'] | 'The final design of the dream was originally 23840 but changed to 37840. We create Vision based on these numbers.' |

---

## Explanation for Examples

-   The training values are 100 for "A" and 321 for "B". Since "B" was trained more, adding 100 to "B" makes it 421.
-   The consideration values are 110 for "A" and 40 for "B". The rest are ignored as they do not match the training values. Since "A" was considered more, adding 100 to "A" makes it 210.
-   The original future value (100 * 110) + (321 * 40) results in 23840.
-   The changed future value (100 * 210) + (421 * 40) results in 37840.
-   Based on these results, return the text "The final design of the dream was originally 23840 but changed to 37840. We create Vision based on these numbers."
