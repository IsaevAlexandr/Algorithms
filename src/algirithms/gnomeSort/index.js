/**
 * Swap arrays elements
 * @param {*Array} array 
 * @param {*Number} firstIndex 
 * @param {*Number} secondIndex 
 */
function swap(array, firstIndex, secondIndex) {
    let tmpValue = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = tmpValue;
}

/**
 * Gnome sort algorithm           
 * @param {Array} array
 * @return {Array} sortedArray
 */
function gnomeSort(array) {
    let sortedArray = array.slice();
    let i = 1,
        len = sortedArray.length;

    while (i < len) {
        if (i == 0 || sortedArray[i - 1] <= sortedArray[i]) {
            i++;
        } else {
            swap(sortedArray, i, i - 1)
            i--;
        }
    }
    return sortedArray;
}

/*tests*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arr2 = [3, 7, 2, 1];
let arr3 = [2, 1, 3, 4, 5, 6, 7, 8, 10, 9];
let arr4 = [-10, 2, -4, 4, 0, 155, 6, -7, 8, 10, 9];

console.log(gnomeSort(arr));
console.log(gnomeSort(arr2));
console.log(gnomeSort(arr3));
console.log(gnomeSort(arr4));