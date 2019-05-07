const flattenReq = arr =>
    arr.reduce(
        (acc, item) =>
            acc.concat(Array.isArray(item) ? flatten(item) : item),
        [],
    );

const flatten = arr => {
    const stack = [arr];
    const result = []

    while (stack.length) {
        const current = stack.shift();

        if (Array.isArray(current)) {
            for (let i of (current)) {
                stack.push(i)
            }
        } else {
            result.push(current)
        }
    }

    return result;
} 

const example = [
    1,
    '2',
    null,
    [2, 3, 4, ['1', undefined]],
    [2],
    'adsd',
    [1, [2], [3, 4]],
];

console.log(flattenReq(example));
console.log(flatten(example));
