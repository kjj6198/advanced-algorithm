class TreeNode {
  constructor(val) {
    this.parent = null;
    this.value = val;
    this.left = null;
    this.right = null;

    return this;
  }
}

class BinaryTree {
  constructor(values) {
    this.root = null;
    if (values) {
      values.forEach(val => insert(this, val));
    }

    return this;
  }
}

function insert(T, value) {
  let y = null;
  let x = T.root;
  let node = new TreeNode(value);

  while(x !== null) {
    y = x;

    if (node.value < x.value) {
      x = x.left;
    } else {
      x = x.right;
    }
  }

  node.parent = y;

  if (y === null) {
    T.root = node;
  } else if (node.value < y.value) {
    y.left = node;
  } else {
    y.right = node;
  }

}

const tree = new BinaryTree([8,10,9,1,3]);


function walk(node) {
  if (node !== null) {
    walk(node.left);
    console.log(node.value);
    walk(node.right);
  }
}

function preorderWalk(node) {
  let stack = [];
  stack.push(node);

  while(!(stack.length === 0)) {
    let node = stack.pop();

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
    console.log(node.value);
  }
}

console.log(walk(tree.root));
console.log(preorderWalk(tree.root));
