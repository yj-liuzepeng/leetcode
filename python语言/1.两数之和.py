# 输入：nums = [2,7,11,15], target = 9
# 输出：[0,1]
# 解释：因为 nums[0] + nums[1] == 9 ，所以返回 [0, 1] 。

from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i in range(len(nums)):
          res = target - nums[i]
          if res in nums[i+1:]:
            return [i, nums[i+1:].index(res)+i+1]

if __name__ == "__main__":
    solution = Solution()
    print(solution.twoSum([2,7,11,15], 9))
    print(solution.twoSum([3,2,4], 7))