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
    let tmp = new Node(value)
    tmp.nextNode = node
    return tmp
  }
  size(node) {
    let i = 0;
    let tmp = node
    while (tmp !== null) {
      tmp = tmp.nextNode
      i++
    }
    return `There currently are ${i} nodes in the list`
  }
  head(node) {
    let tmp = node;
    tmp.nextNode = null
    return tmp
  }
}
class Node {
  constructor(data, nextNode) {
    this.data = data;
    this.nextNode = null;
  }
}
const LList = new LinkedList()
let head = new Node('Head Node')
let node1 = new Node('Node 1');
let node2 = new Node('Node 2');
head.nextNode = node1;
node1.nextNode = node2;
LList.appendNode(head, 'Node 3')
LList.appendNode(head)
let newHead = LList.prependNode(head, 'New Head');
console.log(head)
