const graph = {
  name: 'A',
  children: [
    {
      name: 'B',
      children: [
        {
          name: 'E',
          children: null,
        },
        {
          name: 'F',
          children: [
            {
              name: 'I',
              children: null,
            },
            {
              name: 'J',
              children: null,
            },
          ],
        },
      ],
    },
    {
      name: 'C',
      children: null,
    },
    {
      name: 'D',
      children: [
        {
          name: 'G',
          children: [
            {
              name: 'K',
              children: null,
            },
          ],
        },
        {
          name: 'H',
          children: null,
        },
      ],
    },
  ],
};

const arr = [];
const deepFirstSearch = ({ name, children }) => {
  arr.push(name);

  if (children) {
    for (const child of children) {
      deepFirstSearch(child);
    }
  }
};

deepFirstSearch(graph);
console.log(arr);

class Graph {
  constructor(fn) {
    this.result = [];
    this.fn = fn;
  }

  deepFirstSearch(o = this.graph) {
    const { name, children } = o;

    this.fn(this.result, name);

    if (children) {
      for (const ci of children) {
        this.deepFirstSearch(ci);
      }
    }

    return this.result;
  }
}
const cb = (arr, name) => arr.push(name);

const graphObj = new Graph(cb);

console.log(graphObj.deepFirstSearch(graph));
