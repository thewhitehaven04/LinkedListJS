class ListNode {
  /**
   * @param {any} value
   * @param {ListNode | null} next
   */
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }

  /** Returns the object's string representation. */
  toString() {
    return `Value: ${this.value}, Next: ${this.next?.value}`;
  }
}

class LinkedList {
  constructor() {
    this.list;
  }

  /**
   * Append a value at the end of the list. 
   * @param {any} value 
   */
  append(value) {
    if (!this.list) {
      this.list = new ListNode(value);
      return;
    }
    let node = this.list;
    while (node.next) {
      node = node.next;
    }
    node.next = new ListNode(value);
  }

  prepend(value) {
    this.list = new ListNode(value, this.list);
  }

  /**
   * Return the number of elements in the list.
   * @returns {Number}
   */
  size() {
    let size = 0;
    let node = this.list;
    while (node.value) {
      size++;
      if (node.next) node = node.next;
      else break;
    }
    return size;
  }

  /**
   * Return the first item of the list
   * @returns {ListNode}
   */
  head() {
    return this.list;
  }

  /**
   * Return the last item of the list.
   * @returns {ListNode}
   */
  tail() {
    let node = this.list;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  /**
   * Return the item with a zero-based index.
   * @param {Number} index
   * @returns {?ListNode}
   */
  at(index) {
    let _id = 0;
    let node = this.list;
    while (_id < index) {
      if (!node.next) {
        return null;
      }
      node = node.next;
      _id += 1;
    }
    return node;
  }

  pop() {
    let previous = this.list;
    let current;

    if (previous.next) {
      current = previous.next;
    } else {
      this.list = new ListNode();
      return previous;
    }

    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
    return current;
  }

  contains(value) {
    let node = this.list;
    do {
      if (value === node.value) {
        return true;
      }
      node = node.next;
    } while (node);
    return false;
  }

  find(value) {
    let node = this.list;
    let index = 0;
    do {
      if (value === node.value) {
        return index;
      }
      index += 1;
      node = node.next;
    } while (node);
    return null;
  }

  /**
   * Insert the value at the specified position
   * @param {any} value
   * @param {Number} index
   */
  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    const valueAtIndex = this.at(index);
    const valueAtPreviousIndex = this.at(index - 1);
    valueAtPreviousIndex.next = new ListNode(value, valueAtIndex);
  }

  /**
   * Remove the value at the specified position. 
   * @param {Number} index 
   */
  removeAt(index) {
    if (index === 0) {
      this.list = this.list.next;
    } else { 
      const valueAtPrevious = this.at(index - 1);
      valueAtPrevious.next = this.at(index + 1);
    }
  }

  toString() {
    let outputStr = '';
    let node = this.list;

    while (node) {
      outputStr += `(${node.value}) -> `;
      node = node.next;
    }
    outputStr += 'null';
    return outputStr;
  }
}

let linkedList = new LinkedList();

linkedList.append(10);
linkedList.append(24);
linkedList.append(3);
linkedList.append(95);

console.log('Head: ' + linkedList.head());
console.log('Tail: ' + linkedList.tail());
console.log('Size: ' + linkedList.size());
console.log('Index: ' + linkedList.at(2));
console.log('Contains (expected result: true): ', linkedList.contains(10));
console.log('Contains (expected result: false): ', linkedList.contains(96));
console.log('Find (expected result: 1) ', linkedList.find(24));

console.log(linkedList.toString());
console.log('Pop: ', linkedList.pop());
linkedList.prepend(99);
console.log(linkedList.toString());

linkedList.insertAt(106, 2);
console.log(linkedList.toString());

linkedList.insertAt(9, 0);
console.log(linkedList.toString());

linkedList.removeAt(1);
linkedList.removeAt(4);
console.log(linkedList.toString());