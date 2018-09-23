import { swap } from '../../helpers';

export default (array, begin = 0, end = array.length - 1) => {
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
};
