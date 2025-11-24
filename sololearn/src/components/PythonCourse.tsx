import { useEffect, useRef } from "react";
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
const PythonIcon: React.FC = () => (
  <svg
    viewBox="0 0 128 128"
    width={64}
    height={64}
    xmlns="http://www.w3.org/2000/svg"
    
  >
    <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
      <stop offset="0" stopColor="#5A9FD4" />
      <stop offset="1" stopColor="#306998" />
    </linearGradient>
    <path
      fill="url(#a)"
      d="M63.79 0c-5.66.026-11.09.51-15.94 1.368-14.12 2.467-16.65 7.63-16.65 17.187v12.59h33.3v4.197H23.4c-9.444 0-17.73 5.674-20.3 16.45-2.97 12.348-3.104 20.064 0 32.926 2.31 9.652 7.82 16.45 17.265 16.45h11.394v-15.17c0-10.94 9.468-20.61 20.3-20.61h33.282c9.06 0 16.65-7.62 16.65-17.188V18.555c0-9.17-7.592-15.63-16.65-17.188C75.28.52 69.45-.026 63.79 0zm-18.43 9.854c2.766 0 5.002 2.273 5.002 5.08 0 2.8-2.236 5.054-5.002 5.054-2.767 0-5.002-2.254-5.002-5.054 0-2.807 2.235-5.08 5.002-5.08z"
    />
    <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
      <stop offset="0" stopColor="#FFD43B" />
      <stop offset="1" stopColor="#FFE873" />
    </linearGradient>
    <path
      fill="url(#b)"
      d="M92.57 36.173v14.884c0 11.32-9.63 20.916-20.3 20.916H39.02c-9.07 0-16.65 7.81-16.65 17.187v28.94c0 9.17 8.04 14.57 16.65 17.187 10.54 3.103 20.61 3.67 33.282 0 8.38-2.424 16.65-7.294 16.65-17.187v-12.59H55.2v-4.197h38.58c9.444 0 12.96-6.645 15.94-16.45 3.33-10.21 3.19-20.06 0-32.926-2.35-9.47-6.485-16.45-15.94-16.45h-1.21zM83.96 103.6c2.77 0 5 2.255 5 5.054 0 2.81-2.23 5.08-5 5.08-2.77 0-5.01-2.273-5.01-5.08 0-2.8 2.24-5.054 5.01-5.054z"
    />
  </svg>
);

const PythonCourseData: CourseData = {
  title: "Python Interactive Course",
  description:
    "Python is a high-level, interpreted, general-purpose programming language known for its readability and simplicity. It supports multiple programming paradigms like procedural, object-oriented, and functional programming.",
  icon: <PythonIcon />,
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
          content: `Python is a very popular general-purpose interpreted, object-oriented, and high-level programming language. Python is dynamically-typed and garbage-collected programming language. It was created by Guido van Rossum during 1985- 1990. It has the represented by .py`,
          duration: "10 min",
          isCompleted: false,
          isLocked: false,
          quiz: [
            
          ],
        },
        {
          id: 2,
          title: "Python Basics and Syntax",
          type: "text",
          content: `A basic Python code has a specific structure:\n\nprint ("Hello, World!")
          We use print() to print the code in Python and there will be no semicolon at the end of the print statement.`,
          duration: "12 min",
          isCompleted: false,
          isLocked: false,
          quiz: [
            
          ],
        },
        {
          id: 3,
          title: "Python Variables",
          type: "text",
          content: `In Python, variables are used to store data values. A variable is created the moment you assign a value to it. \nExample: \nx = 10        # Integer\nname = 'Tom'  # String\nprice = 19.99 # Float `,
          duration: "10 min",
          isCompleted: false,
          isLocked: false,
          quiz: [
            
          ],
        },
        {
          id: 4,
          title: "Python Datatypes",
          type: "text",
          content: `In Python, data types define the kind of value a variable holds. Python is dynamically typed, so you don't need to declare types explicitly.

Here are some common data types in Python:

- int: Integer numbers (e.g., x = 5)
- float: Decimal numbers (e.g., pi = 3.14)
- str: Text or characters (e.g., name = "Alice")
- bool: Boolean values (True or False)
- list: Ordered, mutable collection (e.g., items = [1, 2, 3])
- tuple: Ordered, immutable collection (e.g., coords = (10, 20))
- dict: Key-value pairs (e.g., student = {"name": "Tom", "age": 20})

Python automatically determines the type when you assign a value.`,
         
          duration: "8 min",
          isCompleted: false,
          isLocked: false,
          quiz: [
            
          ],
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
              options:["Yes", "No"],
              correctAnswer: "No"
            },
            {
              type: "fill",
              question: "Fill in the blank: Tags usually come in ____ (opening and closing).",
              correctAnswer: "pairs",
            },
            {
              type: "mcq",
              question: "What do attributes provide in HTML tags?",
              options: [
                "Additional information",
                "Styling",
                "Interactivity",
                "Database connections",
              ],
              correctAnswer: "Additional information",
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
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Variables and Data Types",
      isExpanded: false,
      lessons: [
        {
          id: 6,
          title: "Python Variables",
          type: "text",
          content: `Variables store data values in Python. They are created when you assign a value using the = operator.

        Example:
        x = 5
        name = "Alice"
        `,
          duration: "8 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 7,
          title: "Data Types",
          type: "text",
          content: `Python has several built-in data types:

- int for integers
- float for decimal numbers
- str for text (strings)
- bool for True or False
- list, tuple, dict, set for collections`,
          duration: "8 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 10,
          title: "Quiz",
          type: "text",
          content: `Quiz`,
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
                "To run scripts",
              ],
              correctAnswer: "For SEO and readability",
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
    {
      id: 3,
      title: "User Input and Type Conversion",
      isExpanded: false,
      lessons: [
        {
          id: 11,
          title: "Getting User Input",
          type: "text",
          content: `Use the input() function to get input from the user. It always returns a string.

Example:
name = input("Enter your name: ")
print("Hello, " + name)`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 12,
          title: "Type Conversion",
          type: "text",
    content: `Use built-in functions to convert data types:

- int() to convert to integer
- float() to convert to float
- str() to convert to string

Example:
age = int(input("Enter age: "))`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
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
    {
      id: 4,
      title: "Control Flow",
      isExpanded: false,
      lessons: [
        {
          id: 16,
          title: "If Statements",
          type: "text",
          content: `Python uses if, elif, and else to perform conditional logic.

Example:
x = 10
if x > 5:
    print("x is greater than 5")
elif x == 5:
    print("x is 5")
else:
    print("x is less than 5")`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 17,
          title: "For Loops",
          type: "text",
          content: `Use for loops to iterate over a sequence.

Example:
for i in range(3):
    print(i)

This prints 0, 1, 2.`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 18,
          title: "While Loops",
          type: "text",
          content: `A while loop repeats as long as a condition is true.

Example:
x = 0
while x < 3:
    print(x)
    x += 1`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 19,
          title: "Input Types",
          type: "text",
          content: `Common input types:
- text
- password
- email
- checkbox
- radio

Example:
<input type="email" name="useremail" />

Each type serves a specific purpose for user input.
`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
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
              question: "Which keyword is used to start a conditional block?",
          options: ["switch", "when", "if", "for"],
          correctAnswer: "if"
            },
            {
              type: "fill",
              question: "What does the 'elif' keyword mean?",
          options: [
            "Else If",
            "Else Loop",
            "Element If",
            "Error If"
          ],
          correctAnswer: "Else If"
            },
            {
              type: "mcq",
              question: "What does range(3) return?",
          options: [
            "[1, 2, 3]",
            "[0, 1, 2]",
            "[0, 1, 2, 3]",
            "3"
          ],
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
              correctAnswer: "email",
            },
            {
              type: "fill",
              question: "Fill in the blank: For multiple-choice options, use input type ____.",
              correctAnswer: "radio",
            },
            {
              type: "mcq",
              question: "What does the password input type do?",
              options: [
                "Hides typed characters",
                "Sends email",
                "Allows multiple selections",
                "Formats numbers",
              ],
              correctAnswer: "Hides typed characters",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      title: "Functions",
      isExpanded: false,
      lessons: [
        {
          id: 21,
          title: "Defining Functions",
          type: "text",
          content: `Functions help reuse code and make programs more organized.\n\nUse the \`def\` keyword to define a function:\n\nExample:\ndef greet():\n    print("Hello!")\n\ngreet()  # Calling the function`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 22,
          title: "Function Parameters and Return",
          type: "text",
          content: `Functions can accept parameters and return values.\n\nExample:\ndef add(a, b):\n    return a + b\n\nresult = add(5, 3)  # result = 8`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 23,
          title: "Default and Keyword Arguments",
          type: "text",
          content: `Python allows default parameter values and keyword arguments.\n\nExample:\ndef greet(name="User"):\n    print("Hello,", name)\n\ngreet()       # Hello, User\ngreet("Tom")  # Hello, Tom`,
          duration: "8 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
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
    {
      id: 6,
      title: "Lists and Tuples",
      isExpanded: false,
      lessons: [
        {
          id: 26,
          title: "Introduction to Lists",
          type: "text",
          content: `A list is a collection of items that is **ordered** and **mutable** (changeable).\n\nExample:\nfruits = ["apple", "banana", "cherry"]\n\nYou can access list items by index (starting from 0):\nprint(fruits[1])  # banana`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 27,
          title: "List Methods",
          type: "text",
          content: `Python provides several methods to work with lists:\n- append() to add an item\n- remove() to delete an item\n- sort() to sort the list\n\nExample:\nnumbers = [4, 2, 9]\nnumbers.append(1)  # [4, 2, 9, 1]`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 28,
          title: "Tuples",
          type: "text",
          content: `A tuple is a collection of items that is **ordered** but **immutable** (cannot be changed).\n\nExample:\ncoordinates = (10, 20)\nprint(coordinates[0])  # 10\n\nUse tuples when you want to make sure data cannot be changed.`,
          duration: "8 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 30,
          title: "Quiz",
          type: "text",
          content: `Quiz`,
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
    {
      id: 7,
      title: "Dictionaries",
      isExpanded: false,
      lessons: [
        {
          id: 31,
          title: "Introduction to Dictionaries",
          type: "text",
          content: `A dictionary is a collection of **key-value** pairs. It is **unordered**, **mutable**, and indexed by keys.\n\nExample:\nstudent = {"name": "Alice", "age": 20, "grade": "A"}\n\nAccess values using keys:\nprint(student["name"])  # Alice`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 32,
          title: "Dictionary Methods",
          type: "text",
          content: `Dictionaries have useful methods:\n- keys() – returns a list of keys\n- values() – returns a list of values\n- items() – returns all key-value pairs\n- get(key) – returns the value or None if key not found\n\nExample:\nstudent.get("grade")`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 33,
          title: "Adding and Updating Items",
          type: "text",
          content: `You can add a new key-value pair or update an existing one:\n\nstudent = {"name": "Tom"}\nstudent["age"] = 21  # Add new key\nstudent["name"] = "Alice"  # Update existing key`,
          duration: "8 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 35,
          title: "Quiz",
          type: "text",
          content: `Quiz`,
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
    {
      id: 8,
      title: "Object-Oriented Programming (OOP)",
      isExpanded: false,
      lessons: [
        {
          id: 36,
          title: "Classes and Objects",
          type: "text",
          content: `A class is a blueprint for creating objects. An object is an instance of a class.\n\nExample:\nclass Person:\n  def __init__(self, name):\n    self.name = name\n\np1 = Person("Alice")\nprint(p1.name)`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 37,
          title: "The __init__ Method",
          type: "text",
          content: `The __init__ method is called when an object is created. It initializes the object.\n\nclass Car:\n  def __init__(self, model):\n    self.model = model`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 33,
          title: "Methods and Attributes",
          type: "text",
          content: `Attributes are variables inside a class. Methods are functions defined inside a class.\n\nclass Dog:\n  def __init__(self, name):\n    self.name = name\n  def bark(self):\n    return "Woof!"`,
          duration: "8 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 40,
          title: "Quiz",
          type: "text",
          content: `Quiz`,
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
    }
  ],
};

function PythonCourseContent(){

    return(
      <div>
      <h1>{PythonCourseData.title}</h1>
      <p>{PythonCourseData.description}</p>
      {PythonCourseData.chapters.map((chapter) => (
        <div key={chapter.id}>
          <h2>{chapter.title}</h2>
          <ul>
            {chapter.lessons.map((lesson) => (
              <li
              key={lesson.id}
              onClick={() => handleLessonClick(lesson.id, lesson.title)}
              style={{ cursor: "pointer", margin: "8px 0", color: "blue" }}
              >
                {lesson.title}
              </li>
            ))}
          </ul>
        </div>
      ))}

      </div>
    )
}



export default function PythonCoursePage() {

  return (
    <div>
    <CoursePlayer courseId="Python" courseData={PythonCourseData}/> 
    </div>
  );
}