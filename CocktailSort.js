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
 * Cocktail sorte algorithm. Changing incoming array           
 * @param {*Array} array
 * @param {*Boolean} log results
 * @return {Array} 
 */
function cocktailSort(array, log = true) {
    let left = 0;
    let right = array.length - 1;
    let compareCount = 0;
    let isSorted = true;

    /* with each iteration we reduce by 1 on each side incoming array */
    while (left <= right){
        
            isSorted = true;

            /*shift the largest number to the right*/
            for (var i = left; i < right; i++){

                compareCount++;
                if (array[i] > array[i + 1]){
                    swap(array, i, i + 1);

                    isSorted = false;
                }
                
            }

            /*if no changes occur, the array is sorted*/
            if (isSorted) {
                break;
            }
    
            /*exclude the lagest number from verification*/
            right--;

            /*set flag to true, if arrey is sorted it will be the last iteration*/
            isSorted = true;

            /*shift the lowest number to the left*/
            for (var i = right; i > left; i--){

                compareCount++;
                if (array[i - 1] > array[i]){
                    swap(array, i - 1 , i);
                    isSorted = false;
                }
    
            }

            /*if no changes occur, the array is sorted*/
            if (isSorted) {
                break;
            }

            /*exclude the lowest number from verification*/
            left++;
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
        showInfo.call(cocktailSort);
    }
    return array;
}

/*tests*/
let arr = [1,2,3,4,5,6,7,8,9,10]
let arr2 = [3,7,2,1];
let arr3 = [1,2,3,4,5,6,7,8,10,9];
let arr4 = [-10,2,-4,4,0,155,6,-7,8,10,9];

cocktailSort(arr);
cocktailSort(arr2);
cocktailSort(arr3);
cocktailSort(arr4);