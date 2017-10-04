/**
 * Returm ineger random number between min and max range    
 * @param {*Number} minNumber 
 * @param {*Number} maxNumber
 * @return {Number} random number
 */
function randomIntNumber(minNumber = 1, maxNumber = 100) {
    const min = Math.ceil(minNumber);
    const max = Math.floor(Math.random() * (Math.floor(maxNumber) - min + 1));
    return min + max;
}

/**
 * Return a array of random numbers
 * @param {*Number} count cuantity of numbers   
 * @param {*Number} min valie of number
 * @param {*Number} max valie of number
 * @return {Array} randNumbers
 */
function randArrayOfNumbers(count = 1000, min = 1, max = 1000, ) {
    let randNumbers = [];
    for (let i = 0; i < count; i++) {
        randNumbers.push(randomIntNumber(min, max));
    }
    return randNumbers;
}
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
 * Bubble sorte algorithm. Changing incoming array           
 * @param {*Array} array
 * @return {Array} 
 */
function bubbleSort(array) {
    for (var i = 0, len = array.length; i < len; i++) {
        /* if nothing to change in incomint array breack this function */
        let isSorted = true;

        for (var j = 0; j < len - 1; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
                isSorted = false;
            }
        }

        if (isSorted) {
            break;
        }
    }

    return array;
}