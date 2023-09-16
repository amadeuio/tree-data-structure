![languages](https://img.shields.io/badge/languages-ts-blue)
![license](https://img.shields.io/badge/license-MIT-green)

# Tree Data Structure 🌳

### About 📖

We've already learned about [Binary Search Trees (BSTs)](https://github.com/nightrunner4/binary-search-trees), a type of tree data structure where each node can have at most two children, and the values of the nodes are ordered. In a generic data tree that condition is not necesarily true, and I also wanted to learn about them.

### Description 📚

This repo implements a Tree Data Structure in TypeScript, with some methods to modify and traverse the tree.

### Resources Used 💡

- [JavaScript Today](https://blog.javascripttoday.com/blog/tree-data-structure-with-javascript)
- [GPT](https://chat.openai.com)

### Challenges 😅

Recursive methods and gaining familiarity type annotations in TypeScript.

### Methods 🔧

#### Node Class

- ➕ `add(data)`: Adds a new child node as a child of a given node.

- ➖ `remove(data)`: Removes all child nodes of a given node with matching data.

#### Tree Class

- 🌿 `prettyPrint()`: Prints the tree in a visually appealing format.

- ➕ `addChildToParent(childData: string, parentData: string)`: Adds a node as a child of another.

- 🌐 `breadthFirstTraversal()`: Performs a breadth-first traversal, printing each node's data.

- ⏯️ `depthFirstTraversal()`: Performs a pre-order depth-first traversal, printing each node's data.

- 🔢 `countNodes()`: Counts the total number of nodes in the tree.

- 📏 `height(node)`: Returns the height, defined as the number of edges (steps) in the longest path from a given node to a leaf node.

### Usage 🖊️

- Create a tree

`const tree = new Tree()`

- Create a node, and assign it to be the root of the tree

`tree.root = new Node("A")`

- Add some children to the root

```typescript
tree.root.add("B");
tree.root.add("C");
```

- Add some grand children to the root

```typescript
tree.root.children[0].add("D");
tree.root.children[0].add("E");
tree.root.children[1].add("F");
tree.root.children[1].add("G");
```

- We built a basic tree. If we `console.log(tree)` it looks like this

```typescript
Tree { root: Node { data: 'A', children: [ [Node], [Node] ] } }
```

- Let's use `tree.prettyPrint()` for a more intuitive representation

```typescript
└──A
    ├──B
    │    ├──D
    │    └──E
    └──C
        ├──F
        └──G
```

- Let's add a node with data "child" as a child of the node with data "C"

`tree.addChildToParent("child", "C")`

- If we `tree.prettyPrint()`

```typescript
└──A
    ├──B
    │    ├──D
    │    └──E
    └──C
        ├──F
        ├──G
        └──child
```

- Let's print each value in depth-first traversal

`tree.depthFirstTraversal() // A, B, D, E, C, F, G, child`

- Let's print each value in breadth-first traversal

`tree.breadthFirstTraversal() // A, B, C, D, E, F, G, child`

- Let's find the number of nodes in the tree

`console.log(tree.countNodes()) // 8`

- Let's find the height of the tree

`console.log(tree.height()) // 3`
