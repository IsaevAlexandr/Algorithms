const { max } = Math;

// const maxSubsetSumNoAdjacement = arr => {
//     if (!arr.length) {
//         return -1;
//     }

//     if (arr.length === 1) {
//         return arr[0];
//     }

//     let maxArr = arr.slice();

//     maxArr[1] = max(maxArr[0], maxArr[1]);

//     for (let i = 2; i < maxArr.length; i++) {
//         maxArr[i] = max(maxArr[i - 1], maxArr[i - 2] + maxArr[i]);
//     }

//     return maxArr[maxArr.length - 1];
// };

const maxSubsetSumNoAdjacement = arr => {
    if (!arr.length) {
        return -1;
    }

    if (arr.length === 1) {
        return arr[0];
    }

    let first = arr[0];
    let second = max(arr[0], arr[1]);
    let current;

    for (let i = 2; i < arr.length; i++) {
        current = max(second, first + arr[i]);
        first = second;
        second = current;
    }

    return second;
};

const arr1 = [7, 10, 19, 19, 31, 34, 53];

console.log(maxSubsetSumNoAdjacement(arr1));
