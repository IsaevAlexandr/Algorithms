/**
 * Function takes two sorted array and return one sorted
 * @param {Array} left 
 * @param {Array} right
 * @return {Array} 
 */
function merge(left, right) {
    let l = 0,
      r = 0,
      buffer = [];
    while (l < left.length && r < right.length) {
      if (left[l] < right[r]) {
        buffer.push(left[l]);
        l++;
      } else {
        buffer.push(right[r]);
        r++;
      }
    }
    return buffer.concat(left.slice(l)).concat(right.slice(r));
  }
  
  /**
   * Merge Sort algorithm
   * @param {Array} array 
   * @return {Array} 
   */
  function mergeSort(array) {
    let left = [],
      right = [],
      len = array.length,
      center = 0;
    if (array.length < 2) {
      return array;
    } else {
      center = Math.floor(len / 2);
      left = array.slice(0, center);
      right = array.slice(center);
      return merge(mergeSort(left), mergeSort(right));
    }
  }
  
  /*tests*/
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let arr2 = [3, 7, 2, 1];
  let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 10, 9];
  let arr4 = [-10, 2, -4, 4, 0, 155, 6, -7, 8, 10, 9];
  
  console.log(mergeSort(arr));
  console.log(mergeSort(arr2));
  console.log(mergeSort(arr3));
  console.log(mergeSort(arr4));
  