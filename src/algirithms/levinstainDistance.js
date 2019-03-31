const levinstainDistance = (str1, str2) => {
    let small = str1.length < str2.length ? str1 : str2;
    let big = str1.length >= str2.length ? str1 : str2;

    let evenDigits = new Array(small.length + 1).fill(1);
    let oddDigits = new Array(small.length + 1).fill(null);
    evenDigits;
    oddDigits;
    let currentEdits, previousEdits;

    for (i = 1; i < big.length + 1; i++) {
        if (i % 2 === 1) {
            currentEdits = oddDigits;
            previousEdits = evenDigits;
        } else {
            currentEdits = evenDigits;
            previousEdits = oddDigits;
        }

        currentEdits[0] = i;
       

        for (let j = 1; j < small.length + 1; j++) {
            if (big[i - 1] == small[j - 1]) {
                currentEdits[i] = previousEdits[i - 1];
            } else {
                currentEdits[j] =
                    1 +
                    Math.min(
                        previousEdits[j - 1],
                        previousEdits[j],
                        currentEdits[j - 1],
                    );
            }
        }
    }
    currentEdits;
    previousEdits;

    return big.length % 2 === 0 ? evenDigits[big.length -1] : oddDigits[big.length -1];
};

console.log(levinstainDistance('abnc', 'ab'));
