function fib(num) {
  if (num === 1 || num === 2) return 1;
  return fib(num - 2) + fib(num - 1);
}
