/**
 * Swap arrays elements
 * @param {*Array} array 
 * @param {*Number} firstIndex 
 * @param {*Number} secondIndex 
 */
function swap(array, firstIndex, secondIndex) {
    return [array[firstIndex], array[secondIndex]] = [array[secondIndex], array[firstIndex]]
}



/**
 * quick sort algorithm. Changing incoming array           
 * @param {*Array} array
 * @return {Array} 
 */
function quickSort(array, begin = 0, end = array.length -1) {
    /* index pointers */
    let left, right;


    if (array.length > 1) {
        left = begin;
        right = end;

        /* get pivot nomber */
        let pivotNumber = array[Math.floor((left+right) / 2)];
    

        while (left <= right) {

            /* to the left of the pivotNumber, we look for a number greater than 
            or equal to the pivotNumber, or we take the pivotNumber */
            while (array[left] < pivotNumber) {
                left++;
            }

            // same logic
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
}

/*tests*/
let arr = [1,2,3,4,5,6,7,8,9,10];
let arr2 = [3,7,2,1];
let arr3 = [1,2,3,4,5,6,7,8,10,9];
let arr4 = [-10,2,-4,4,0,155,6,-7,8,10,9];

quickSort(arr);
quickSort(arr2)
quickSort(arr3);
quickSort(arr4);

console.log(arr);
console.log(arr2);
console.log(arr3);
console.log(arr4);
