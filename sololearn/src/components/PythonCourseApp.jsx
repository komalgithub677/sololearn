import React, { useState, useEffect } from "react";
import CoursePlayer from "./me";
import axios from "axios";
import PreTest from "./PreTest.tsx";

// === EMBEDDED DATA ===
const lessons = [
    {
      id: 1,
      title: "Python Introduction",
      description: "Python is a high-level, interpreted, general-purpose programming language known for its readability and simplicity. It supports multiple programming paradigms like procedural, object-oriented, and functional programming.",
      xp: 10,
      chapters: [
        {
          id: 1,
          title: "Python Introduction",
          isExpanded: true,
          lessons: [
            {
              id: 1,
              title: "What is Python?",
              type: "text",
              content: `<p>Python is a very popular general-purpose interpreted, object-oriented, and high-level programming language. Python is dynamically-typed and garbage-collected programming language. It was created by Guido van Rossum during 1985- 1990. It has the represented by .py</p>`,
              duration: "10 min",
              isCompleted: false,
              isLocked: false,
              quiz: [],
            },
            {
              id: 2,
              title: "Python Basics and Syntax",
              type: "text",
              content: `<p>A basic Python code has a specific structure:</p>
  <pre><code>print ("Hello, World!")
  </code></pre>
  <p>We use <code>print()</code> to print the code in Python and there will be no semicolon at the end of the print statement.</p>`,
              duration: "12 min",
              isCompleted: false,
              isLocked: true,
              quiz: [],
            },
            {
              id: 3,
              title: "Python Variables",
              type: "text",
              content: `<p>In Python, variables are used to store data values. A variable is created the moment you assign a value to it.</p>
  <p><strong>Example:</strong></p>
  <pre><code>x = 10        # Integer
  name = 'Tom'  # String
  price = 19.99 # Float
  </code></pre>`,
              duration: "10 min",
              isCompleted: false,
              isLocked: true,
              quiz: [],
            },
            {
              id: 4,
              title: "Python Datatypes",
              type: "text",
              content: `<p>In Python, data types define the kind of value a variable holds. Python is dynamically typed, so you don't need to declare types explicitly.</p>
  <ul>
    <li><strong>int:</strong> Integer numbers (e.g., x = 5)</li>
    <li><strong>float:</strong> Decimal numbers (e.g., pi = 3.14)</li>
    <li><strong>str:</strong> Text or characters (e.g., name = "Alice")</li>
    <li><strong>bool:</strong> Boolean values (True or False)</li>
    <li><strong>list:</strong> Ordered, mutable collection (e.g., items = [1, 2, 3])</li>
    <li><strong>tuple:</strong> Ordered, immutable collection (e.g., coords = (10, 20))</li>
    <li><strong>dict:</strong> Key-value pairs (e.g., student = {"name": "Tom", "age": 20})</li>
  </ul>
  <p>Python automatically determines the type when you assign a value.</p>`,
              duration: "8 min",
              isCompleted: false,
              isLocked: true,
              quiz: [],
            },
            {
              id: 5,
              title: "Quiz",
              type: "quiz",
              content: `<p>Test your knowledge of Python basics.</p>`,
              duration: "10 min",
              isCompleted: false,
              isLocked: true,
              quiz: [
                {
                  type: "mcq",
                  question: "Who developed Python?",
                  options: ["Dennis Ritchie", "Guido van Rossum", "James Gosling", "Bjarne Stroustrup"],
                  correctAnswer: "Guido van Rossum"
                },
                {
                  type: "mcq",
                  question: "What is the correct file extension for Python files?",
                  options: [".python", ".py", ".pt", ".p"],
                  correctAnswer: ".py"
                },
                {
                  type: "mcq",
                  question: "What type of language is Python?",
                  options: [
                    "Compiled, low-level, and Structured",
                    "Compiled, high-level, object-oriented",
                    "Interpreted, high-level, and object-oriented.",
                    "Interpreted, low-level, and object-oriented."
                  ],
                  correctAnswer: "Interpreted, high-level, and object-oriented."
                },
                {
                  type: "mcq",
                  question: "What is the correct syntax of the code",
                  options: ["printf(\"Hello, World!\");", "print(\"Hello, World!\")", "console.log(\"Hello, World!\");", "prints(\"Hello, World!\");"],
                  correctAnswer: "print(\"Hello, World!\")"
                },
                {
                  type: "mcq",
                  question: "What data type is assigned to the variable 'price' in the code?",
                  options: ["int", "str", "float", "bool"],
                  correctAnswer: "float"
                },
                {
                  type: "mcq",
                  question: "Which of the following is a valid variable name?",
                  options: ["2value", "value_1", "value-1", "value 1"],
                  correctAnswer: "value_1"
                },
                {
                  type: "mcq",
                  question: "Do we declare the type of variable in Python?",
                  options: ["Yes", "No"],
                  correctAnswer: "No"
                },
                {
                  type: "fill",
                  question: "Fill in the blank: Tags usually come in ____ (opening and closing).",
                  correctAnswer: "pairs"
                },
                {
                  type: "mcq",
                  question: "What do attributes provide in HTML tags?",
                  options: [
                    "Additional information",
                    "Styling",
                    "Interactivity",
                    "Database connections"
                  ],
                  correctAnswer: "Additional information"
                },
                {
                  type: "mcq",
                  question: "Which data type is used to store a sequence of key-value pairs in Python?",
                  options: ["list", "tuple", "dict", "set"],
                  correctAnswer: "dict"
                },
                {
                  type: "mcq",
                  question: "What is the data type of the value: True?",
                  options: ["bool", "str", "int", "float"],
                  correctAnswer: "bool"
                },
                {
                  type: "mcq",
                  question: "Which of the following is an immutable data type in Python?",
                  options: ["list", "dict", "tuple", "set"],
                  correctAnswer: "tuple"
                }
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Variables and Data Types",
      description: "Learn how to work with variables and different data types in Python.",
      xp: 10,
      chapters: [
        {
          id: 2,
          title: "Variables and Data Types",
          isExpanded: false,
          lessons: [
            {
              id: 6,
              title: "Python Variables",
              type: "text",
              content: `<p>Variables store data values in Python. They are created when you assign a value using the = operator.</p>
  <pre><code>x = 5
  name = "Alice"
  </code></pre>`,
              duration: "8 min",
              isCompleted: false,
              isLocked: false,
              quiz: [],
            },
            {
              id: 7,
              title: "Data Types",
              type: "text",
              content: `<p>Python has several built-in data types:</p>
  <ul>
    <li><strong>int</strong> for integers</li>
    <li><strong>float</strong> for decimal numbers</li>
    <li><strong>str</strong> for text (strings)</li>
    <li><strong>bool</strong> for True or False</li>
    <li><strong>list, tuple, dict, set</strong> for collections</li>
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
              content: `<p>Test your understanding of variables and data types in Python.</p>`,
              duration: "8 min",
              isCompleted: false,
              isLocked: true,
              quiz: [
                {
                  type: "mcq",
                  question: "Which of these is a valid variable assignment?",
                  options: ["x == 5", "5 = x", "x = 5", "let x = 5"],
                  correctAnswer: "x = 5"
                },
                {
                  type: "fill",
                  question: "What symbol is used to assign a value to a variable in Python?",
                  options: ["==", "=", ":=", "->"],
                  correctAnswer: "="
                },
                {
                  type: "mcq",
                  question: "Why are headings important?",
                  options: [
                    "For SEO and readability",
                    "To add colors",
                    "To include images",
                    "To run scripts"
                  ],
                  correctAnswer: "For SEO and readability"
                },
                {
                  type: "mcq",
                  question: "What data type is used to store text?",
                  options: ["int", "str", "float", "bool"],
                  correctAnswer: "str"
                }
              ],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "User Input and Type Conversion",
      description: "Learn how to get input from users and convert between data types in Python.",
      xp: 10,
      chapters: [
        {
          id: 3,
          title: "User Input and Type Conversion",
          isExpanded: false,
          lessons: [
            {
              id: 11,
              title: "Getting User Input",
              type: "text",
              content: `<p>Use the <code>input()</code> function to get input from the user. It always returns a string.</p>
  <p><strong>Example:</strong></p>
  <pre><code>name = input("Enter your name: ")
  print("Hello, " + name)
  </code></pre>`,
              duration: "10 min",
              isCompleted: false,
              isLocked: false,
              quiz: [],
            },
            {
              id: 12,
              title: "Type Conversion",
              type: "text",
              content: `<p>Use built-in functions to convert data types:</p>
  <ul>
    <li><code>int()</code> to convert to integer</li>
    <li><code>float()</code> to convert to float</li>
    <li><code>str()</code> to convert to string</li>
  </ul>
  <p><strong>Example:</strong></p>
  <pre><code>age = int(input("Enter age: "))
  </code></pre>`,
              duration: "10 min",
              isCompleted: false,
              isLocked: true,
              quiz: [],
            },
            {
              id: 15,
              title: "Quiz",
              type: "quiz",
              content: `<p>Test your knowledge of user input and type conversion.</p>`,
              duration: "10 min",
              isCompleted: false,
              isLocked: true,
              quiz: [
                {
                  type: "mcq",
                  question: "What function is used to get input from the user?",
                  options: ["get()", "input()", "read()", "scanf()"],
                  correctAnswer: "input()"
                },
                {
                  type: "fill",
                  question: "What is the data type of input() return value?",
                  options: ["int", "str", "float", "bool"],
                  correctAnswer: "str"
                },
                {
                  type: "mcq",
                  question: "How do you convert a string to an integer?",
                  options: ["str()", "float()", "int()", "bool()"],
                  correctAnswer: "int()"
                },
                {
                  type: "mcq",
                  question: "What will int('5.6') return?",
                  options: ["5.6", "6", "Error", "5"],
                  correctAnswer: "Error"
                }
              ],
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Control Flow",
      description: "Learn how to control program flow using conditionals and loops in Python.",
      xp: 10,
      chapters: [
        {
          id: 4,
          title: "Control Flow",
          isExpanded: false,
          lessons: [
            {
              id: 16,
              title: "If Statements",
              type: "text",
              content: `<p>Python uses <code>if</code>, <code>elif</code>, and <code>else</code> to perform conditional logic.</p>
  <pre><code>x = 10
  if x > 5:
      print("x is greater than 5")
  elif x == 5:
      print("x is 5")
  else:
      print("x is less than 5")
  </code></pre>`,
              duration: "12 min",
              isCompleted: false,
              isLocked: false,
              quiz: [],
            },
            {
              id: 17,
              title: "For Loops",
              type: "text",
              content: `<p>Use <code>for</code> loops to iterate over a sequence.</p>
  <pre><code>for i in range(3):
      print(i)
  </code></pre>
  <p>This prints 0, 1, 2.</p>`,
              duration: "10 min",
              isCompleted: false,
              isLocked: true,
              quiz: [],
            },
            {
              id: 18,
              title: "While Loops",
              type: "text",
              content: `<p>A <code>while</code> loop repeats as long as a condition is true.</p>
  <pre><code>x = 0
  while x < 3:
      print(x)
      x += 1
  </code></pre>`,
              duration: "12 min",
              isCompleted: false,
              isLocked: true,
              quiz: [],
            },
            {
              id: 19,
              title: "Input Types",
              type: "text",
              content: `<p><strong>Common input types:</strong></p>
  <ul>
    <li>text</li>
    <li>password</li>
    <li>email</li>
    <li>checkbox</li>
    <li>radio</li>
  </ul>
  <p><strong>Example:</strong></p>
  <pre><code><input type="email" name="useremail" />
  </code></pre>
  <p>Each type serves a specific purpose for user input.</p>`,
              duration: "10 min",
              isCompleted: false,
              isLocked: true,
              quiz: [],
            },
            {
              id: 20,
              title: "Quiz",
              type: "quiz",
              content: `<p>Test your understanding of control flow and input types.</p>`,
              duration: "12 min",
              isCompleted: false,
              isLocked: true,
              quiz: [
                {
                  type: "mcq",
                  question: "Which keyword is used to start a conditional block?",
                  options: ["switch", "when", "if", "for"],
                  correctAnswer: "if"
                },
                {
                  type: "fill",
                  question: "What does the 'elif' keyword mean?",
                  options: ["Else If", "Else Loop", "Element If", "Error If"],
                  correctAnswer: "Else If"
                },
                {
                  type: "mcq",
                  question: "What does range(3) return?",
                  options: ["[1, 2, 3]", "[0, 1, 2]", "[0, 1, 2, 3]", "3"],
                  correctAnswer: "[0, 1, 2]"
                },
                {
                  type: "mcq",
                  question: "Which keyword is used to iterate in Python?",
                  options: ["loop", "repeat", "foreach", "for"],
                  correctAnswer: "for"
                },
                {
                  type: "mcq",
                  question: "When does a while loop stop?",
                  options: [
                    "After 1 loop",
                    "When a break is found",
                    "When the condition becomes false",
                    "When the variable is 0"
                  ],
                  correctAnswer: "When the condition becomes false"
                },
                {
                  type: "mcq",
                  question: "What will happen if the while condition is always True?",
                  options: [
                    "The program stops",
                    "It gives an error",
                    "An infinite loop occurs",
                    "It skips the loop"
                  ],
                  correctAnswer: "An infinite loop occurs"
                },
                {
                  type: "mcq",
                  question: "Which input type is used for email addresses?",
                  options: ["text", "email", "password", "number"],
                  correctAnswer: "email"
                },
                {
                  type: "fill",
                  question: "Fill in the blank: For multiple-choice options, use input type ____.",
                  correctAnswer: "radio"
                },
                {
                  type: "mcq",
                  question: "What does the password input type do?",
                  options: [
                    "Hides typed characters",
                    "Sends email",
                    "Allows multiple selections",
                    "Formats numbers"
                  ],
                  correctAnswer: "Hides typed characters"
                }
              ],
            },
          ],
        },
      ],
    },
    {
      id: 5,
      title: "Functions",
      description: "Learn how to define and use functions in Python to organize and reuse code.",
      xp: 10,
      chapters: [
        {
          id: 5,
          title: "Functions",
          isExpanded: false,
          lessons: [
            {
              id: 21,
              title: "Defining Functions",
              type: "text",
              content: `<p>Functions help reuse code and make programs more organized.</p>
  <p>Use the <code>def</code> keyword to define a function:</p>
  <pre><code>def greet():
      print("Hello!")
  
  greet()  # Calling the function
  </code></pre>`,
              duration: "12 min",
              isCompleted: false,
              isLocked: false,
              quiz: [],
            },
            {
              id: 22,
              title: "Function Parameters and Return",
              type: "text",
              content: `<p>Functions can accept parameters and return values.</p>
  <pre><code>def add(a, b):
      return a + b
  
  result = add(5, 3)  # result = 8
  </code></pre>`,
              duration: "10 min",
              isCompleted: false,
              isLocked: true,
              quiz: [],
            },
            {
              id: 23,
              title: "Default and Keyword Arguments",
              type: "text",
              content: `<p>Python allows default parameter values and keyword arguments.</p>
  <pre><code>def greet(name="User"):
      print("Hello,", name)
  
  greet()       # Hello, User
  greet("Tom")  # Hello, Tom
  </code></pre>`,
              duration: "8 min",
              isCompleted: false,
              isLocked: true,
              quiz: [],
            },
            {
              id: 25,
              title: "Quiz",
              type: "quiz",
              content: `<p>Test your knowledge of Python functions.</p>`,
              duration: "12 min",
              isCompleted: false,
              isLocked: true,
              quiz: [
                {
                  type: "mcq",
                  question: "Which keyword is used to define a function in Python?",
                  options: ["func", "function", "def", "define"],
                  correctAnswer: "def"
                },
                {
                  type: "mcq",
                  question: "How do you call a function named greet?",
                  options: ["call greet()", "run greet", "greet()", "call(greet)"],
                  correctAnswer: "greet()"
                },
                {
                  type: "mcq",
                  question: "What is the purpose of the 'return' keyword?",
                  options: [
                    "To print the output",
                    "To end the function",
                    "To return a value from the function",
                    "To define a loop"
                  ],
                  correctAnswer: "To return a value from the function"
                },
                {
                  type: "mcq",
                  question: "What will be the output of add(2, 3) if the function is defined as def add(a, b): return a + b?",
                  options: ["23", "2", "3", "5"],
                  correctAnswer: "5"
                },
                {
                  type: "mcq",
                  question: "What is a default parameter?",
                  options: [
                    "A required input",
                    "A variable defined outside the function",
                    "A parameter with a pre-set value",
                    "An error handler"
                  ],
                  correctAnswer: "A parameter with a pre-set value"
                },
                {
                  type: "mcq",
                  question: "What does greet() print in the example above?",
                  options: ["Hello, name", "Hello, Tom", "Hello, User", "Error"],
                  correctAnswer: "Hello, User"
                }
              ],
            },
          ],
        },
      ],
    },
    {
      id: 6,
      title: "Lists and Tuples",
      description: "Learn how to work with lists and tuples in Python for storing collections of data.",
      xp: 10,
      chapters: [
        {
          id: 6,
          title: "Lists and Tuples",
          isExpanded: false,
          lessons: [
            {
              id: 26,
              title: "Introduction to Lists",
              type: "text",
              content: `<p>A list is a collection of items that is <strong>ordered</strong> and <strong>mutable</strong> (changeable).</p>
  <pre><code>fruits = ["apple", "banana", "cherry"]
  print(fruits[1])  # banana
  </code></pre>`,
              duration: "12 min",
              isCompleted: false,
              isLocked: false,
              quiz: [],
            },
            {
              id: 27,
              title: "List Methods",
              type: "text",
              content: `<p>Python provides several methods to work with lists:</p>
  <ul>
    <li><code>append()</code> to add an item</li>
    <li><code>remove()</code> to delete an item</li>
    <li><code>sort()</code> to sort the list</li>
  </ul>
  <pre><code>numbers = [4, 2, 9]
  numbers.append(1)  # [4, 2, 9, 1]
  </code></pre>`,
              duration: "10 min",
              isCompleted: false,
              isLocked: true,
              quiz: [],
            },
            {
              id: 28,
              title: "Tuples",
              type: "text",
              content: `<p>A tuple is a collection of items that is <strong>ordered</strong> but <strong>immutable</strong> (cannot be changed).</p>
  <pre><code>coordinates = (10, 20)
  print(coordinates[0])  # 10
  </code></pre>
  <p>Use tuples when you want to make sure data cannot be changed.</p>`,
              duration: "8 min",
              isCompleted: false,
              isLocked: true,
              quiz: [],
            },
            {
              id: 30,
              title: "Quiz",
              type: "quiz",
              content: `<p>Test your knowledge of lists and tuples in Python.</p>`,
              duration: "12 min",
              isCompleted: false,
              isLocked: true,
              quiz: [
                {
                  type: "mcq",
                  question: "What is the index of 'banana' in the list ['apple', 'banana', 'cherry']?",
                  options: ["0", "1", "2", "3"],
                  correctAnswer: "1"
                },
                {
                  type: "mcq",
                  question: "Are lists mutable in Python?",
                  options: ["Yes", "No", "Only sometimes", "Depends on the items"],
                  correctAnswer: "Yes"
                },
                {
                  type: "mcq",
                  question: "Which method adds an item to the end of a list?",
                  options: ["add()", "append()", "insert()", "push()"],
                  correctAnswer: "append()"
                },
                {
                  type: "mcq",
                  question: "What does sort() do to a list?",
                  options: [
                    "Deletes it",
                    "Returns the length",
                    "Reverses it",
                    "Arranges items in order"
                  ],
                  correctAnswer: "Arranges items in order"
                },
                {
                  type: "mcq",
                  question: "What is the main difference between a list and a tuple?",
                  options: [
                    "Lists are unordered, tuples are ordered",
                    "Lists are immutable, tuples are mutable",
                    "Lists are mutable, tuples are immutable",
                    "No difference"
                  ],
                  correctAnswer: "Lists are mutable, tuples are immutable"
                },
                {
                  type: "mcq",
                  question: "How do you define a tuple?",
                  options: [
                    "Using square brackets []",
                    "Using curly braces {}",
                    "Using parentheses ()",
                    "Using angle brackets <>"
                  ],
                  correctAnswer: "Using parentheses ()"
                }
              ],
            },
          ],
        },
      ],
    },
    {
      id: 7,
      title: "Dictionaries",
      description: "Learn how to use dictionaries to store key-value pairs in Python.",
      xp: 10,
      chapters: [
        {
          id: 7,
          title: "Dictionaries",
          isExpanded: false,
          lessons: [
            {
              id: 31,
              title: "Introduction to Dictionaries",
              type: "text",
              content: `<p>A dictionary is a collection of <strong>key-value</strong> pairs. It is <strong>unordered</strong>, <strong>mutable</strong>, and indexed by keys.</p>
  <pre><code>student = {"name": "Alice", "age": 20, "grade": "A"}
  print(student["name"])  # Alice
  </code></pre>`,
              duration: "12 min",
              isCompleted: false,
              isLocked: false,
              quiz: [],
            },
            {
              id: 32,
              title: "Dictionary Methods",
              type: "text",
              content: `<p>Dictionaries have useful methods:</p>
  <ul>
    <li><code>keys()</code> – returns a list of keys</li>
    <li><code>values()</code> – returns a list of values</li>
    <li><code>items()</code> – returns all key-value pairs</li>
    <li><code>get(key)</code> – returns the value or None if key not found</li>
  </ul>
  <pre><code>student.get("grade")
  </code></pre>`,
              duration: "10 min",
              isCompleted: false,
              isLocked: true,
              quiz: [],
            },
            {
              id: 33,
              title: "Adding and Updating Items",
              type: "text",
              content: `<p>You can add a new key-value pair or update an existing one:</p>
  <pre><code>student = {"name": "Tom"}
  student["age"] = 21  # Add new key
  student["name"] = "Alice"  # Update existing key
  </code></pre>`,
              duration: "8 min",
              isCompleted: false,
              isLocked: true,
              quiz: [],
            },
            {
              id: 35,
              title: "Quiz",
              type: "quiz",
              content: `<p>Test your understanding of dictionaries in Python.</p>`,
              duration: "12 min",
              isCompleted: false,
              isLocked: true,
              quiz: [
                {
                  type: "mcq",
                  question: "What is the correct syntax for a dictionary?",
                  options: [
                    '["key" = "value"]',
                    '{"key": "value"}',
                    '(key: value)',
                    '<key = value>'
                  ],
                  correctAnswer: '{"key": "value"}'
                },
                {
                  type: "mcq",
                  question: "How do you access the value of 'name' in this dictionary: student = {\"name\": \"Tom\"}?",
                  options: [
                    'student.name',
                    'student["name"]',
                    'student->name',
                    'student["Tom"]'
                  ],
                  correctAnswer: 'student["name"]'
                },
                {
                  type: "mcq",
                  question: "Which method safely accesses a value from a dictionary?",
                  options: ["fetch()", "get()", "retrieve()", "access()"],
                  correctAnswer: "get()"
                },
                {
                  type: "mcq",
                  question: "Which method returns all key-value pairs in a dictionary?",
                  options: ["pairs()", "keys()", "items()", "values()"],
                  correctAnswer: "items()"
                },
                {
                  type: "mcq",
                  question: "How do you add a new key 'grade' to a dictionary?",
                  options: [
                    'dict.add("grade", "A")',
                    'dict["grade"] = "A"',
                    'dict.insert("grade", "A")',
                    'dict.push("grade", "A")'
                  ],
                  correctAnswer: 'dict["grade"] = "A"'
                },
                {
                  type: "mcq",
                  question: "What happens if you assign a new value to an existing key?",
                  options: [
                    "It creates a new key",
                    "It updates the value",
                    "It deletes the key",
                    "It raises an error"
                  ],
                  correctAnswer: "It updates the value"
                }
              ],
            },
          ],
        },
      ],
    },
    {
      id: 8,
      title: "Object-Oriented Programming (OOP)",
      description: "Learn the basics of Object-Oriented Programming in Python using classes and objects.",
      xp: 10,
      chapters: [
        {
          id: 8,
          title: "Object-Oriented Programming (OOP)",
          isExpanded: false,
          lessons: [
            {
              id: 36,
              title: "Classes and Objects",
              type: "text",
              content: `<p>A class is a blueprint for creating objects. An object is an instance of a class.</p>
  <pre><code>class Person:
    def __init__(self, name):
      self.name = name
  
  p1 = Person("Alice")
  print(p1.name)
  </code></pre>`,
              duration: "12 min",
              isCompleted: false,
              isLocked: false,
              quiz: [],
            },
            {
              id: 37,
              title: "The __init__ Method",
              type: "text",
              content: `<p>The <code>__init__</code> method is called when an object is created. It initializes the object.</p>
  <pre><code>class Car:
    def __init__(self, model):
      self.model = model
  </code></pre>`,
              duration: "10 min",
              isCompleted: false,
              isLocked: true,
              quiz: [],
            },
            {
              id: 33,
              title: "Methods and Attributes",
              type: "text",
              content: `<p>Attributes are variables inside a class. Methods are functions defined inside a class.</p>
  <pre><code>class Dog:
    def __init__(self, name):
      self.name = name
    def bark(self):
      return "Woof!"
  </code></pre>`,
              duration: "8 min",
              isCompleted: false,
              isLocked: true,
              quiz: [],
            },
            {
              id: 40,
              title: "Quiz",
              type: "quiz",
              content: `<p>Test your understanding of OOP in Python.</p>`,
              duration: "12 min",
              isCompleted: false,
              isLocked: true,
              quiz: [
                {
                  type: "mcq",
                  question: "What is a class in Python?",
                  options: [
                    "A collection of functions",
                    "A blueprint for objects",
                    "A method inside a function",
                    "A loop structure"
                  ],
                  correctAnswer: "A blueprint for objects"
                },
                {
                  type: "mcq",
                  question: "How do you create an object in Python?",
                  options: [
                    "obj = Person.create()",
                    "obj = new Person()",
                    "obj = Person()",
                    "obj = Person.new()"
                  ],
                  correctAnswer: "obj = Person()"
                },
                {
                  type: "mcq",
                  question: "What is the purpose of the __init__ method?",
                  options: [
                    "To destroy an object",
                    "To print a value",
                    "To initialize an object",
                    "To create a class"
                  ],
                  correctAnswer: "To initialize an object"
                },
                {
                  type: "mcq",
                  question: "What does 'self' refer to in a class?",
                  options: [
                    "A global variable",
                    "The current module",
                    "The instance of the class",
                    "The class itself"
                  ],
                  correctAnswer: "The instance of the class"
                },
                {
                  type: "mcq",
                  question: "What is an attribute in a Python class?",
                  options: [
                    "A loop",
                    "A method",
                    "A variable that belongs to a class",
                    "A built-in function"
                  ],
                  correctAnswer: "A variable that belongs to a class"
                },
                {
                  type: "mcq",
                  question: "How do you define a method in a class?",
                  options: [
                    "def methodName():",
                    "methodName():",
                    "define methodName():",
                    "function methodName():"
                  ],
                  correctAnswer: "def methodName():"
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
    name: "python Novice",
    description: "Completed 1 lesson",
    xpRequired: 10,
    icon: "🎓"
  },
  {
    id: 2,
    name: "python Explorer",
    description: "Earned 50 XP",
    xpRequired: 50,
    icon: "🔍"
  },
  {
    id: 3,
    name: "python Champion",
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
        🚀 Python Interactive Course
      </h2>
      <h1>"Python is a high-level, interpreted, general-purpose programming language known for its readability and simplicity. It supports multiple programming paradigms like procedural, object-oriented, and functional programming."</h1>

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
function PythonCourseApp() {
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
             courseName="Python" 
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

export default PythonCourseApp;