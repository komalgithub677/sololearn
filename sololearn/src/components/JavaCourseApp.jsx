import React, { useState, useEffect } from "react";
import CoursePlayer from "./me";
import axios from "axios";
import PreTest from "./PreTest.tsx";

// === EMBEDDED DATA ===
const lessons = [
  {
    id: 1,
    title: "Java Fundamentals",
    description: "Java is a powerful, versatile, and widely-used programming language. It is the backbone of enterprise software, Android apps, and large-scale systems. This interactive course will teach you Java fundamentals, object-oriented programming, collections, exceptions, and web basics, with quizzes to reinforce your learning.",
    xp: 10,
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
            content: `<p>Java is a high-level, object-oriented programming language known for its portability, security, and performance. It is widely used for building desktop, web, and mobile applications.</p>
<ul>
  <li><strong>Platform independence (Write Once, Run Anywhere)</strong></li>
  <li><strong>Strong memory management</strong></li>
  <li><strong>Rich standard library</strong></li>
  <li><strong>Large developer community</strong></li>
</ul>
<p><strong>Example:</strong></p>
<pre><code>public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}</code></pre>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: false,
            quiz: [],
          },
          {
            id: 2,
            title: "Variables and Data Types",
            type: "text",
            content: `<p>Java supports several primitive and reference data types:</p>
<ul>
  <li><strong>int:</strong> Whole numbers (e.g., <code>int age = 25;</code>)</li>
  <li><strong>double:</strong> Decimal numbers (e.g., <code>double price = 9.99;</code>)</li>
  <li><strong>boolean:</strong> <code>true</code> or <code>false</code></li>
  <li><strong>char:</strong> Single character (e.g., <code>char grade = 'A';</code>)</li>
  <li><strong>String:</strong> Sequence of characters (e.g., <code>String name = "Alice";</code>)</li>
</ul>
<p>Variables must be declared before use:</p>
<pre><code>int x = 10;
String name = "Java";
</code></pre>`,
            duration: "12 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 3,
            title: "Operators and Expressions",
            type: "text",
            content: `<p>Operators perform operations on variables and values.</p>
<p><strong>Arithmetic:</strong> <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code><br>
<strong>Comparison:</strong> <code>==</code>, <code>!=</code>, <code>></code>, <code><</code>, <code>>=</code>, <code><=</code><br>
<strong>Logical:</strong> <code>&&amp;</code>, <code>||</code>, <code>!</code></p>
<p><strong>Examples:</strong></p>
<pre><code>int sum = 5 + 3; // 8
boolean isEqual = (a == b);
boolean isAdult = (age >= 18) &amp;&amp; isStudent;
</code></pre>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 4,
            title: "Control Structures",
            type: "text",
            content: `<p>Java supports control structures for decision making and loops.</p>
<p><strong>if-else:</strong></p>
<pre><code>if (score >= 60) {
    System.out.println("Pass");
} else {
    System.out.println("Fail");
}
</code></pre>
<p><strong>switch:</strong></p>
<pre><code>switch (day) {
    case 1: System.out.println("Monday"); break;
    default: System.out.println("Other day");
}
</code></pre>
<p><strong>Loops:</strong></p>
<pre><code>for (int i = 0; i < 5; i++) { ... }
while (condition) { ... }
do { ... } while (condition);
</code></pre>`,
            duration: "8 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 5,
            title: "Quiz",
            type: "quiz",
            content: `<p>Test your knowledge of Java fundamentals.</p>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
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
                options: ["main", "start", "run", "execute"],
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
                options: ["Sun Microsystems", "Microsoft", "Apple", "Google"],
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
    ],
  },
  {
    id: 2,
    title: "Object-Oriented Programming",
    description: "Learn the core principles of object-oriented programming in Java: classes, objects, inheritance, polymorphism, encapsulation, and access modifiers.",
    xp: 10,
    chapters: [
      {
        id: 2,
        title: "Object-Oriented Programming",
        isExpanded: false,
        lessons: [
          {
            id: 6,
            title: "Classes and Objects",
            type: "text",
            content: `<p>Java is an object-oriented language. Everything is based on classes and objects.</p>
<p><strong>A class defines a blueprint:</strong></p>
<pre><code>public class Car {
    String color;
    void drive() { ... }
}
</code></pre>
<p><strong>An object is an instance:</strong></p>
<pre><code>Car myCar = new Car();
myCar.color = "red";
myCar.drive();
</code></pre>`,
            duration: "8 min",
            isCompleted: false,
            isLocked: false,
            quiz: [],
          },
          {
            id: 7,
            title: "Constructors and Methods",
            type: "text",
            content: `<p>A constructor initializes objects. Its name matches the class.</p>
<pre><code>public class Book {
    String title;
    Book(String t) { title = t; }
}
</code></pre>
<p><strong>Methods define behavior:</strong></p>
<pre><code>void read() { System.out.println("Reading"); }
</code></pre>
<p><strong>Usage:</strong></p>
<pre><code>Book b = new Book("Java");
b.read();
</code></pre>`,
            duration: "8 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 8,
            title: "Inheritance and Polymorphism",
            type: "text",
            content: `<p><strong>Inheritance</strong> lets one class use fields and methods of another.</p>
<pre><code>class Animal { void eat() { } }
class Dog extends Animal { void bark() { } }
</code></pre>
<p><strong>Polymorphism:</strong> one interface, many forms.</p>
<pre><code>Animal a = new Dog();
a.eat();
</code></pre>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 9,
            title: "Encapsulation and Access Modifiers",
            type: "text",
            content: `<p><strong>Encapsulation</strong> hides data using access modifiers.</p>
<p><strong>Modifiers:</strong></p>
<ul>
  <li><strong>public:</strong> accessible everywhere</li>
  <li><strong>private:</strong> accessible only in the class</li>
  <li><strong>protected:</strong> accessible in package and subclasses</li>
  <li><strong>default:</strong> package-only</li>
</ul>
<p>Use getters/setters to control access:</p>
<pre><code>private int age;
public int getAge() { return age; }
public void setAge(int a) { age = a; }
</code></pre>`,
            duration: "12 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 10,
            title: "Quiz",
            type: "quiz",
            content: `<p>Test your understanding of object-oriented programming in Java.</p>`,
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
                options: ["Constructor", "main", "init", "start"],
                correctAnswer: "Constructor"
              },
              {
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
    ],
  },
  {
    id: 3,
    title: "Java Collections and Generics",
    description: "Learn how to use Java collections like ArrayList, HashMap, and Set, and how to write type-safe code using generics.",
    xp: 10,
    chapters: [
      {
        id: 3,
        title: "Java Collections and Generics",
        isExpanded: false,
        lessons: [
          {
            id: 11,
            title: "Arrays and ArrayLists",
            type: "text",
            content: `<p><strong>Arrays</strong> store fixed-size sequences of elements.</p>
<pre><code>int[] numbers = {1, 2, 3};
</code></pre>
<p><strong>ArrayList</strong> is a resizable array.</p>
<pre><code>import java.util.ArrayList;
ArrayList<String> list = new ArrayList<>();
list.add("Java");
list.get(0);
</code></pre>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: false,
            quiz: [],
          },
          {
            id: 12,
            title: "HashMap and Set",
            type: "text",
            content: `<p><strong>HashMap</strong> stores key-value pairs.</p>
<pre><code>import java.util.HashMap;
HashMap<String, Integer> map = new HashMap<>();
map.put("Alice", 90);
map.get("Alice");
</code></pre>
<p><strong>Set</strong> stores unique values.</p>
<pre><code>import java.util.HashSet;
Set<String> set = new HashSet<>();
set.add("Java");
</code></pre>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 13,
            title: "Iterating Collections",
            type: "text",
            content: `<p>You can loop through collections using for-each loops.</p>
<pre><code>ArrayList<String> list = ...;
for (String item : list) {
    System.out.println(item);
}
</code></pre>
<p><strong>For HashMap:</strong></p>
<pre><code>for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + " " + entry.getValue());
}
</code></pre>`,
            duration: "8 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 14,
            title: "Generics in Java",
            type: "text",
            content: `<p><strong>Generics</strong> allow classes and methods to operate on types specified by the programmer.</p>
<pre><code>ArrayList<Integer> numbers = new ArrayList<>();
HashMap<String, Double> grades = new HashMap<>();
</code></pre>
<p><strong>Benefits:</strong></p>
<ul>
  <li>Type safety</li>
  <li>Code reuse</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code>public class Box<T> {
    private T value;
    public void set(T v) { value = v; }
    public T get() { return value; }
}
</code></pre>`,
            duration: "8 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 15,
            title: "Quiz",
            type: "quiz",
            content: `<p>Test your knowledge of Java collections and generics.</p>`,
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
                options: ["Type safety", "Faster code", "Less memory", "No errors"],
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
    ],
  },
  {
    id: 4,
    title: "Exception Handling and File I/O",
    description: "Learn how to handle exceptions and work with files in Java using try-catch, custom exceptions, and I/O streams.",
    xp: 10,
    chapters: [
      {
        id: 4,
        title: "Exception Handling and File I/O",
        isExpanded: false,
        lessons: [
          {
            id: 16,
            title: "Exceptions in Java",
            type: "text",
            content: `<p><strong>Exceptions</strong> are errors that disrupt program flow.</p>
<pre><code>try {
  // code that may throw
} catch (Exception e) {
  // handle error
} finally {
  // always runs
}
</code></pre>
<p><strong>Common exceptions:</strong> NullPointerException, IOException, ArithmeticException</p>`,
            duration: "12 min",
            isCompleted: false,
            isLocked: false,
            quiz: [],
          },
          {
            id: 17,
            title: "Handling Multiple Exceptions",
            type: "text",
            content: `<p>You can catch multiple exceptions:</p>
<pre><code>try {
  // code
} catch (IOException | SQLException e) {
  // handle
}
</code></pre>
<p>You can also have multiple catch blocks:</p>
<pre><code>catch (IOException e) { ... }
catch (Exception e) { ... }
</code></pre>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 18,
            title: "File Input and Output",
            type: "text",
            content: `<p>Java can read and write files using classes from <code>java.io</code>.</p>
<p><strong>Reading:</strong></p>
<pre><code>BufferedReader reader = new BufferedReader(new FileReader("file.txt"));
String line = reader.readLine();
</code></pre>
<p><strong>Writing:</strong></p>
<pre><code>BufferedWriter writer = new BufferedWriter(new FileWriter("file.txt"));
writer.write("Hello");
</code></pre>
<p>Always close files to free resources.</p>`,
            duration: "12 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 19,
            title: "Custom Exceptions",
            type: "text",
            content: `<p>You can define your own exception classes by extending <code>Exception</code>.</p>
<pre><code>class MyException extends Exception {
  public MyException(String msg) {
    super(msg);
  }
}
</code></pre>
<p>Throw custom exceptions with:</p>
<pre><code>throw new MyException("Error");
</code></pre>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 20,
            title: "Quiz",
            type: "quiz",
            content: `<p>Test your understanding of exceptions and file I/O in Java.</p>`,
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
                question: "Which class reads text files?",
                options: ["BufferedReader", "FileWriter", "Scanner", "PrintWriter"],
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
                options: ["readLine()", "read()", "nextLine()", "getLine()"],
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
                options: ["java.io", "java.util", "java.file", "java.read"],
                correctAnswer: "java.io"
              },
              {
                type: "mcq",
                question: "How do you define a custom exception?",
                options: ["Extend Exception class", "Use implements", "Create a static method", "Override toString()"],
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
                options: ["super()", "this()", "message()", "error()"],
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
                options: ["catch", "throw", "try", "finally"],
                correctAnswer: "catch"
              }
            ],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Java Web Basics",
    description: "Get started with Java web development using Servlets, JSP, frameworks, and deployment.",
    xp: 10,
    chapters: [
      {
        id: 5,
        title: "Java Web Basics",
        isExpanded: false,
        lessons: [
          {
            id: 21,
            title: "Java Web Application Overview",
            type: "text",
            content: `<p>Java web applications are dynamic sites built using Java technologies.</p>
<p><strong>Key components:</strong></p>
<ul>
  <li><strong>Servlet:</strong> Java class that handles HTTP requests</li>
  <li><strong>JSP (JavaServer Pages):</strong> Java code embedded in HTML</li>
  <li><strong>Web server:</strong> Runs servlets and JSPs (e.g., Tomcat)</li>
</ul>
<p>A Java web app typically uses a directory structure with <code>src</code>, <code>webapp</code>, <code>WEB-INF</code>, and <code>web.xml</code>.</p>`,
            duration: "12 min",
            isCompleted: false,
            isLocked: false,
            quiz: [],
          },
          {
            id: 22,
            title: "Servlets and JSP",
            type: "text",
            content: `<p><strong>Servlets</strong> are Java classes that process HTTP requests and generate responses.</p>
<p><strong>JSP</strong> allows embedding Java code in HTML.</p>
<p><strong>Example:</strong></p>
<pre><code>@WebServlet("/hello")
public class HelloServlet extends HttpServlet {
    protected void doGet(HttpServletRequest req, HttpServletResponse res) {
        res.getWriter().println("Hello, Java Web!");
    }
}
</code></pre>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 23,
            title: "Java Web Frameworks",
            type: "text",
            content: `<p>Frameworks simplify Java web development.</p>
<p><strong>Popular frameworks:</strong></p>
<ul>
  <li><strong>Spring MVC:</strong> Modern, powerful, widely used</li>
  <li><strong>JSF (JavaServer Faces):</strong> Component-based UI</li>
  <li><strong>Struts:</strong> Classic MVC</li>
</ul>
<p>Spring MVC uses controllers, services, and repositories for clean architecture.</p>`,
            duration: "8 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 24,
            title: "Deploying Java Web Applications",
            type: "text",
            content: `<p>To deploy a Java web app:</p>
<ol>
  <li>Package your app as a WAR file.</li>
  <li>Deploy to a server like Tomcat.</li>
  <li>Access via browser using the server's URL.</li>
</ol>
<p><strong>WAR (Web Application Archive)</strong> files contain all code and resources.</p>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 25,
            title: "Quiz",
            type: "quiz",
            content: `<p>Test your knowledge of Java web development basics.</p>`,
            duration: "12 min",
            isCompleted: false,
            isLocked: true,
            quiz: [
              {
                type: "mcq",
                question: "Which Java class handles HTTP requests?",
                options: ["Servlet", "Applet", "Thread", "Main"],
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
                options: ["web.xml", "index.html", "main.java", "config.txt"],
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
                options: ["src/main/java", "webapp", "WEB-INF", "resources"],
                correctAnswer: "src/main/java"
              },
              {
                type: "mcq",
                question: "Which annotation maps a servlet to a URL?",
                options: ["@WebServlet", "@ServletMapping", "@RequestMapping", "@WebMapping"],
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
                options: ["doGet", "doPost", "service", "main"],
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
                options: [".jsp", ".java", ".html", ".servlet"],
                correctAnswer: ".jsp"
              },
              {
                type: "mcq",
                question: "Which is a popular Java web framework?",
                options: ["Spring MVC", "React", "Django", "Laravel"],
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
                options: ["MVC", "Singleton", "Observer", "Factory"],
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
                options: ["JSF", "Spring MVC", "Struts", "Servlet"],
                correctAnswer: "JSF"
              },
              {
                type: "mcq",
                question: "What is the standard package format for Java web apps?",
                options: ["WAR", "JAR", "ZIP", "EXE"],
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
                options: [".war", ".jar", ".zip", ".exe"],
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
  },
];

const badges = [
  {
    id: 1,
    name: "Java Novice",
    description: "Completed 1 lesson",
    xpRequired: 10,
    icon: "🎓"
  },
  {
    id: 2,
    name: "Java Explorer",
    description: "Earned 50 XP",
    xpRequired: 50,
    icon: "🔍"
  },
  {
    id: 3,
    name: "Java Champion",
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
        🚀 Java Interactive Course
      </h2>
      <h1>"Java is a powerful, versatile, and widely-used programming language. It is the backbone of enterprise software, Android apps, and large-scale systems. This interactive course will teach you Java fundamentals, object-oriented programming, collections, exceptions, and web basics, with quizzes to reinforce your learning."</h1>

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
function JavaCourseApp() {
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
             courseName="Java" 
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

export default JavaCourseApp;