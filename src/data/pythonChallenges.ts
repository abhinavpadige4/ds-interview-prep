```typescript
import { PythonChallenge } from '../types';

export const pythonChallenges: PythonChallenge[] = [
  {
    id: 'py-1',
    title: 'Two Sum',
    difficulty: 'Easy',
    description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.',
    solution: `def two_sum(nums: list[int], target: int) -> list[int]:
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []`,
    explanation: 'Use a hash map (dictionary) to store numbers we\'ve seen so far. For each number, check if its complement (target - num) exists in the map. This gives O(n) time complexity vs O(n²) for brute force.',
    tags: ['arrays', 'hash-map', 'two-pointers']
  },
  {
    id: 'py-2',
    title: 'Reverse a Linked List',
    difficulty: 'Easy',
    description: 'Given the head of a singly linked list, reverse the list and return the reversed list.',
    solution: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_list(head: ListNode) -> ListNode:
    prev = None
    current = head
    while current:
        next_temp = current.next
        current.next = prev
        prev = current
        current = next_temp
    return prev`,
    explanation: 'Iteratively reverse pointers by keeping track of three nodes: previous, current, and next. At each step, redirect current.next to point to prev, then advance all three pointers.',
    tags: ['linked-list', 'pointers', 'iteration']
  },
  {
    id: 'py-3',
    title: 'Find Duplicate in Array',
    difficulty: 'Easy',
    description: 'Given an array of n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Find the duplicate number without modifying the array and using only constant extra space.',
    solution: `def find_duplicate(nums: list[int]) -> int:
    # Floyd's Tortoise and Hare (Cycle Detection)
    slow = nums[0]
    fast = nums[0]
    
    # Phase 1: Find intersection point
    while True:
        slow = nums[slow]
        fast = nums[nums[fast]]
        if slow == fast:
            break
    
    # Phase 2: Find entrance to cycle
    slow = nums[0]
    while slow != fast:
        slow = nums[slow]
        fast = nums[fast]
    
    return slow`,
    explanation: 'Treat the array as a linked list where each value points to the next index. A duplicate creates a cycle. Use Floyd\'s cycle detection algorithm to find the duplicate. Time: O(n), Space: O(1).',
    tags: ['arrays', 'cycle-detection', 'two-pointers']
  },
  {
    id: 'py-4',
    title: 'Sliding Window Maximum',
    difficulty: 'Hard',
    description: 'Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Return the max of each window.',
    solution: `from collections import deque

def max_sliding_window(nums: list[int], k: int) -> list[int]:
    result = []
    dq = deque()  # stores indices
    
    for i, num in enumerate(nums):
        # Remove elements outside window
        if dq and dq[0] == i - k:
            dq.popleft()
        
        # Remove smaller elements from back
        while dq and nums[dq[-1]] < num:
            dq.pop()
        
        dq.append(i)
        
        # Start recording results once window is full
        if i >= k - 1:
            result.append(nums[dq[0]])
    
    return result`,
    explanation: 'Use a monotonic deque (decreasing order) to efficiently track the maximum. The front of the deque always has the maximum element for the current window. Elements are removed from the back if they\'re smaller than the current element. Time: O(n), Space: O(k).',
    tags: ['arrays', 'sliding-window', 'deque']
  },
  {
    id: 'py-5',
    title: 'Merge K Sorted Lists',
    difficulty: 'Hard',
    description: 'You are given an array of k linked-lists, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.',
    solution: `import heapq
from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def merge_k_lists(lists: list[Optional[ListNode]]) -> Optional[ListNode]:
    dummy = ListNode(0)
    current = dummy
    heap = []
    
    # Push head of each list into heap
    for i, node in enumerate(lists):
        if node:
            heapq.heappush(heap, (node.val, i, node))
    
    while heap:
        val, _, node = heapq.heappop(heap)
        current.next = node
        current = current.next
        if node.next:
            heapq.heappush(heap, (node.next.val, id(node.next), node.next))
    
    return dummy.next`,
    explanation: 'Use a min-heap to efficiently get the smallest element across all k lists. Push the head of each list into the heap. Pop the minimum, add it to result, and push its next node. Time: O(N log k) where N is total nodes, Space: O(k).',
    tags: ['linked-list', 'heap', 'divide-and-conquer']
  },
  {
    id: 'py-6',
    title: 'LRU Cache',
    difficulty: 'Medium',
    description: 'Design and implement a data structure for Least Recently Used (LRU) cache. It should support get(key) and put(key, value) operations in O(1) time complexity.',
    solution: `from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity: int):
        self.cache = OrderedDict()
        self.capacity = capacity
    
    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)
        return self.cache[key]
    
    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)`,
    explanation: 'Use OrderedDict which maintains insertion order. get() moves accessed key to end (most recent). put() adds to end and removes from front (least recent) if capacity exceeded. Both operations are O(1).',
    tags: ['hash-map', 'linked-list', 'design']
  },
  {
    id: 'py-7',
    title: 'Top K Frequent Elements',
    difficulty: 'Medium',
    description: 'Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.',
    solution: `from collections import Counter
import heapq

def top_k_frequent(nums: list[int], k: int) -> list[int]:
    count = Counter(nums)
    # Use heapq.nlargest for efficiency
    return heapq.nlargest(k, count.keys(), key=count.get)

# Alternative: Bucket Sort approach
def top_k_frequent_bucket(nums: list[int], k: int) -> list[int]:
    count = Counter(nums)
    buckets = [[] for _ in range(len(nums) + 1)]
    
    for num, freq in count.items():
        buckets[freq].append(num)
    
    result = []
    for i in range(len(buckets) - 1, 0, -1):
        result.extend(buckets[i])
        if len(result) >= k:
            return result[:k]`,
    explanation: 'Count frequencies with Counter, then use a min-heap of size k to find top k elements. Time: O(n log k). Bucket sort approach achieves O(n) by grouping elements by frequency.',
    tags: ['hash-map', 'heap', 'sorting']
  },
  {
    id: 'py-8',
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'Medium',
    description: 'Given a string s, find the length of the longest substring without repeating characters.',
    solution: `def length_of_longest_substring(s: str) -> int:
    char_index = {}
    max_length = 0
    left = 0
    
    for right, char in enumerate(s):
        if char in char_index and char_index[char] >= left:
            left = char_index[char] + 1
        char_index[char] = right
        max_length = max(max_length, right - left + 1)
    
    return max_length`,
    explanation: 'Use sliding window with a hash map storing the last seen index of each character. When a duplicate is found within the current window, move the left pointer past the previous occurrence. Time: O(n), Space: O(min(n, m)) where m is charset size.',
    tags: ['strings', 'sliding-window', 'hash-map']
  },
  {
    id: 'py-9',
    title: 'Serialize and Deserialize Binary Tree',
    difficulty: 'Hard',
    description: 'Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work.',
    solution: `from collections import deque
from typing import Optional

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Codec:
    def serialize(self, root: Optional[TreeNode]) -> str:
        if not root:
            return ""
        
        result = []
        queue = deque([root])
        
        while queue:
            node = queue.popleft()
            if node:
                result.append(str(node.val))
                queue.append(node.left)
                queue.append(node.right)
            else:
                result.append("None")
        
        return ",".join(result)
    
    def deserialize(self, data: str) -> Optional[TreeNode]:
        if not data:
            return None
        
        values = data.split(",")
        root = TreeNode(int(values[0]))
        queue = deque([root])
        i = 1
        
        while queue and i < len(values):
            node = queue.popleft()
            
            if values[i] != "None":
                node.left = TreeNode(int(values[i]))
                queue.append(node.left)
            i += 1
            
            if i < len(values) and values[i] != "None":
                node.right = TreeNode(int(values[i]))
                queue.append(node.right)
            i += 1
        
        return root`,
    explanation: 'Use BFS (level-order traversal) for serialization. Represent null nodes as "None". For deserialization, reconstruct the tree level by level using a queue. This preserves the tree structure.',
    tags: ['trees', 'bfs', 'design']
  },
  {
    id: 'py-10',
    title: 'Group Anagrams',
    difficulty: 'Medium',
    description: 'Given an array of strings strs, group the anagrams together. You can return the answer in any order. Two strings are anagrams if they contain the same characters with the same frequencies.',
    solution: `from collections import defaultdict

def group_anagrams(strs: list[str]) -> list[list[str]]:
    anagram_map = defaultdict(list)
    
    for s in strs:
        # Sort characters as key (or use char count tuple)
        key = tuple(sorted(s))
        anagram_map[key].append(s)
    
    return list(anagram_map.values())

# More efficient: character count approach
def group_anagrams_count(strs: list[str]) -> list[list[str]]:
    anagram_map = defaultdict(list)
    
    for s in strs:
        count = [0] * 26
        for char in s:
            count[ord(char) - ord('a')] += 1
        key = tuple(count)
        anagram_map[key].append(s)
    
    return list(anagram_map.values())`,
    explanation: 'Group strings by their sorted character sequence or character frequency tuple as the hash key. Sorting approach: O(k log k * n) where k is max string length. Character count: O(k * n) which is more efficient.',
    tags: ['hash-map', 'strings', 'sorting']
  }
];
