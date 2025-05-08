# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

The divide and conquer sum using three way splitting runs in linear time, $\Theta$(n).
Since we are splitting into 3 subarrays of n/3, and do constant work, the recurrence relation is T(n) = 3T(n/3) + $\Theta$(1)

Which is similar to the recurrence for merge sort: T(n) = aT(n/b) + $\Theta$(n^d), with:
a = 3 
b = 3
d = 0

Since a = b^d = 3^0 = 1 and a = 3 > 1, we are in Case 1 of the Master Theorem, which gives the the final complexity of $\Theta$(n^(log_3(3))) = $\Theta$(n).

Conclusion: Although the divide and conquer sum uses recursion and has function call overhead, it matches the complexity of a simple iterative sum.

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."

Other Sources Used: Aside from the lecture videos and slides for this class, I consulted Chat GPT for help regarding the recurring issue "Error: Cannot find module 'jsverify'", as well as a recurring issue with ESlint consistently failing.