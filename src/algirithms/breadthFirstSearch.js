// breadthFirstSearch grapth
// time O(V + E) | space O(V)
// Разворачивание графа по каждому уровню с помощью очереди
class Node {
    constructor(name) {
        this.name = name;
        this.childen = [];
    }

    appendChild(child) {
        this.childen.push(new Node(child));
    }

    breadthFirstSearch(arr = []) {
        let queue = [this];
        let currentNode;

        while (queue.length) {
            currentNode = arr.pop();
            arr.push(currentNode.name);
            for (child of currentNode.childen) {
                queue.push(child);
            }
        }

        return arr;
    }
}
