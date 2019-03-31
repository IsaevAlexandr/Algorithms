// const insertionSort = arr => {
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
//       [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
//     }
//   }

//   return arr;
// };
const insertionSort = arr => {
  let j, i = 1;

  while (i < arr.length) {
    j = i;

    while (j > 0 && arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      j--;
    }

    i++;
  }
  return arr;
};

const example = [4, 3];

console.log(insertionSort(example));
