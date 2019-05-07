// time O(n^2*n!) | O(n*n!) space
const permutations = arr => {
    const permutations = [];
    permutationsHelper(arr, [], permutations);
    return permutations;
};

function permutationsHelper(arr, currentPermutations, permutations) {
    if (!arr.length && currentPermutations.length) {
        permutations.push(currentPermutations);
    } else {
        for (let i = 0; i < arr.length; i++) {
            const newArr = arr.slice();
            const newPermutations = currentPermutations.concat(
                newArr.splice(i, 1),
            );

            permutationsHelper(newArr, newPermutations, permutations);
        }
    }
}


// time O(n*n!) | O(n*n!) space
const getPermutations = arr => {
    const permutations = [];
    getPermutationsHelper(0, arr, permutations);
    return permutations;
};

function getPermutationsHelper(i, arr, permutations) {
    if (i === arr.length - 1) {
        permutations.push(arr.slice());
    } else {
        for (let j = i; j < arr.length; j++) {
            swap(i, j, arr);
            getPermutationsHelper(i + 1, arr, permutations);
            swap(i, j, arr);
        }
    }
}

function swap(i, j, arr) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

const c = [1, 2, 3, 4];


console.log(getPermutations(c));
