const minNumberOfCoinsToChange = (n, coins) => {
    const numbersOfCoin = new Array(n + 1).fill(Infinity);

    numbersOfCoin[0] = 0;

    for (coin of coins) {
        for (amount = 1; amount < n + 1; amount++) {
            if (coin <= amount) {
                numbersOfCoin[amount] = Math.min(
                    numbersOfCoin[amount],
                    1 + numbersOfCoin[amount - coin],
                );
            }
        }
    }

    return numbersOfCoin[n] !== Infinity ? numbersOfCoin[n] : -1;
};

console.log(minNumberOfCoinsToChange(7, [2, 4, 1]));
console.log(minNumberOfCoinsToChange(7, [5, 4]));

// const minNumberOfCoinsToChange = (n, coins) => {
//     const numberOfCoin = new Array(n + 1).fill(Infinity);

//     numberOfCoin[0] = 0;

//     for (const coin of coins) {
//         for (let amount = 0; amount < n + 1; amount++) {
//             if (coin <= amount) {
//                 numberOfCoin[amount] = Math.min(
//                     numberOfCoin[amount],
//                     1 + numberOfCoin[amount - coin],
//                 );
//             }
//         }
//     }

//     return numberOfCoin[n] !== Infinity ? numberOfCoin[n] : -1;
// };
