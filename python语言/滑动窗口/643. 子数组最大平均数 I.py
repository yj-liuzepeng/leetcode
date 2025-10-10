# 给你一个由 n 个元素组成的整数数组 nums 和一个整数 k 。
# 请你找出平均数最大且 长度为 k 的连续子数组，并输出该最大平均数。
# 示例 1：

# 输入：nums = [1,12,-5,-6,50,3], k = 4
# 输出：12.75
# 解释：最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
# 示例 2：

# 输入：nums = [5], k = 1
# 输出：5.00000

from typing import List
import math
class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        sum_, max_avg = 0, -math.inf
        start = 0
        for end in range(len(nums)):
            sum_ += nums[end]
            if end - start + 1 == k:
                max_avg = max(max_avg, sum_ / k)
            if end >= k - 1:
                sum_ -= nums[start]
                start += 1
        return max_avg

nums = [1,12,-5,-6,50,3]
k = 4
print(Solution().findMaxAverage(nums, k))