var getPrimeFactors = function (n) {
  "use strict";

  function isPrime(n) {
    var i;
    if (n <= 1) return false;
    for (i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  var sequence = [];
  for (let i = 2; i <= n; i++) {
    if (n % i === 0 && isPrime(i)) {
        sequence.push(i);
    }
    };
    return sequence;
}
// the prime factors for this number are: [ 2, 3, 5, 7, 11, 13 ]
console.log(getPrimeFactors(30030));
