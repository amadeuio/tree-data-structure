// we'll assume the data the nodes receive is a string

// node constructor
class Node {
  data: string;
  children: Node[];

  constructor(data: string) {
    this.data = data;
    this.children = [];
  }

  // adds child node to a given node
  add(data: string): void {
    this.children.push(new Node(data));
  }

  // visits all children of a given node and removes the ones that match the data
  remove(data: string): void {
    this.children = this.children.filter((node) => {
      return node.data !== data;
    });
  }
}

// tree constructor
class Tree {
  root: Node | null; // the root can either be a Node or null

  // initializes empty tree
  constructor() {
    this.root = null;
  }

  // prints the tree in a diagram
  prettyPrint(): void {
    if (!this.root) {
      console.log("Tree is empty.");
      return;
    }

    const lines: string[] = [];
    const connector = "──";
    const spaces = "    ";

    function buildPrettyLines(
      node: Node,
      prefix = "",
      isLastChild = true
    ): void {
      lines.push(prefix + (isLastChild ? "└" : "├") + connector + node.data);
      const childPrefix = prefix + (isLastChild ? spaces : "│" + spaces);

      for (let i = 0; i < node.children.length - 1; i++) {
        buildPrettyLines(node.children[i], childPrefix, false);
      }

      if (node.children.length > 0) {
        buildPrettyLines(
          node.children[node.children.length - 1],
          childPrefix,
          true
        );
      }
    }

    buildPrettyLines(this.root);
    console.log(lines.join("\n"));
  }

  // adds a given node as a child of a specified parent node
  addChildToParent(childData: string, parentData: string): void {
    if (!this.root) {
      console.log("Tree is empty.");
      return;
    }

    function findNodeAndAdd(node: Node | null): void {
      if (!node) {
        return;
      }

      if (node.data === parentData) {
        node.children.push(new Node(childData));
        return;
      }

      for (const child of node.children) {
        findNodeAndAdd(child);
      }
    }

    findNodeAndAdd(this.root);
  }

  // breadth-first traversal
  breadthFirstTraversal(): void {
    if (!this.root) {
      console.log("Tree is empty.");
      return;
    }

    const queue: Node[] = [this.root];

    while (queue.length > 0) {
      const currentNode = queue.shift();

      // type safety
      if (currentNode) {
        console.log(currentNode.data);

        for (const child of currentNode.children) {
          queue.push(child);
        }
      }
    }
  }

  // depth-first traversal (pre-order)
  depthFirstTraversal(node: Node | null = this.root): void {
    // base case: return if current node is non-existent
    if (!node) {
      return;
    }

    console.log(node.data); // process the node's data

    // recursively traverse each child of the current node
    for (const child of node.children) {
      this.depthFirstTraversal(child);
    }
  }
}

const tree = new Tree();
tree.root = new Node("A");
tree.root.add("B");
tree.root.add("C");
tree.root.children[0].add("D");
tree.root.children[0].add("E");
tree.root.children[1].add("F");
tree.root.children[1].add("G");

tree.addChildToParent("child", "C");

tree.prettyPrint();

export {};
