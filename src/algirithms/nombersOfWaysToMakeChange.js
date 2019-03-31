// const nombersOfWaysToMakeChange = (number, denoms) => {
//     let ways = {};

//     for (let amount = 0; amount < number + 1; amount++) {
//         ways[amount] = 0;
//     }

//     ways[0] = 1;

//     for (const denom of denoms) {
//         for (let amount = 1; amount < number + 1; amount++) {
//             if (denom <= amount) {
//                 ways[amount] += ways[amount - denom];
//             }
//         }
//     }

//     return ways[number];
// };

// const nombersOfWaysToMakeChange = (n, denoms) => {
//     let ways = {};

//     for (let amount = 0; amount < n + 1; amount++) {
//         ways[amount] = 0;
//     }

//     ways[0] = 1;

//     for (let denom of denoms) {
//         for (let amount = 1; amount < n + 1; amount++) {
//             if (denom <= amount) {
//                 ways[amount] += ways[amount - denom];
//             }
//         }
//     }

//     return ways[n];
// };

const nombersOfWaysToMakeChange = (n, coins) => {
    const ways = new Array(n + 1).fill(0);
    ways[0] = 1;

    for (coin of coins) {
        for (amoint = 1; amoint < n + 1; amoint++) {
            if (coin <= amoint) {
                ways[amoint] += ways[amoint - coin];
            }
        }
    }

    return ways[n];
};

const denoms = [2, 5];

console.log(nombersOfWaysToMakeChange(10, denoms));

const minNumberOfCoinsToChange = (n, coins) => {
    const numberOfCoins = new Array(n + 1).fill(Infinity);
    numberOfCoins[0] = 0;

    for (coin of coins) {
        for (amount = 1; amount < n + 1; amount++) {
            if (coin <= amount) {
                numberOfCoins[amount] = Math.min(
                    numberOfCoins[amount],
                    1 + numberOfCoins[amount - coin],
                );
            }
        }
    }

    return numberOfCoins[n] !== Infinity ? numberOfCoins[n] : -1;
};

console.log(minNumberOfCoinsToChange(7, [2, 4, 1]));
console.log(minNumberOfCoinsToChange(7, [5, 4]));
