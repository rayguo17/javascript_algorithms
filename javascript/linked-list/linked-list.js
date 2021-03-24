//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
class ListNode {
  constructor(value = null) {
    this.value = value;

    this.next = null;
  }
}
class LinkedList {
  constructor(value = null) {
    this.head = new ListNode(value);
    this.length = 0;
  }
  push(num) {
    if (this.head.value == null) {
      this.head = new ListNode(num);
      this.length = 1;
      return;
    }
    let tem = this.head;
    while (tem.next != null) {
      tem = tem.next;
    }
    tem.next = new ListNode(num);
    this.length++;
  }
  pop() {
    let tem = this.head;
    if (tem.next == null) {
      let newHead = new ListNode();
      this.head = newHead;
      this.length = 0;
      return tem.value;
    }

    while (tem.next.next != null) {
      tem = tem.next;
    }
    let tem1 = tem.next.value;
    tem.next = null;
    this.length--;
    return tem1;
  }
  shift() {
    if (this.head.next == null) {
      let tem1 = this.head.value;
      this.head = new ListNode();
      this.length = 0;
      return tem1;
    }
    let tem1 = this.head.value;
    this.head = this.head.next;
    this.length--;
    return tem1;
  }
  unshift(num) {
    if (this.head.value == null) {
      let newHead = new ListNode(num);
      this.head = newHead;
      this.length = 1;
      return;
    }
    let newHead = new ListNode(num);
    newHead.next = this.head;
    this.head = newHead;
    this.length++;
  }
  delete(num) {
    if (this.head.next == null && this.head.value == num) {
      let newHead = new ListNode();
      this.head = newHead;
      this.length = 0;
      return;
    }
    if (this.head.value == num) {
      let newHead = this.head.next;

      this.head = newHead;
      this.length--;
      return;
    }
    let tem = this.head;
    while (tem.next != null) {
      if (tem.next.value == num) {
        let temnext = tem.next.next;
        tem.next = temnext;
        this.length--;
        break;
      }
      tem = tem.next;
    }
  }

  count() {
    return this.length;
  }
}

// export class LinkedList {
//   push() {
//     throw new Error('Remove this statement and implement this function');
//   }

//   pop() {
//     throw new Error('Remove this statement and implement this function');
//   }

//   shift() {
//     throw new Error('Remove this statement and implement this function');
//   }

//   unshift() {
//     throw new Error('Remove this statement and implement this function');
//   }

//   delete() {
//     throw new Error('Remove this statement and implement this function');
//   }

//   count() {
//     throw new Error('Remove this statement and implement this function');
//   }
// }
module.exports = { LinkedList, ListNode };
