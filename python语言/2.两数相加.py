# Definition for singly-linked list.
# 示例 1：
# 输入：l1 = [2,4,3], l2 = [5,6,4]
# 输出：[7,0,8]
# 解释：342 + 465 = 807.
# 示例 2：
# 输入：l1 = [0], l2 = [0]
# 输出：[0]
# 示例 3：
# 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
# 输出：[8,9,9,9,0,0,0,1]

from typing import Optional
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
        

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(0)
        node = dummy
        carrier = 0 # 进位
        while l1 or l2 or carrier:
            sum = (l1.val if l1 else 0) + (l2.val if l2 else 0) + carrier
            node.next = ListNode(sum % 10)
            node = node.next
            carrier = sum // 10
            if l1: l1 = l1.next
            if l2: l2 = l2.next
        return dummy.next
    
def list_to_linkedlist(arr):
    """将Python列表转换为链表"""
    if not arr:
        return None
    dummy = ListNode(0)
    current = dummy
    for val in arr:
        current.next = ListNode(val)
        current = current.next
    return dummy.next

def linkedlist_to_list(node):
    """将链表转换为Python列表"""
    result = []
    while node:
        result.append(node.val)
        node = node.next
    return result

if __name__ == "__main__":
    solution = Solution()
    
    # 测试用例1
    l1 = list_to_linkedlist([2,4,3])
    l2 = list_to_linkedlist([5,6,4])
    result = solution.addTwoNumbers(l1, l2)
    print(linkedlist_to_list(result))  # 应输出: [7, 0, 8]
    
    # 测试用例2
    l1 = list_to_linkedlist([0])
    l2 = list_to_linkedlist([0])
    result = solution.addTwoNumbers(l1, l2)
    print(linkedlist_to_list(result))  # 应输出: [0]
    
    # 测试用例3
    l1 = list_to_linkedlist([9,9,9,9,9,9,9])
    l2 = list_to_linkedlist([9,9,9,9])
    result = solution.addTwoNumbers(l1, l2)
    print(linkedlist_to_list(result))  # 应输出: [8, 9, 9, 9, 0, 0, 0, 1]