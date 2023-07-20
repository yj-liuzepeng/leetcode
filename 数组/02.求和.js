// 几乎所有的求和问题，都可以转化为求差问题
/**
 * 两数求和 https://leetcode.cn/problems/two-sum/
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 */

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }
    map.set(nums[i], i);
  }
};
// let nums = [3,2,4], target = 6
// console.log(twoSum(nums,target))

/**
 * 三数之和 https://leetcode.cn/problems/3sum/
 * 给你一个整数数组 nums ，请你返回所有和为 0 且不重复的三元组。
 */
// 固定一个数，在剩下的数中寻找是否有两个数和这个固定数相加是等于0的。
// 双指针法
// 首先排序
// 遍历比较
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b);
  let res = [];
  const len = nums.length;
  for (let i = 0; i < len - 2; i++) {
    let j = i + 1;
    let k = len - 1;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] > 0) {
        k--;
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      } else if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
      } else {
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      }
    }
  }
  return res;
};

/**
 * 最接近的三数之和  https://leetcode.cn/problems/3sum-closest/
 * 你从 nums 中选出三个整数，使它们的和与 target 最接近。返回这三个数的和。
 * let res = Infinity;
 * 三数之和sum
 * Math.abs绝对值取小 Math.abs(sum - target)  Math.abs(res - target)
 * 更新res = 绝对值取小
 */

var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  let res = Infinity;
  for (let i = 0; i < len - 2; i++) {
    let j = i + 1;
    let k = len - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum;
      }
      if (sum < target) {
        j++;
      } else if (sum > target) {
        k--;
      } else {
        return sum;
      }
    }
  }
  return res;
};

/**
 * 四数之和   https://leetcode.cn/problems/4sum/
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 * 在三数之和的基础上再加一层循环
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  let list = [];
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          list.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;
          while (left < right && nums[left] === nums[left - 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right + 1]) {
            right--;
          }
        } else if (sum > target) {
          right--;
          while (left < right && nums[right] === nums[right + 1]) {
            right--;
          }
        } else {
          left++;
          while (left < right && nums[left] === nums[left - 1]) {
            left++;
          }
        }
      }
    }
  }
  return list;
};
