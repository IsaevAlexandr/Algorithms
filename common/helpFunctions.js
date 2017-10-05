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