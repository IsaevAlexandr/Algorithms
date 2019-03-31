const { max } = Math;

// time O(n) | space O(1)
const kabaneAlgorithm = arr => {
    let maxCurrentSum = arr[0];
    let maxSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        maxCurrentSum = max(arr[i], arr[i] + maxCurrentSum);
        maxSum = max(maxCurrentSum, maxSum);
    }

    return maxSum;
};

const a = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4];
// const a = [-2, -4, 2, -100, -1000, 4, -7, 6, -5, -1, -6,-1,2];
console.log(kabaneAlgorithm(a));
