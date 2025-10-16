function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    const fibSequence = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    return fibSequence;
}

console.log(fibonacci(10));
