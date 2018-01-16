/* eslint-disable class-methods-use-this */
/* eslint-disable no-trailing-spaces */
/* eslint-diable */

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }

  // Wraps the given value in a node object and adds the node to the tail of the list
  // If the list is empty, the new element is considered the tail as well as the head
  // If there is one element in the list before the new element is added, the new element becomes the tail of the list
  addToTail(value) {
    //wrap the value in a new node
    const newNode = {
      next: null,
      value: value,
    };
    //
    if (this.head === null) {
      this.head = new Node;
      this.tail = new Node;
      return;
    }
    this.tail.next = newNode; 
    this.tail = newNode;
  }
  
  // Removes the current head node from the list, replacing it with the next element in the list
  // Returns the value of the removed node
  removeHead() {
    // need to check if there is a head node
    if (this.head === null) return;
    // check if head has a next (if its the only element it points to null)
    if (this.head.next === null) {
        const head = this.head;
        this.head = null;
        this.tail = null;
        return head.value;
    }
    const head = this.head;
    this.head = this.head.next;
    return head.value;  //see what happens then change head.value to value
  }

  // Checks the linked list for the given value
  // Returns true if the the value is found in the list, false otherwise
  contains(value) {  //iterative method
    let node = this.head;
    while (node !== null) {
      if (node.value === value) return true; // iterates along linked list
      node = node.next;
    }
    return false;
  }

containsRecursive(value) {
    // check if the linked list is empty
    if (this.head === null) return false;
    // otherwise, define our recursive function
    const searchLinkedList = (node) => {
      // check if the current node's value matches what we're looking for 
       if (node.value === value) return true;
       //check if we've reached end of the linked list
       if (node.next === null) return false;       
    // make our recursive call
    return searchLinkedList(node.next);
    };
    return searchLinkedList(this.head);    
  }  
}

module.exports = LinkedList;
