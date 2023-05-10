// Source: https://www.w3resource.com/c-programming-exercises/recursion/index.php
// Exercise 1
// Write a program to print the first 10 natural numbers using recursion.
function exercise1(n) {
    if (n <= 10) {
        console.log(n);
        exercise1(n + 1);
    }
}

// Exercise 2
// Write a program in C to calculate the sum of numbers from 1 to n using recursion.
function exercise2(n) {
    if (n <= 1) {
        return n;
    }

    return n + exercise2(n - 1);
}

// Exercise 3
// Write a program in C to print the Fibonacci Series using recursion.
function fibonacci(n) {
    if (n <= 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function exercise3(n) {
    for (let i = 0; i < n; i++) {
        console.log(fibonacci(i));
    }
}

// exercise1(0);
// console.log(exercise2(5));
// exercise3(10);