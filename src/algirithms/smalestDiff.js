const smalestDiff = (arrOne, arrTwo) => {
  const firstSortedArray = arrOne.sort((a, b) => a - b);
  const secondSortedArray = arrTwo.sort((a, b) => a - b);
  let pointerOne = 0;
  let pointerTwo = 0;
  let firstNum;
  let secondNum;
  let smalestResults = [];
  let currentDiff = Infinity;
  let minDiff = Infinity;

  while (pointerOne < firstSortedArray.length && pointerTwo < secondSortedArray.length) {
    firstNum = firstSortedArray[pointerOne];
    secondNum = secondSortedArray[pointerTwo];

    currentDiff = Math.abs(firstNum - secondNum);

    if (firstNum < secondNum) {
      pointerOne++;
    } else if (secondNum < firstNum) {
      pointerTwo++;
    } else {
      return [firstNum, secondNum];
    }

    if (minDiff > currentDiff) {
      minDiff = currentDiff;
      smalestResults = [firstNum, secondNum];
    }
  }

  return smalestResults;
};

const a = [1, 12, -3, 401, 413, 50, 2];
const b = [21, 7, 400, -100];

console.log(smalestDiff(a, b));

