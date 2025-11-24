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
const JavaIcon: React.FC = () => (
  <svg
              width="64"
              height="64"
              viewBox="0 0 128 128"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  fill="#5382A1"
                  d="M38.4 99.7s-4.1 2.4 2.9 3.2c8.6 1 13 0.9 22.4-0.9 0 0 2.5 1.6 6 3.1-21.3 9.1-48.3-0.5-31.3-5.4z"
                />
                <path
                  fill="#E76F00"
                  d="M35.1 86.2s-4.6 3.4 2.5 4.1c9.3 1 16.6 1.1 29.3-1.4 0 0 1.8 1.8 4.7 2.8-27.1 7.9-57.4-0.6-36.5-5.5z"
                />
                <path
                  fill="#5382A1"
                  d="M69.6 70.6c5.3 6.1-1.4 11.6-1.4 11.6s13.5-7 7.3-15.7c-5.8-8.1-10.2-12.1 13.7-25.9 0 0-37.4 9.3-19.1 29.9z"
                />
                <path
                  fill="#E76F00"
                  d="M106.6 107.7s3.1 2.6-3.4 4.6c-12.3 3.7-51.2 4.8-62 0.1-3.9-1.7 3.4-4.1 5.7-4.6 2.4-0.5 3.8-0.4 3.8-0.4-4.4-3.1-28.5 6.1-12.3 8.7 44.7 7.3 81.4-3.3 66.2-8.4z"
                />
                <path
                  fill="#5382A1"
                  d="M47.5 59.3s-20.2 4.8-7.2 6.6c5.6 0.7 16.8 0.6 27.3-0.3 8.6-0.7 17.2-2.2 17.2-2.2s-3 1.3-5.2 2.8c-21.1 5.6-61.8 3-50.1-2.7 9.9-4.8 17.9-4.2 17.9-4.2z"
                />
                <path
                  fill="#E76F00"
                  d="M90.2 81.5c21.5-11.2 11.6-22 4.6-20.6-1.7 0.4-2.5 0.7-2.5 0.7s0.6-1 1.8-1.4c13.1-4.6 23.2 13.6-4.2 22.1 0-0.1 0.3-0.3 0.3-0.3z"
                />
                <path
                  fill="#5382A1"
                  d="M72.6 0s11.5 11.5-10.9 29.2c-18 14.3-4.1 22.4 0 31.7-10.5-9.5-18.2-17.9-13-25.7C57.5 21.3 77.6 15.5 72.6 0z"
                />
              </g>
            </svg>
);

const JavaCourseData: CourseData = {
  title: "Introduction to Java",
  description:
    "Java is a powerful, versatile, and widely-used programming language. It is the backbone of enterprise software, Android apps, and large-scale systems. This interactive course will teach you Java fundamentals, object-oriented programming, collections, exceptions, and web basics, with quizzes to reinforce your learning.",
  icon: <JavaIcon />,
  chapters: [
    {
      id: 1,
      title: "Java Fundamentals",
      isExpanded: true,
      lessons: [
        {
          id: 1,
          title: "What is Java?",
          type: "text",
          content: `Java is a high-level, object-oriented programming language known for its portability, security, and performance. It is widely used for building desktop, web, and mobile applications.

Key features:
- Platform independence (Write Once, Run Anywhere)
- Strong memory management
- Rich standard library
- Large developer community

A simple Java program:
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
          duration: "10 min",
          isCompleted: false,
          isLocked: false,
          quiz: [
            
          ],
        },
        {
          id: 2,
          title: "Variables and Data Types",
          type: "text",
          content: `A basic HTML document has a specific structure:

<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <!-- Content goes here -->
  </body>
</html>

Key elements:
- <!DOCTYPE html>: Declares the document as HTML5
- <html>: Root element
- <head>: Contains metadata
- <body>: Contains visible content
          `,

          duration: "12 min",
          isCompleted: false,
          isLocked: false,
          quiz: [
            
          ],
        },
        {
          id: 3,
          title: "Operators and Expressions",
          type: "text",
          content: `Operators perform operations on variables and values.

Arithmetic: +, -, *, /, %
Comparison: ==, !=, >, <, >=, <=
Logical: &&, ||, !

Example:
int sum = 5 + 3; // 8
boolean isEqual = (a == b);
boolean isAdult = (age >= 18) && isStudent;`,
          duration: "10 min",
          isCompleted: false,
          isLocked: false,
          quiz: [
            
          ],
        },
        {
          id: 4,
          title: "Control Structures",
          type: "text",
          content: `Java supports control structures for decision making and loops.

if-else:
if (score >= 60) {
    System.out.println("Pass");
} else {
    System.out.println("Fail");
}

switch:
switch (day) {
    case 1: System.out.println("Monday"); break;
    default: System.out.println("Other day");
}

Loops:
for (int i = 0; i < 5; i++) { ... }
while (condition) { ... }
do { ... } while (condition);`,
         
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
            question: "What does JVM stand for?",
            options: [
              "Java Virtual Machine",
              "Java Variable Method",
              "Java Visual Model",
              "Java Version Manager"
            ],
            correctAnswer: "Java Virtual Machine"
          },
          {
            type: "fill",
            question: "Fill in the blank: Java is known for its ____ independence.",
            correctAnswer: "platform"
          },
          {
            type: "mcq",
            question: "Which method is the entry point of a Java application?",
            options: [
              "main",
              "start",
              "run",
              "execute"
            ],
            correctAnswer: "main"
          },
          {
            type: "fill",
            question: "Fill in the blank: To print output in Java, use System.out.____();",
            correctAnswer: "println"
          },
          {
            type: "mcq",
            question: "Which company originally developed Java?",
            options: [
              "Sun Microsystems",
              "Microsoft",
              "Apple",
              "Google"
            ],
            correctAnswer: "Sun Microsystems"
          },
          {
            type: "mcq",
            question: "Which data type is used for true/false values?",
            options: ["boolean", "int", "char", "String"],
            correctAnswer: "boolean"
          },
          {
            type: "fill",
            question: "Fill in the blank: To declare a string variable, use ____ name = \"Java\";",
            correctAnswer: "String"
          },
          {
            type: "mcq",
            question: "What is the value of 'grade' after: char grade = 'B';?",
            options: ["B", "'B'", "\"B\"", "grade"],
            correctAnswer: "B"
          },
          {
            type: "fill",
            question: "Fill in the blank: The value 3.14 is of type ____.",
            correctAnswer: "double"
          },
          {
            type: "mcq",
            question: "Which keyword is used to declare a variable in Java?",
            options: ["int", "var", "let", "define"],
            correctAnswer: "int"
          },
          {
            type: "mcq",
            question: "Which operator is used for equality comparison?",
            options: ["==", "=", "!=", "<="],
            correctAnswer: "=="
          },
          {
            type: "fill",
            question: "Fill in the blank: The operator for logical AND is ____.",
            correctAnswer: "&&"
          },
          {
            type: "mcq",
            question: "What is the result of 10 % 3?",
            options: ["1", "3", "0", "10"],
            correctAnswer: "1"
          },
          {
            type: "fill",
            question: "Fill in the blank: To check if 'a' is not equal to 'b', write a ____ b.",
            correctAnswer: "!="
          },
          {
            type: "mcq",
            question: "Which operator increases a value by 1?",
            options: ["++", "--", "+=", "-="],
            correctAnswer: "++"
          },
          {
            type: "mcq",
            question: "Which keyword is used for a conditional branch?",
            options: ["if", "switch", "for", "while"],
            correctAnswer: "if"
          },
          {
            type: "fill",
            question: "Fill in the blank: The ____ loop always runs at least once.",
            correctAnswer: "do"
          },
          {
            type: "mcq",
            question: "What does 'break' do in a switch statement?",
            options: [
              "Exits the switch",
              "Skips to next case",
              "Ends the program",
              "Repeats the case"
            ],
            correctAnswer: "Exits the switch"
          },
          {
            type: "fill",
            question: "Fill in the blank: To repeat code while a condition is true, use a ____ loop.",
            correctAnswer: "while"
          },
          {
            type: "mcq",
            question: "Which loop is best for counting from 1 to 10?",
            options: ["for", "while", "do-while", "switch"],
            correctAnswer: "for"
          }
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Object-Oriented Programming",
      isExpanded: false,
      lessons: [
        {
          id: 6,
          title: "Classes and Objects",
          type: "text",
          content: `Java is an object-oriented language. Everything is based on classes and objects.

A class defines a blueprint:
public class Car {
    String color;
    void drive() { ... }
}

An object is an instance:
Car myCar = new Car();
myCar.color = "red";
myCar.drive();`,
          duration: "8 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 7,
          title: "Constructors and Methods",
          type: "text",
          content: `A constructor initializes objects. Its name matches the class.

public class Book {
    String title;
    Book(String t) { title = t; }
}

Methods define behavior:
void read() { System.out.println("Reading"); }

Book b = new Book("Java");
b.read();`,
          duration: "8 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 8,
          title: "Inheritance and Polymorphism",
          type: "text",
          content: `Inheritance lets one class use fields and methods of another.

class Animal { void eat() { } }
class Dog extends Animal { void bark() { } }

Polymorphism: one interface, many forms.

Animal a = new Dog();
a.eat();`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 9,
          title: "Encapsulation and Access Modifiers",
          type: "text",
          content: `Encapsulation hides data using access modifiers.

Modifiers:
- public: accessible everywhere
- private: accessible only in the class
- protected: accessible in package and subclasses
- default: package-only

Use getters/setters to control access.

private int age;
public int getAge() { return age; }
public void setAge(int a) { age = a; }`,
          duration: "12 min",
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
            question: "What is an object in Java?",
            options: [
              "An instance of a class",
              "A variable",
              "A method",
              "A data type"
            ],
            correctAnswer: "An instance of a class"
          },
          {
            type: "fill",
            question: "Fill in the blank: A ____ defines the blueprint for objects.",
            correctAnswer: "class"
          },
          {
            type: "mcq",
            question: "Which keyword is used to create an object?",
            options: ["new", "create", "object", "instance"],
            correctAnswer: "new"
          },
          {
            type: "fill",
            question: "Fill in the blank: To access a field, use object.____;",
            correctAnswer: "fieldname"
          },
          {
            type: "mcq",
            question: "Which of these is NOT a Java OOP concept?",
            options: [
              "Encapsulation",
              "Inheritance",
              "Polymorphism",
              "Compilation"
            ],
            correctAnswer: "Compilation"
          },
          {
            type: "mcq",
            question: "What is a constructor?",
            options: [
              "A special method to initialize objects",
              "A static method",
              "A variable",
              "A loop"
            ],
            correctAnswer: "A special method to initialize objects"
          },
          {
            type: "fill",
            question: "Fill in the blank: Constructors have the same ____ as the class.",
            correctAnswer: "name"
          },
          {
            type: "mcq",
            question: "Which keyword is used to call a method?",
            options: ["dot (.)", "call", "invoke", "use"],
            correctAnswer: "dot (.)"
          },
          {
            type: "fill",
            question: "Fill in the blank: Methods can return a value or ____.",
            correctAnswer: "void"
          },
          {
            type: "mcq",
            question: "Which method is called when an object is created?",
            options: [
              "Constructor",
              "main",
              "init",
              "start"
            ],
            correctAnswer: "Constructor"
          },{
            type: "mcq",
            question: "Which keyword is used for inheritance?",
            options: ["extends", "implements", "inherits", "super"],
            correctAnswer: "extends"
          },
          {
            type: "fill",
            question: "Fill in the blank: Polymorphism allows ____ interfaces for many forms.",
            correctAnswer: "one"
          },
          {
            type: "mcq",
            question: "Which class is the parent in 'class Dog extends Animal'?",
            options: ["Animal", "Dog", "Object", "Parent"],
            correctAnswer: "Animal"
          },
          {
            type: "fill",
            question: "Fill in the blank: All Java classes implicitly inherit from ____.",
            correctAnswer: "Object"
          },
          {
            type: "mcq",
            question: "Which method can be overridden in a subclass?",
            options: [
              "Any non-final method",
              "Static method",
              "Private method",
              "Constructor"
            ],
            correctAnswer: "Any non-final method"
          },
          {
            type: "mcq",
            question: "Which modifier hides data from outside?",
            options: ["private", "public", "protected", "default"],
            correctAnswer: "private"
          },
          {
            type: "fill",
            question: "Fill in the blank: Methods to access private data are called ____.",
            correctAnswer: "getters"
          },
          {
            type: "mcq",
            question: "Which modifier allows access in the same package?",
            options: ["default", "private", "protected", "public"],
            correctAnswer: "default"
          },
          {
            type: "fill",
            question: "Fill in the blank: To set a value, use a ____ method.",
            correctAnswer: "setter"
          },
          {
            type: "mcq",
            question: "Which modifier allows access in subclasses?",
            options: ["protected", "private", "public", "default"],
            correctAnswer: "protected"
          }
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Java Collections and Generics",
      isExpanded: false,
      lessons: [
        {
          id: 11,
          title: "Arrays and ArrayLists",
          type: "text",
          content: `Arrays store fixed-size sequences of elements.

int[] numbers = {1, 2, 3};

ArrayList is a resizable array.

import java.util.ArrayList;
ArrayList<String> list = new ArrayList<>();
list.add("Java");
list.get(0);`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 12,
          title: "HashMap and Set",
          type: "text",
    content: `HashMap stores key-value pairs.

import java.util.HashMap;
HashMap<String, Integer> map = new HashMap<>();
map.put("Alice", 90);
map.get("Alice");

Set stores unique values.

import java.util.HashSet;
Set<String> set = new HashSet<>();
set.add("Java");`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 13,
          title: "Iterating Collections",
          type: "text",
          content: `You can loop through collections using for-each loops.

ArrayList<String> list = ...;
for (String item : list) {
    System.out.println(item);
}

For HashMap:
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + entry.getValue());
}`,
          duration: "8 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 14,
          title: "Generics in Java",
          type: "text",
          content: `Generics allow classes and methods to operate on types specified by the programmer.

ArrayList<Integer> numbers = new ArrayList<>();
HashMap<String, Double> grades = new HashMap<>();

Benefits:
- Type safety
- Code reuse

Example:
public class Box<T> {
    private T value;
    public void set(T v) { value = v; }
    public T get() { return value; }
}`,
          duration: "8 min",
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
            question: "Which is a fixed-size data structure?",
            options: ["Array", "ArrayList", "HashMap", "Set"],
            correctAnswer: "Array"
          },
          {
            type: "fill",
            question: "Fill in the blank: To access the 2nd element, use array[____];",
            correctAnswer: "1"
          },
          {
            type: "mcq",
            question: "Which method adds an item to an ArrayList?",
            options: ["add()", "put()", "insert()", "append()"],
            correctAnswer: "add()"
          },
          {
            type: "fill",
            question: "Fill in the blank: To get the size of an ArrayList, use ____();",
            correctAnswer: "size"
          },
          {
            type: "mcq",
            question: "Which import is needed for ArrayList?",
            options: [
              "java.util.ArrayList",
              "java.lang.ArrayList",
              "java.array.ArrayList",
              "java.collections.ArrayList"
            ],
            correctAnswer: "java.util.ArrayList"
          },
          {
            type: "mcq",
            question: "Which collection stores key-value pairs?",
            options: ["HashMap", "ArrayList", "Set", "List"],
            correctAnswer: "HashMap"
          },
          {
            type: "fill",
            question: "Fill in the blank: To add a value to a set, use set.____();",
            correctAnswer: "add"
          },
          {
            type: "mcq",
            question: "Which method retrieves a value from a HashMap?",
            options: ["get()", "put()", "add()", "fetch()"],
            correctAnswer: "get()"
          },
          {
            type: "fill",
            question: "Fill in the blank: A Set cannot contain ____ values.",
            correctAnswer: "duplicate"
          },
          {
            type: "mcq",
            question: "Which import is needed for HashMap?",
            options: [
              "java.util.HashMap",
              "java.lang.HashMap",
              "java.map.HashMap",
              "java.collections.HashMap"
            ],
            correctAnswer: "java.util.HashMap"
          },
          {
            type: "mcq",
            question: "Which loop is used to iterate over collections?",
            options: ["for-each", "while", "do-while", "switch"],
            correctAnswer: "for-each"
          },
          {
            type: "fill",
            question: "Fill in the blank: To get the key in a Map.Entry, use entry.____();",
            correctAnswer: "getKey"
          },
          {
            type: "mcq",
            question: "Which method gets all entries in a HashMap?",
            options: ["entrySet()", "keySet()", "values()", "getAll()"],
            correctAnswer: "entrySet()"
          },
          {
            type: "fill",
            question: "Fill in the blank: The enhanced for loop uses a ____.",
            correctAnswer: "colon"
          },
          {
            type: "mcq",
            question: "Which method gets all keys in a HashMap?",
            options: ["keySet()", "entrySet()", "values()", "getKeys()"],
            correctAnswer: "keySet()"
          },
          {
            type: "mcq",
            question: "What is the main benefit of generics?",
            options: [
              "Type safety",
              "Faster code",
              "Less memory",
              "No errors"
            ],
            correctAnswer: "Type safety"
          },
          {
            type: "fill",
            question: "Fill in the blank: ArrayList<String> is a ____ collection.",
            correctAnswer: "generic"
          },
          {
            type: "mcq",
            question: "Which symbol is used for generics?",
            options: ["<>", "{}", "[]", "()"],
            correctAnswer: "<>"
          },
          {
            type: "fill",
            question: "Fill in the blank: To create a Box of Integer, use Box<____>.",
            correctAnswer: "Integer"
          },
          {
            type: "mcq",
            question: "Which type parameter is most common in Java generics?",
            options: ["T", "X", "Y", "Z"],
            correctAnswer: "T"
          }
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Exception Handling and File I/O",
      isExpanded: false,
      lessons: [
        {
          id: 16,
          title: "Exceptions in Java",
          type: "text",
          content: `Exceptions are errors that disrupt program flow.

try {
  // code that may throw
} catch (Exception e) {
  // handle error
} finally {
  // always runs
}

Common exceptions: NullPointerException, IOException, ArithmeticException`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 17,
          title: "Handling Multiple Exceptions",
          type: "text",
          content: `You can catch multiple exceptions:

try {
  // code
} catch (IOException | SQLException e) {
  // handle
}

You can also have multiple catch blocks.

catch (IOException e) { ... }
catch (Exception e) { ... }
`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 18,
          title: "File Input and Output",
          type: "text",
          content: `Java can read and write files using classes from java.io.

Reading:
BufferedReader reader = new BufferedReader(new FileReader("file.txt"));
String line = reader.readLine();

Writing:
BufferedWriter writer = new BufferedWriter(new FileWriter("file.txt"));
writer.write("Hello");

Always close files to free resources.`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 19,
          title: "Custom Exceptions",
          type: "text",
          content: `You can define your own exception classes by extending Exception.

class MyException extends Exception {
  public MyException(String msg) {
    super(msg);
  }
}

Throw custom exceptions with throw new MyException("Error");`,
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
            question: "Which exception occurs when dividing by zero?",
            options: [
              "ArithmeticException",
              "NullPointerException",
              "IOException",
              "FileNotFoundException"
            ],
            correctAnswer: "ArithmeticException"
          },
          {
            type: "fill",
            question: "Fill in the blank: To throw an exception, use the ____ keyword.",
            correctAnswer: "throw"
          },
          {
            type: "mcq",
            question: "Which exception is checked at compile time?",
            options: [
              "IOException",
              "NullPointerException",
              "ArithmeticException",
              "ArrayIndexOutOfBoundsException"
            ],
            correctAnswer: "IOException"
          },
          {
            type: "mcq",
            question: "Which block handles exceptions?",
            options: ["catch", "try", "finally", "throw"],
            correctAnswer: "catch"
          },
          {
            type: "fill",
            question: "Fill in the blank: The ____ block always runs.",
            correctAnswer: "finally"
          },
          {
            type: "mcq",
            question: "Which exception occurs when dividing by zero?",
            options: [
              "ArithmeticException",
              "NullPointerException",
              "IOException",
              "FileNotFoundException"
            ],
            correctAnswer: "ArithmeticException"
          },
          {
            type: "fill",
            question: "Fill in the blank: To throw an exception, use the ____ keyword.",
            correctAnswer: "throw"
          },
          {
            type: "mcq",
            question: "Which exception is checked at compile time?",
            options: [
              "IOException",
              "NullPointerException",
              "ArithmeticException",
              "ArrayIndexOutOfBoundsException"
            ],
            correctAnswer: "IOException"
          },
          {
            type: "mcq",
            question: "Which class reads text files?",
            options: [
              "BufferedReader",
              "FileWriter",
              "Scanner",
              "PrintWriter"
            ],
            correctAnswer: "BufferedReader"
          },
          {
            type: "fill",
            question: "Fill in the blank: To write to a file, use ____Writer.",
            correctAnswer: "Buffered"
          },
          {
            type: "mcq",
            question: "Which method reads a line from a file?",
            options: [
              "readLine()",
              "read()",
              "nextLine()",
              "getLine()"
            ],
            correctAnswer: "readLine()"
          },
          {
            type: "fill",
            question: "Fill in the blank: Always ____ files after reading or writing.",
            correctAnswer: "close"
          },
          {
            type: "mcq",
            question: "Which package contains file I/O classes?",
            options: [
              "java.io",
              "java.util",
              "java.file",
              "java.read"
            ],
            correctAnswer: "java.io"
          },
          {
            type: "mcq",
            question: "How do you define a custom exception?",
            options: [
              "Extend Exception class",
              "Use implements",
              "Create a static method",
              "Override toString()"
            ],
            correctAnswer: "Extend Exception class"
          },
          {
            type: "fill",
            question: "Fill in the blank: To throw a custom exception, use throw ____.",
            correctAnswer: "new"
          },
          {
            type: "mcq",
            question: "Which method passes a message to Exception?",
            options: [
              "super()",
              "this()",
              "message()",
              "error()"
            ],
            correctAnswer: "super()"
          },
          {
            type: "fill",
            question: "Fill in the blank: Custom exceptions should extend ____.",
            correctAnswer: "Exception"
          },
          {
            type: "mcq",
            question: "Which keyword is used to handle exceptions?",
            options: [
              "catch",
              "throw",
              "try",
              "finally"
            ],
            correctAnswer: "catch"
          }
          ],
        },
      ],
    },
    {
      id: 5,
      title: "Java Web Basics",
      isExpanded: false,
      lessons: [
        {
          id: 21,
          title: "Java Web Application Overview",
          type: "text",
          content: `Java web applications are dynamic sites built using Java technologies.

Key components:
- Servlet: Java class that handles HTTP requests
- JSP (JavaServer Pages): Java code embedded in HTML
- Web server: runs servlets and JSPs (e.g., Tomcat)

A Java web app typically uses a directory structure with src, webapp, WEB-INF, and web.xml.`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 22,
          title: "Servlets and JSP",
          type: "text",
          content: `Servlets are Java classes that process HTTP requests and generate responses.

JSP allows embedding Java code in HTML.

Servlet example:
@WebServlet("/hello")
public class HelloServlet extends HttpServlet {
    protected void doGet(HttpServletRequest req, HttpServletResponse res) {
        res.getWriter().println("Hello, Java Web!");
    }
}
`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 23,
          title: "Java Web Frameworks",
          type: "text",
          content: `Frameworks simplify Java web development.

Popular frameworks:
- Spring MVC: modern, powerful, widely used
- JSF (JavaServer Faces): component-based UI
- Struts: classic MVC

Spring MVC uses controllers, services, and repositories for clean architecture.`,
          duration: "8 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 24,
          title: "Deploying Java Web Applications",
          type: "text",
          content: `To deploy a Java web app:

1. Package your app as a WAR file.
2. Deploy to a server like Tomcat.
3. Access via browser using the server's URL.

WAR (Web Application Archive) files contain all code and resources.`,
          duration: "10 min",
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
            question: "Which Java class handles HTTP requests?",
            options: [
              "Servlet",
              "Applet",
              "Thread",
              "Main"
            ],
            correctAnswer: "Servlet"
          },
          {
            type: "fill",
            question: "Fill in the blank: Java web apps often use ____ as a web server.",
            correctAnswer: "Tomcat"
          },
          {
            type: "mcq",
            question: "Which file defines web app configuration?",
            options: [
              "web.xml",
              "index.html",
              "main.java",
              "config.txt"
            ],
            correctAnswer: "web.xml"
          },
          {
            type: "fill",
            question: "Fill in the blank: JSP stands for JavaServer ____.",
            correctAnswer: "Pages"
          },
          {
            type: "mcq",
            question: "Which folder holds Java servlet classes?",
            options: [
              "src/main/java",
              "webapp",
              "WEB-INF",
              "resources"
            ],
            correctAnswer: "src/main/java"
          },
          {
            type: "mcq",
            question: "Which annotation maps a servlet to a URL?",
            options: [
              "@WebServlet",
              "@ServletMapping",
              "@RequestMapping",
              "@WebMapping"
            ],
            correctAnswer: "@WebServlet"
          },
          {
            type: "fill",
            question: "Fill in the blank: JSP lets you embed ____ code in HTML.",
            correctAnswer: "Java"
          },
          {
            type: "mcq",
            question: "Which method handles GET requests in a servlet?",
            options: [
              "doGet",
              "doPost",
              "service",
              "main"
            ],
            correctAnswer: "doGet"
          },
          {
            type: "fill",
            question: "Fill in the blank: The response object in a servlet is called ____.",
            correctAnswer: "HttpServletResponse"
          },
          {
            type: "mcq",
            question: "Which extension do JSP files use?",
            options: [
              ".jsp",
              ".java",
              ".html",
              ".servlet"
            ],
            correctAnswer: ".jsp"
          },
          {
            type: "mcq",
            question: "Which is a popular Java web framework?",
            options: [
              "Spring MVC",
              "React",
              "Django",
              "Laravel"
            ],
            correctAnswer: "Spring MVC"
          },
          {
            type: "fill",
            question: "Fill in the blank: JSF stands for JavaServer ____.",
            correctAnswer: "Faces"
          },
          {
            type: "mcq",
            question: "Which pattern does Struts use?",
            options: [
              "MVC",
              "Singleton",
              "Observer",
              "Factory"
            ],
            correctAnswer: "MVC"
          },
          {
            type: "fill",
            question: "Fill in the blank: Spring MVC organizes code into controllers, services, and ____.",
            correctAnswer: "repositories"
          },
          {
            type: "mcq",
            question: "Which framework is component-based?",
            options: [
              "JSF",
              "Spring MVC",
              "Struts",
              "Servlet"
            ],
            correctAnswer: "JSF"
          },
          {
            type: "mcq",
            question: "What is the standard package format for Java web apps?",
            options: [
              "WAR",
              "JAR",
              "ZIP",
              "EXE"
            ],
            correctAnswer: "WAR"
          },
          {
            type: "fill",
            question: "Fill in the blank: Tomcat is a popular Java ____ server.",
            correctAnswer: "web"
          },
          {
            type: "mcq",
            question: "Which file extension is used for deployment?",
            options: [
              ".war",
              ".jar",
              ".zip",
              ".exe"
            ],
            correctAnswer: ".war"
          },
          {
            type: "fill",
            question: "Fill in the blank: The web.xml file is found in the ____-INF folder.",
            correctAnswer: "WEB"
          },
          {
            type: "mcq",
            question: "How do you access a deployed Java web app?",
            options: [
              "Via browser using the server URL",
              "By double-clicking the WAR file",
              "With a Java IDE",
              "Using command line only"
            ],
            correctAnswer: "Via browser using the server URL"
          }
          ],
        },
      ],
    },
  ],
};

function JavaCourseContent(){

    return(
      <div>
      <h1>{JavaCourseData.title}</h1>
      <p>{JavaCourseData.description}</p>
      {JavaCourseData.chapters.map((chapter) => (
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



export default function JavaCoursePage() {

  return (
    <div>
    <CoursePlayer courseId="Java" courseData={JavaCourseData}/> 
    </div>
  );
}