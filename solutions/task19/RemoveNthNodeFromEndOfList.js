
class ListNode {

    constructor(val,  next) {
        this.val = val;
        this.next = next;
    }
}

function main() {
    let n5 =  new ListNode(5);
    let n4 =  new ListNode(4, n5);
    let n3 =  new ListNode(3, n4);
    let n2 =  new ListNode(2, n3);
    var n1 =  new ListNode(1, n2);


    result = solution(n1, 5);

    while (result) {
        console.log(result.val);
        result = result.next;
    }
}


function solution(head, n) {

    const list = [];
    var cur = head;
    while (cur) {
        list.push(cur);
        cur = cur.next;
    }
    if (list.length == n) {
        return head.next;
    }

    list[list.length-n-1].next = list[list.length-n].next

    return head;
}

main()