/**
 * Swap arrays elements
 * @param {*Array} array 
 * @param {*Number} firstIndex 
 * @param {*Number} secondIndex 
 */
function swap(array, firstIndex, secondIndex) {
    [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]];
}

/**
 * Quick sort algorithm. Changing incoming array           
 * @param {Array} array
 * @return {Array} array
 */
function quickSort(array, begin = 0, end = array.length - 1) {
    let left, right, pivotNumber;

    if (array.length > 1) {
        left = begin;
        right = end;
        pivotNumber = array[Math.floor((left + right) / 2)];

        while (left <= right) {

            while (array[left] < pivotNumber) {
                left++;
            }

            while (array[right] > pivotNumber) {
                right--;
            }

            if (left <= right) {
                swap(array, left, right);
                right--;
                left++;
            }
        }

        if (begin < left - 1) {
            quickSort(array, begin, left - 1);
        }

        if (left < end) {
            quickSort(array, left, end);
        }
    }
    return array;
}

/*tests*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2 = [3, 7, 2, 1];
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 10, 9];
let arr4 = [-10, 2, -4, 4, 0, 155, 6, -7, 8, 10, 9];

quickSort(arr);
quickSort(arr2)
quickSort(arr3);
quickSort(arr4);

console.log(arr);
console.log(arr2);
console.log(arr3);
console.log(arr4);