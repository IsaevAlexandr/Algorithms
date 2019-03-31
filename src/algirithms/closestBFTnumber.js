const { abs } = Math;

const BFTExample = {
  v: 10,
  l: {
    v: 5,
    l: { v: 2, l: 1, r: null },
    r: 5,
  },
  r: {
    v: 15,
    l: { v: 13, l: null, r: 14 },
    r: 22,
  },
};

const closestNumberReq = (tree, target, closest) => {
  if (!tree) {
    return closest;
  }

  const value = tree.v | tree;

  if (target === value) return closest;

  if (abs(target - closest) > abs(target - value)) {
    closest = value;
  }

  return target < value
    ? closestNumberReq(tree.l, target, closest)
    : closestNumberReq(tree.r, target, closest);
};

const closestNumber = (tree, target, closest) => {
  let currentNode = tree;

  while (currentNode) {
    const value = currentNode.v | currentNode;

    if (abs(target - closest) > abs(target - value)) {
      closest = value;
    }

    if (target === value) {
      break;
    }

    target < value ? (currentNode = currentNode.l) : (currentNode = currentNode.r);
  }

  return closest;
};

console.log(closestNumberReq(BFTExample, 23, Infinity));
console.log(closestNumber(BFTExample, 6, Infinity));
