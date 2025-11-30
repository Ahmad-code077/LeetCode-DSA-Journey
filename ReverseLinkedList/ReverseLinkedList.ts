function runReverseLinkedList() {
    class ListNode {
        val: number;
        next: ListNode | null = null;
        constructor(val: number) {
            this.val = val;
        }
    }

    // Create the linked list
    const n1 = new ListNode(1);
    const n2 = new ListNode(2);
    const n3 = new ListNode(3);
    const n4 = new ListNode(4);
    const n5 = new ListNode(5);

    n1.next = n2;
    n2.next = n3;
    n3.next = n4;
    n4.next = n5;

    // Reverse function
    function reverseList(head: ListNode | null): ListNode | null {
        let prev: ListNode | null = null;
        let current: ListNode | null = head;
        while (current !== null) {
            const nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }
        return prev;
    }

    const reversedHead = reverseList(n1);
    console.log("Reversed linked list:", JSON.stringify(reversedHead));
}

// Run everything
runReverseLinkedList();
