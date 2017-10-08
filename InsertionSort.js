/**
 * Insertion sort algorithm. Changing incoming array           
 * @param {*Array} array
 * @param {*Boolean} log results
 * @return {Array} 
 */
function insertionSort(array, log = true) {
    let i,  j, storedValue,
    	len = array.length,
    	compareCount = 0;


	for (i = 1; i < len; i++){

		compareCount++;

		/*save value*/
		storedValue = array[i];
		
		/*Looking for a position for pasting a saved value, shift the numbers one character to the right*/
		for(j = i; j > 0 && array[j - 1] > storedValue; j--){
			compareCount++;
			array[j] = array[j - 1];
		}


		array[j] = storedValue;
	}

    function showInfo(){
        console.log(`/*======================================*/`);
        console.log(`${this.name} algorithm`);
        console.log(`Array length : ${this.arguments[0].length}`);
        console.log(`Number of comparisons : ${compareCount}`);
        console.log(`resuls : ${array}`);
        console.log(`/*======================================*/`);
    }
    
    if(log){
        showInfo.call(insertionSort);
    }
    return array;
}

/*tests*/
let arr = [1,2,3,4,5,6,7,8,9,10]
let arr2 = [3,7,2,1];
let arr3 = [1,2,3,2,5,6,7,8,10,9];
let arr4 = [-10,2,-4,4,0,155,6,-7,8,10,9];
let arr5 = [5,6,7,8,1];

insertionSort(arr);
insertionSort(arr2);
insertionSort(arr3);
insertionSort(arr4);
insertionSort(arr5);
