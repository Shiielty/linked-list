class LinkedList {
  constructor(head) {
    this.head = head;
  }
}

class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

node1.nextNode = node2;
node2.nextNode = node3;

const link = new LinkedList(node1);

console.log(link);
console.log(link.head);
console.log(link.head.nextNode)
console.log(link.head.nextNode.nextNode.value)