export default (sortedArray, number) => {
    let left = 0,
        right = array.length,
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
};
