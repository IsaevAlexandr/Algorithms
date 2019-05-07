// O(N) - time | O(1) space
// отднонаправленный список - удаление n - элемента с конца
const remobeTrhNodeFromEnd = (head, n) => {
    let first = head;
    let second = head;

    for (let i = 0; i <= n; i++) {
        second = second.next;
    }

    if (!second) {
        // если длина связного списка равна n
        // то первый лэемент списка искомы - удаляем его
        head = head.next;

        return;
    }

    while (second.next) {
        second = second.next;
        first = first.next;
    }

    first.next = first.next.next;
};
