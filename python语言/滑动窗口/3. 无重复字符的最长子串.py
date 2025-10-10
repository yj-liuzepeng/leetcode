# 给定一个字符串 s ，请你找出其中不含有重复字符的 最长 子串 的长度。
# 示例 1:

# 输入: s = "abcabcbb"
# 输出: 3 
# 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。注意 "bca" 和 "cab" 也是正确答案。
# 示例 2:

# 输入: s = "bbbbb"
# 输出: 1
# 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
# 示例 3:

# 输入: s = "pwwkew"
# 输出: 3
# 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
# 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        max_len, hashmap = 0, {} # 定义需要维护的变量
        start = 0 # 定义窗口的首尾端 (start, end)
        for end in range(len(s)):
            hashmap[s[end]] = hashmap.get(s[end], 0) + 1 # 更新hashmap
            if len(hashmap) == end - start + 1: # 窗口长度等于hashmap长度时，更新最大长度
                max_len = max(max_len, end - start + 1)
            while end - start + 1 > len(hashmap):
                head = s[start]
                hashmap[head] -= 1
                if hashmap[head] == 0:
                    del hashmap[head]
                start += 1
        return max_len
s = Solution()
print(s.lengthOfLongestSubstring("abcabcbb"))
print(s.lengthOfLongestSubstring("bbbbb"))
print(s.lengthOfLongestSubstring("pwwkew"))
