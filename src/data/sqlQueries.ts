export const sqlQueries = [
  {
    id: 1,
    question: "Write a SQL query to find the second highest salary from the Employee table.",
    answer: "SELECT MAX(salary) AS SecondHighestSalary FROM Employee WHERE salary < (SELECT MAX(salary) FROM Employee);"
  },
  {
    id: 2,
    question: "Write a query to find duplicate records in a table based on multiple columns.",
    answer: "SELECT col1, col2, col3, COUNT(*) AS duplicate_count FROM your_table GROUP BY col1, col2, col3 HAVING COUNT(*) > 1;"
  },
  {
    id: 3,
    question: "How would you find the top 3 highest salaries in each department using window functions?",
    answer: "SELECT * FROM (SELECT *, ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS rn FROM Employee) t WHERE rn <= 3;"
  },
  {
    id: 4,
    question: "Write a query to calculate the running total of sales by date.",
    answer: "SELECT date, sales, SUM(sales) OVER (ORDER BY date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total FROM Sales;"
  },
  {
    id: 5,
    question: "How do you find employees who have not been assigned to any project using a LEFT JOIN?",
    answer: "SELECT e.* FROM Employee e LEFT JOIN ProjectAssignment pa ON e.employee_id = pa.employee_id WHERE pa.employee_id IS NULL;"
  },
  {
    id: 6,
    question: "Write a query to find the nth highest salary using LIMIT and OFFSET.",
    answer: "SELECT DISTINCT salary FROM Employee ORDER BY salary DESC LIMIT 1 OFFSET n-1;"
  },
  {
    id: 7,
    question: "How would you use a CTE to find departments with more than 10 employees?",
    answer: "WITH dept_count AS (SELECT department, COUNT(*) AS emp_count FROM Employee GROUP BY department) SELECT department FROM dept_count WHERE emp_count > 10;"
  },
  {
    id: 8,
    question: "Write a query to swap the values of two columns (e.g., first_name and last_name) in a table.",
    answer: "UPDATE Employee SET first_name = last_name, last_name = first_name;"
  },
  {
    id: 9,
    question: "How do you find the median salary in SQL?",
    answer: "SELECT AVG(salary) AS median_salary FROM (SELECT salary FROM Employee ORDER BY salary LIMIT 2 - (SELECT COUNT(*) FROM Employee) % 2 OFFSET (SELECT (COUNT(*) - 1) / 2 FROM Employee)) AS sub;"
  },
  {
    id: 10,
    question: "Write a query to find customers who have placed orders in every month of the last 6 months.",
    answer: "SELECT customer_id FROM Orders WHERE order_date >= DATE_SUB(CURDATE(), INTERVAL 6 MONTH) GROUP BY customer_id HAVING COUNT(DISTINCT DATE_FORMAT(order_date, '%Y-%m')) = 6;"
  },
  {
    id: 11,
    question: "How would you use a self-join to find all pairs of employees who work in the same department?",
    answer: "SELECT e1.employee_id AS emp1, e2.employee_id AS emp2 FROM Employee e1 JOIN Employee e2 ON e1.department = e2.department AND e1.employee_id < e2.employee_id;"
  },
  {
    id: 12,
    question: "Write a query to find the longest streak of consecutive login days for each user.",
    answer: "WITH login_dates AS (SELECT user_id, login_date, ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY login_date) AS rn FROM UserLogins), streaks AS (SELECT user_id, login_date, DATE_SUB(login_date, INTERVAL rn DAY) AS grp FROM login_dates) SELECT user_id, COUNT(*) AS streak_length FROM streaks GROUP BY user_id, grp ORDER BY streak_length DESC LIMIT 1;"
  },
  {
    id: 13,
    question: "How do you pivot rows to columns in SQL (e.g., convert product sales by month into columns)?",
    answer: "SELECT product_id, SUM(CASE WHEN month = 'Jan' THEN sales ELSE 0 END) AS Jan_Sales, SUM(CASE WHEN month = 'Feb' THEN sales ELSE 0 END) AS Feb_Sales, ... FROM Sales GROUP BY product_id;"
  },
  {
    id: 14,
    question: "Write a query to find the 3rd highest salary without using LIMIT or TOP.",
    answer: "SELECT DISTINCT salary FROM Employee e1 WHERE 3 = (SELECT COUNT(DISTINCT salary) FROM Employee e2 WHERE e2.salary >= e1.salary);"
  },
  {
    id: 15,
    question: "How would you use a recursive CTE to generate a sequence of numbers from 1 to 100?",
    answer: "WITH RECURSIVE numbers AS (SELECT 1 AS n UNION ALL SELECT n + 1 FROM numbers WHERE n < 100) SELECT n FROM numbers;"
  }
];