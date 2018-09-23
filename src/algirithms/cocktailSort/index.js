import { swap } from '../../helpers';


export default (arr, cb, immutable = true) => {
    const array = immutable ? [...arr] : arr;

    const length = array.length;
    let left = 0;
    let right = length - 1;
    let compareCount = 0;
    let isSorted = true;

    while (left <= right) {
        isSorted = true;

        for (var i = left; i < right; i++) {
            compareCount++;
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1);

                isSorted = false;
            }
        }

        if (isSorted) {
            break;
        }

        right--;

        isSorted = true;

        for (var i = right; i > left; i--) {
            compareCount++;

            if (array[i - 1] > array[i]) {
                swap(array, i - 1, i);
                isSorted = false;
            }
        }

        if (isSorted) {
            break;
        }

        left++;
    }

    const params = { length };

    if (cb) {
        cb(params);
    }

    return array;
};
