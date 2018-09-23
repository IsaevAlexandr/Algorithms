import {swap} from '../../helpers';


export default (array) => {
    let sortedArray = array.slice();
    let i = 1,
        len = sortedArray.length;

    while (i < len) {
        if (i == 0 || sortedArray[i - 1] <= sortedArray[i]) {
            i++;
        } else {
            swap(sortedArray, i, i - 1)
            i--;
        }
    }
    return sortedArray;
}
