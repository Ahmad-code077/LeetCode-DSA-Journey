// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.next = (next === undefined ? null : next)
//     }
// }


// function hasCycle(head: ListNode | null): boolean {
//     console.log('head', head);
//     if (head === null) {
//         return false
//     }
//     const visited = new Set<ListNode>();
//     let currentHead = head;
//     debugger

//     while (currentHead !== null) {


//         if (visited.has(currentHead)) {
//             return true;
//         }

//         visited.add(currentHead)
//         currentHead = currentHead.next!
//     }

//     return false;

// }


// --------------------------------------------------
// Example 1
// head = [3, 2, 0, -4], pos = 1
// cycle: tail connects to node with value 2
// --------------------------------------------------



function hasCycle(head: ListNode | null): boolean {
    let slow = head, fast = head
    debugger
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow?.next!
        if (fast === slow) return true
    }

    return false
};

// const n1 = new ListNode(1)
// const n2 = new ListNode(2)
// const n3 = new ListNode(3)
// const n4 = new ListNode(4)
// const n5 = new ListNode(5)

// n1.next = n2
// n2.next = n3
// n3.next = n4
// n4.next = n5
// n5.next = n3               // cycle here

// console.log(hasCycle(n1))  // expected: true


// const b1 = new ListNode(1)
// const b2 = new ListNode(2)
// const b3 = new ListNode(3)

// b1.next = b2
// b2.next = b3
// b3.next = null

// console.log(hasCycle(b1))  // expected: false
