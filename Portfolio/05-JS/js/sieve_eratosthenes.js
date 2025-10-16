function sieveOfEratosthenes(limit) {
    const primes = [];
    const isPrime = new Array(limit + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    for(let num = 2; num <= limit; num++) {
        if(isPrime[num]) {
            primes.push(num);
            for(let multiple = num * num; multiple <= limit; multiple += num) {
                isPrime[multiple] = false;
            }
        }
    }
    for(let i=2; i<=limit; i++) {
        if(isPrime[i]) {
            console.log(i);
        }
    }
    return primes;
}

sieveOfEratosthenes(100);
