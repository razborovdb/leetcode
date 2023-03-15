class ListNode {

    constructor(val,  next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function main() {
    let n3 =  new ListNode(44);
    let n2 =  new ListNode(22, n3);
    var n1 =  new ListNode(11, n2);

    let l3 =  new ListNode(54);
    let l2 =  new ListNode(23, l3);
    var l1 =  new ListNode(1, l2);

    let m3 =  new ListNode(64);
    let m2 =  new ListNode(13, m3);
    var m1 =  new ListNode(12, m2);

    var lists = [];
    lists.push(n1);
    lists.push(l1);
    lists.push(m1);


    result = mergeKLists(lists);

    while (result) {
        console.log(result.val);
        result = result.next;
    }
}


var mergeKLists = function(lists) {
    
    var head = null;
    var cur = new ListNode();
    var result = [];

    var result = lists.filter(node => (node != null ));

    while (result.length > 0) {
        ind = 0;
        minValue = result[0].val;

        result.forEach((node,index) => {
            if (node.val < minValue) {
                minValue = node.val;
                ind = index
            }
        });

        if (head == null) {
            head = result[ind];
            cur = result[ind];
            result[ind] = result[ind].next;
            if (result[ind] == null) {
                result.splice(ind,1);
            }
        } else {
            cur.next = result[ind];
            cur = cur.next;

            result[ind] = result[ind].next;
            if (result[ind] == null) {
                result.splice(ind,1);
            }
        }

    }

    return head;
    
};

main()