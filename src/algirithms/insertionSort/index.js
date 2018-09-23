export default array => {
    let i,
        j,
        storedValue,
        len = array.length,
        compareCount = 0;

    for (i = 1; i < len; i++) {
        compareCount++;

        storedValue = array[i];

        for (j = i; j > 0 && array[j - 1] > storedValue; j--) {
            compareCount++;
            array[j] = array[j - 1];
        }

        array[j] = storedValue;
    }

    return array;
};
