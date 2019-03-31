const bubbleSort = arr => {
  let isSorted = false;
  let completed = 0;

  while (!isSorted) {
    isSorted = true;

    for (let i = 0 + completed; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        isSorted = false;
      }
    }
  }

  return arr;
};

const insertionSort = arr => {
  for (i = 1; i < arr.length; i++) {
    for (j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
    }
  }

  return arr;
};

const example = [12, 3, 1, 2, -6, 5, -8, 6];

// console.log(bubbleSort(example));
console.log(insertionSort(example));
