// Все комбинации чисел массива
// [1, 2, 3] - [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]

// O(2^n*n) time | O(2^n*n) space
// iterative
const powerset = arr => {
    const subsets = [[]];

    for (const elem of arr) {
        for (const subsetElemIndex in subsets) {
            subsets.push([...subsets[subsetElemIndex], elem]);
        }
    }

    return subsets;
};

// O(2^n*n) time | O(2^n*n) space
const powersetReqursive = (arr, i = null) => {
    if (i == null) {
        i = arr.length - 1;
    } else if (i < 0) {
        return [[]];
    }

    const subsets = powersetReqursive(arr, i - 1);

    for (const subsetElemIndex in subsets) {
        subsets.push([...subsets[subsetElemIndex], arr[i]]);
    }

    return subsets;
};
