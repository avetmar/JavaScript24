//Iterative Approach
function fibonacci(n) {
  let fibSequence = [];
  let a = 0,
    b = 1;

  for (let i = 0; i < n; i++) {
    fibSequence.push(a);
    let next = a + b;
    a = b;
    b = next;
  }

  return fibSequence;
}
// Example usage:
console.log(fibonacci(10)); // Outputs: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

//Recursive Approach
function fibonacciR(n) {
  if (n <= 1) return n;
  return fibonacciR(n - 1) + fibonacciR(n - 2);
}
// Example usage:
console.log(fibonacciR(10)); // Outputs: 55 (the 10th Fibonacci number)

//Recursive with Memoization
function fibonacciM(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;

  memo[n] = fibonacciM(n - 1, memo) + fibonacciM(n - 2, memo);
  return memo[n];
}

// Example usage:
console.log(fibonacciM(10)); // Outputs: 55 (the 10th Fibonacci number)
