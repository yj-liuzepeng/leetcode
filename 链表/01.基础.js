// 数组是连续的，一段连续的内存空间
// 链表是离散的，在内存中的形态可以是散乱的
// 高效的增删操作 O(1)
// 麻烦的访问操作 O(n)
// {
//   // 数据域
//   val: 1,
//   // 指针域，指向下一个结点
//   next: {
//       val:2,
//       next: ...
//   }
// }   
function ListNode(val) {
  this.val = val;
  this.next = null;
}
const node = new ListNode(1)  
node.next = new ListNode(2)
// 如果目标结点本来不存在，那么记得手动创建
const node3 = new ListNode(3)     
// 把node3的 next 指针指向 node2（即 node1.next）
node3.next = node1.next
// 把node1的 next 指针指向 node3
node1.next = node3
