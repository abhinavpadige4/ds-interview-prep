export interface PythonChallenge {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  starterCode: string;
  solution: string;
  hints: string[];
  testCases: Array<{
    input: any;
    expected: any;
  }>;
}

export const pythonChallenges: PythonChallenge[] = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
    starterCode: "def two_sum(nums: list[int], target: int) -> list[int]:\n    # Write your code here\n    pass",
    solution: "def two_sum(nums: list[int], target: int) -> list[int]:\n    num_map = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in num_map:\n            return [num_map[complement], i]\n        num_map[num] = i\n    return []",
    hints: [
      "Use a hash map to store numbers and their indices",
      "For each number, check if its complement (target - num) exists in the map",
      "If found, return the current index and the complement's index"
    ],
    testCases: [
      { input: { nums: [2, 7, 11, 15], target: 9 }, expected: [0, 1] },
      { input: { nums: [3, 2, 4], target: 6 }, expected: [1, 2] },
      { input: { nums: [3, 3], target: 6 }, expected: [0, 1] }
    ]
  },
  {
    id: 2,
    title: "Reverse Integer",
    difficulty: "Easy",
    description: "Given a signed 32-bit integer `x`, return `x` with its digits reversed. If reversing `x` causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.",
    starterCode: "def reverse_integer(x: int) -> int:\n    # Write your code here\n    pass",
    solution: "def reverse_integer(x: int) -> int:\n    sign = -1 if x < 0 else 1\n    x_abs = abs(x)\n    reversed_num = 0\n    \n    while x_abs > 0:\n        digit = x_abs % 10\n        reversed_num = reversed_num * 10 + digit\n        x_abs //= 10\n    \n    reversed_num *= sign\n    \n    # Check for 32-bit integer overflow\n    if reversed_num < -2**31 or reversed_num > 2**31 - 1:\n        return 0\n    return reversed_num",
    hints: [
      "Handle the sign separately",
      "Extract digits using modulo and division",
      "Check for overflow before returning the result"
    ],
    testCases: [
      { input: { x: 123 }, expected: 321 },
      { input: { x: -123 }, expected: -321 },
      { input: { x: 120 }, expected: 21 },
      { input: { x: 0 }, expected: 0 },
      { input: { x: 1534236469 }, expected: 0 }
    ]
  },
  {
    id: 3,
    title: "Palindrome Number",
    difficulty: "Easy",
    description: "Given an integer `x`, return `true` if `x` is a palindrome integer. An integer is a palindrome when it reads the same backward as forward.",
    starterCode: "def is_palindrome(x: int) -> bool:\n    # Write your code here\n    pass",
    solution: "def is_palindrome(x: int) -> bool:\n    if x < 0:\n        return False\n    \n    original = x\n    reversed_num = 0\n    \n    while x > 0:\n        digit = x % 10\n        reversed_num = reversed_num * 10 + digit\n        x //= 10\n    \n    return original == reversed_num",
    hints: [
      "Negative numbers cannot be palindromes",
      "Reverse the number and compare with original",
      "Use modulo and division to extract digits"
    ],
    testCases: [
      { input: { x: 121 }, expected: true },
      { input: { x: -121 }, expected: false },
      { input: { x: 10 }, expected: false },
      { input: { x: -101 }, expected: false },
      { input: { x: 0 }, expected: true }
    ]
  },
  {
    id: 4,
    title: "Roman to Integer",
    difficulty: "Easy",
    description: "Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M. Given a roman numeral, convert it to an integer.",
    starterCode: "def roman_to_int(s: str) -> int:\n    # Write your code here\n    pass",
    solution: "def roman_to_int(s: str) -> int:\n    roman_map = {\n        'I': 1, 'V': 5, 'X': 10, 'L': 50,\n        'C': 100, 'D': 500, 'M': 1000\n    }\n    \n    total = 0\n    prev_value = 0\n    \n    for char in reversed(s):\n        value = roman_map[char]\n        if value < prev_value:\n            total -= value\n        else:\n            total += value\n        prev_value = value\n    \n    return total",
    hints: [
      "Process the string from right to left",
      "If a numeral is smaller than the previous one, subtract it",
      "Otherwise, add it to the total"
    ],
    testCases: [
      { input: { s: "III" }, expected: 3 },
      { input: { s: "LVIII" }, expected: 58 },
      { input: { s: "MCMXCIV" }, expected: 1994 }
    ]
  },
  {
    id: 5,
    title: "Longest Common Prefix",
    difficulty: "Easy",
    description: "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string `\"\"`.",
    starterCode: "def longest_common_prefix(strs: list[str]) -> str:\n    # Write your code here\n    pass",
    solution: "def longest_common_prefix(strs: list[str]) -> str:\n    if not strs:\n        return \"\"\n    \n    prefix = strs[0]\n    for s in strs[1:]:\n        while s[:len(prefix)] != prefix and prefix:\n            prefix = prefix[:-1]\n        if not prefix:\n            break\n    return prefix",
    hints: [
      "Start with the first string as the initial prefix",
      "Iteratively reduce the prefix until it matches the start of each string",
      "Return empty string if no common prefix exists"
    ],
    testCases: [
      { input: { strs: ["flower","flow","flight"] }, expected: "fl" },
      { input: { strs: ["dog","racecar","car"] }, expected: "" },
      { input: { strs: ["interspecies","interstellar","interstate"] }, expected: "inters" }
    ]
  },
  {
    id: 6,
    title: "Valid Parentheses",
    difficulty: "Easy",
    description: "Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order.",
    starterCode: "def is_valid(s: str) -> bool:\n    # Write your code here\n    pass",
    solution: "def is_valid(s: str) -> bool:\n    stack = []\n    bracket_map = {')': '(', '}': '{', ']': '['}\n    \n    for char in s:\n        if char in bracket_map:\n            if stack and stack[-1] == bracket_map[char]:\n                stack.pop()\n            else:\n                return False\n        else:\n            stack.append(char)\n    \n    return len(stack) == 0",
    hints: [
      "Use a stack to keep track of opening brackets",
      "When encountering a closing bracket, check if it matches the top of the stack",
      "At the end, the stack should be empty for a valid string"
    ],
    testCases: [
      { input: { s: "()" }, expected: true },
      { input: { s: "()[]{}" }, expected: true },
      { input: { s: "(]" }, expected: false },
      { input: { s: "([)]" }, expected: false },
      { input: { s: "{[]}" }, expected: true }
    ]
  },
  {
    id: 7,
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    description: "You are given the heads of two sorted linked lists `list1` and `list2`. Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.",
    starterCode: "# Definition for singly-linked list.\nclass ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef merge_two_lists(list1: ListNode, list2: ListNode) -> ListNode:\n    # Write your code here\n    pass",
    solution: "# Definition for singly-linked list.\nclass ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef merge_two_lists(list1: ListNode, list2: ListNode) -> ListNode:\n    dummy = ListNode()\n    current = dummy\n    \n    while list1 and list2:\n        if list1.val < list2.val:\n            current.next = list1\n            list1 = list1.next\n        else:\n            current.next = list2\n            list2 = list2.next\n        current = current.next\n    \n    current.next = list1 if list1 else list2\n    return dummy.next",
    hints: [
      "Use a dummy node to simplify the merge process",
      "Compare nodes from both lists and attach the smaller one",
      "Attach the remaining nodes from the non-empty list"
    ],
    testCases: [
      { input: { list1: [1,2,4], list2: [1,3,4] }, expected: [1,1,2,3,4,4] },
      { input: { list1: [], list2: [] }, expected: [] },
      { input: { list1: [], list2: [0] }, expected: [0] }
    ]
  },
  {
    id: 8,
    title: "Remove Duplicates from Sorted Array",
    difficulty: "Easy",
    description: "Given an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in `nums`.",
    starterCode: "def remove_duplicates(nums: list[int]) -> int:\n    # Write your code here\n    pass",
    solution: "def remove_duplicates(nums: list[int]) -> int:\n    if not nums:\n        return 0\n    \n    i = 0\n    for j in range(1, len(nums)):\n        if nums[j] != nums[i]:\n            i += 1\n            nums[i] = nums[j]\n    return i + 1",
    hints: [
      "Use two pointers: one for the position of unique elements, one for iteration",
      "When a new unique element is found, place it next to the last unique element",
      "Return the count of unique elements (i + 1)"
    ],
    testCases: [
      { input: { nums: [1,1,2] }, expected: 2 },
      { input: { nums: [0,0,1,1,1,2,2,3,3,4] }, expected: 5 },
      { input: { nums: [1,2,3] }, expected: 3 }
    ]
  },
  {
    id: 9,
    title: "Search Insert Position",
    difficulty: "Easy",
    description: "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.",
    starterCode: "def search_insert(nums: list[int], target: int) -> int:\n    # Write your code here\n    pass",
    solution: "def search_insert(nums: list[int], target: int) -> int:\n    left, right = 0, len(nums) - 1\n    \n    while left <= right:\n        mid = (left + right) // 2\n        if nums[mid] == target:\n            return mid\n        elif nums[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    \n    return left",
    hints: [
      "Use binary search to find the target or insertion point",
      "If target is found, return its index",
      "If not found, the left pointer will be at the insertion position"
    ],
    testCases: [
      { input: { nums: [1,3,5,6], target: 5 }, expected: 2 },
      { input: { nums: [1,3,5,6], target: 2 }, expected: 1 },
      { input: { nums: [1,3,5,6], target: 7 }, expected: 4 },
      { input: { nums: [1,3,5,6], target: 0 }, expected: 0 }
    ]
  },
  {
    id: 10,
    title: "Length of Last Word",
    difficulty: "Easy",
    description: "Given a string `s` consisting of words and spaces, return the length of the last word in the string. A word is a maximal substring consisting of non-space characters only.",
    starterCode: "def length_of_last_word(s: str) -> int:\n    # Write your code here\n    pass",
    solution: "def length_of_last_word(s: str) -> int:\n    s = s.rstrip()  # Remove trailing spaces\n    if not s:\n        return 0\n    \n    # Find the last space\n    last_space_index = s.rfind(' ')\n    if last_space_index == -1:\n        return len(s)  # No spaces, whole string is one word\n    return len(s) - last_space_index - 1",
    hints: [
      "Remove trailing spaces first",
      "Find the last space in the string",
      "The length of the last word is from the last space to the end"
    ],
    testCases: [
      { input: { s: "Hello World" }, expected: 5 },
      { input: { s: "   fly me   to   the moon  " }, expected: 4 },
      { input: { s: "luffy is still joyboy" }, expected: 6 }
    ]
  }
];# FILE: src/data/statistics.ts
export interface StatisticsTopic {
  id: number;
  title: string;
  category: 'Descriptive' | 'Inferential' | 'Probability' | 'Hypothesis Testing';
  content: string;
  formulas: string[];
  examples: Array<{
    problem: string;
    solution: string;
  }>;
  keyPoints: string[];
}

export const statisticsData: StatisticsTopic[] = [
  {
    id: 1,
    title: "Measures of Central Tendency",
    category: "Descriptive",
    content: "Measures of central tendency describe the center or typical value of a dataset. The three main measures are mean, median, and mode.",
    formulas: [
      "Mean: μ = (Σxᵢ) / n",
      "Median: Middle value when data is ordered (or average of two middle values)",
      "Mode: Most frequently occurring value"
    ],
    examples: [
      {
        problem: "Find the mean, median, and mode of: [3, 7, 7, 2, 9, 10, 3]",
        solution: "Mean = (3+7+7+2+9+10+3)/7 = 43/7 ≈ 6.14\nMedian: Sorted [2,3,3,7,7,9,10] → 7\nMode: 3 and 7 (both appear twice)"
      },
      {
        problem: "Calculate the mean of [1, 2, 3, 4, 5]",
        solution: "Mean = (1+2+3+4+5)/5 = 15/5 = 3"
      }
    ],
    keyPoints: [
      "Mean is sensitive to outliers",
      "Median is robust to outliers",
      "Mode can be used with nominal data",
      "In symmetric distributions: mean ≈ median ≈ mode"
    ]
  },
  {
    id: 2,
    title: "Measures of Dispersion",
    category: "Descriptive",
    content: "Measures of dispersion describe how spread out the data is around the central tendency.",
    formulas: [
      "Range: max - min",
      "Variance: σ² = Σ(xᵢ - μ)² / n",
      "Standard Deviation: σ = √(Σ(xᵢ - μ)² / n)",
      "Interquartile Range (IQR): Q3 - Q1"
    ],
    examples: [
      {
        problem: "Find the variance and standard deviation of [2, 4, 4, 4, 5, 5, 7, 9]",
        solution: "Mean = (2+4+4+4+5+5+7+9)/8 = 40/8 = 5\nVariance = [(2-5)²+(4-5)²+(4-5)²+(4-5)²+(5-5)²+(5-5)²+(7-5)²+(9-5)²]/8\n          = [9+1+1+1+0+0+4+16]/8 = 32/8 = 4\nStd Dev = √4 = 2"
      },
      {
        problem: "Calculate the IQR of [1, 3, 5, 7, 9, 11, 13, 15]",
        solution: "Q1 = median of lower half = (3+5)/2 = 4\nQ3 = median of upper half = (11+13)/2 = 12\nIQR = 12 - 4 = 8"
      }
    ],
    keyPoints: [
      "Variance is in squared units",
      "Standard deviation is in original units",
      "IQR is robust to outliers",
      "For normal distribution: ~68% within 1σ, ~95% within 2σ, ~99.7% within 3σ"
    ]
  },
  {
    id: 3,
    title: "Probability Basics",
    category: "Probability",
    content: "Probability quantifies the likelihood of events occurring, ranging from 0 (impossible) to 1 (certain).",
    formulas: [
      "P(A) = Number of favorable outcomes / Total number of outcomes",
      "P(A∪B) = P(A) + P(B) - P(A∩B)",
      "P(A|B) = P(A∩B) / P(B) (Conditional Probability)",
      "P(A∩B) = P(A) × P(B|A) = P(B) × P(A|B) (Multiplication Rule)"
    ],
    examples: [
      {
        problem: "What is the probability of drawing an ace from a standard deck of 52 cards?",
        solution: "P(Ace) = 4/52 = 1/13 ≈ 0.0769"
      },
      {
        problem: "If P(A) = 0.4, P(B) = 0.5, and P(A∩B) = 0.2, find P(A∪B)",
        solution: "P(A∪B) = P(A) + P(B) - P(A∩B) = 0.4 + 0.5 - 0.2 = 0.7"
      }
    ],
    keyPoints: [
      "Probability of sample space is 1",
      "P(A') = 1 - P(A) (Complement Rule)",
      "Mutually exclusive events: P(A∩B) = 0",
      "Independent events: P(A∩B) = P(A) × P(B)"
    ]
  },
  {
    id: 4,
    title: "Bayes' Theorem",
    category: "Probability",
    content: "Bayes' theorem describes the probability of an event based on prior knowledge of conditions related to the event.",
    formulas: [
      "P(A|B) = [P(B|A) × P(A)] / P(B)",
      "P(B) = P(B|A)×P(A) + P(B|A')×P(A') (Law of Total Probability)"
    ],
    examples: [
      {
        problem: "A test for a disease is 99% accurate. If 1% of the population has the disease, what is the probability that a person who tests positive actually has the disease?",
        solution: "Let D = has disease, T+ = tests positive\nP(D) = 0.01, P(T+|D) = 0.99, P(T+|D') = 0.01\nP(T+) = P(T+|D)P(D) + P(T+|D')P(D') = (0.99)(0.01) + (0.01)(0.99) = 0.0198\nP(D|T+) = [P(T+|D)×P(D)] / P(T+) = (0.99×0.01)/0.0198 = 0.5 = 50%"
      }
    ],
    keyPoints: [
      "Updates prior beliefs with new evidence",
      "Crucial in medical testing, spam filtering, and machine learning",
      "Helps avoid the base rate fallacy",
      "Requires prior probability P(A)"
    ]
  },
  {
    id: 5,
    title: "Distributions: Normal Distribution",
    category: "Probability",
    content: "The normal distribution is a continuous probability distribution characterized by its bell-shaped curve, symmetric about the mean.",
    formulas: [
      "PDF: f(x) = (1/(σ√(2π))) × e^(-(x-μ)²/(2σ²))",
      "Z-score: z = (x - μ) / σ",
      "Empirical Rule: 68-95-99.7% within 1, 2, 3 standard deviations"
    ],
    examples: [
      {
        problem: "If X ~ N(100, 15²), what is P(X < 115)?",
        solution: "z = (115 - 100) / 15 = 1\nP(Z < 1) ≈ 0.8413 (from Z-table)"
      },
      {
        problem: "What percentage of data lies between μ - 2σ and μ + 2σ in a normal distribution?",
        solution: "Approximately 95% (Empirical Rule)"
      }
    ],
    keyPoints: [
      "Defined by mean (μ) and standard deviation (σ)",
      "Symmetric, unimodal, asymptotic",
      "Many natural phenomena approximate normality",
      "Central Limit Theorem: sampling distribution of mean approaches normal"
    ]
  },
  {
    id: 6,
    title: "Hypothesis Testing: Null and Alternative",
    category: "Hypothesis Testing",
    content: "Hypothesis testing is a statistical method that uses sample data to evaluate a hypothesis about a population parameter.",
    formulas: [
      "H₀: Null hypothesis (status quo, no effect)",
      "H₁ or Hₐ: Alternative hypothesis (what we want to prove)",
      "Test Statistic: Computed from sample data",
      "p-value: P(observing data as extreme as, or more extreme than, observed | H₀ true)"
    ],
    examples: [
      {
        problem: "A company claims their new drug reduces blood pressure by 10 mmHg. Formulate H₀ and H₁.",
        solution: "H₀: μ = 10 (no effect or less than claimed)\nH₁: μ < 10 (one-tailed, testing if less than claimed)\n*Alternative formulation depending on test direction*"
      },
      {
        problem: "State H₀ and H₁ for testing if a coin is fair.",
        solution: "H₀: p = 0.5 (coin is fair)\nH₁: p ≠ 0.5 (coin is not fair, two-tailed)"
      }
    ],
    keyPoints: [
      "H₀ always contains equality (=, ≤, ≥)",
      "H₁ never contains equality",
      "We never 'accept' H₀, we either reject or fail to reject it",
      "Type I error: Rejecting H₀ when it's true (α)",
      "Type II error: Failing to reject H₀ when it's false (β)"
    ]
  },
  {
    id: 7,
    title: "t-test and z-test",
    category: "Hypothesis Testing",
    content: "t-tests and z-tests are used to determine if there is a significant difference between means.",
    formulas: [
      "z-test: z = (x̄ - μ) / (σ/√n) (when σ known)",
      "t-test: t = (x̄ - μ) / (s/√n) (when σ unknown, use sample s)",
      "Degrees of freedom for t-test: df = n - 1",
      "p-value: Compare test statistic to t/z distribution"
    ],
    examples: [
      {
        problem: "A sample of 25 students has mean score 78 with std dev 10. Test if population mean is 75 (α=0.05).",
        solution: "t = (78 - 75) / (10/√25) = 3 / 2 = 1.5\ndf = 24\nCritical t (two-tailed, α=0.05) ≈ ±2.064\nSince |1.5| < 2.064, fail to reject H₀"
      },
      {
        problem: "When would you use a z-test instead of a t-test?",
        solution: "Use z-test when population standard deviation (σ) is known or sample size n > 30 (CLT applies). Use t-test when σ is unknown and n < 30."
      }
    ],
    keyPoints: [
      "z-test: Population σ known or large n (≥30)",
      "t-test: Population σ unknown, small n (<30)",
      "Both assume normality or large sample size",
      "p-value < α → reject H₀"
    ]
  },
  {
    id: 8,
    title: "Chi-Square Test",
    category: "Hypothesis Testing",
    content: "The chi-square test is used to determine if there is a significant association between two categorical variables.",
    formulas: [
      "χ² = Σ[(Oᵢ - Eᵢ)² / Eᵢ]",
      "Oᵢ: Observed frequency",
      "Eᵢ: Expected frequency = (row total × column total) / grand total",
      "Degrees of freedom: df = (r-1)(c-1) for r×c table"
    ],
    examples: [
      {
        problem: "In a 2x2 contingency table for gender and product preference (observed: Male-Like=40, Male-Dislike=10, Female-Like=20, Female-Dislike=30), calculate χ².",
        solution: "Row totals: Male=50, Female=50\nColumn totals: Like=60, Dislike=40\nGrand total=100\nE_Male-Like = (50×60)/100 = 30\nE_Male-Dislike = (50×40)/100 = 20\nE_Female-Like = (50×60)/100 = 30\nE_Female-Dislike = (50×40)/100 = 20\nχ² = (40-30)²/30 + (10-20)²/20 + (20-30)²/30 + (30-20)²/20\n   = 100/30 + 100/20 + 100/30 + 100/20\n   = 3.33 + 5 + 3.33 + 5 = 16.66\ndf = (2-1)(2-1) = 1\nCritical χ² (α=0.05, df=1) = 3.84\nSince 16.66 > 3.84, reject H₀ (association exists)"
      }
    ],
    keyPoints: [
      "Tests independence between categorical variables",
      "Expected frequency in each cell should be ≥5",
      "Non-parametric test",
      "Uses upper tail of chi-square distribution"
    ]
  },
  {
    id: 9,
    title: "Confidence Intervals",
    category: "Inferential",
    content: "A confidence interval provides a range of values that is likely to contain the population parameter with a certain level of confidence.",
    formulas: [
      "CI for mean (σ known): x̄ ± z*(σ/√n)",
      "CI for mean (σ unknown): x̄ ± t*(s/√n)",
      "CI for proportion: p̂ ± z*√(p̂(1-p̂)/n)",
      "z* or t*: Critical value from standard normal or t-distribution"
    ],
    examples: [
      {
        problem: "Construct a 95% CI for mean height given: n=30, x̄=170 cm, s=10 cm.",
        solution: "df = 29, t* (95%) ≈ 2.045\nMargin of Error = 2.045 × (10/√30) ≈ 2.045 × 1.826 ≈ 3.73\nCI = 170 ± 3.73 → (166.27, 173.73)"
      },
      {
        problem: "What happens to the width of a confidence interval as sample size increases?",
        solution: "The width decreases because standard error (σ/√n or s/√n) decreases with larger n."
      }
    ],
    keyPoints: [
      "Higher confidence level → wider interval",
      "Larger sample size → narrower interval",
      "Does NOT mean there's 95% probability the parameter is in the interval",
      "If 95% CI does not contain null value (e.g., 0 for difference), reject H₀ at α=0.05"
    ]
  },
  {
    id: 10,
    title: "Correlation and Regression",
    category: "Inferential",
    content: "Correlation measures the strength and direction of linear relationship between two variables. Regression models the relationship to make predictions.",
    formulas: [
      "Correlation coefficient: r = Σ[(xᵢ-x̄)(yᵢ-ȳ)] / [√Σ(xᵢ-x̄)² √Σ(yᵢ-ȳ)²]",
      "Simple Linear Regression: ŷ = b₀ + b₁x",
      "Slope: b₁ = Σ[(xᵢ-x̄)(yᵢ-ȳ)] / Σ(xᵢ-x̄)²",
      "Intercept: b₀ = ȳ - b₁x̄",
      "R² = r² (proportion of variance explained)"
    ],
    examples: [
      {
        problem: "Calculate the correlation between X=[1,2,3,4,5] and Y=[2,4,5,4,5].",
        solution: "x̄=3, ȳ=4\nNumerator = (1-3)(2-4)+(2-3)(4-4)+(3-3)(5-4)+(4-3)(4-4)+(5-3)(5-4)\n          = (-2)(-2)+(-1)(0)+(0)(1)+(1)(0)+(2)(1) = 4+0+0+0+2 = 6\nDenom_x = Σ(xᵢ-x̄)² = 4+1+0+1+4 = 10\nDenom_y = Σ(yᵢ-ȳ)² = 4+0+1+0+1 = 6\nr = 6 / √(10×6) = 6 / √60 ≈ 6/7.746 ≈ 0.775"
      },
      {
        problem: "If r = 0.8, what proportion of variance in Y is explained by X?",
        solution: "R² = r² = 0.8² = 0.64 → 64% of variance in Y is explained by X"
      }
    ],
    keyPoints: [
      "r ranges from -1 to +1",
      "Correlation ≠ causation",
      "Regression minimizes sum of squared residuals",
      "R² indicates goodness of fit (0 to 1)"
    ]
  }
];