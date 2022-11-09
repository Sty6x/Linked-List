#!usr/bin/node
class LinkedList {
  constructor(head) {
    this.head = head
  }
  appendNode(value = 'Appended Node') {
    let tmp = this.head;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode
    }
    tmp.nextNode = new Node(value)
  }
  prependNode(value = 'Prepended Node') {
    let tmp = new Node(value)
    tmp.nextNode = this.head
    return tmp
  }
  size() {
    let i = 0;
    let tmp = this.head
    while (tmp !== null) {
      tmp = tmp.nextNode
      i++
    }
    return i
  }
  getHead() {
    let tmp = this.head;
    tmp.nextNode = null
    return tmp
  }
  getTail() {
    let tmp = this.head;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode
    }
    return tmp
  }
  pop() {
    let tmp = this.head;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode
    }
    tmp = null
    return tmp
  }
  at(index) {
    let i = 0;
    let tmp = this.head;
    while (i !== index) {
      tmp = tmp.nextNode
      i++
    }
    return tmp
  }
  contains(value) {
    let tmp = this.head;
    while (tmp.nextNode !== null) {
      if (tmp.data == value) {
        return true
      }
      tmp = tmp.nextNode
    }
    return false
  }
  find(value) {
    let tmp = this.head;
    let i = 0;
    while (tmp !== null) {
      if (tmp.data == value) {
        return i
      } else {
        tmp = tmp.nextNode
        i++
      }
    }
    return null
  }

  toString() {
    let tmp = this.head;
    let size = this.size()
    let i = 0;
    let string = '';
    while (i !== size) {
      string = string.concat('->', tmp.data)
      tmp = tmp.nextNode
      i++
    }
    let result = string.substring(2).concat('->', null)
    console.log(result)
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.nextNode = null;
  }
}
let node = new Node('Head Node')
let node1 = new Node('Node 2');
let node2 = new Node('Node 3');
node.nextNode = node1;
node1.nextNode = node2;
const linkedList = new LinkedList(node)
linkedList.appendNode('Node 4')
linkedList.toString()
const newHead = linkedList.prependNode()
const newLinkedList = new LinkedList(newHead)
newLinkedList.toString()
