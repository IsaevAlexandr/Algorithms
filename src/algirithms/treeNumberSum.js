// time O(n^2) | space O(n)
const treeNumberSum = (arr, expect) => {
  const sortedArr = arr.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < sortedArr.length - 2; i++) { // важно, -2
    left = i + 1;
    right = sortedArr.length - 1;

    while (left < right) {
      const sum = sortedArr[i] + sortedArr[left] + sortedArr[right];
      if (sum === expect) {
        result.push([sortedArr[i], sortedArr[left], sortedArr[right]]);
        right--;
        left++;

        continue;
      }

      sum < expect ? left++ : right--;
    }
  }

  return result;
};

const arr = [12, 3, 1, 2, -6, 5, -8, 6];

console.log(treeNumberSum(arr, 0));
