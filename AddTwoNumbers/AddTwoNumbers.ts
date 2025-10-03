export { };

class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val ?? 0
        this.next = next ?? null;
    }
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let appendInThisList: ListNode | null = null
    let currentPointerToAppend = null
    let nextSumValue = 0

    while (l1 !== null || l2 !== null) {
        let sumOfBoth = (l1?.val || 0) + (l2?.val || 0) + nextSumValue;
        let digit = sumOfBoth % 10;
        nextSumValue = Math.floor(sumOfBoth / 10);
        if (appendInThisList === null) {
            appendInThisList = new ListNode(digit);
            currentPointerToAppend = appendInThisList;
        } else {
            currentPointerToAppend!.next = new ListNode(digit);
            currentPointerToAppend = currentPointerToAppend!.next;
        }

        l1 = l1?.next || null
        l2 = l2?.next || null;
    }


    if (nextSumValue > 0) {
        currentPointerToAppend!.next = new ListNode(nextSumValue);
    }

    return appendInThisList;
};

// // Example inputs
// let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
// let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

// console.log(addTwoNumbers(l1, l2));

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
let l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))))));

let l2 = new ListNode(
    9,
    new ListNode(
        9,
        new ListNode(
            9,
            new ListNode(9)
        )
    )
);

function printListFunc(head: ListNode | null): void {
    let current = head;
    let result: number[] = [];

    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }

    console.log(result.join(" -> "));
}

let value = (addTwoNumbers(l1, l2));
printListFunc(value);

// [8,9,9,9,0,0,0,1]