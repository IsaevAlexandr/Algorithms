class BST {
  constructor(value) {
    this.value = value || null;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    let currentNode = this;

    while (true) {
      if (!currentNode.value) currentNode.value = new BST(value);

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
  }

  contains(value) {
    let currentNode = this;
    while (currentNode) {
      if (currentNode.value === value) return true;

      currentNode = value < currentNode.value ? currentNode.left : currentNode.right;
    }
    return false;
  }

  remove(value, parentNode = null) {
      let currentNode = this;

      if (value < currentNode) {
          parentNode = currentNode;
          currentNode = currentNode.left;
        } else if (value > currentNode) {
            parentNode = currentNode;
            currentNode = currentNode.right;
      } else {
            if (currentNode.left && currentNode.right) {

            } else if(!parent) {
                if (currentNode.left) {

                } else if (currentNode.right) {

                } else {
                    currentNode.value = null;
                }

            } else if (parentNode.left === currentNode) {

            } else if (parentNode.right ===  currentNode) {

            }

            break;
      }
  }
}

const bst = new BST(1);

const arr = [12, 14, 13];

for (let num of arr) {
  bst.insert(num);
}

console.log(bst.contains(122));
// bst.remove(14);
console.log(JSON.stringify(bst, null, 2));
