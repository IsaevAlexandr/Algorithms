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
