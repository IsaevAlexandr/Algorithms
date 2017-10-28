/**
 * Find indef of number is sorted array
 * @param {Array} sortedArray 
 * @param {Number} number
 * @return {Number} return index of number or -1 
 */
function binarySearch(sortedArray, number) {
    let left = 0,
        right = array.length;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (sortedArray[middle] === number) {
            return middle;
        } else if (sortedArray[middle] > number) {
            console.log(1)
            right = middle - 1;
        } else {
            console.log(1)
            left = middle + 1;
        }
    }
    return -1;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 76];

console.log(binarySearch(array, -11));
console.log(binarySearch(array, 1));
console.log(binarySearch(array, 76));