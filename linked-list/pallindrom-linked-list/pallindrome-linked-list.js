// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // find the middle element
  let fast = (slow = head);
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // slow will be the middle

  // reverse the linked list from middle
  let curr = slow;
  let prev = null;
  while (curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // check the if the reversed and original list are pallindrome
  let left = head;
  let right = prev;
  while (right) {
    if (left.val !== right.val) {
      return false;
    }

    left = left.next;
    right = right.next;
  }
  return true;
};

const node1 = new ListNode(1, null);

const node2 = new ListNode(2, node1);

const node3 = new ListNode(2, node2);

const node4 = new ListNode(1, node3);

console.log(isPalindrome(node4));
