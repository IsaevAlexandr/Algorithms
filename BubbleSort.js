/**
 * Swap arrays elements
 * @param {*Array} array 
 * @param {*Number} firstIndex 
 * @param {*Number} secondIndex 
 */
function swap(array, firstIndex, secondIndex) {
    let tmpValue = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = tmpValue;
}

/**
 * Bubble sorte algorithm. Changing incoming array           
 * @param {*Array} array
 * @param {*Boolean} log results
 * @return {Array} 
 */
function bubbleSort(array, log = true) {
    let compareCount = 0,
        len = array.length;

    /*with each next iteration, we reduce the array by 1 element */
    for (var i = 0; i < len; i++) {
        /* if nothing to change in incomint array breack this function */
        let isSorted = true;

        /*with each iteration shift the lowest number to the left*/
        for (var j = 0; j < len - 1; j++) {
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

    /* if some one know better way to show @compareCount parametr, pls let me know!*/
    function showInfo(){
        console.log(`/*======================================*/`);
        console.log(`${this.name} algorithm`);
        console.log(`Array length : ${this.arguments[0].length}`);
        console.log(`Number of comparisons : ${compareCount}`);
        console.log(`resuls : ${array}`);
        console.log(`/*======================================*/`);
    }
    
    if(log){
        showInfo.call(bubbleSort);
    }

    return array;
}

/*tests*/
let arr = [1,2,3,4,5,6,7,8,9,10]
let arr2 = [3,7,2,1];
let arr3 = [1,2,3,4,5,6,7,8,10,9];
let arr4 = [-10,2,-4,4,0,155,6,-7,8,10,9];

bubbleSort(arr);
bubbleSort(arr2);
bubbleSort(arr3);
bubbleSort(arr4);
