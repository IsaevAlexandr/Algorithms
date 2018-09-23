export const swap = (a, i, j) => {
    [a[j], a[i]] = [a[i], a[j]];
     
    return a
};