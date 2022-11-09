#!usr/bin/node

class LinkedList{
  appendNode(node){
    let tmp = node;
    while(tmp !== null){
      console.log(tmp)
      tmp = tmp.nextNode
      }
    console.log(tmp)
  }
  
}
class Node {
  constructor(data){
    this.data = data;
    this.nextNode = null;
  }
}
const LList = new LinkedList() 
let head = new Node('Head Node')
let node1 = new Node('Node 1');
let node2 = new Node('Node 2');
head.nextNode = node1;
console.log(head)
LList.appendNode(head)
console.log(head)

