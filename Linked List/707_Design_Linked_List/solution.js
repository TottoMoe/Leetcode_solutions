var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

//Create this function by generate a new node
var Node = function (val) {
  this.val = val;
  this.next = null;
};

/**
 * @param {number} index
 * @return {number}
 */
// Getting the val of the current index-th node in the linked list
MyLinkedList.prototype.get = function (index) {
  if (this.size === 0 || index > this.size - 1 || index < 0) return -1;
  let cur = this.head;

  for (let i = 0; i < index; i++) {
    cur = cur.next;
  }
  return cur.val;
};

/**
 * @param {number} val
 * @return {void}
 */
// Add ad node of value before the first element of the linked list. After thie insertion, the new node will be the first node of the linked list.
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new Node(val);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }
  this.size++;
  return this;
};

/**
 * @param {number} val
 * @return {void}
 */
// Add a node of value to the last element of hte linked list.
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new Node(val);

  if (!this.head) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
  this.size++;
  return this;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
// Add a node of the value before the index node in the linked list
MyLinkedList.prototype.addAtIndex = function (index, val) {
  const newNode = new Node(val);
  if (index > this.size) return;
  if (index <= 0) {
    return this.addAtHead(val);
  }
  if (index === this.size) {
    return this.addAtTail(val);
  }

  let cur = this.head;
  for (let i = 0; i < index - 1; i++) {
    cur = cur.next;
  }
  newNode.next = cur.next ? cur.next : null;
  cur.next = newNode;
  this.size++;
  return this;
};

/**
 * @param {number} index
 * @return {void}
 */
//Delete the index-th node in the linked list, if the index is valid.
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index >= this.size || index < 0) return;
  if (index === 0) {
    this.head = this.head.next;
    this.size--;
    return this;
  }

  let cur = this.head;
  for (let i = 0; i < index - 1; i++) {
    cur = cur.next;
  }

  cur.next = cur.next.next ? cur.next.next : null;
  if (!cur.next) {
    this.tail = cur;
  }
  this.size--;
  return this;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
