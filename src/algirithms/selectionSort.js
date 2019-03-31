// const selectionSort = arr => {
//   let smalest;
//   for (let i = 0; i < arr.length - 1; i++) {
//     smalest = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[smalest] > arr[j]) {
//         smalest = j;
//       }
//     }
//     [arr[smalest], arr[i]] = [arr[i], arr[smalest]];
//   }

//   return arr;
// };

const selectionSort = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        smalest = i;

        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smalest]) {
                smalest = j;
            }
        }

        [arr[i], arr[smalest]] = [arr[smalest], arr[i]]
    }

    return arr;
}


const example = [12, 3, 1, 2, -6, 5, -8, 6];
// const example = [1, 2, 3, 4, 5];

console.log(selectionSort(example));
// console.log(insertionSort(example));
