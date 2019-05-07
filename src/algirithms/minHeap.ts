// class MinHeap {
//     heap: number[];

//     constructor(arr: number[]) {
//         this.heap = this.buildHeap(arr);
//     }

//     get lastIdx() {
//         return this.heap.length - 1;
//     }

//     buildHeap = (arr: number[]) => {
//         let currentIdx = Math.ceil((arr.length - 2) / 2)

//         while (currentIdx) {
//             this.shiftDown(currentIdx, arr.length - 1, arr);

//             currentIdx--;
//         }
//         return arr;
//     };

//     shiftDown(
//         currentIdx: number,
//         endIdx: number,
//         heap: number[]
//     ) {
//         let child1Idx = this._calculateChild1Idx(currentIdx);
//         let child2Idx = this._calculateChild2Idx(currentIdx);

//         while (currentIdx <= endIdx) {
//             child2Idx = child2Idx <= endIdx ? child2Idx : -1
//             let idxToSwap;

//             if (child2Idx !== -1 && heap[child2Idx] < heap[child1Idx]) {
//                 idxToSwap = child2Idx;
//             } else {
//                 idxToSwap = child1Idx;
//             }

//             if (heap[idxToSwap] < heap[currentIdx]) {
//                 idxToSwap
//                 currentIdx
//                 this._swap(idxToSwap, currentIdx, heap);
//                 currentIdx = idxToSwap;
//                 child1Idx = this._calculateChild1Idx(currentIdx);
//             } else {
//                 break;
//             }
            
//         }
//     }

//     shiftUp = (currentIdx: number, heap: number[] = this.heap) => {
//         let parentIdx = this._calculateParentIdx(currentIdx);

//         while (parentIdx > 0 && heap[parentIdx] < heap[currentIdx]) {
//             this._swap(parentIdx, currentIdx, heap);
//             currentIdx = parentIdx;
//             parentIdx = this._calculateParentIdx(currentIdx)
//         }

//     }

//     peek = () => this.heap[0];

//     remove() {
//         this._swap(0, this.lastIdx, this.heap);
//         const valueToRemove = this.heap.pop();
//         this.shiftDown(0, this.lastIdx, this.heap);

//         return valueToRemove;
//     }

//     insert = (value: number) => {
//         this.heap.push(value);

//         this.shiftUp(this.lastIdx);
//     }

//     _swap = (i: number, j: number, arr: number[]) => [arr[i], arr[j]] = [arr[j], arr[i]];
//     _calculateParentIdx = (currentIdx: number) => Math.ceil((currentIdx - 1) / 2);
//     _calculateChild1Idx = (currentIdx: number) => currentIdx * 2 + 1;
//     _calculateChild2Idx = (currentIdx: number) => currentIdx * 2 + 2;
// }

// const arr = [1, 23, 2, 21, 42, 2, 3, 2];

// console.log(new MinHeap(arr).heap)


class MinHeap {
    heap: number[];

    constructor(arr: number[]) {
        this.heap = this.buildHeap(arr);
    }

    buildHeap = (arr: number[]) => {
        let currentIdx = Math.ceil((arr.length - 2) / 2);
        
        while(currentIdx) {
            this.shiftDown(currentIdx, arr.length - 1, arr);
            currentIdx--
        }
       
        return arr;
    };

    shiftDown(currentIdx: number, endIdx: number, heap: number[]) {
        let child1Idx = currentIdx * 2 + 1;

        while (child1Idx <= endIdx) {
            let child2Idx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
            let idxToChande = child2Idx !== -1 && heap[child2Idx] < heap[child1Idx]
                ? child2Idx
                : child1Idx

                idxToChande
            if (heap[currentIdx] > heap[idxToChande]) {
                
                this.swap(currentIdx, idxToChande, heap);
                currentIdx = idxToChande
                child1Idx = currentIdx * 2 + 1;
            } else {
                break;
            }


        }
        
    }

    shiftUp = (currentIdx: number, heap: number[]) => {
        let parentIdx = Math.ceil((currentIdx - 1) / 2)

        while (parentIdx > 0 && heap[parentIdx] < heap[currentIdx]) {
            this.swap(currentIdx, parentIdx, heap);
            currentIdx = parentIdx;
            parentIdx = Math.ceil((currentIdx - 1) / 2)
        }
    }

    peek() {
        return this.heap[0];
    }

    remove(): number {
        
    }

    insert(value: number) {
       
    }

    get lastIdx() {
        return this.heap.length - 1;
    }
    swap = (i: number, j: number, arr: number[]) => [arr[i], arr[j]] = [arr[j], arr[i]];
}

const arr = [1, 23, 2, 21, 42, 2, 3, 2];

console.log(new MinHeap(arr).heap)