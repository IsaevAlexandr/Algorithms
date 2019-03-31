// O(n) - time | O(d) - longest branch space
const validateBST = (tree, min = Infinity, max = Infinity) => {
    if (!tree) {
        return true;
    }

    if (tree.value < min || tree.value >= max) {
        return false;
    }

    return (
        validateBST(tree.left, tree.value, max) &&
        validateBST(tree.left, min, tree.value)
    );
};
