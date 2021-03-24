class ListNode{
    constructor(value=null) {
      this.value = value;
      this.next = null;
    }
}
// let head = new ListNode(7);
// let secondNode = new ListNode(9);
// let thirdNode = new ListNode(8);

// head.next = secondNode;
// secondNode.next = thirdNode;
// let tem = head;
// let flag = 0;
// while (tem.next != null) {
//     tem = tem.next;
//     flag++;
//     console.log(tem, `${flag}\n`);
// }
// let fourNode = new ListNode(5);
// tem.next = fourNode;
// let fifthNode = new ListNode(3);
// fourNode.next = fifthNode;
// console.log(head.value);
// console.log(thirdNode);
// console.log("-------------------------------")
// let tem1 = head;
// let flag1 = 0;
// while (tem1.next != null) {
//     console.log(tem1.value,`${flag1}\n`)
//     tem1 = tem1.next;
//     flag1++;
    
// }
class LinkedList{
    constructor(value = null) {
        this.head = new ListNode(value);
        this.count = 0;
    }
    push(num) {
        if (this.head.value == null) {
            this.head = new ListNode(num);
            this.count = 1;
            return;
        }
        let tem = this.head;
        while (tem.next != null) {
            tem = tem.next;
        }
        tem.next = new ListNode(num);
        this.count++;
    }
    pop() {
        let tem = this.head;
        if (tem.next == null) {
            let newHead = new ListNode();
            this.head = newHead;
            this.count = 0;
            return tem.value;
        }
        
        while (tem.next.next != null) {
            tem = tem.next;
        }   
        let tem1 = tem.next.value;
        tem.next = null;
        this.count--;
        return tem1;
    }
    shift() {
        if (this.head.next == null) {
            let tem1 = this.head.value;
            this.head = new ListNode();
            this.count = 0;
            return tem1;
        }
        let tem1 = this.head.value;
        this.head = this.head.next;
        this.count--;
        return tem1;
    }
    unshift(num) {
        if (this.head.value == null) {
            let newHead = new ListNode(num);
            this.head = newHead;
            this.count = 1;
            return;
        }
        let newHead = new ListNode(num);
        newHead.next = this.head;
        this.head = newHead;
        this.count++;
    }
    count1() {
        return this.count;
    }
    delete(num) {
        if (this.head.next == null && this.head.value == num) {
            let newHead = new ListNode();
            this.head = newHead;
            this.count = 0;
            return;
        }
        if (this.head.value == num) {
            let newHead = this.head.next;
            
            this.head = newHead;
            this.count--;
            return;
        }
        let tem = this.head;
        while (tem.next != null) {
            if (tem.next.value == num) {
                let temnext = tem.next.next;
                tem.next = temnext;
                this.count--;
                break;
            }
            tem = tem.next;
        }
    }
}
  
list = new LinkedList();
list.push(9);
list.push(8);


console.log(list.shift());

console.log(list.unshift(3));
console.log(list)

list.delete(3);
list.delete(8);
console.log(list);
console.log(list.count1());
