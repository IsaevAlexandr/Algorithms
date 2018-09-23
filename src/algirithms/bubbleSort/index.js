import { swap } from '../../helpers';


export default (arr, cb, immutable = true) => {
    const array = immutable ? [...arr] : arr;

    const length = array.length;
    let compareCount = 0;
    let isSorted = true;

    const start = new Date() * 1000;

    for (var i = 0; i < length; i++) {
        for (var j = 0; j < length - 1; j++) {
            compareCount++;

            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1);
                isSorted = false;
            }
        }

        if (isSorted) {
            break;
        }
    }

    const time = new Date() - start;

    const params = { compareCount, length, array, time };

    if (cb) cb(params);

    return array;
};
