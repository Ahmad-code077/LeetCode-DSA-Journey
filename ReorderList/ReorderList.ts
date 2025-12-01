(() => {
    class ListNode {
        val: number;
        next: ListNode | null;

        constructor(val?: number, next?: ListNode | null) {
            this.val = val === undefined ? 0 : val;
            this.next = next === undefined ? null : next;
        }
    }

    function reorderList(head: ListNode | null): void {
        if (!head || !head.next) return;

        let slow = head;
        let fast = head;

        // Step 1: find mid
        while (fast.next && fast.next.next) {
            slow = slow.next!;
            fast = fast.next.next;
        }

        // Step 2: reverse second half
        let prev: ListNode | null = null;
        let curr = slow.next;

        while (curr) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        slow.next = null; // cut first half

        // Step 3: merge two halves
        let first: ListNode | null = head;
        let second: ListNode | null = prev;

        while (second) {
            const tmp1: ListNode | null = first!.next;
            const tmp2 = second.next;

            first!.next = second;
            second.next = tmp1;

            first = tmp1;
            second = tmp2;
        }
    }

    // Test nodes
    const n1 = new ListNode(1);
    const n2 = new ListNode(2);
    const n3 = new ListNode(3);
    const n4 = new ListNode(4);

    n1.next = n2;
    n2.next = n3;
    n3.next = n4;

    reorderList(n1);

})();
