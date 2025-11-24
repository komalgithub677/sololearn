import React, { useState, useEffect } from "react";
import axios from "axios";
import PreTest from "./PreTest.tsx";

// === C PROGRAMMING COURSE DATA ===
const lessons = [
    {
        id: 1,
        title: "C Language Fundamentals",
        description: "Introduction to C programming language basics and syntax.",
        xp: 10,
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
                        content: `<p>C is a general-purpose, procedural programming language developed by Dennis Ritchie at Bell Labs in the early 1970s. It is widely used for system programming, embedded systems, and operating systems due to its efficiency and low-level memory access capabilities.</p>
<ul>
  <li><strong>C is a procedural programming language</strong></li>
  <li>Developed by Dennis Ritchie at Bell Labs</li>
  <li>Used for system programming and embedded systems</li>
  <li>Provides low-level memory access</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code>#include &lt;stdio.h&gt;
int main() {
    printf("Hello, World!");
    return 0;
}</code></pre>`,
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
                            }
                        ],
                    },
                    {
                        id: 2,
                        title: "Basic Syntax of C",
                        type: "text",
                        content: `<p>A basic C program has the following structure:</p>
<pre><code>#include &lt;stdio.h&gt;

int main() {
    printf("Hello, World!");
    return 0;
}</code></pre>
<p><strong>Key components:</strong></p>
<ul>
  <li><code>#include &lt;stdio.h&gt;</code>: Includes standard input/output library</li>
  <li><code>int main()</code>: Entry point of the program</li>
  <li><code>printf()</code>: Function to print output</li>
  <li><code>return 0;</code>: Indicates successful program execution</li>
</ul>
<p>C programs start execution from the main() function. The #include directive is used to include standard libraries.</p>`,
                        duration: "12 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [
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
                            }
                        ],
                    },
                    {
                        id: 3,
                        title: "Variables and Data Types in C",
                        type: "text",
                        content: `<p>In C, variables are used to store data. You must declare the type of variable before using it.</p>
<p><strong>Common data types:</strong></p>
<ul>
  <li><code>int</code>: integer numbers</li>
  <li><code>float</code>: floating point numbers</li>
  <li><code>char</code>: single characters</li>
  <li><code>double</code>: double precision floating numbers</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code>int age = 25;
char grade = 'A';
float price = 99.99;</code></pre>`,
                        duration: "10 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [
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
                            }
                        ],
                    },
                    {
                        id: 4,
                        title: "Operators and Expressions",
                        type: "text",
                        content: `<p>C supports various operators to perform operations on variables:</p>
<ul>
  <li><strong>Arithmetic operators:</strong> +, -, *, /, %</li>
  <li><strong>Relational operators:</strong> ==, !=, &gt;, &lt;, &gt;=, &lt;=</li>
  <li><strong>Logical operators:</strong> &&, ||, !</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code>int sum = a + b;
if (a &gt; b && b != 0) {
    printf("a is greater than b and b is not zero");
}</code></pre>`,
                        duration: "8 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [],
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        title: "Variables and Data Types",
        description: "Learn about C variables, data types, and type conversion.",
        xp: 10,
        chapters: [
            {
                id: 2,
                title: "Variables and Data Types",
                isExpanded: false,
                lessons: [
                    {
                        id: 5,
                        title: "C Variables",
                        type: "text",
                        content: `<p>In C, variables are used to store data values. You must declare the variable's type before using it.</p>
<p><strong>Example:</strong></p>
<pre><code>int x = 5;
char name[] = "Alice";
float temperature = 98.6;</code></pre>
<p>Variables must be declared with their data type before they can be used.</p>`,
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
                    {
                        id: 6,
                        title: "Data Types in C",
                        type: "text",
                        content: `<p>C has several basic data types:</p>
<ul>
  <li><code>int</code>: integer numbers</li>
  <li><code>float</code>: decimal numbers</li>
  <li><code>char</code>: single characters</li>
  <li><code>double</code>: double precision floating numbers</li>
  <li><code>void</code>: represents no value (used for functions that return nothing)</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code>int count = 10;
float price = 19.99;
char letter = 'A';
double pi = 3.14159;</code></pre>`,
                        duration: "8 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [],
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        title: "User Input and Type Conversion",
        description: "Learn about getting user input and type conversion in C.",
        xp: 10,
        chapters: [
            {
                id: 3,
                title: "User Input and Type Conversion",
                isExpanded: false,
                lessons: [
                    {
                        id: 7,
                        title: "Getting User Input",
                        type: "text",
                        content: `<p>In C, user input can be read using the scanf() function from the standard input.</p>
<p><strong>Example:</strong></p>
<pre><code>#include &lt;stdio.h&gt;

int main() {
    char name[50];
    printf("Enter your name: ");
    scanf("%s", name);
    printf("Hello, %s\\n", name);
    return 0;
}</code></pre>`,
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
                            }
                        ],
                    },
                    {
                        id: 8,
                        title: "Type Conversion",
                        type: "text",
                        content: `<p>C allows conversion between data types using casting.</p>
<p><strong>Example:</strong></p>
<pre><code>int x = 10;
float y = (float)x;  // converts int to float

// Also, functions like atoi() convert strings to integers.
#include &lt;stdlib.h&gt;

int main() {
    char str[] = "123";
    int num = atoi(str);
    return 0;
}</code></pre>`,
                        duration: "10 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [
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
        ],
    },
    {
        id: 4,
        title: "Control Flow",
        description: "Learn about conditional statements and loops in C programming.",
        xp: 10,
        chapters: [
            {
                id: 4,
                title: "Control Flow",
                isExpanded: false,
                lessons: [
                    {
                        id: 9,
                        title: "If Statements",
                        type: "text",
                        content: `<p>C uses if, else if, and else to perform conditional logic.</p>
<p><strong>Example:</strong></p>
<pre><code>#include &lt;stdio.h&gt;

int main() {
    int x = 10;
    if (x &gt; 5) {
        printf("x is greater than 5\\n");
    } else if (x == 5) {
        printf("x is 5\\n");
    } else {
        printf("x is less than 5\\n");
    }
    return 0;
}</code></pre>`,
                        duration: "12 min",
                        isCompleted: false,
                        isLocked: false,
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
                            }
                        ],
                    },
                    {
                        id: 10,
                        title: "For Loops",
                        type: "text",
                        content: `<p>Use for loops in C to execute a block of code a specific number of times.</p>
<p><strong>Example:</strong></p>
<pre><code>#include &lt;stdio.h&gt;

int main() {
    for (int i = 0; i &lt; 3; i++) {
        printf("%d\\n", i);
    }
    return 0;
}</code></pre>
<p>This prints 0, 1, 2.</p>`,
                        duration: "10 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [
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
                            }
                        ],
                    },
                    {
                        id: 11,
                        title: "While Loops",
                        type: "text",
                        content: `<p>A while loop in C repeats as long as a condition remains true.</p>
<p><strong>Example:</strong></p>
<pre><code>#include &lt;stdio.h&gt;

int main() {
    int x = 0;
    while (x &lt; 3) {
        printf("%d\\n", x);
        x++;
    }
    return 0;
}</code></pre>`,
                        duration: "12 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [
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
        ],
    },
    {
        id: 5,
        title: "Functions",
        description: "Learn about functions, parameters, and return values in C.",
        xp: 10,
        chapters: [
            {
                id: 5,
                title: "Functions",
                isExpanded: false,
                lessons: [
                    {
                        id: 12,
                        title: "Defining Functions",
                        type: "text",
                        content: `<p>Functions in C help organize code, improve reusability, and simplify debugging.</p>
<p>A function in C is defined using the return type, function name, and parameters.</p>
<p><strong>Example:</strong></p>
<pre><code>#include &lt;stdio.h&gt;

void greet() {
    printf("Hello!\\n");
}

int main() {
    greet();  // Calling the function
    return 0;
}</code></pre>`,
                        duration: "12 min",
                        isCompleted: false,
                        isLocked: false,
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
                            }
                        ],
                    },
                    {
                        id: 13,
                        title: "Function Parameters and Return",
                        type: "text",
                        content: `<p>C functions can accept parameters and return values.</p>
<p><strong>Example:</strong></p>
<pre><code>#include &lt;stdio.h&gt;

int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(5, 3);  // result = 8
    printf("%d\\n", result);
    return 0;
}</code></pre>`,
                        duration: "10 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [
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
                            }
                        ],
                    },
                    {
                        id: 14,
                        title: "Function Declarations and Prototypes",
                        type: "text",
                        content: `<p>In C, functions should be declared before they are used. A function prototype tells the compiler about the function's name, return type, and parameters.</p>
<p><strong>Example:</strong></p>
<pre><code>int multiply(int, int);  // Function prototype

int multiply(int a, int b) {
    return a * b;
}

int main() {
    printf("%d", multiply(4, 5));
    return 0;
}</code></pre>`,
                        duration: "8 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [
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
        ],
    },
    {
        id: 6,
        title: "Arrays and Structs",
        description: "Learn about arrays, structs, and data structures in C.",
        xp: 10,
        chapters: [
            {
                id: 6,
                title: "Arrays and Structs",
                isExpanded: false,
                lessons: [
                    {
                        id: 15,
                        title: "Introduction to Arrays",
                        type: "text",
                        content: `<p>An array in C is a collection of items of the <strong>same type</strong> stored in <strong>contiguous memory locations</strong>.</p>
<p><strong>Example:</strong></p>
<pre><code>int numbers[] = {10, 20, 30};

// You can access array elements using an index (starting from 0):
printf("%d", numbers[1]);  // Output: 20</code></pre>`,
                        duration: "12 min",
                        isCompleted: false,
                        isLocked: false,
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
                            }
                        ],
                    },
                    {
                        id: 16,
                        title: "Working with Arrays",
                        type: "text",
                        content: `<p>In C, you can update, access, and loop through arrays using index values.</p>
<p><strong>Example:</strong></p>
<pre><code>int numbers[3] = {4, 2, 9};
numbers[2] = 5;  // Update value at index 2

// Loop through array
for (int i = 0; i &lt; 3; i++) {
    printf("%d\\n", numbers[i]);
}</code></pre>`,
                        duration: "10 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [
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
                            }
                        ],
                    },
                    {
                        id: 17,
                        title: "Structs (Tuple Equivalent)",
                        type: "text",
                        content: `<p>C does not have a built-in tuple type like Python, but you can use a <strong>struct</strong> to group multiple values of different types.</p>
<p><strong>Example:</strong></p>
<pre><code>#include &lt;stdio.h&gt;

struct Point {
    int x;
    int y;
};

int main() {
    struct Point p1 = {10, 20};
    printf("%d", p1.x);  // Output: 10
    return 0;
}</code></pre>
<p>Use structs to group related variables of different types.</p>`,
                        duration: "8 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [
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
        ],
    },
    {
        id: 7,
        title: "Key-Value Mapping (Dictionaries)",
        description: "Learn how to simulate dictionaries and key-value pairs in C.",
        xp: 10,
        chapters: [
            {
                id: 7,
                title: "Key-Value Mapping (Dictionaries)",
                isExpanded: false,
                lessons: [
                    {
                        id: 18,
                        title: "Simulating Dictionaries with Structs",
                        type: "text",
                        content: `<p>C does not have a built-in dictionary type like Python. However, you can simulate key-value storage using arrays of structs.</p>
<p><strong>Example:</strong></p>
<pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

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
}</code></pre>`,
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
                            }
                        ],
                    },
                    {
                        id: 19,
                        title: "Accessing and Searching Key-Value Pairs",
                        type: "text",
                        content: `<p>Since C doesn't support dictionaries natively, you need to manually search for a key.</p>
<p><strong>Example:</strong></p>
<pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

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
    for (int i = 0; i &lt; 3; i++) {
        if (strcmp(student[i].key, "grade") == 0) {
            printf("%s\\n", student[i].value);
        }
    }

    return 0;
}</code></pre>`,
                        duration: "10 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [
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
                            }
                        ],
                    },
                    {
                        id: 20,
                        title: "Adding or Updating Values",
                        type: "text",
                        content: `<p>To add or update key-value pairs in C, you can modify struct elements directly.</p>
<p><strong>Example:</strong></p>
<pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

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
}</code></pre>`,
                        duration: "8 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [
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
        ],
    },
    {
        id: 8,
        title: "Object-Oriented Programming (OOP) Concepts in C",
        description: "Learn how to simulate OOP concepts using C structs and functions.",
        xp: 10,
        chapters: [
            {
                id: 8,
                title: "Object-Oriented Programming (OOP) Concepts in C",
                isExpanded: false,
                lessons: [
                    {
                        id: 21,
                        title: "Structs as Objects",
                        type: "text",
                        content: `<p>C doesn't have classes, but you can use a struct to define a data type similar to a class.</p>
<p><strong>Example:</strong></p>
<pre><code>#include &lt;stdio.h&gt;

struct Person {
    char name[20];
};

int main() {
    struct Person p1;
    strcpy(p1.name, "Alice");
    printf("%s\\n", p1.name);
    return 0;
}</code></pre>`,
                        duration: "12 min",
                        isCompleted: false,
                        isLocked: false,
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
                            }
                        ],
                    },
                    {
                        id: 22,
                        title: "Initializing Structs (Simulating Constructors)",
                        type: "text",
                        content: `<p>In C, you can simulate a constructor by writing a function that initializes a struct.</p>
<p><strong>Example:</strong></p>
<pre><code>#include &lt;stdio.h&gt;
#include &lt;string.h&gt;

struct Car {
    char model[20];
};

void initCar(struct Car* c, const char* model) {
    strcpy(c-&gt;model, model);
}

int main() {
    struct Car myCar;
    initCar(&amp;myCar, "Toyota");
    printf("%s\\n", myCar.model);
    return 0;
}</code></pre>`,
                        duration: "10 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [
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
                            }
                        ],
                    },
                    {
                        id: 23,
                        title: "Simulating Methods with Functions",
                        type: "text",
                        content: `<p>In C, you can't define methods inside structs. Instead, define functions that take a struct as an argument.</p>
<p><strong>Example:</strong></p>
<pre><code>#include &lt;stdio.h&gt;

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
}</code></pre>`,
                        duration: "8 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [
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
            },
        ],
    },
];

const badges = [
    {
        id: 1,
        name: "C Novice",
        description: "Completed first C lesson",
        xpRequired: 10,
        icon: "🎓"
    },
    {
        id: 2,
        name: "C Explorer",
        description: "Earned 50 XP in C programming",
        xpRequired: 50,
        icon: "🔍"
    },
    {
        id: 3,
        name: "C Champion",
        description: "Earned 100 XP in C programming",
        xpRequired: 100,
        icon: "🏆"
    }
];

// === COMPONENTS ===

// HomePage Component - Exactly like HTML course
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
                🚀 C Programming Interactive Course
            </h2>
            <h1>"C is a powerful, general-purpose programming language that's great for beginners and professionals alike. It's the foundation for many modern programming languages and is essential for system programming, embedded systems, and understanding how computers work at a low level. Start your programming journey with C and build a strong foundation!"</h1>

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

// LessonPage Component - Exactly like HTML course
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
                                    className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${expandedChapters.has(chapter.id) ? "rotate-180" : ""
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
                                            className={`border-b border-gray-100 last:border-b-0 cursor-pointer transition ${lessonItem.isLocked
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
                        <div className="flex justify-between items-center p-6 border-b border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-800">{selectedLesson.title}</h3>
                            <button
                                onClick={closeLessonModal}
                                className="text-gray-400 hover:text-gray-600 transition"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="p-6 overflow-y-auto max-h-[60vh]">
                            <div
                                className="prose prose-sm max-w-none"
                                dangerouslySetInnerHTML={{ __html: selectedLesson.content }}
                            />
                        </div>

                        <div className="flex justify-between items-center p-6 border-t border-gray-200">
                            <span className="text-sm text-gray-500">{selectedLesson.duration}</span>
                            <button
                                onClick={markAsComplete}
                                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg transition-transform hover:scale-105"
                            >
                                Mark as Complete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// Function to parse questions from text format
function parseQuestionsFromText(text) {
    const questions = [];
    const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    
    let currentQuestion = null;
    let currentOptions = [];
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Check if this is a question (starts with number)
        if (/^\d+\./.test(line)) {
            // Save previous question if exists
            if (currentQuestion && currentOptions.length > 0) {
                questions.push({
                    question: currentQuestion,
                    options: currentOptions,
                    correctAnswer: null // Will be set when we find the answer
                });
            }
            
            // Start new question
            currentQuestion = line.replace(/^\d+\.\s*/, '');
            currentOptions = [];
        }
        // Check if this is an option (starts with a), b), c), d))
        else if (/^[a-d]\)/.test(line)) {
            const option = line.replace(/^[a-d]\)\s*/, '');
            currentOptions.push(option);
        }
        // Check if this is the correct answer
        else if (line.toLowerCase().includes('correct answer:')) {
            const answerMatch = line.match(/\*\*correct answer:\s*([a-d])\*\*/i);
            if (answerMatch && currentQuestion) {
                const answerLetter = answerMatch[1].toLowerCase();
                const answerIndex = answerLetter.charCodeAt(0) - 97; // Convert a=0, b=1, etc.
                
                if (currentOptions[answerIndex]) {
                    // Update the last question with the correct answer
                    if (questions.length > 0) {
                        questions[questions.length - 1].correctAnswer = currentOptions[answerIndex];
                    }
                }
            }
        }
    }
    
    // Add the last question if it exists
    if (currentQuestion && currentOptions.length > 0) {
        questions.push({
            question: currentQuestion,
            options: currentOptions,
            correctAnswer: null
        });
    }
    
    return questions;
}

// DynamicQuizPage Component - Exactly like HTML course
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
                console.log("Generating C programming quiz for:", lesson.title);

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

                try {
                    const res = await axios.post("http://localhost:3000/api/generate-question", {
                        lessonContent: lesson.title + " - C Programming",
                        courseName: "C Programming"
                    });

                    console.log("API Response:", res.data);

                    if (!res.data || !res.data.generatedQuestion) {
                        throw new Error("Invalid response format from API");
                    }

                    // Parse the generated questions text into structured format
                    const questionsText = res.data.generatedQuestion;
                    const questions = parseQuestionsFromText(questionsText);

                    if (questions.length === 0) {
                        throw new Error("No questions returned from API");
                    }

                    // Format the questions from the API response
                    const formatted = questions.map((q, index) => ({
                        question: q.question || `Question ${index + 1}`,
                        options: q.options || [],
                        correctAnswer: q.correctAnswer,
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
                    <p className="text-white text-xl font-semibold mb-2">Generating your C programming quiz...</p>
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
                                    className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 ${selectedAnswer === option
                                            ? isCorrect === true
                                                ? "bg-green-500/30 border-2 border-green-400"
                                                : isCorrect === false
                                                    ? "bg-red-500/30 border-2 border-red-400"
                                                    : "bg-blue-500/30 border-2 border-blue-400"
                                            : "bg-white/10 hover:bg-white/20 border-2 border-white/20"
                                        }`}
                                >
                                    <div className="flex items-center">
                                        <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${selectedAnswer === option ? 'border-white' : 'border-white/40'
                                            }`}>
                                            {selectedAnswer === option && <div className="w-3 h-3 bg-white rounded-full"></div>}
                                        </div>
                                        <span className="text-white text-lg font-medium">{option}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {showFeedback && isCorrect !== null && (
                            <div className={`mb-8 p-6 rounded-2xl ${isCorrect ? "bg-green-500/20 border-2 border-green-400" : "bg-red-500/20 border-2 border-red-400"
                                }`}>
                                <div className="flex items-center">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${isCorrect ? "bg-green-500/30" : "bg-red-500/30"
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
                                className={`px-8 py-4 rounded-2xl font-semibold ${isCorrect !== null
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
function CCourseApp() {
    const [currentPage, setCurrentPage] = useState("home");
    const [currentLesson, setCurrentLesson] = useState(null);
    const [xp, setXp] = useState(0);
    const [badgesEarned, setBadgesEarned] = useState([]);
    const [completedLessons, setCompletedLessons] = useState([]);
    const [showPreTest, setShowPreTest] = useState(true);

    // Load progress from localStorage
    useEffect(() => {
        const saved = localStorage.getItem("cCourseProgress");
        if (saved) {
            const { xp: savedXp, completedLessons: savedLessons } = JSON.parse(saved);
            setXp(savedXp);
            setCompletedLessons(savedLessons);
        }
    }, []);

    // Save progress to localStorage
    useEffect(() => {
        localStorage.setItem(
            "CCourseProgress",
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
                        courseName="C Programming"
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

export default CCourseApp;