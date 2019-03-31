class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        let currentNode = this;
        while (true) {
            if (value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = new BST(value);
                    break;
                } else {
                    currentNode = currentNode.left;
                }
            } else {
                if (!currentNode.right) {
                    currentNode.right = new BST(value);
                    break;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }

        return this;
    }

    contains(value) {
        let currentNode = this;

        while (currentNode) {
            if (value === currentNode.value) return true;

            value > currentNode.value
                ? (currentNode = currentNode.right)
                : (currentNode = currentNode.left);
        }

        return false;
    }

    remove(value, parentNode = null) {
        let currentNode = this;
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else {
                if (currentNode.left && currentNode.right) {
                    currentNode.value = currentNode.right.getMinValue();
                    currentNode.right.remove(
                        currentNode.value,
                        currentNode,
                    );
                } else if (!parentNode) {
                    if (currentNode.left) {
                        currentNode.value = currentNode.left.value;
                        currentNode.left = currentNode.left.left;
                        currentNode.right = currentNode.left.right;
                    } else if (currentNode.right) {
                        currentNode.value = currentNode.right.value;
                        currentNode.left = currentNode.right.left;
                        currentNode.right = currentNode.right.right;
                    } else {
                        currentNode.value = null;
                    }
                } else if (parentNode.left === currentNode) {
                    parentNode.left = currentNode.left
                        ? currentNode.left
                        : currentNode.right;
                } else if (parentNode.right === currentNode) {
                    parentNode.right = currentNode.left
                        ? currentNode.left
                        : currentNode.right;
                }

                break;
            }
        }

        return this;
    }

    getMinValue() {
        let currentNode = this;

        while (currentNode.left) {
            currentNode = currentNode.left;
        }

        return currentNode.value;
    }
}

const bst = new BST(10);

const arr = [5, 2, 1, 4];

for (let num of arr) {
    bst.insert(num);
}

// console.log(bst.contains(100));
// bst.remove(5);
console.log(JSON.stringify(bst, null, 2));
