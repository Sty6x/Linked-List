#!usr/bin/node

class LinkedList {
  appendNode(node, value = 'Appended Node') {
    let tmp = node;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode
    }
    tmp.nextNode = new Node(value)
  }
  prependNode(node, value = 'Prepended Node') {
    let tmp = new Node(value);
    tmp.nextNode = node;
    console.log(tmp)
  }

}
class Node {
  constructor(data) {
    this.data = data;
    this.nextNode = null;
  }
}
const LList = new LinkedList()
let head = new Node('Head Node')
let node1 = new Node('Node 1');
let node2 = new Node('Node 2');
head.nextNode = node1;
LList.appendNode(head, 'Node 3')
LList.appendNode(head)
LList.prependNode(head)
console.log(head)
