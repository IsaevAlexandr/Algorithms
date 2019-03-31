// time O(log(n)) | space O(1))
const binarySearch = (arr, target) => {
    // arr - is sorted array
    let left = 0
    let right = arr.length - 1;
    let middle = Math.floor(arr.length / 2);

    while (left <= right) {
        const tryNumber = arr[middle];
        
        if (tryNumber === target) {
            
            return middle;
        }

        if (target < tryNumber) { // Важно, что именно в меньшую сторону, т.к. округляемся тоже в меньшую!
            right = middle -1;
        } else {
            left = middle + 1;
        }

        middle = Math.floor((left + right ) / 2)
    }

    return -1;
}


// // time O(log(n)) | space O(log(n))
// const binarySearchH = (arr, target, left, right) => {
//     if (left > right) {
//         return -1;
//     }

//     const middle = Math.floor((left + right) / 2);
//     const tryNumber = arr[middle]
//     if (tryNumber === target) {
//         return middle;
//     }

//     if (target < tryNumber) {
//         return binarySearchH(arr, target, left, middle - 1)
//     }

//     return binarySearchH(arr, target, middle + 1, right)
// }

// const binarySearch = (arr, target) => 
//     binarySearchH(arr, target, 0, arr.length - 1) 


const example = [-10, -2, 1, 2, 5, 10 , 1000, 10001];


console.log(binarySearch(example, 10001))