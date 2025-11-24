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
const CIcon: React.FC = () => (
  <svg
    viewBox="0 0 128 128"
    width={64}
    height={64}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="64" cy="64" r="64" fill="#00599C" />
    <path
      fill="#FFFFFF"
      d="M85.4,43.2c-1.6-2.3-3.6-4.3-5.9-6s-5-3-7.9-3.9s-6-1.3-9.2-1.3
      c-5.6,0-10.6,1.2-15.2,3.6s-8.3,5.7-11.1,9.9s-4.2,9-4.2,14.3s1.4,10.3,4.2,14.4s6.5,7.5,11.1,9.8s9.6,3.6,15.2,3.6
      c3.2,0,6.3-0.4,9.2-1.3s5.6-2.1,7.9-3.9s4.3-3.7,5.9-6.1l-10.5-6.6c-1,1.6-2.3,2.9-4,4s-3.5,1.6-5.6,1.6c-2.3,0-4.4-0.5-6.2-1.4
      s-3.4-2.2-4.6-3.9s-2.1-3.5-2.6-5.7s-0.7-4.3-0.4-6.4s1.1-4,2.3-5.7s2.7-3,4.5-4s3.8-1.5,6.1-1.5c2.1,0,3.9,0.5,5.6,1.5
      s3,2.3,4,3.9L85.4,43.2z"
    />
  </svg>
);

const CCourseData: CourseData = {
  title: "Introduction to C",
  description:
    "C is a general-purpose, procedural programming language developed in the early 1970s by Dennis Ritchie at Bell Labs. It was designed to develop system software and operating systems, notably the Unix operating system.C has had a powerful influence on many other languages, such as C++, Java, C#, and even C, due to its simplicity, performance, and close-to-hardware capabilities.",
  icon: <CIcon />,
  chapters: [
    {
      id: 1,
      title: "C Language Introduction",
      isExpanded: true,
      lessons: [
        {
          id: 1,
          title: "What is C Language?",
          type: "text",
          content: `C is a general-purpose, procedural programming language developed by Dennis Ritchie at Bell Labs in the early 1970s. It is widely used for system programming, embedded systems, and operating systems due to its efficiency and low-level memory access capabilities.`,
          duration: "10 min",
          isCompleted: false,
          isLocked: false,
          quiz: [
            
          ],
        },
        {
          id: 2,
          title: "Basic Syntax of C",
          type: "text",
          content: `A basic C program has the following structure:

#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}

C programs start execution from the main() function. The #include directive is used to include standard libraries.`,
          duration: "12 min",
          isCompleted: false,
          isLocked: false,
          quiz: [
            
          ],
        },
        {
          id: 3,
          title: "Variables and Data Types in C",
          type: "text",
          content: `In C, variables are used to store data. You must declare the type of variable before using it.

          Common data types include:
          - int: integer numbers
          - float: floating point numbers
          - char: single characters
          - double: double precision floating numbers

          Example:
          int age = 25;
          char grade = 'A';`,
          duration: "10 min",
          isCompleted: false,
          isLocked: false,
          quiz: [
            
          ],
        },
        {
          id: 4,
          title: "Operators and Expressions",
          type: "text",
          content: `C supports various operators to perform operations on variables:

- Arithmetic operators: +, -, *, /, %
- Relational operators: ==, !=, >, <, >=, <=
- Logical operators: &&, ||, !

Example:
int sum = a + b;
if (a > b && b != 0) { ... }`,
         
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
              question: "Who developed the C programming language?",
          options: ["Dennis Ritchie", "Guido van Rossum", "James Gosling", "Bjarne Stroustrup"],
          correctAnswer: "Dennis Ritchie"
            },
            {
              type: "mcq",
              question: "What is the correct file extension for C source files?",
          options: [".c", ".cpp", ".h", ".cs"],
          correctAnswer: ".c"
            },
            {
              type: "mcq",
              question: "What type of programming language is C?",
          options: [
            "Procedural and low-level",
            "Object-oriented",
            "Functional",
            "Logic programming"
          ],
          correctAnswer: "Procedural and low-level"
            },
            {
              type: "mcq",
              question: "Which header file is used for input/output functions in C?",
          options: ["<iostream>", "<stdio.h>", "<stdlib.h>", "<conio.h>"],
          correctAnswer: "<stdio.h>"
            },
            {
              type: "mcq",
              question: "What is the entry point function for a C program?",
          options: ["start()", "main()", "init()", "program()"],
          correctAnswer: "main()"
            },
            {
              type: "mcq",
              question: "Which data type is used to store whole numbers in C?",
          options: ["int", "float", "char", "double"],
          correctAnswer: "int"
            },
            {
              type: "mcq",
              question: "Which of these is a valid variable declaration?",
          options: ["int 2var;", "float number;", "char 'c';", "double;"],
          correctAnswer: "float number;"
            },
            {
              type: "mcq",
              question: "Do you need to declare the data type of a variable in C?",
          options: ["Yes", "No"],
          correctAnswer: "Yes"
            },
            {
              type: "mcq",
              question: "Which operator is used for equality comparison?",
          options: ["=", "==", "!=", ">"],
          correctAnswer: "=="
            },
            {
              type: "mcq",
              question: "What does % operator do?",
          options: ["Division", "Modulus", "Multiplication", "Addition"],
          correctAnswer: "Modulus"
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
          title: "C Variables",
          type: "text",
          content: `In C, variables are used to store data values. You must declare the variable's type before using it.

Example:
int x = 5;
char name[] = "Alice";        `,
          duration: "8 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 7,
          title: "Data Types in C",
          type: "text",
          content: `C has several basic data types:

- int: integer numbers
- float: decimal numbers
- char: single characters
- double: double precision floating numbers
- void: represents no value (used for functions that return nothing)`,
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
              question: "Which of these is a valid variable assignment in C?",
          options: ["x == 5;", "5 = x;", "int x = 5;", "let x = 5;"],
          correctAnswer: "int x = 5;"
            },
            {
              type: "mcq",
              question: "What symbol is used to assign a value to a variable in C?",
          options: ["==", "=", ":=", "->"],
          correctAnswer: "="
            },
            {
              type: "mcq",
              question: "Which data type is used to store text (characters) in C?",
          options: ["int", "char", "float", "bool"],
          correctAnswer: "char"
            },
            {
              type: "mcq",
              question: "Which of these represents a floating-point number in C?",
          options: ["5", "'5'", "5.0", "True"],
          correctAnswer: "5.0"
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
          content: `In C, user input can be read using the scanf() function from the standard input.

Example:
#include <stdio.h>

int main() {
    char name[50];
    printf("Enter your name: ");
    scanf("%s", name);
    printf("Hello, %s\\n", name);
    return 0;`,
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
    content: `C allows conversion between data types using casting.

Example:
int x = 10;
float y = (float)x;  // converts int to float

Also, functions like atoi() convert strings to integers.

Example:
#include <stdlib.h>

int main() {
    char str[] = "123";
    int num = atoi(str);
    return 0;
}`,
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
              question: "What function is used to get input from the user in C?",
          options: ["get()", "input()", "read()", "scanf()"],
          correctAnswer: "scanf()"
            },
            {
              type: "fill",
              question: "What format specifier is used to read a string in scanf?",
          options: ["%d", "%s", "%f", "%c"],
          correctAnswer: "%s"
            },
            {
              type: "mcq",
              question: "How do you explicitly convert an int to a float in C?",
          options: ["(float)intVar", "float(intVar)", "convert(intVar)", "toFloat(intVar)"],
          correctAnswer: "(float)intVar"
            },
            {
              type: "mcq",
              question: "Which function converts a string to an integer in C?",
          options: ["stoi()", "atoi()", "strtoint()", "int()"],
          correctAnswer: "atoi()"
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
          content: `C uses if, else if, and else to perform conditional logic.

Example:
#include <stdio.h>

int main() {
    int x = 10;
    if (x > 5) {
        printf("x is greater than 5\\n");
    } else if (x == 5) {
        printf("x is 5\\n");
    } else {
        printf("x is less than 5\\n");
    }
    return 0;
}`,
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
          content: `Use for loops in C to execute a block of code a specific number of times.

Example:
#include <stdio.h>

int main() {
    for (int i = 0; i < 3; i++) {
        printf("%d\\n", i);
    }
    return 0;
}

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
          content: `A while loop in C repeats as long as a condition remains true.

Example:
#include <stdio.h>

int main() {
    int x = 0;
    while (x < 3) {
        printf("%d\\n", x);
        x++;
    }
    return 0;
}`,
          duration: "12 min",
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
              question: "Which keyword is used to start a conditional block in C?",
          options: ["switch", "when", "if", "loop"],
          correctAnswer: "if"
            },
            {
              type: "mcq",
              question: "What keyword is used in C for 'else if' condition?",
          options: ["elif", "elseif", "else if", "else-if"],
          correctAnswer: "else if"
            },
            {
              type: "mcq",
              question: "What is the correct syntax for a for loop in C?",
          options: [
            "for i in range(3)",
            "for (int i = 0; i < 3; i++)",
            "foreach (i = 0; i < 3; i++)",
            "loop (i < 3)"
          ],
          correctAnswer: "for (int i = 0; i < 3; i++)"
            },
            {
              type: "mcq",
              question: "What does the statement i++ do?",
          options: ["Increments i by 2", "Assigns i to 0", "Increments i by 1", "Checks if i is positive"],
          correctAnswer: "Increments i by 1"
            },
            {
              type: "mcq",
              question: "When does a while loop stop in C?",
          options: [
            "After 1 iteration",
            "When break is called",
            "When the condition becomes false",
            "When x = 0"
          ],
          correctAnswer: "When the condition becomes false"
            },
            {
              type: "mcq",
              question: "What happens if the condition in a while loop never becomes false?",
          options: [
            "The program stops",
            "It gives an error",
            "An infinite loop occurs",
            "The loop is skipped"
          ],
          correctAnswer: "An infinite loop occurs"
            }
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
          content: `Functions in C help organize code, improve reusability, and simplify debugging.

A function in C is defined using the return type, function name, and parameters.

Example:
#include <stdio.h>

void greet() {
    printf("Hello!\\n");
}

int main() {
    greet();  // Calling the function
    return 0;
}`,
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
          content: `C functions can accept parameters and return values.

Example:
#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(5, 3);  // result = 8
    printf("%d\\n", result);
    return 0;
}`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 23,
          title: "Function Declarations and Prototypes",
          type: "text",
          content: `In C, functions should be declared before they are used. A function prototype tells the compiler about the function's name, return type, and parameters.

Example:
int multiply(int, int);  // Function prototype

int multiply(int a, int b) {
    return a * b;
}

int main() {
    printf("%d", multiply(4, 5));
    return 0;
}`,
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
              question: "Which keyword is used to define a function in C?",
          options: ["func", "function", "void/int/char", "define"],
          correctAnswer: "void/int/char"
            },
            {
              type: "mcq",
              question: "How do you call a function named greet in C?",
          options: ["call greet()", "run greet()", "greet();", "call(greet)"],
          correctAnswer: "greet();"
            },
            {
              type: "mcq",
              question: "What is the purpose of the 'return' keyword in a C function?",
          options: [
            "To print the output",
            "To end the program",
            "To return a value from the function",
            "To declare a variable"
          ],
          correctAnswer: "To return a value from the function"
            },
            {
              type: "mcq",
              question: "What will be the output of add(2, 3) if the function returns a + b?",
          options: ["23", "2", "3", "5"],
          correctAnswer: "5"
            },
            {
              type: "mcq",
              question: "Why is a function prototype used in C?",
          options: [
            "To prevent using the function",
            "To define the function logic",
            "To tell the compiler about the function before use",
            "To call the function"
          ],
          correctAnswer: "To tell the compiler about the function before use"
            },
            {
              type: "mcq",
              question: "What does this prototype mean: int multiply(int, int)?",
          options: [
            "Function with no return type",
            "Function returns a float",
            "Function takes two integers and returns an integer",
            "Function takes strings as input"
          ],
          correctAnswer: "Function takes two integers and returns an integer"
            }
          ],
        },
      ],
    },
    {
      id: 6,
      title: "Arrays and Structs",
      isExpanded: false,
      lessons: [
        {
          id: 26,
          title: "Introduction to Arrays",
          type: "text",
          content: `An array in C is a collection of items of the **same type** stored in **contiguous memory locations**.

Example:
int numbers[] = {10, 20, 30};

You can access array elements using an index (starting from 0):

printf("%d", numbers[1]);  // Output: 20`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 27,
          title: "Working with Arrays",
          type: "text",
          content: `In C, you can update, access, and loop through arrays using index values.

Example:
int numbers[3] = {4, 2, 9};
numbers[2] = 5;  // Update value at index 2

// Loop through array
for (int i = 0; i < 3; i++) {
    printf("%d\\n", numbers[i]);
}`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 28,
          title: "Structs (Tuple Equivalent)",
          type: "text",
          content: `C does not have a built-in tuple type like Python, but you can use a **struct** to group multiple values of different types.

Example:
#include <stdio.h>

struct Point {
    int x;
    int y;
};

int main() {
    struct Point p1 = {10, 20};
    printf("%d", p1.x);  // Output: 10
    return 0;
}

Use structs to group related variables of different types.`,
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
              question: "What is the index of 20 in the array {10, 20, 30}?",
          options: ["0", "1", "2", "3"],
          correctAnswer: "1"
            },
            {
              type: "mcq",
              question: "Are arrays in C mutable (changeable)?",
          options: ["Yes", "No", "Only constant arrays", "Only global arrays"],
          correctAnswer: "Yes"
            },
            {
              type: "mcq",
              question: "How do you change the third element of an array named numbers?",
          options: [
            "numbers[3] = 5;",
            "numbers[2] = 5;",
            "numbers(2) = 5;",
            "update(numbers[2], 5);"
          ],
          correctAnswer: "numbers[2] = 5;"
            },
            {
              type: "mcq",
              question: "Which loop is commonly used to iterate over arrays in C?",
          options: ["while", "foreach", "for", "loop"],
          correctAnswer: "for"
            },
            {
              type: "mcq",
              question: "Which C construct allows grouping of multiple different data types?",
          options: ["Array", "Struct", "Enum", "Pointer"],
          correctAnswer: "Struct"
            },
            {
              type: "mcq",
              question: "How do you access the x value from a struct Point p1?",
          options: [
            "p1->x",
            "p1.x",
            "Point.x",
            "x.p1"
          ],
          correctAnswer: "p1.x"
            }
          ],
        },
      ],
    },
    {
      id: 7,
      title: "Key-Value Mapping (Dictionaries)",
      isExpanded: false,
      lessons: [
        {
          id: 31,
          title: "Simulating Dictionaries with Structs",
          type: "text",
          content: `C does not have a built-in dictionary type like Python. However, you can simulate key-value storage using arrays of structs.

Example:
#include <stdio.h>
#include <string.h>

struct Student {
    char key[20];
    char value[20];
};

int main() {
    struct Student student[3] = {
        {"name", "Alice"},
        {"age", "20"},
        {"grade", "A"}
    };

    // Access a value
    printf("%s\\n", student[0].value);  // Alice
    return 0;
}`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 32,
          title: "Accessing and Searching Key-Value Pairs",
          type: "text",
          content: `Since C doesn't support dictionaries natively, you need to manually search for a key.

Example:
#include <stdio.h>
#include <string.h>

struct Student {
    char key[20];
    char value[20];
};

int main() {
    struct Student student[3] = {
        {"name", "Alice"},
        {"age", "20"},
        {"grade", "A"}
    };

    // Search for "grade"
    for (int i = 0; i < 3; i++) {
        if (strcmp(student[i].key, "grade") == 0) {
            printf("%s\\n", student[i].value);
        }
    }

    return 0;
}`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 33,
          title: "Adding or Updating Values",
          type: "text",
          content: `To add or update key-value pairs in C, you can modify struct elements directly.

Example:
#include <stdio.h>
#include <string.h>

struct Student {
    char key[20];
    char value[20];
};

int main() {
    struct Student student[3];

    strcpy(student[0].key, "name");
    strcpy(student[0].value, "Tom");

    // Add new key
    strcpy(student[1].key, "age");
    strcpy(student[1].value, "21");

    // Update existing key
    strcpy(student[0].value, "Alice");

    printf("%s\\n", student[0].value);  // Alice
    return 0;
}`,
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
              question: "How can key-value pairs be stored in C?",
          options: [
            "Using list and tuple",
            "Using arrays and loops",
            "Using struct and arrays",
            "Using functions"
          ],
          correctAnswer: "Using struct and arrays"
            },
            {
              type: "mcq",
              question: "How do you access the value for the key 'name' in the above example?",
          options: [
            "student.name",
            "student[\"name\"]",
            "student[0].value",
            "student->value"
          ],
          correctAnswer: "student[0].value"
            },
            {
              type: "mcq",
              question: "How do you compare strings in C?",
          options: ["strcomp()", "==", "equals()", "strcmp()"],
          correctAnswer: "strcmp()"
            },
            {
              type: "mcq",
              question: "What does strcmp(a, b) return if a and b are equal?",
          options: ["1", "0", "-1", "True"],
          correctAnswer: "0"
            },
            {
              type: "mcq",
              question: "Which function is used to copy a string into a struct in C?",
          options: ["copy()", "strcopy()", "strcpy()", "sassign()"],
          correctAnswer: "strcpy()"
            },
            {
              type: "mcq",
              question: "What happens when you assign a new value to an existing struct field?",
          options: [
            "It creates a new field",
            "It updates the existing value",
            "It deletes the struct",
            "It causes a segmentation fault"
          ],
          correctAnswer: "It updates the existing value"
            }
          ],
        },
      ],
    },
    {
      id: 8,
      title: "Object-Oriented Programming (OOP) Concepts in C",
      isExpanded: false,
      lessons: [
        {
          id: 36,
          title: "Structs as Objects",
          type: "text",
          content: `C doesn't have classes, but you can use a struct to define a data type similar to a class.

Example:
#include <stdio.h>

struct Person {
    char name[20];
};

int main() {
    struct Person p1;
    strcpy(p1.name, "Alice");
    printf("%s\\n", p1.name);
    return 0;
}`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 37,
          title: "Initializing Structs (Simulating Constructors)",
          type: "text",
          content: `In C, you can simulate a constructor by writing a function that initializes a struct.

Example:
#include <stdio.h>
#include <string.h>

struct Car {
    char model[20];
};

void initCar(struct Car* c, const char* model) {
    strcpy(c->model, model);
}

int main() {
    struct Car myCar;
    initCar(&myCar, "Toyota");
    printf("%s\\n", myCar.model);
    return 0;
}`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 33,
          title: "Simulating Methods with Functions",
          type: "text",
          content: `In C, you can't define methods inside structs. Instead, define functions that take a struct as an argument.

Example:
#include <stdio.h>

struct Dog {
    char name[20];
};

void bark(struct Dog d) {
    printf("%s says Woof!\\n", d.name);
}

int main() {
    struct Dog dog1;
    strcpy(dog1.name, "Buddy");
    bark(dog1);
    return 0;
}`,
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
              question: "What can be used in C to represent an object-like structure?",
          options: [
            "class",
            "struct",
            "array",
            "union"
          ],
          correctAnswer: "struct"
            },
            {
              type: "mcq",
              question: "How do you create a variable from a struct?",
          options: [
            "Person p1;",
            "new Person();",
            "struct Person p1;",
            "Person.create();"
          ],
          correctAnswer: "struct Person p1;"
            },
            {
              type: "mcq",
              question: "How can constructors be simulated in C?",
          options: [
            "By using the __init__ keyword",
            "By using a constructor function",
            "Using malloc()",
            "C does not support this"
          ],
          correctAnswer: "By using a constructor function"
            },
            {
              type: "mcq",
              question: "What does c->model mean?",
          options: [
            "Access the model from a struct pointer",
            "Assign a value to model",
            "Create a new variable",
            "None of the above"
          ],
          correctAnswer: "Access the model from a struct pointer"
            },
            {
              type: "mcq",
              question: "How are methods simulated in C?",
          options: [
            "By defining functions outside structs",
            "Using inline methods",
            "Using def keyword",
            "You can't simulate methods"
          ],
          correctAnswer: "By defining functions outside structs"
            },
            {
              type: "mcq",
              question: "What is passed to the function to simulate a method?",
          options: [
            "Struct as return",
            "Struct as a parameter",
            "Struct as pointer only",
            "Class object"
          ],
          correctAnswer: "Struct as a parameter"
            }
          ],
        },
      ],
    }
  ],
};

function CCourseContent(){

    return(
      <div>
      <h1>{CCourseData.title}</h1>
      <p>{CCourseData.description}</p>
      {CCourseData.chapters.map((chapter) => (
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



export default function CCoursePage() {

  return (
    <div>
    <CoursePlayer courseId="C" courseData={CCourseData}/> 
    </div>
  );
}