const mem = {};

// time O(n) | space O(1)
const fibannacci = n => {
    const fib = [0, 1];

    if (n === 1) {
        return fib[0];
    }

    if (n === 2) {
        return fib[1]
    }

    while (n - 1) { // тут внимательнее 
        fib[0] = fib[0] + fib[1];
        [fib[0], fib[1]] = [fib[1], fib[0]];
        n--;
    }

    return fib[0];
}

// // time O(n) | space O(n)
// const fibannacci =  n => {

//     if (n === 2) {
//         return 1;
//     }

//     if (n === 1) {
//         return 0;
//     }

//     if (n in mem) {
//         return mem[n];
//     }

//     mem[n] = fibannacci(n - 2) + fibannacci(n -1);

//     return mem[n];
// }

// time O(2^n) | space O(n)
// const fibannacci =  n => {

//     if (n === 2) {
//         return 1;
//     }

//     if (n === 1) {
//         return 0;
//     }

//    return fibannacci(n - 2) + fibannacci(n -1);
// }

console.log(fibannacci(100))
