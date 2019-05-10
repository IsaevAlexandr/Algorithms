// O(L + W) time | O(1) space
const searchInSortedMatrix = (matrix, target) => {
    let row = 0;
    let col = matrix[0].length - 1;
    
    while (row < matrix.length && col >= 0) {
        const current = matrix[row][col];
        current
        if (current === target) {
            return [row, col];
        } else if (current > target) {
            col--;
        } else {
            row++
        }
    }

    return -1
};

const matrix = [[1, 2, 4, 10], [7, 15, 20, 100], [10, 40, 77, 101]];

console.log(searchInSortedMatrix(matrix, 77)); // 2,2
