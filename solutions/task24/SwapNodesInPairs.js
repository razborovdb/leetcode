class ListNode {

    constructor(val,  next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function main() {
    let n4 =  new ListNode(4);
    let n3 =  new ListNode(3, n4);
    let n2 =  new ListNode(2, n3);
    var n1 =  new ListNode(1, n2);

    result = swapPairs(n1);

    while (result) {
        console.log(result.val);
        result = result.next;
    }
}


var swapPairs = function(head) {
    
    if (head == null) {
        return null;
    }

    var cur = head;
    var next = cur.next;

    while (next != null) {
        const temp = cur.val;
        cur.val = next.val;
        next.val = temp;

        cur = next.next;
        if (cur != null) {
            next = cur.next;
        } else {
            next = null;
        }
    }
    return head;
    
};

main()