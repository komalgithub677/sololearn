import React, { useState, useEffect } from "react";
import CoursePlayer from "./me";
import axios from "axios";
import PreTest from "./PreTest.tsx";

// === EMBEDDED DATA ===
const lessons = [
  {
    id: 1,
    title: "SQL Fundamentals",
    description: "In this course, you'll learn SQL basics and how to use SQL statements! Database concepts, syntax and real-world data stored in databases. Once you know how to use SQL, you'll be able to work with databases from many different platforms and tools. Learn about SQL queries and how to manage data in databases. This course will give you practical skills and prepare you for everything from small projects to database administration.",
    xp: 10,
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
            content: `<p>SQL stands for Structured Query Language. It is used to communicate with and manipulate databases. SQL is a standard language for relational database management systems.</p>
<ul>
  <li><strong>SQL is used to manage data in relational databases</strong></li>
  <li>It allows you to create, read, update, and delete data</li>
  <li>SQL is used by many database systems like MySQL, PostgreSQL, SQL Server, and Oracle</li>
</ul>`,
            duration: "8 min",
            isCompleted: false,
            isLocked: false,
            quiz: [],
          },
          {
            id: 2,
            title: "Basic SQL Syntax",
            type: "text",
            content: `<p>SQL statements are written in English-like syntax.</p>
<pre><code>SELECT * FROM customers;
</code></pre>
<ul>
  <li><strong>Keywords</strong> like SELECT, FROM, WHERE are not case-sensitive</li>
  <li>Each statement ends with a <strong>semicolon</strong></li>
  <li>SQL is declarative — you specify what you want, not how to get it</li>
</ul>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 3,
            title: "Data Types",
            type: "text",
            content: `<p>SQL supports various data types:</p>
<p><strong>Common types:</strong></p>
<ul>
  <li><strong>INT:</strong> Integer numbers</li>
  <li><strong>VARCHAR(n):</strong> Variable-length strings</li>
  <li><strong>DATE:</strong> Date values</li>
  <li><strong>BOOLEAN:</strong> True/False values</li>
  <li><strong>DECIMAL(p,s):</strong> Exact numeric values</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code>CREATE TABLE users (
  id INT,
  name VARCHAR(50),
  created_at DATE
);
</code></pre>`,
            duration: "12 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 4,
            title: "Creating Tables",
            type: "text",
            content: `<p>The <code>CREATE TABLE</code> statement defines a new table.</p>
<pre><code>CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  salary DECIMAL(10,2),
  hire_date DATE
);
</code></pre>
<p><strong>Key points:</strong></p>
<ul>
  <li><strong>PRIMARY KEY</strong> uniquely identifies each record</li>
  <li><strong>NOT NULL</strong> ensures a column cannot have NULL values</li>
  <li>You can specify constraints when creating tables</li>
</ul>`,
            duration: "12 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 5,
            title: "Quiz",
            type: "quiz",
            content: `<p>Test your knowledge of SQL fundamentals.</p>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
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
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Querying Data",
    description: "Learn how to retrieve and filter data using SQL queries.",
    xp: 10,
    chapters: [
      {
        id: 2,
        title: "Querying Data",
        isExpanded: false,
        lessons: [
          {
            id: 6,
            title: "SELECT Statement",
            type: "text",
            content: `<p>The <code>SELECT</code> statement retrieves data from a database.</p>
<p><strong>Basic syntax:</strong></p>
<pre><code>SELECT column1, column2 FROM table_name;
</code></pre>
<p><strong>Examples:</strong></p>
<pre><code>SELECT name, age FROM users;
SELECT * FROM products; -- Selects all columns
</code></pre>
<p><strong>Key points:</strong></p>
<ul>
  <li>Use <code>*</code> to select all columns</li>
  <li>You can select specific columns by name</li>
</ul>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 7,
            title: "WHERE Clause",
            type: "text",
            content: `<p>The <code>WHERE</code> clause filters records.</p>
<p><strong>Examples:</strong></p>
<pre><code>SELECT * FROM employees WHERE salary > 50000;
SELECT name FROM customers WHERE country = 'USA';
</code></pre>
<p><strong>Operators:</strong></p>
<ul>
  <li><code>=</code>, <code>!=</code>, <code>></code>, <code><</code>, <code>>=</code>, <code><=</code></li>
  <li><code>BETWEEN</code>, <code>LIKE</code>, <code>IN</code></li>
  <li><code>AND</code>, <code>OR</code>, <code>NOT</code></li>
</ul>
<p><strong>Key points:</strong></p>
<ul>
  <li>Use single quotes for string literals</li>
  <li><code>WHERE</code> comes after <code>FROM</code></li>
</ul>`,
            duration: "12 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 8,
            title: "ORDER BY",
            type: "text",
            content: `<p><code>ORDER BY</code> sorts the result set.</p>
<p><strong>Examples:</strong></p>
<pre><code>SELECT * FROM products ORDER BY price;
SELECT name, age FROM users ORDER BY age DESC;
</code></pre>
<p><strong>Key points:</strong></p>
<ul>
  <li><code>ASC</code> (ascending) is default</li>
  <li>Use <code>DESC</code> for descending order</li>
  <li>You can sort by multiple columns</li>
</ul>`,
            duration: "8 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 9,
            title: "LIMIT and OFFSET",
            type: "text",
            content: `<p><code>LIMIT</code> restricts the number of rows returned.<br>
<code>OFFSET</code> specifies where to start counting.</p>
<p><strong>Examples:</strong></p>
<pre><code>SELECT * FROM products LIMIT 10;
SELECT * FROM orders LIMIT 5 OFFSET 10; -- Skips first 10 rows
</code></pre>
<p><strong>Key points:</strong></p>
<ul>
  <li>Useful for pagination</li>
  <li>Syntax varies by database system</li>
  <li><code>OFFSET</code> comes after <code>LIMIT</code></li>
</ul>`,
            duration: "8 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 10,
            title: "Quiz",
            type: "quiz",
            content: `<p>Test your understanding of querying data in SQL.</p>`,
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
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Modifying Data",
    description: "Learn how to insert, update, delete, and manage data safely using SQL transactions.",
    xp: 10,
    chapters: [
      {
        id: 3,
        title: "Modifying Data",
        isExpanded: false,
        lessons: [
          {
            id: 11,
            title: "INSERT Statement",
            type: "text",
            content: `<p><code>INSERT</code> adds new records to a table.</p>
<p><strong>Examples:</strong></p>
<pre><code>INSERT INTO users (name, email) VALUES ('John', 'john@example.com');
INSERT INTO products VALUES (1, 'Laptop', 999.99);
</code></pre>
<p><strong>Key points:</strong></p>
<ul>
  <li>Specify column names or use table order</li>
  <li>Values must match column data types</li>
  <li>Use single quotes for strings</li>
</ul>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: false,
            quiz: [],
          },
          {
            id: 12,
            title: "UPDATE Statement",
            type: "text",
            content: `<p><code>UPDATE</code> modifies existing records.</p>
<pre><code>UPDATE employees SET salary = 55000 WHERE id = 101;
</code></pre>
<p><strong>Key points:</strong></p>
<ul>
  <li>Always use <code>WHERE</code> to specify which records to update</li>
  <li>Omitting <code>WHERE</code> updates all records</li>
  <li>You can update multiple columns at once</li>
</ul>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 13,
            title: "DELETE Statement",
            type: "text",
            content: `<p><code>DELETE</code> removes records from a table.</p>
<pre><code>DELETE FROM customers WHERE id = 42;
</code></pre>
<p><strong>Key points:</strong></p>
<ul>
  <li>Always use <code>WHERE</code> to specify which records to delete</li>
  <li>Omitting <code>WHERE</code> deletes all records</li>
  <li><code>DELETE</code> doesn't reset auto-increment counters</li>
</ul>`,
            duration: "8 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 14,
            title: "Transactions",
            type: "text",
            content: `<p>Transactions group multiple operations into a single unit.</p>
<pre><code>BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
</code></pre>
<p><strong>Key points:</strong></p>
<ul>
  <li><code>BEGIN</code> starts a transaction</li>
  <li><code>COMMIT</code> saves changes</li>
  <li><code>ROLLBACK</code> undoes changes</li>
  <li><strong>ACID</strong> properties: Atomicity, Consistency, Isolation, Durability</li>
</ul>`,
            duration: "12 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 15,
            title: "Quiz",
            type: "quiz",
            content: `<p>Test your knowledge of modifying data and transactions in SQL.</p>`,
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
            ],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Advanced Queries",
    description: "Learn advanced SQL techniques like JOINs, aggregations, grouping, and subqueries.",
    xp: 10,
    chapters: [
      {
        id: 4,
        title: "Advanced Queries",
        isExpanded: false,
        lessons: [
          {
            id: 16,
            title: "JOIN Operations",
            type: "text",
            content: `<p><code>JOIN</code> combines rows from two or more tables.</p>
<p><strong>Types:</strong></p>
<ul>
  <li><strong>INNER JOIN:</strong> Returns matching rows</li>
  <li><strong>LEFT JOIN:</strong> All rows from left table + matches</li>
  <li><strong>RIGHT JOIN:</strong> All rows from right table + matches</li>
  <li><strong>FULL JOIN:</strong> All rows when there's a match in either</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code>SELECT orders.id, customers.name 
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id;
</code></pre>`,
            duration: "12 min",
            isCompleted: false,
            isLocked: false,
            quiz: [],
          },
          {
            id: 17,
            title: "Aggregate Functions",
            type: "text",
            content: `<p>Aggregate functions perform calculations on sets of values.</p>
<p><strong>Common functions:</strong></p>
<ul>
  <li><code>COUNT():</code> Number of rows</li>
  <li><code>SUM():</code> Total of values</li>
  <li><code>AVG():</code> Average value</li>
  <li><code>MAX()/MIN():</code> Highest/lowest value</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code>SELECT COUNT(*) FROM products;
SELECT AVG(salary) FROM employees;
</code></pre>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 18,
            title: "GROUP BY",
            type: "text",
            content: `<p><code>GROUP BY</code> groups rows sharing a property.</p>
<pre><code>SELECT department, COUNT(*) 
FROM employees 
GROUP BY department;
</code></pre>
<p><strong>Key points:</strong></p>
<ul>
  <li>Used with aggregate functions</li>
  <li><code>HAVING</code> filters groups (like <code>WHERE</code> for rows)</li>
  <li><code>GROUP BY</code> comes after <code>WHERE</code></li>
</ul>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 19,
            title: "Subqueries",
            type: "text",
            content: `<p>Subqueries are queries within queries.</p>
<p><strong>Examples:</strong></p>
<pre><code>SELECT name FROM products 
WHERE price > (SELECT AVG(price) FROM products);

SELECT * FROM employees 
WHERE department IN (SELECT name FROM departments WHERE location = 'NY');
</code></pre>`,
            duration: "12 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 20,
            title: "Quiz",
            type: "quiz",
            content: `<p>Test your understanding of advanced SQL queries.</p>`,
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
            ],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Database Design",
    description: "Learn key concepts in database design including keys, normalization, indexes, and views.",
    xp: 10,
    chapters: [
      {
        id: 5,
        title: "Database Design",
        isExpanded: false,
        lessons: [
          {
            id: 21,
            title: "Primary and Foreign Keys",
            type: "text",
            content: `<p><strong>Primary Key:</strong></p>
<ul>
  <li>Uniquely identifies each record</li>
  <li>Cannot be NULL</li>
  <li>Only one per table</li>
</ul>
<p><strong>Foreign Key:</strong></p>
<ul>
  <li>Links to a Primary Key in another table</li>
  <li>Enforces referential integrity</li>
  <li>Can be NULL unless constrained</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code>CREATE TABLE orders (
  id INT PRIMARY KEY,
  customer_id INT,
  FOREIGN KEY (customer_id) REFERENCES customers(id)
);
</code></pre>`,
            duration: "12 min",
            isCompleted: false,
            isLocked: false,
            quiz: [],
          },
          {
            id: 22,
            title: "Normalization",
            type: "text",
            content: `<p>Normalization organizes data to reduce redundancy.</p>
<p><strong>Normal Forms:</strong></p>
<ul>
  <li><strong>1NF:</strong> Each column contains atomic values, no repeating groups</li>
  <li><strong>2NF:</strong> In 1NF, no partial dependencies</li>
  <li><strong>3NF:</strong> In 2NF, no transitive dependencies</li>
</ul>`,
            duration: "12 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 23,
            title: "Indexes",
            type: "text",
            content: `<p>Indexes improve query performance.</p>
<pre><code>CREATE INDEX idx_customer_name ON customers(name);
</code></pre>
<p><strong>Key points:</strong></p>
<ul>
  <li>Speeds up searches on indexed columns</li>
  <li>Slows down INSERT/UPDATE/DELETE</li>
  <li>Primary keys are automatically indexed</li>
  <li>Use on frequently queried columns</li>
</ul>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 24,
            title: "Views",
            type: "text",
            content: `<p>Views are virtual tables based on query results.</p>
<pre><code>CREATE VIEW active_customers AS
SELECT * FROM customers WHERE last_purchase > CURRENT_DATE - INTERVAL '1 year';
</code></pre>
<p><strong>Key points:</strong></p>
<ul>
  <li>Doesn't store data itself</li>
  <li>Simplifies complex queries</li>
  <li>Can be queried like a table</li>
  <li>Updates to base tables reflect in views</li>
</ul>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 25,
            title: "Quiz",
            type: "quiz",
            content: `<p>Test your knowledge of database design principles.</p>`,
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
            ],
          },
        ],
      },
    ],
  },
];

const badges = [
  {
    id: 1,
    name: "Sql Novice",
    description: "Completed 1 lesson",
    xpRequired: 10,
    icon: "🎓"
  },
  {
    id: 2,
    name: "Sql Explorer",
    description: "Earned 50 XP",
    xpRequired: 50,
    icon: "🔍"
  },
  {
    id: 3,
    name: "Sql Champion",
    description: "Earned 100 XP",
    xpRequired: 100,
    icon: "🏆"
  }
];

// === COMPONENTS ===

// HomePage Component
function HomePage({
  onStartLesson,
  onGoToQuiz,
  lessons,
  completedLessons,
  xp,
  badgesEarned,
  badgesData,
  onRetakePreTest,
}) {
  const totalLessons = lessons.length;
  const completedCount = completedLessons.length;
  const progressPercent = (completedCount / totalLessons) * 100;

  const handleTakeRandomQuiz = () => {
    const randomLesson = lessons[Math.floor(Math.random() * lessons.length)];
    onGoToQuiz(randomLesson);
  };

  return (
    <main className="max-w-5xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-6">
        🚀 SQL Interactive Course
      </h2>
      <h1>" In this course, you'll learn SQL basics and how to use SQL statements! Database concepts, syntax and real-world data stored in databases. Once you know how to use SQL, you'll be able to work with databases from many different platforms and tools. Learn about SQL queries and how to manage data in databases. This course will give you practical skills and prepare you for everything from small projects to database administration."</h1>

      {/* XP and Progress */}
      <div className="bg-gradient-to-br from-white to-purple-50 p-6 rounded-2xl shadow-lg mb-8 border border-purple-100 mt-5">
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-700 font-medium text-lg ">⭐ XP: {xp}</span>
          <span className="text-green-600 font-semibold">
            {completedCount} / {totalLessons} Lessons Completed
          </span>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      {/* Badges */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">🏅 Badges Earned</h3>
        <div className="flex flex-wrap gap-4">
          {badgesEarned.length > 0 ? (
            badgesEarned.map((id, index) => {
              const badge = badgesData.find((b) => b.id === id);
              return (
                <div
                  key={index}
                  className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl w-40 text-center shadow-md hover:scale-105 transform transition"
                >
                  <div className="text-3xl mb-1">{badge.icon}</div>
                  <p className="font-bold text-yellow-800">{badge.name}</p>
                  <p className="text-xs text-gray-600 mt-1">{badge.description}</p>
                </div>
              );
            })
          ) : (
            <p className="text-gray-500">No badges yet. Complete lessons to earn!</p>
          )}
        </div>
      </div>

      {/* Lessons */}
         <div className="space-y-6">
        {lessons.map((lesson) => {
          const currentIndex = lessons.findIndex((l) => l.id === lesson.id);
          const previousLessonId = currentIndex > 0 ? lessons[currentIndex - 1].id : null;
          const isLocked = previousLessonId !== null && !completedLessons.includes(previousLessonId);
          return (
            <div
              key={lesson.id}
              className={`p-6 rounded-xl shadow-lg border-l-8 transition ${
                completedLessons.includes(lesson.id)
                  ? "bg-green-50 border-green-500"
                  : "bg-white border-gray-200"
              } ${isLocked ? "opacity-70" : ""}`}
            >
              <h3 className="text-xl font-bold text-gray-800">{lesson.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{lesson.description}</p>
              {completedLessons.includes(lesson.id) && (
                <div className="flex items-center mt-2 text-green-600 font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Completed
                </div>
              )}
              <button
                onClick={() => { if (!isLocked) onStartLesson(lesson.id); }}
                disabled={isLocked}
                className={`mt-4 px-5 py-2 text-white font-semibold rounded-full shadow transform transition ${
                  isLocked
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105"
                }`}
              >
                {isLocked ? "🔒 Locked" : "🚀 Take Quiz"}
              </button>
            </div>
          );
        })}
      </div>

      <div className="text-center space-y-4">
        <button
          onClick={handleTakeRandomQuiz}
          className="mt-10 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition"
        >
          🎲 Take Random Quiz
        </button>
        
        <div>
          <button
            onClick={onRetakePreTest}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition"
          >
            🧠 Retake PreTest
          </button>
        </div>
      </div>
    </main>
  );
}

// LessonPage Component
function LessonPage({ lesson, onBack, onGoToQuiz }) {
  const [expandedChapters, setExpandedChapters] = useState(
    new Set(lesson.chapters?.filter((ch) => ch.isExpanded).map((ch) => ch.id) || [])
  );
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Simulate completed lessons (in real app, get from context or localStorage)
  const [completedLessons, setCompletedLessons] = useState(new Set());

  const toggleChapter = (chapterId) => {
    setExpandedChapters((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(chapterId)) {
        newSet.delete(chapterId);
      } else {
        newSet.add(chapterId);
      }
      return newSet;
    });
  };

  // Open modal if not locked
  const openLessonModal = (lessonItem) => {
    if (lessonItem.isLocked) return;
    setSelectedLesson(lessonItem);
    setShowModal(true);
  };

  // Mark lesson as complete and unlock next
  const markAsComplete = () => {
    if (!selectedLesson) return;

    // Mark current as complete
    setCompletedLessons((prev) => new Set(prev).add(selectedLesson.id));

    // Update lesson data: mark completed
    const chapter = lesson.chapters?.[0];
    const updatedLesson = chapter.lessons.find((l) => l.id === selectedLesson.id);
    if (updatedLesson) {
      updatedLesson.isCompleted = true;
    }

    // Unlock next lesson
    const lessonIndex = chapter.lessons.findIndex((l) => l.id === selectedLesson.id);
    if (lessonIndex !== -1 && lessonIndex < chapter.lessons.length - 1) {
      const nextLesson = chapter.lessons[lessonIndex + 1];
      nextLesson.isLocked = false;
    }

    // Close modal
    closeLessonModal();
  };

  const closeLessonModal = () => {
    setShowModal(false);
    setSelectedLesson(null);
  };

  // Get the only chapter (for simplicity)
  const chapter = lesson.chapters?.[0];

  return (
    <div className="max-w-4xl mx-auto mt-12 p-6 sm:p-8 bg-white rounded-3xl shadow-xl">
      <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-4">
        📘 {lesson.title}
      </h1>
      <p className="text-gray-800 text-lg mb-8">{lesson.description}</p>

      {lesson.chapters && lesson.chapters.length > 0 ? (
        <div className="space-y-6">
          {lesson.chapters.map((chapter) => (
            <div key={chapter.id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <div
                onClick={() => toggleChapter(chapter.id)}
                className="flex justify-between items-center px-4 py-3 cursor-pointer bg-gray-100 hover:bg-gray-200 transition"
              >
                <h2 className="text-xl font-semibold text-gray-800">{chapter.title}</h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                    expandedChapters.has(chapter.id) ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {expandedChapters.has(chapter.id) && (
                <div className="border-t border-gray-200">
                  {chapter.lessons.map((lessonItem) => (
                    <div
                      key={lessonItem.id}
                      onClick={() => openLessonModal(lessonItem)}
                      className={`border-b border-gray-100 last:border-b-0 cursor-pointer transition ${
                        lessonItem.isLocked
                          ? "opacity-60 hover:bg-white"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex justify-between items-center px-4 py-3">
                        <div>
                          <h3 className="text-lg font-medium text-gray-800">
                            {lessonItem.title}
                          </h3>
                          <p className="text-sm text-gray-500">{lessonItem.duration}</p>
                        </div>
                        <div>
                          {lessonItem.isCompleted ? (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-500 text-white">✓</span>
                          ) : lessonItem.isLocked ? (
                            <span className="inline-flex items-center justify-center w-6 h-6">
                              🔒
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border-2 border-gray-400">
                              ▶
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-500 italic mb-8">No content available yet. Please check back soon!</div>
      )}

      {/* Take Quiz Button */}
      <div className="text-center mt-12">
        <button
          onClick={() => onGoToQuiz(lesson)}
          className="bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-transform hover:scale-105"
        >
          🚀 Take Quiz
        </button>
      </div>

      {/* Back Button */}
      <div className="text-center mt-8">
        <button
          onClick={onBack}
          className="text-blue-600 hover:text-blue-800 font-medium underline transition"
        >
          ← Back to Home
        </button>
      </div>

      {/* Modal */}
      {showModal && selectedLesson && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={closeLessonModal}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
              <h2 className="text-2xl font-bold text-white">{selectedLesson.title}</h2>
            </div>

            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div
                className="text-gray-700 leading-relaxed whitespace-pre-line"
                dangerouslySetInnerHTML={{ __html: selectedLesson.content }}
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-3 p-6 bg-gray-50 border-t border-gray-200">
              <button
                onClick={closeLessonModal}
                className="px-6 py-2 text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-xl transition"
              >
                Close
              </button>
              <button
                onClick={markAsComplete}
                className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-xl shadow-md hover:scale-105 transition-transform"
              >
                Mark as Complete ✅
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
function DynamicQuizPage({ lesson, onBack, onComplete }) {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const generateQuizFromLesson = async () => {
      try {
        setLoading(true);
        setError("");
        console.log("Generating quiz for:", lesson.title);

        // Call the backend Gemini API to generate quiz questions
        console.log("Calling API endpoint:", "http://localhost:3000/api/quiz");
        console.log("Request payload:", { topic: lesson.title });
        
        // First check if backend is accessible
        try {
          const healthCheck = await axios.get("http://localhost:3000/");
          console.log("Backend health check:", healthCheck.data);
        } catch (healthError) {
          console.error("Backend health check failed:", healthError.message);
          throw new Error("Backend server is not accessible. Please make sure it's running on port 3000.");
        }
        
        // Test quiz route specifically
        try {
          const quizTest = await axios.get("http://localhost:3000/api/quiz/test");
          console.log("Quiz route test:", quizTest.data);
        } catch (quizTestError) {
          console.error("Quiz route test failed:", quizTestError.message);
          throw new Error("Quiz routes are not accessible. Please check backend configuration.");
        }
        
        try {
          const res = await axios.post("http://localhost:3000/api/quiz", {
            topic: lesson.title,
          });

          console.log("API Response:", res.data);

          if (!res.data || !res.data.questions || !Array.isArray(res.data.questions)) {
            throw new Error("Invalid response format from API");
          }

          if (res.data.questions.length === 0) {
            throw new Error("No questions returned from API");
          }

          // Format the questions from the API response
          const formatted = res.data.questions.map((q, index) => ({
            question: q.question || `Question ${index + 1}`,
            options: q.options || [],
            correctAnswer: q.answer || q.correctAnswer,
            type: "mcq", // All questions from Gemini API are MCQ
            xp: 10,
          }));

          console.log("Formatted questions:", formatted);
          setQuizQuestions(formatted);
          setLoading(false);
        } catch (apiError) {
          console.error("API Error Details:", {
            message: apiError.message,
            response: apiError.response?.data,
            status: apiError.response?.status,
            statusText: apiError.response?.statusText
          });
          
          if (apiError.code === 'ECONNREFUSED') {
            throw new Error("Cannot connect to backend server. Please make sure the server is running on port 3000.");
          } else if (apiError.response?.status === 500) {
            throw new Error(`Backend error: ${apiError.response.data?.error || 'Unknown server error'}`);
          } else if (apiError.response?.status === 400) {
            throw new Error(`Bad request: ${apiError.response.data?.error || 'Invalid request'}`);
          } else {
            throw new Error(`API call failed: ${apiError.message}`);
          }
        }
      } catch (err) {
        console.error("Quiz generation error:", err);
        setError(
          err.response?.data?.message ||
          err.message ||
          "Failed to generate quiz. Please try again."
        );
        setLoading(false);
      }
    };

    if (lesson && lesson.title) {
      generateQuizFromLesson();
    } else {
      setError("No lesson provided");
      setLoading(false);
    }
  }, [lesson]);



  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center p-12 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl">
          <div className="w-20 h-20 mx-auto mb-6 bg-purple-500/20 rounded-full flex items-center justify-center animate-spin">
            <span className="text-purple-400 text-4xl">⚡</span>
          </div>
          <p className="text-white text-xl font-semibold mb-2">Generating your quiz...</p>
          <p className="text-white/70">This may take a few moments</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || quizQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="text-center p-12 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl max-w-md">
          <div className="w-20 h-20 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">
            <span className="text-red-400 text-4xl">⚠️</span>
          </div>
          <h2 className="text-red-300 text-xl font-semibold mb-4">Quiz Generation Failed</h2>
          <p className="text-red-200/80 text-sm mb-6">{error || "No questions available for this lesson."}</p>
          <button
            onClick={onBack}
            className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white rounded-xl border border-white/30 transition-all duration-300 hover:scale-105 backdrop-blur-sm font-medium"
          >
            ← Back to Lesson
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  const handleAnswerSelect = (option) => {
    if (isCorrect !== null) return;
    setSelectedAnswer(option);
    const correct = option === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
    if (correct) setScore((prev) => prev + currentQuestion.xp);
  };



  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setShowFeedback(false);
    } else {
      onComplete(score);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto p-6 min-h-screen flex flex-col">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
            Quiz: {lesson.title}
          </h1>
          <div className="flex items-center justify-center space-x-4 text-white/80">
            <span>Question {currentQuestionIndex + 1} of {quizQuestions.length}</span>
            <div className="w-2 h-2 bg-white/60 rounded-full"></div>
            <span>Score: {score} XP</span>
          </div>
        </div>

        <div className="mb-8">
          <div className="w-full bg-white/20 rounded-full h-3 backdrop-blur-sm">
            <div
              className="bg-gradient-to-r from-purple-400 to-pink-400 h-3 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-white/70 text-center mt-2 text-sm">{Math.round(progress)}% Complete</p>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm mb-4">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Question
              </div>
              <h2 className="text-2xl font-semibold text-white leading-relaxed">
                {currentQuestion.question}
              </h2>
            </div>

            <div className="space-y-4 mb-8">
              {currentQuestion.options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 ${
                    selectedAnswer === option
                      ? isCorrect === true
                        ? "bg-green-500/30 border-2 border-green-400"
                        : isCorrect === false
                        ? "bg-red-500/30 border-2 border-red-400"
                        : "bg-blue-500/30 border-2 border-blue-400"
                      : "bg-white/10 hover:bg-white/20 border-2 border-white/20"
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${
                      selectedAnswer === option ? 'border-white' : 'border-white/40'
                    }`}>
                      {selectedAnswer === option && <div className="w-3 h-3 bg-white rounded-full"></div>}
                    </div>
                    <span className="text-white text-lg font-medium">{option}</span>
                  </div>
                </div>
              ))}
            </div>

            {showFeedback && isCorrect !== null && (
              <div className={`mb-8 p-6 rounded-2xl ${
                isCorrect ? "bg-green-500/20 border-2 border-green-400" : "bg-red-500/20 border-2 border-red-400"
              }`}>
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                    isCorrect ? "bg-green-500/30" : "bg-red-500/30"
                  }`}>
                    <span className="text-2xl">{isCorrect ? "🎉" : "💡"}</span>
                  </div>
                  <div>
                    {isCorrect ? (
                      <p className="text-green-300 font-semibold">Excellent! +{currentQuestion.xp} XP</p>
                    ) : (
                      <p className="text-red-300 font-semibold">Correct answer: <strong>{currentQuestion.correctAnswer}</strong></p>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="flex justify-between pt-6 border-t border-white/20">
              <button
                onClick={onBack}
                className="text-white/80 hover:text-white transition"
              >
                ← Back
              </button>
              <button
                onClick={handleNext}
                disabled={isCorrect === null}
                className={`px-8 py-4 rounded-2xl font-semibold ${
                  isCorrect !== null
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "bg-gray-600/50 text-white/50 cursor-not-allowed"
                }`}
              >
                {currentQuestionIndex < quizQuestions.length - 1 ? "Next" : "Finish"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// === MAIN APP ===
function SqlCourseApp() {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentLesson, setCurrentLesson] = useState(null);
  const [xp, setXp] = useState(0);
  const [badgesEarned, setBadgesEarned] = useState([]);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [showPreTest, setShowPreTest] = useState(true);

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("htmlCourseProgress");
    if (saved) {
      const { xp: savedXp, completedLessons: savedLessons } = JSON.parse(saved);
      setXp(savedXp);
      setCompletedLessons(savedLessons);
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem(
      "htmlCourseProgress",
      JSON.stringify({ xp, completedLessons })
    );

    const earned = badges.filter(
      (badge) => xp >= badge.xpRequired && !badgesEarned.includes(badge.id)
    );
    if (earned.length > 0) {
      setBadgesEarned((prev) => [...prev, ...earned.map((b) => b.id)]);
    }
  }, [xp, completedLessons]);

  const handleStartLesson = (id) => {
    const lesson = lessons.find((l) => l.id === id);
    setCurrentLesson(lesson);
    setCurrentPage("lesson");
  };

  const handleGoToQuiz = (lesson) => {
    setCurrentLesson(lesson);
    setCurrentPage("quiz");
  };

  const handleQuizComplete = (score) => {
    if (!completedLessons.includes(currentLesson.id)) {
      setXp((prev) => prev + currentLesson.xp);
      setCompletedLessons((prev) => [...prev, currentLesson.id]);
    }
    setCurrentPage("home");
  };

  const handlePreTestComplete = (level, finalScore) => {
    setShowPreTest(false);
    setCurrentPage("home");
    // You can use level and finalScore to customize the course experience
    console.log(`PreTest completed! Level: ${level}, Score: ${finalScore}`);
  };

  return (
    <div className="bg-gradient-to-br from-gray-100 via-purple-50 to-pink-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-6 sm:p-8 transition-all duration-500 animate-fade-in">
                 {showPreTest && (
           <PreTest 
             courseName="Sql" 
             onComplete={handlePreTestComplete} 
           />
         )}
        {!showPreTest && currentPage === "home" && (
          <HomePage
            onStartLesson={handleStartLesson}
            onGoToQuiz={handleGoToQuiz}
            lessons={lessons}
            completedLessons={completedLessons}
            xp={xp}
            badgesEarned={badgesEarned}
            badgesData={badges}
            onRetakePreTest={() => setShowPreTest(true)}
          />
        )}
        {!showPreTest && currentPage === "lesson" && (
          <LessonPage
            lesson={currentLesson}
            onBack={() => setCurrentPage("home")}
            onGoToQuiz={() => setCurrentPage("quiz")}
          />
        )}
        {!showPreTest && currentPage === "quiz" && (
          <DynamicQuizPage
            lesson={currentLesson}
            onBack={() => setCurrentPage("lesson")}
            onComplete={handleQuizComplete}
          />
        )}
      </div>
    </div>
  );
}

export default SqlCourseApp;