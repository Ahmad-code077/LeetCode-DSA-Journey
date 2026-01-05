



export { };

class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val ?? 0;
        this.next = next ?? null;
    }
}

// Start with an empty list
let head: ListNode | null = null;

function append(val: number) {
    let newNode = { val, next: null };
    // want to add the new node in the last first check if the list contain the head or not if not then return the head as new node 
    if (head === null) {
        head = newNode
        return head
    }

    let currentPointer: ListNode | null = head
    while (currentPointer?.next !== null) {
        currentPointer = currentPointer?.next;
    }
    currentPointer.next = newNode;

    return head
}

function prepend(val: number): void {
    let newNode: ListNode = { val, next: head };
    head = newNode;
}
function printList(): void {
    let resultString = "";

    // head is the entry point to the whole linked list
    console.log("head (full list via JSON):", JSON.stringify(head));

    // currentNode is the "moving pointer" we use to traverse
    let currentNode: ListNode | null = head;

    while (currentNode !== null) {
        // add this node's value
        resultString += currentNode.val;

        // only add arrow if there’s another node after this one
        if (currentNode.next !== null) {
            resultString += " -> ";
        }

        // move forward to the next node
        currentNode = currentNode.next;
    }

    console.log("LinkedList:", resultString || "Empty");
}




function findVaule(val: number): void {

    let currentPointers = head;

    while (currentPointers !== null) {
        if (currentPointers.val === val) {
            console.log('find the value in the list ', val)
        } else {
            console.log('skip', currentPointers.val)
        }
        currentPointers = currentPointers.next
    }

}


function deleteListNode(val: number) {
    let currentPointer: ListNode | null = head;
    let previous: ListNode | null = null;

    while (currentPointer !== null) {
        if (currentPointer.val === val) {
            if (currentPointer === head) {
                // delete head
                head = head.next;
            } else {
                // delete middle or tail
                previous!.next = currentPointer.next;
            }
            break; // stop after deleting
        }
        previous = currentPointer;
        currentPointer = currentPointer.next;
    }
}


function insertAtPosition(val: number, position: number): void {
    const newNode: ListNode = { val, next: null };

    // Insert at head
    if (position === 0 || head === null) {
        newNode.next = head;
        head = newNode;
        return;
    }

    let currentPointer: ListNode | null = head;
    let previousPointer: ListNode | null = null;
    let currentPosition = 0;

    while (currentPointer !== null) {
        if (currentPosition === position) {
            // Insert in middle
            if (previousPointer) {
                previousPointer.next = newNode;
                newNode.next = currentPointer;
            }
            return;
        }

        previousPointer = currentPointer;
        currentPointer = currentPointer.next;
        currentPosition++;
    }

    // Insert at the end if position is beyond current length
    if (previousPointer) {
        previousPointer.next = newNode;
    }
}




// head = null;
append(10);
append(11);
append(12);

// insertAtPosition(9, 0);  // at head
// insertAtPosition(15, 2); // in the middle

printList(); // Expected: 9 -> 10 -> 15 -> 11 -> 12 -> 20
