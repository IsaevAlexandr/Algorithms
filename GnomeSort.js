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
 * Gnome sort algorithm. Changing incoming array           
 * @param {*Array} array
 * @param {*Boolean} log results
 * @return {Array} 
 */
function gnomeSort(array, log = true) {
    let i = 1, 
    	temp,
    	len = array.length,
    	compareCount = 1;

    while(i < len) {
        /*If the pointer is longer than the length of the array, we interrupt the loop*/
        compareCount++;

        /*if the previous element is smaller than the next one, move the pointer to the right,
        until pointer longer than the length of the array*/
        if( i == 0 || array[i - 1] <= array[i] ){
            i++;
        }

        /*otherwise we change the elements by places and move the pointer to the left*/
        else {
       		swap(array, i, i -1)
            i--;
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
        showInfo.call(gnomeSort);
    }

    return array;
}

/*tests*/
let arr = [1,2,3,4,5,6,7,8,9,10]
let arr2 = [3,7,2,1];
let arr3 = [1,2,3,4,5,6,7,8,10,9];
let arr4 = [-10,2,-4,4,0,155,6,-7,8,10,9];

gnomeSort(arr);
gnomeSort(arr2);
gnomeSort(arr3);
gnomeSort(arr4);
