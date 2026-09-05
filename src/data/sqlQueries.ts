```typescript
import { SQLQuery } from '../types';

export const sqlQueries: SQLQuery[] = [
  {
    id: 'sql-1',
    title: 'Find Second Highest Salary',
    difficulty: 'Easy',
    description: 'Write a query to find the second highest salary from the Employee table.',
    query: `-- Using LIMIT and OFFSET\nSELECT MAX(salary) AS second_highest_salary\nFROM Employee\nWHERE salary < (SELECT MAX(salary) FROM Employee);\n\n-- Using DENSE_RANK window function\nSELECT DISTINCT salary AS second_highest_salary\nFROM (\n  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk\n  FROM Employee\n) ranked\nWHERE rnk = 2;`,
    explanation: 'The subquery approach finds the max salary less than the overall max. The window function approach ranks all salaries and picks rank 2. DENSE_RANK handles ties better than ROW_NUMBER.',
    tags: ['subquery', 'window-functions', 'aggregation']
  },
  {
    id: 'sql-2',
    title: 'Department Highest Salary',
    difficulty: 'Medium',
    description: 'Find the employee with the highest salary in each department.',
    query: `-- Using window function\nSELECT department_name, employee_name, salary\nFROM (\n  SELECT \n    d.name AS department_name,\n    e.name AS employee_name,\n    e.salary,\n    RANK() OVER (PARTITION BY d.id ORDER BY e.salary DESC) AS rnk\n  FROM Employee e\n  JOIN Department d ON e.department_id = d.id\n) ranked\nWHERE rnk = 1;\n\n-- Using correlated subquery\nSELECT d.name AS Department, e.name AS Employee, e.salary\nFROM Employee e\nJOIN Department d ON e.department_id = d.id\nWHERE e.salary = (\n  SELECT MAX(salary) FROM Employee\n  WHERE department_id = e.department_id\n);`,
    explanation: 'RANK() partitions by department and orders by salary descending. The correlated subquery approach compares each employee\'s salary to the max in their department. Both handle ties (multiple employees with same highest salary).',
    tags: ['joins', 'window-functions', 'subquery']
  },
  {
    id: 'sql-3',
    title: 'Running Total / Cumulative Sum',
    difficulty: 'Medium',
    description: 'Calculate the running total of sales for each day.',
    query: `-- Using window function\nSELECT \n  sale_date,\n  daily_sales,\n  SUM(daily_sales) OVER (\n    ORDER BY sale_date\n    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW\n  ) AS running_total\nFROM Sales\nORDER BY sale_date;\n\n-- 7-day moving average\nSELECT \n  sale_date,\n  daily_sales,\n  AVG(daily_sales) OVER (\n    ORDER BY sale_date\n    ROWS BETWEEN 6 PRECEDING AND CURRENT ROW\n  ) AS moving_avg_7d\nFROM Sales;`,
    explanation: 'The SUM() window function with ORDER BY creates a running total. ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW specifies the frame. For moving averages, use a fixed window like 6 PRECEDING for a 7-day window.',
    tags: ['window-functions', 'aggregation', 'time-series']
  },
  {
    id: 'sql-4',
    title: 'Find Duplicate Emails',
    difficulty: 'Easy',
    description: 'Write a query to find all duplicate emails in the Person table.',
    query: `-- Using GROUP BY and HAVING\nSELECT email\nFROM Person\nGROUP BY email\nHAVING COUNT(*) > 1;\n\n-- Using window function\nSELECT DISTINCT email\nFROM (\n  SELECT email, COUNT(*) OVER (PARTITION BY email) AS cnt\n  FROM Person\n) dupes\nWHERE cnt > 1;`,
    explanation: 'GROUP BY groups rows by email, HAVING filters groups with count > 1. The window function approach counts occurrences per email and filters. Both are valid; GROUP BY is typically more efficient for this simple case.',
    tags: ['aggregation', 'group-by', 'duplicates']
  },
  {
    id: 'sql-5',
    title: 'Nth Highest Salary Using CTE',
    difficulty: 'Medium',
    description: 'Write a function/query to find the Nth highest salary using a CTE.',
    query: `-- Using CTE with DENSE_RANK\nWITH RankedSalaries AS (\n  SELECT \n    salary,\n    DENSE_RANK() OVER (ORDER BY salary DESC) AS salary_rank\n  FROM Employee\n)\nSELECT DISTINCT salary AS NthHighestSalary\nFROM RankedSalaries\nWHERE salary_rank = @N;\n\n-- Reusable function approach\nCREATE FUNCTION getNthHighestSalary(N INT) RETURNS DECIMAL\nBEGIN\n  SET N = N - 1;\n  RETURN (\n    SELECT DISTINCT salary\n    FROM Employee\n    ORDER BY salary DESC\n    LIMIT 1 OFFSET N\n  );\nEND;`,
    explanation: 'CTE creates a ranked result set using DENSE_RANK(). The outer query filters for the desired rank. DENSE_RANK ensures consecutive ranks even with ties. The LIMIT/OFFSET approach is simpler but doesn\'t handle ties the same way.',
    tags: ['cte', 'window-functions', 'ranking']
  },
  {
    id: 'sql-6',
    title: 'Self Join - Find Employees Earning More Than Manager',
    difficulty: 'Medium',
    description: 'Find all employees who earn more than their managers.',
    query: `SELECT e.name AS Employee\nFROM Employee e\nJOIN Employee m ON e.managerId = m.id\nWHERE e.salary > m.salary;\n\n-- Alternative with explicit self-join\nSELECT e1.name AS Employee\nFROM Employee e1\nINNER JOIN Employee e2\n  ON e1.managerId = e2.id\nWHERE e1.salary > e2.salary;`,
    explanation: 'Self-join treats the Employee table as two separate tables: one for employees (e) and one for managers (m). Join on managerId = id, then filter where employee salary exceeds manager salary.',
    tags: ['self-join', 'joins', 'comparison']
  },
  {
    id: 'sql-7',
    title: 'Consecutive Numbers',
    difficulty: 'Hard',
    description: 'Find all numbers that appear at least three times consecutively in the Logs table.',
    query: `-- Using self joins\nSELECT DISTINCT l1.num AS ConsecutiveNums\nFROM Logs l1\nJOIN Logs l2 ON l1.id = l2.id - 1\nJOIN Logs l3 ON l1.id = l3.id - 2\nWHERE l1.num = l2.num AND l2.num = l3.num;\n\n-- Using window functions\nSELECT DISTINCT num AS ConsecutiveNums\nFROM (\n  SELECT \n    num,\n    LAG(num, 1) OVER (ORDER BY id) AS prev_num,\n    LEAD(num, 1) OVER (ORDER BY id) AS next_num\n  FROM Logs\n) windowed\nWHERE num = prev_num AND num = next_num;`,
    explanation: 'Self-join approach joins the table three times offset by 1 and 2 rows. Window function approach uses LAG and LEAD to access adjacent rows. Both check if three consecutive rows have the same number.',
    tags: ['self-join', 'window-functions', 'consecutive']
  },
  {
    id: 'sql-8',
    title: 'Customer Who Visited Without Buying',
    difficulty: 'Easy',
    description: 'Find customers who visited but did not make any transactions.',
    query: `-- Using LEFT JOIN and NULL check\nSELECT v.customer_id, COUNT(v.visit_id) AS count_no_trans\nFROM Visits v\nLEFT JOIN Transactions t ON v.visit_id = t.visit_id\nWHERE t.visit_id IS NULL\nGROUP BY v.customer_id;\n\n-- Using NOT IN\nSELECT customer_id, COUNT(*) AS count_no_trans\nFROM Visits\nWHERE visit_id NOT IN (SELECT visit_id FROM Transactions)\nGROUP BY customer_id;\n\n-- Using NOT EXISTS\nSELECT v.customer_id, COUNT(*) AS count_no_trans\nFROM Visits v\nWHERE NOT EXISTS (\n  SELECT 1 FROM Transactions t WHERE t.visit_id = v.visit_id\n)\nGROUP BY v.customer_id;`,
    explanation: 'LEFT JOIN keeps all visits, NULL check finds unmatched ones. NOT IN is simpler but can have issues with NULLs. NOT EXISTS is generally the most efficient and handles NULLs correctly.',
    tags: ['joins', 'subquery', 'not-exists']
  },
  {
    id: 'sql-9',
    title: 'Employee Earning More Than 50K in Each Department',
    difficulty: 'Medium',
    description: 'Find departments where more than 50% of employees earn above $50,000.',
    query: `-- Using CTE with window functions\nWITH DeptStats AS (\n  SELECT \n    department_id,\n    COUNT(*) AS total_employees,\n    SUM(CASE WHEN salary > 50000 THEN 1 ELSE 0 END) AS high_earners\n  FROM Employee\n  GROUP BY department_id\n)\nSELECT d.name AS department_name, s.total_employees, s.high_earners,\n  ROUND(s.high_earners * 100.0 / s.total_employees, 2) AS pct_high_earners\nFROM DeptStats s\nJOIN Department d ON s.department_id = d.id\nWHERE s.high_earners * 1.0 / s.total_employees > 0.5;`,
    explanation: 'CTE calculates total employees and high earners per department using conditional aggregation. The outer query joins with Department for names and filters for >50% high earners. ROUND formats the percentage.',
    tags: ['cte', 'aggregation', 'conditional']
  },
  {
    id: 'sql-10',
    title: 'Page Recommendations for Friends',
    difficulty: 'Hard',
    description: 'Recommend pages to users based on what their friends liked, excluding pages they already liked.',
    query: `-- Using CTEs and joins\nWITH FriendPairs AS (\n  -- Create bidirectional friendship pairs\n  SELECT user1_id AS user_id, user2_id AS friend_id\n  FROM Friendship\n  UNION\n  SELECT user2_id AS user_id, user1_id AS friend_id\n  FROM Friendship\n)\nSELECT DISTINCT fp.user_id, l.page_id AS recommended_page\nFROM FriendPairs fp\nJOIN Likes l ON fp.friend_id = l.user_id\nWHERE NOT EXISTS (\n  SELECT 1 FROM Likes existing\n  WHERE existing.user_id = fp.user_id\n    AND existing.page_id = l.page_id\n)\nORDER BY fp.user_id, l.page_id;`,
    explanation: 'First CTE creates bidirectional friendship pairs. Then join with Likes to find pages friends liked. NOT EXISTS excludes pages the user already likes. This is a common social network analysis pattern.',
    tags: ['joins', 'cte', 'social-network']
  },
  {
    id: 'sql-11',
    title: 'Active Users in Last 5 Days',
    difficulty: 'Easy',
    description: 'Find users who have been active in the last 5 days.',
    query: `-- Using date functions\nSELECT DISTINCT user_id\nFROM Activity\nWHERE activity_date >= CURRENT_DATE - INTERVAL '5 days'\n  AND activity_date <= CURRENT_DATE;\n\n-- PostgreSQL specific\nSELECT DISTINCT user_id\nFROM Activity\nWHERE activity_date BETWEEN CURRENT_DATE - INTERVAL '4 days' AND CURRENT_DATE;\n\n-- MySQL specific\nSELECT DISTINCT user_id\nFROM Activity\nWHERE activity_date >= DATE_SUB(CURDATE(), INTERVAL 5 DAY);`,
    explanation: 'Date functions vary by SQL dialect. The BETWEEN approach is inclusive on both ends. INTERVAL syntax differs: PostgreSQL uses INTERVAL \'5 days\', MySQL uses INTERVAL 5 DAY. Always check your database documentation.',
    tags: ['date-functions', 'filtering', 'time-series']
  },
  {
    id: 'sql-12',
    title: 'Rank Scores',
    difficulty: 'Medium',
    description: 'Write a query to rank scores. If there is a tie, the same rank should be assigned. The next rank should be the next consecutive integer.',
    query: `-- Using DENSE_RANK\nSELECT \n  score,\n  DENSE_RANK() OVER (ORDER BY score DESC) AS rank\nFROM Scores\nORDER BY score DESC;\n\n-- Using correlated subquery (no window functions)\nSELECT s1.score,\n  (SELECT COUNT(DISTINCT s2.score) \n   FROM Scores s2 \n   WHERE s2.score >= s1.score) AS rank\nFROM Scores s1\nORDER BY s1.score DESC;`,
    explanation: 'DENSE_RANK() assigns the same rank to ties and continues with the next consecutive integer (1, 2, 2, 3). ROW_NUMBER would give unique ranks (1, 2, 3, 4). RANK would skip numbers (1, 2, 2, 4). The subquery approach counts distinct scores >= current score.',
    tags: ['window-functions', 'ranking', 'subquery']
  },
  {
    id: 'sql-13',
    title: 'Department Top 3 Salaries',
    difficulty: 'Hard',
    description: 'Find the top 3 highest salaries in each department.',
    query: `-- Using DENSE_RANK window function\nSELECT department, employee, salary\nFROM (\n  SELECT \n    d.name AS department,\n    e.name AS employee,\n    e.salary,\n    DENSE_RANK() OVER (\n      PARTITION BY d.name \n      ORDER BY e.salary DESC\n    ) AS rnk\n  FROM Employee e\n  JOIN Department d ON e.department_id = d.id\n) ranked\nWHERE rnk <= 3\nORDER BY department, salary DESC;\n\n-- Using correlated subquery\nSELECT d.name AS Department, e.name AS Employee, e.salary AS Salary\nFROM Employee e\nJOIN Department d ON e.department_id = d.id\nWHERE (\n  SELECT COUNT(DISTINCT e2.salary)\n  FROM Employee e2\n  WHERE e2.department_id = e.department_id\n    AND e2.salary >= e.salary\n) <= 3;`,
    explanation: 'DENSE_RANK partitions by department and ranks by salary. Filtering rnk <= 3 gives top 3 per department. DENSE_RANK handles ties correctly (if 2 people tie for 2nd, both are included and the next is 3rd). The subquery counts how many distinct salaries are >= current.',
    tags: ['window-functions', 'joins', 'ranking']
  },
  {
    id: 'sql-14',
    title: 'Sales Analysis with CTEs',
    difficulty: 'Medium',
    description: 'Calculate monthly sales, year-over-year growth, and cumulative sales.',
    query: `-- Using multiple CTEs\nWITH MonthlySales AS (\n  SELECT \n    DATE_TRUNC('month', sale_date) AS month,\n    SUM(amount) AS monthly_revenue,\n    COUNT(*) AS transaction_count\n  FROM Sales\n  GROUP BY DATE_TRUNC('month', sale_date)\n),\nWithGrowth AS (\n  SELECT \n    month,\n    monthly_revenue,\n    transaction_count,\n    LAG(monthly_revenue) OVER (ORDER BY month) AS prev_month_revenue,\n    ROUND(\n      (monthly_revenue - LAG(monthly_revenue) OVER (ORDER BY month)) \n      / NULLIF(LAG(monthly_revenue) OVER (ORDER BY month), 0) * 100, 2\n    ) AS mom_growth_pct,\n    SUM(monthly_revenue) OVER (ORDER BY month) AS cumulative_revenue\n  FROM MonthlySales\n)\nSELECT \n  month,\n  monthly_revenue,\n  transaction_count,\n  prev_month_revenue,\n  mom_growth_pct,\n  cumulative_revenue\nFROM WithGrowth\nORDER BY month;`,
    explanation: 'First CTE aggregates sales by month. Second CTE adds month-over-month growth using LAG() and cumulative revenue using SUM() window function. NULLIF prevents division by zero. This pattern is common in business analytics.',
    tags: ['cte', 'window-functions', 'aggregation', 'time-series']
  },
  {
    id: 'sql-15',
    title: 'Find Median Salary',
    difficulty: 'Hard',
    description: 'Write a query to find the median salary of all employees.',
    query: `-- Using window functions (works in most databases)\nSELECT AVG(salary) AS median_salary\nFROM (\n  SELECT \n    salary,\n    ROW_NUMBER() OVER (ORDER BY salary) AS rn,\n    COUNT(*) OVER () AS total\n  FROM Employee\n) ranked\nWHERE rn IN (FLOOR((total + 1) / 2.0), CEIL((total + 1) / 2.0));\n\n-- Alternative using PERCENTILE_CONT (PostgreSQL, Oracle)\nSELECT PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY salary) AS median_salary\nFROM Employee;\n\n-- For median by department\nSELECT department_id, AVG(salary) AS median_salary\nFROM (\n  SELECT \n    department_id,\n    salary,\n    ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary) AS rn,\n    COUNT(*) OVER (PARTITION BY department_id) AS total\n  FROM Employee\n) ranked\nWHERE rn IN (FLOOR((total + 1) / 2.0), CEIL((total + 1) / 2.0))\nGROUP BY department_id;`,
    explanation: 'Median is the middle value. For odd count, it\'s the middle element. For even count, it\'s the average of two middle elements. ROW_NUMBER ranks salaries, and we pick the middle position(s). PERCENTILE_CONT is a built-in function in some databases.',
    tags: ['window-functions', 'aggregation', 'statistics']
  }
];
