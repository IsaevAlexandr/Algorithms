/**
 * Find index of number is sorted array
 * @param {Array} sortedArray 
 * @param {Number} number
 * @return {Number} return index of number or -1 
 */
function binarySearch(sortedArray, number) {
    let left = 0,
        right = array.length;
        middle = Math.floor((left + right) / 2);

    while (left <= right) {
        if (sortedArray[middle] === number) {
            return middle;
        } else if (sortedArray[middle] > number) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
        middle = Math.floor((left + right) / 2);
    }
    return -1;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 76];

console.log(binarySearch(array, -11));
console.log(binarySearch(array, 1));
console.log(binarySearch(array, 76));
console.log(binarySearch(array, 5));