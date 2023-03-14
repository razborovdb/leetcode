
class ListNode {

    constructor(val,  next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function main() {
    let n3 =  new ListNode(4);
    let n2 =  new ListNode(2, n3);
    var n1 =  new ListNode(1, n2);

    let l3 =  new ListNode(4);
    let l2 =  new ListNode(3, l3);
    var l1 =  new ListNode(1, l2);


    result = solution(n1, l1);

    while (result) {
        console.log(result.val);
        result = result.next;
    }
}


function solution(list1, list2) {

    var list = null;
    var head = null;
    if (list1 == null && list2 == null) {
        return list1;
    }
    if (list1 == null) {
        return list2;
    }
    if (list2 == null) {
        return list1;
    }

    while (list1 != null && list2 != null) {
        if (list1.val <= list2.val) {
            if (list == null) {
                list = list1
                list1 = list1.next
                head = list
            } else {
                list.next = list1
                list = list.next
                list1 = list1.next
            }
        } else {
            if (list == null) {
                list = list2
                list2 = list2.next
                head = list
            } else {
                list.next = list2
                list = list.next
                list2 = list2.next
            }
        }
    }

    if (list1 != null) {
        list.next = list1
    }
    if (list2 != null) {
        list.next = list2
    }


    

    return head;
}

main()