class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
): ListNode | null {
    let dummy = new ListNode(0);
    let tail = dummy;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }
    tail.next = list1 ?? list2;
    return dummy.next;
}

const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(4);

n1.next = n2;
n2.next = n3;
n3.next = null;

const m1 = new ListNode(0);
const m2 = new ListNode(3);
const m3 = new ListNode(4);
const m4 = new ListNode(5);
m1.next = m2;
m2.next = m3;
m3.next = m4;
m4.next = null;

console.log(mergeTwoLists(n1, m1));
