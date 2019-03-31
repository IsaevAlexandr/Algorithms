// time O(n^2), space O(1)
const twoNumberSum = (arr, expected) => {
  for (let i = 0; i < arr.length - 1; i++) {
    const ferstSum = arr[i];

    for (let j = i; j < arr.length - 1; j++) {
      const secomdNum = arr[j];

      if (ferstSum + secomdNum === expected) {
        return [ferstSum, secomdNum];
      }
    }
  }
  return [];
};

// time O(n), space O(n)
const twoNumberSumHashTable = (arr, expected) => {
  const hashTable = {};

  for (let i = 0; i < arr.length - 1; i++) {
    const number = arr[i];
    candidate = expected - number;

    if (candidate in hashTable) {
      return [number, candidate];
    }

    hashTable[number] = true;
  }

  return [];
};

// time O(nlog(n)), space O(1)
const twoNumberSumSorted = (arr, expected) => {
  const sortedArray = arr.sort((a, b) => a - b);
  let left = 0;
  let right = sortedArray.length - 1;

  while (right > left) {
    const sum = sortedArray[left] + sortedArray[right];

    if (expected === sum) {
      return [sortedArray[left], sortedArray[right]];
    }

    sum > expected ? right-- : left++;
  }
  return [];
};

const arr = [-3, 1, 2, 3, 4, 5, 6, -5, -10, -8, 13];

console.log(twoNumberSum(arr, 10));
console.log(twoNumberSumHashTable(arr, 10));
console.log(twoNumberSumSorted(arr, 10));
