const fib = (n) => {
    if(n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(fib(5)); // outputs quickly
console.log(fib(10)); // outputs quickly
console.log(fib(50)); // takes lot of time
