#!usr/bin/node

class LinkedList {
  constructur(head) {
    this.head = head

  }
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
  tail(node) {
    let tmp = node;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode
    }
    return tmp
  }
  at(index) {
  }
  pop() {
    head
  }
}
class Node {
  constructor(data, nextNode) {
    this.data = data;
    this.nextNode = null;
  }
}
let head = new Node('Head Node')
let node1 = new Node('Node 1');
let node2 = new Node('Node 2');
head.nextNode = node1;
node1.nextNode = node2;
const LList = new LinkedList(head)
LList.appendNode(head, 'Node 3')
console.log(head)
