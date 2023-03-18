class ListNode {

    constructor(val,  next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function main() {
    let n5 =  new ListNode(5);
    let n4 =  new ListNode(4, n5);
    let n3 =  new ListNode(3, n4);
    let n2 =  new ListNode(2, n3);
    var n1 =  new ListNode(1, n2);



    result = reverse(n1, 3);

    while (result) {
        console.log(result.val);
        result = result.next;
    }
}


var reverse = function(head, k) {
    if (head == null) {
        return null;
    }
    var cur = head;
    var prev = null;
    var next = null;
    var count = 0;


    while (count < k && cur != null) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
        count++;

    }

    if (count < k) {
        while (count > 0) {
            next = cur;
            cur = prev;
            prev = cur.next;
            cur.next = next;
            count--;
        }

        return head;
    }

    if (next!=0) {
        head.next = reverse(next, 3);
    }

    return prev;
    
};

main()