let ary = [3, 2, 1, 6, 5, 4, 8, 7];
// API
// ary.sort((a, b) => a - b); // 由小到大
// ary.sort((a, b) => b - a); // 由大到小

// // 冒泡排序
// function bubbleSort(ary) {
//   let len = ary.length;
//   for (let i = 0; i < len; i++) {
//     let flag = true;
//     for (let j = 0; j < len - 1 - i; j++) {
//       if (ary[j] > ary[j + 1]) {
//         [ary[j], ary[j + 1]] = [ary[j + 1], ary[j]];
//         flag = false;
//       }
//     }
//     if (flag) return ary;
//   }
//   return ary;
// }
// console.log(bubbleSort(ary));

// // 选择排序
// function slectSort(ary) {
//   let len = ary.length
//   let minIdx = 0
//   for(let i=0;i<len-1;i++) {
//     minIdx = i
//     for(let j=i;j<len;j++) {
//       if(ary[j]<ary[minIdx]) {
//         minIdx = j
//       }
//     }
//     if(minIdx !=i) {
//       [ary[i],ary[minIdx]] = [ary[minIdx],ary[i]]
//     }
//   }
//   return ary
// }
// console.log(slectSort(ary));

// // 插入排序
// function insertSort(ary) {
//   const len = ary.length;
//   for (let i = 1; i < len; i++) {
//     let j = i;
//     temp = ary[i];
//     while (j > 0 && ary[j - 1] > temp) {
//       ary[j] = ary[j - 1];
//       j--;
//     }
//     ary[j] = temp;
//   }
//   return ary;
// }
// console.log(insertSort(ary));

// // 归并排序
// function mergeSort(ary) {
//   const len = ary.length
//   if(len<=1) return ary
//   const mid  = Math.floor(len/2)
//   const leftAry = mergeSort(ary.slice(0,mid))
//   const rightAry = mergeSort(ary.slice(mid,len))
//   ary = mergeAry(leftAry,rightAry)
//   return ary
// }
// // 合并两个有序数组
// function mergeAry(arr1,arr2) {
//   let i=0,j=0
//   let res = []
//   let len1 = arr1.length,len2 = arr2.length
//   while(i<len1 && j<len2) {
//     if(arr1[i]<arr2[j]) {
//       res.push(arr1[i])
//       i++
//     } else {
//       res.push(arr2[j])
//       j++
//     }
//   }
//   if(i<len1) {
//     return res.concat(arr1.slice(i))
//   } else {
//     return res.concat(arr2.slice(j))
//   }
// }
// console.log(mergeSort(ary));

// 快速排序
// 这种力扣超时
function quickSort(ary) {
  if(ary.length<=1) return ary;
  const mid = Math.floor(ary.length/2)
  const temp = ary[mid]
  const left = [],right = []
  for(let i =0;i<ary.length;i++) {
    if(i === mid) continue;
    if(ary[i]<temp) {
      left.push(ary[i])
    } else {
      right.push(ary[i])
    }
  }

  return [...quickSort(left),temp,...quickSort(right)]
}
console.log(quickSort(ary))