import React from "react";
import CoursePlayer from "./me"; // Adjust path as needed

type QuestionType = "mcq" | "fill";

interface QuizQuestion {
  type: QuestionType;
  question: string;
  options?: string[]; // Optional for fill-in-the-blank
  correctAnswer: string;
}

interface Lesson {
  id: number;
  title: string;
  type: "text";
  content: string;
  duration: string;
  isCompleted: boolean;
  isLocked: boolean;
  quiz: QuizQuestion[];
}

interface Chapter {
  id: number;
  title: string;
  isExpanded: boolean;
  lessons: Lesson[];
}

interface CourseData {
  title: string;
  description: string;
  icon: React.ReactNode;
  chapters: Chapter[];
}

// Define icon as a separate component
const SqlIcon: React.FC = () => (
  <svg width="64" height="64" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="64" cy="20" rx="40" ry="12" fill="#A6CE39"/>
    <ellipse cx="64" cy="20" rx="30" ry="8" fill="#7EBB1C"/>
    <path d="M24 20 v80 a40 12 0 0 0 80 0 V20" fill="#0078D7"/>
    <path d="M64 20 v80 a40 12 0 0 1 -40 0 V20" fill="#1A91F0"/>
    <text x="64" y="85" font-size="30" fill="white" font-family="Arial" text-anchor="middle" font-weight="bold">
      SQL
    </text>
  </svg>
);

const sqlCourseData: CourseData = {
  title: "SQL Interactive Course",
  description: " In this course, you'll learn SQL basics and how to use SQL statements! Database concepts, syntax and real-world data stored in databases. Once you know how to use SQL, you'll be able to work with databases from many different platforms and tools. Learn about SQL queries and how to manage data in databases. This course will give you practical skills and prepare you for everything from small projects to database administration.",
  icon: <SqlIcon />,
  chapters: [
    {
      id: 1,
      title: "SQL Fundamentals",
      isExpanded: true,
      lessons: [
        {
          id: 1,
          title: "What is SQL?",
          type: "text",
          content: `SQL stands for Structured Query Language. It is used to communicate with and manipulate databases. SQL is a standard language for relational database management systems.

Key points:
- SQL is used to manage data in relational databases
- It allows you to create, read, update, and delete data
- SQL is used by many database systems like MySQL, PostgreSQL, SQL Server, and Oracle`,
          duration: "8 min",
          isCompleted: false,
          isLocked: false,
          quiz: []
        },
        {
          id: 2,
          title: "Basic SQL Syntax",
          type: "text",
          content: `SQL statements are written in English-like syntax.

Example:
SELECT * FROM customers;

Key points:
- Keywords like SELECT, FROM, WHERE are not case-sensitive
- Each statement ends with a semicolon
- SQL is declarative - you specify what you want, not how to get it`,
          duration: "10 min",
          isCompleted: false,
          isLocked: false,
          quiz: []
        },
        {
          id: 3,
          title: "Data Types",
          type: "text",
          content: `SQL supports various data types:

Common types:
- INT: Integer numbers
- VARCHAR(n): Variable-length strings
- DATE: Date values
- BOOLEAN: True/False values
- DECIMAL(p,s): Exact numeric values

Example:
CREATE TABLE users (
  id INT,
  name VARCHAR(50),
  created_at DATE
);`,
          duration: "12 min",
          isCompleted: false,
          isLocked: false,
          quiz: []
        },
        {
          id: 4,
          title: "Creating Tables",
          type: "text",
          content: `The CREATE TABLE statement defines a new table.

Example:
CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  salary DECIMAL(10,2),
  hire_date DATE
);

Key points:
- PRIMARY KEY uniquely identifies each record
- NOT NULL ensures a column cannot have NULL values
- You can specify constraints when creating tables`,
          duration: "12 min",
          isCompleted: false,
          isLocked: false,
          quiz: []
        },
        {
          id: 5,
          title: "Quiz",
          type: "text",
          content: `Quiz`,
          duration: "10 min",
          isCompleted: false,
          isLocked: false,
          quiz: [
            {
              type: "mcq",
              question: "What does SQL stand for?",
              options: [
                "Structured Query Language",
                "Simple Query Language",
                "Standard Query Logic",
                "Structured Question Language"
              ],
              correctAnswer: "Structured Query Language"
            },
            {
              type: "fill",
              question: "Fill in the blank: SQL statements typically end with a ____.",
              correctAnswer: "semicolon"
            },
            {
              type: "mcq",
              question: "Which SQL keyword is used to retrieve data?",
              options: ["GET", "SELECT", "FETCH", "RETRIEVE"],
              correctAnswer: "SELECT"
            },
            {
              type: "mcq",
              question: "Which data type would you use for storing names?",
              options: ["INT", "DATE", "VARCHAR", "BOOLEAN"],
              correctAnswer: "VARCHAR"
            },
            {
              type: "fill",
              question: "Fill in the blank: The ____ constraint ensures a column cannot have NULL values.",
              correctAnswer: "NOT NULL"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Querying Data",
      isExpanded: false,
      lessons: [
        {
          id: 6,
          title: "SELECT Statement",
          type: "text",
          content: `The SELECT statement retrieves data from a database.

Basic syntax:
SELECT column1, column2 FROM table_name;

Examples:
SELECT name, age FROM users;
SELECT * FROM products; -- Selects all columns

Key points:
- Use * to select all columns
- You can select specific columns by name`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: []
        },
        {
          id: 7,
          title: "WHERE Clause",
          type: "text",
          content: `The WHERE clause filters records.

Examples:
SELECT * FROM employees WHERE salary > 50000;
SELECT name FROM customers WHERE country = 'USA';

Operators:
- =, !=, >, <, >=, <=
- BETWEEN, LIKE, IN
- AND, OR, NOT

Key points:
- Use single quotes for string literals
- WHERE comes after FROM`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: []
        },
        {
          id: 8,
          title: "ORDER BY",
          type: "text",
          content: `ORDER BY sorts the result set.

Examples:
SELECT * FROM products ORDER BY price;
SELECT name, age FROM users ORDER BY age DESC;

Key points:
- ASC (ascending) is default
- Use DESC for descending order
- You can sort by multiple columns`,
          duration: "8 min",
          isCompleted: false,
          isLocked: true,
          quiz: []
        },
        {
          id: 9,
          title: "LIMIT and OFFSET",
          type: "text",
          content: `LIMIT restricts the number of rows returned.
OFFSET specifies where to start counting.

Examples:
SELECT * FROM products LIMIT 10;
SELECT * FROM orders LIMIT 5 OFFSET 10; -- Skips first 10 rows

Key points:
- Useful for pagination
- Syntax varies by database system
- OFFSET comes after LIMIT`,
          duration: "8 min",
          isCompleted: false,
          isLocked: true,
          quiz: []
        },
        {
          id: 10,
          title: "Quiz",
          type: "text",
          content: `Quiz`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              type: "mcq",
              question: "Which clause filters records in a SELECT statement?",
              options: ["SELECT", "FROM", "WHERE", "ORDER BY"],
              correctAnswer: "WHERE"
            },
            {
              type: "fill",
              question: "Fill in the blank: Use ____ to sort results in descending order.",
              correctAnswer: "DESC"
            },
            {
              type: "mcq",
              question: "What does LIMIT 5 OFFSET 10 do?",
              options: [
                "Returns first 5 rows",
                "Returns rows 11-15",
                "Returns last 10 rows",
                "Returns all rows"
              ],
              correctAnswer: "Returns rows 11-15"
            },
            {
              type: "mcq",
              question: "Which operator checks if a value is within a range?",
              options: ["LIKE", "BETWEEN", "IN", "AND"],
              correctAnswer: "BETWEEN"
            },
            {
              type: "fill",
              question: "Fill in the blank: To select all columns, use ____ after SELECT.",
              correctAnswer: "*"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Modifying Data",
      isExpanded: false,
      lessons: [
        {
          id: 11,
          title: "INSERT Statement",
          type: "text",
          content: `INSERT adds new records to a table.

Examples:
INSERT INTO users (name, email) VALUES ('John', 'john@example.com');
INSERT INTO products VALUES (1, 'Laptop', 999.99);

Key points:
- Specify column names or use table order
- Values must match column data types
- Use single quotes for strings`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: []
        },
        {
          id: 12,
          title: "UPDATE Statement",
          type: "text",
          content: `UPDATE modifies existing records.

Example:
UPDATE employees SET salary = 55000 WHERE id = 101;

Key points:
- Always use WHERE to specify which records to update
- Omitting WHERE updates all records
- You can update multiple columns at once`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: []
        },
        {
          id: 13,
          title: "DELETE Statement",
          type: "text",
          content: `DELETE removes records from a table.

Example:
DELETE FROM customers WHERE id = 42;

Key points:
- Always use WHERE to specify which records to delete
- Omitting WHERE deletes all records
- DELETE doesn't reset auto-increment counters`,
          duration: "8 min",
          isCompleted: false,
          isLocked: true,
          quiz: []
        },
        {
          id: 14,
          title: "Transactions",
          type: "text",
          content: `Transactions group multiple operations into a single unit.

Example:
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;

Key points:
- BEGIN starts a transaction
- COMMIT saves changes
- ROLLBACK undoes changes
- ACID properties: Atomicity, Consistency, Isolation, Durability`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: []
        },
        {
          id: 15,
          title: "Quiz",
          type: "text",
          content: `Quiz`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              type: "mcq",
              question: "Which statement adds new records to a table?",
              options: ["ADD", "INSERT", "CREATE", "UPDATE"],
              correctAnswer: "INSERT"
            },
            {
              type: "fill",
              question: "Fill in the blank: Always use ____ with UPDATE to specify which records to modify.",
              correctAnswer: "WHERE"
            },
            {
              type: "mcq",
              question: "What happens if you omit WHERE in a DELETE statement?",
              options: [
                "Nothing happens",
                "Only the first record is deleted",
                "All records are deleted",
                "An error occurs"
              ],
              correctAnswer: "All records are deleted"
            },
            {
              type: "mcq",
              question: "Which command saves transaction changes?",
              options: ["BEGIN", "COMMIT", "SAVE", "END"],
              correctAnswer: "COMMIT"
            },
            {
              type: "fill",
              question: "Fill in the blank: The 'A' in ACID stands for ____.",
              correctAnswer: "Atomicity"
            }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Advanced Queries",
      isExpanded: false,
      lessons: [
        {
          id: 16,
          title: "JOIN Operations",
          type: "text",
          content: `JOIN combines rows from two or more tables.

Types:
- INNER JOIN: Returns matching rows
- LEFT JOIN: All rows from left table + matches
- RIGHT JOIN: All rows from right table + matches
- FULL JOIN: All rows when there's a match in either

Example:
SELECT orders.id, customers.name 
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id;`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: []
        },
        {
          id: 17,
          title: "Aggregate Functions",
          type: "text",
          content: `Aggregate functions perform calculations on sets of values.

Common functions:
- COUNT(): Number of rows
- SUM(): Total of values
- AVG(): Average value
- MAX()/MIN(): Highest/lowest value

Example:
SELECT COUNT(*) FROM products;
SELECT AVG(salary) FROM employees;`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: []
        },
        {
          id: 18,
          title: "GROUP BY",
          type: "text",
          content: `GROUP BY groups rows sharing a property.

Example:
SELECT department, COUNT(*) 
FROM employees 
GROUP BY department;

Key points:
- Used with aggregate functions
- HAVING filters groups (like WHERE for rows)
- GROUP BY comes after WHERE`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: []
        },
        {
          id: 19,
          title: "Subqueries",
          type: "text",
          content: `Subqueries are queries within queries.

Examples:
SELECT name FROM products 
WHERE price > (SELECT AVG(price) FROM products);

SELECT * FROM employees 
WHERE department IN (SELECT name FROM departments WHERE location = 'NY');`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: []
        },
        {
          id: 20,
          title: "Quiz",
          type: "text",
          content: `Quiz`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              type: "mcq",
              question: "Which JOIN returns only matching rows from both tables?",
              options: ["LEFT JOIN", "INNER JOIN", "FULL JOIN", "CROSS JOIN"],
              correctAnswer: "INNER JOIN"
            },
            {
              type: "fill",
              question: "Fill in the blank: ____() calculates the average of values.",
              correctAnswer: "AVG"
            },
            {
              type: "mcq",
              question: "What does GROUP BY do?",
              options: [
                "Sorts results",
                "Groups rows sharing a property",
                "Filters records",
                "Joins tables"
              ],
              correctAnswer: "Groups rows sharing a property"
            },
            {
              type: "mcq",
              question: "Which clause filters groups in a GROUP BY query?",
              options: ["WHERE", "HAVING", "FILTER", "GROUP BY"],
              correctAnswer: "HAVING"
            },
            {
              type: "fill",
              question: "Fill in the blank: A query within another query is called a ____.",
              correctAnswer: "subquery"
            }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Database Design",
      isExpanded: false,
      lessons: [
        {
          id: 21,
          title: "Primary and Foreign Keys",
          type: "text",
          content: `Primary Key:
- Uniquely identifies each record
- Cannot be NULL
- Only one per table

Foreign Key:
- Links to a Primary Key in another table
- Enforces referential integrity
- Can be NULL unless constrained

Example:
CREATE TABLE orders (
  id INT PRIMARY KEY,
  customer_id INT,
  FOREIGN KEY (customer_id) REFERENCES customers(id)
);`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: []
        },
        {
          id: 22,
          title: "Normalization",
          type: "text",
          content: `Normalization organizes data to reduce redundancy.

Normal Forms:
1NF: 
- Each column contains atomic values
- No repeating groups

2NF:
- In 1NF
- No partial dependencies

3NF:
- In 2NF
- No transitive dependencies`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: []
        },
        {
          id: 23,
          title: "Indexes",
          type: "text",
          content: `Indexes improve query performance.

Example:
CREATE INDEX idx_customer_name ON customers(name);

Key points:
- Speeds up searches on indexed columns
- Slows down INSERT/UPDATE/DELETE
- Primary keys are automatically indexed
- Use on frequently queried columns`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: []
        },
        {
          id: 24,
          title: "Views",
          type: "text",
          content: `Views are virtual tables based on query results.

Example:
CREATE VIEW active_customers AS
SELECT * FROM customers WHERE last_purchase > CURRENT_DATE - INTERVAL '1 year';

Key points:
- Doesn't store data itself
- Simplifies complex queries
- Can be queried like a table
- Updates to base tables reflect in views`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: []
        },
        {
          id: 25,
          title: "Quiz",
          type: "text",
          content: `Quiz`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              type: "mcq",
              question: "What is the purpose of a primary key?",
              options: [
                "To link to another table",
                "To uniquely identify each record",
                "To improve performance",
                "To store large data"
              ],
              correctAnswer: "To uniquely identify each record"
            },
            {
              type: "fill",
              question: "Fill in the blank: ____ is the process of organizing data to reduce redundancy.",
              correctAnswer: "Normalization"
            },
            {
              type: "mcq",
              question: "Which normal form eliminates transitive dependencies?",
              options: ["1NF", "2NF", "3NF", "4NF"],
              correctAnswer: "3NF"
            },
            {
              type: "mcq",
              question: "What is the main purpose of an index?",
              options: [
                "To enforce constraints",
                "To improve query performance",
                "To store data",
                "To format output"
              ],
              correctAnswer: "To improve query performance"
            },
            {
              type: "fill",
              question: "Fill in the blank: A ____ is a virtual table based on a query result.",
              correctAnswer: "view"
            }
          ]
        }
      ]
    }
  ]
};

export default function SqlCoursePage() {
  return <CoursePlayer courseId="sql" courseData={sqlCourseData} />;
}