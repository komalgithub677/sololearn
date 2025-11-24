import React, { useState, useEffect } from "react";
import axios from "axios";
import PreTest from "./PreTest.tsx";

// === C# PROGRAMMING COURSE DATA ===
const lessons = [
    {
        id: 1,
        title: "C# Fundamentals",
        description: "Introduction to C# programming language basics and syntax.",
        xp: 10,
        chapters: [
            {
                id: 1,
                title: "C# Language Introduction",
                isExpanded: true,
                lessons: [
                    {
                        id: 1,
                        title: "Introduction to C#",
                        type: "text",
                        content: `<p>C# (pronounced "C Sharp") is a modern, object-oriented programming language developed by Microsoft. It runs on the .NET framework and is widely used for various types of applications.</p>
<p><strong>Key features:</strong></p>
<ul>
  <li>Object-oriented</li>
  <li>Strongly typed</li>
  <li>Simple and modern syntax</li>
  <li>Versatile (desktop, web, mobile, games)</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code>Console.WriteLine("Hello, World!");</code></pre>`,
                        duration: "10 min",
                        isCompleted: false,
                        isLocked: false,
                        quiz: [],
                    },
                    {
                        id: 2,
                        title: "Basic Syntax",
                        type: "text",
                        content: `<p>A basic C# program structure:</p>
<pre><code>using System;

class Program
{
    static void Main()
    {
        // Your code here
        Console.WriteLine("Hello C#");
    }
}</code></pre>
<p><strong>Key elements:</strong></p>
<ul>
  <li>using directives (like 'using System;')</li>
  <li>class declaration</li>
  <li>Main method (entry point)</li>
  <li>Statements end with semicolons</li>
</ul>`,
                        duration: "12 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [],
                    },
                    {
                        id: 3,
                        title: "Variables and Data Types",
                        type: "text",
                        content: `<p>C# is strongly typed, meaning variables must have a declared type.</p>
<p><strong>Common data types:</strong></p>
<ul>
  <li><code>int</code>: integer numbers (e.g., 42)</li>
  <li><code>double</code>: floating-point numbers (e.g., 3.14)</li>
  <li><code>bool</code>: boolean (true/false)</li>
  <li><code>string</code>: text (e.g., "Hello")</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code>int age = 25;
string name = "Alice";
bool isStudent = true;</code></pre>`,
                        duration: "10 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [],
                    },
                    {
                        id: 4,
                        title: "Comments and Whitespace",
                        type: "text",
                        content: `<p>C# supports single-line and multi-line comments:</p>
<pre><code>// This is a single-line comment

/*
This is a multi-line
comment
*/</code></pre>
<p>Whitespace (spaces, tabs, newlines) is ignored by the compiler but improves readability.</p>
<p><strong>Example:</strong></p>
<pre><code>int x = 5;  // This is a comment
int y = x + 2;</code></pre>`,
                        duration: "8 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [],
                    },
                    {
                        id: 5,
                        title: "Quiz",
                        type: "text",
                        content: `<p>Test your knowledge of C# fundamentals!</p>`,
                        duration: "10 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [
                            {
                                type: "mcq",
                                question: "Who developed C#?",
                                options: ["Microsoft", "Apple", "Google", "Oracle"],
                                correctAnswer: "Microsoft",
                            },
                            {
                                type: "fill",
                                question: "Fill in the blank: C# runs on the ____ framework.",
                                correctAnswer: ".NET",
                            },
                            {
                                type: "mcq",
                                question: "What is the entry point of a C# program?",
                                options: ["Main() method", "Start() method", "Init() method", "Program() method"],
                                correctAnswer: "Main() method",
                            },
                            {
                                type: "mcq",
                                question: "Which of these is a valid C# data type?",
                                options: ["int", "number", "text", "boolean"],
                                correctAnswer: "int",
                            },
                            {
                                type: "fill",
                                question: "Fill in the blank: C# statements end with a ____.",
                                correctAnswer: "semicolon",
                            },
                            {
                                type: "mcq",
                                question: "Which symbol starts a single-line comment in C#?",
                                options: ["//", "#", "/*", "--"],
                                correctAnswer: "//",
                            },
                            {
                                type: "mcq",
                                question: "What is the correct way to output text in C#?",
                                options: ["Console.WriteLine()", "print()", "System.out.println()", "echo"],
                                correctAnswer: "Console.WriteLine()",
                            },
                            {
                                type: "fill",
                                question: "Fill in the blank: C# is a ____-typed language.",
                                correctAnswer: "strongly",
                            },
                            {
                                type: "mcq",
                                question: "Which keyword is used to declare a class in C#?",
                                options: ["class", "struct", "object", "type"],
                                correctAnswer: "class",
                            },
                            {
                                type: "mcq",
                                question: "What is the correct syntax for a multi-line comment?",
                                options: ["/* comment */", "// comment", "-- comment --", "# comment #"],
                                correctAnswer: "/* comment */",
                            },
                            {
                                type: "fill",
                                question: "Fill in the blank: The ____ directive is used to import namespaces.",
                                correctAnswer: "using",
                            },
                            {
                                type: "mcq",
                                question: "Which of these is NOT a C# data type?",
                                options: ["int", "double", "string", "number"],
                                correctAnswer: "number",
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        title: "Control Flow",
        description: "Learn about conditional statements and loops in C# programming.",
        xp: 10,
        chapters: [
            {
                id: 2,
                title: "Control Flow",
                isExpanded: false,
                lessons: [
                    {
                        id: 6,
                        title: "Conditional Statements",
                        type: "text",
                        content: `<p>C# provides if, else if, and else for conditional logic:</p>
<pre><code>int age = 18;

if (age < 18)
{
    Console.WriteLine("Minor");
}
else if (age >= 18 && age < 65)
{
    Console.WriteLine("Adult");
}
else
{
    Console.WriteLine("Senior");
}</code></pre>
<p><strong>Key points:</strong></p>
<ul>
  <li>Conditions must be boolean expressions</li>
  <li>Braces {} define code blocks</li>
</ul>`,
                        duration: "12 min",
                        isCompleted: false,
                        isLocked: false,
                        quiz: [],
                    },
                    {
                        id: 7,
                        title: "Switch Statements",
                        type: "text",
                        content: `<p>Switch statements simplify multiple conditions:</p>
<pre><code>string day = "Monday";

switch (day)
{
    case "Monday":
        Console.WriteLine("Start of work week");
        break;
    case "Friday":
        Console.WriteLine("Almost weekend!");
        break;
    default:
        Console.WriteLine("Midweek day");
        break;
}</code></pre>
<p><strong>Key points:</strong></p>
<ul>
  <li>Each case must end with 'break'</li>
  <li>'default' handles all other cases</li>
</ul>`,
                        duration: "10 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [],
                    },
                    {
                        id: 8,
                        title: "Loops",
                        type: "text",
                        content: `<p>C# provides several loop types:</p>
<p><strong>1. for loop:</strong></p>
<pre><code>for (int i = 0; i < 5; i++)
{
    Console.WriteLine(i);
}</code></pre>
<p><strong>2. while loop:</strong></p>
<pre><code>int x = 0;
while (x < 5)
{
    Console.WriteLine(x);
    x++;
}</code></pre>
<p><strong>3. do-while loop:</strong></p>
<pre><code>int y = 0;
do {
    Console.WriteLine(y);
    y++;
} while (y < 5);</code></pre>`,
                        duration: "12 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [],
                    },
                    {
                        id: 9,
                        title: "Break and Continue",
                        type: "text",
                        content: `<p>'break' exits a loop completely, while 'continue' skips to the next iteration.</p>
<p><strong>Example with break:</strong></p>
<pre><code>for (int i = 0; i < 10; i++)
{
    if (i == 5) break;
    Console.WriteLine(i);
}</code></pre>
<p><strong>Example with continue:</strong></p>
<pre><code>for (int i = 0; i < 10; i++)
{
    if (i % 2 == 0) continue;
    Console.WriteLine(i);
}</code></pre>`,
                        duration: "8 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [],
                    },
                    {
                        id: 10,
                        title: "Quiz",
                        type: "text",
                        content: `<p>Test your knowledge of control flow!</p>`,
                        duration: "12 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [
                            {
                                type: "mcq",
                                question: "Which keyword starts a conditional block?",
                                options: ["if", "when", "case", "check"],
                                correctAnswer: "if",
                            },
                            {
                                type: "fill",
                                question: "Fill in the blank: The ____ statement handles all other cases in a switch.",
                                correctAnswer: "default",
                            },
                            {
                                type: "mcq",
                                question: "What must each case in a switch statement end with?",
                                options: ["break", "end", "stop", "continue"],
                                correctAnswer: "break",
                            },
                            {
                                type: "mcq",
                                question: "Which loop checks condition before execution?",
                                options: ["for", "do-while", "repeat", "loop"],
                                correctAnswer: "for",
                            },
                            {
                                type: "fill",
                                question: "Fill in the blank: The ____ loop always executes at least once.",
                                correctAnswer: "do-while",
                            },
                            {
                                type: "mcq",
                                question: "What does 'break' do in a loop?",
                                options: ["Exits the loop", "Skips to next iteration", "Restarts the loop", "Pauses execution"],
                                correctAnswer: "Exits the loop",
                            },
                            {
                                type: "mcq",
                                question: "What does 'continue' do in a loop?",
                                options: ["Skips to next iteration", "Exits the loop", "Restarts the loop", "Pauses execution"],
                                correctAnswer: "Skips to next iteration",
                            },
                            {
                                type: "fill",
                                question: "Fill in the blank: The ____ loop has initialization, condition, and iteration parts.",
                                correctAnswer: "for",
                            },
                            {
                                type: "mcq",
                                question: "Which is NOT a C# loop type?",
                                options: ["repeat", "for", "while", "do-while"],
                                correctAnswer: "repeat",
                            },
                            {
                                type: "mcq",
                                question: "What type of expression must an if condition be?",
                                options: ["boolean", "integer", "string", "any type"],
                                correctAnswer: "boolean",
                            },
                            {
                                type: "fill",
                                question: "Fill in the blank: Code blocks are defined with ____ braces.",
                                correctAnswer: "curly",
                            },
                            {
                                type: "mcq",
                                question: "Which statement would you use for multiple conditions checking the same variable?",
                                options: ["switch", "if", "for", "while"],
                                correctAnswer: "switch",
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        title: "Methods and Classes",
        description: "Learn about methods, classes, and object-oriented programming basics.",
        xp: 10,
        chapters: [
            {
                id: 3,
                title: "Methods and Classes",
                isExpanded: false,
                lessons: [
                    {
                        id: 11,
                        title: "Methods",
                        type: "text",
                        content: `<p>Methods are blocks of code that perform specific tasks.</p>
<p><strong>Example:</strong></p>
<pre><code>static int Add(int a, int b)
{
    return a + b;
}

// Calling the method
int result = Add(5, 3);</code></pre>
<p><strong>Key points:</strong></p>
<ul>
  <li>'static' means it belongs to the class</li>
  <li>Parameters are inputs</li>
  <li>'return' sends back a result</li>
</ul>`,
                        duration: "12 min",
                        isCompleted: false,
                        isLocked: false,
                        quiz: [],
                    },
                    {
                        id: 12,
                        title: "Classes and Objects",
                        type: "text",
                        content: `<p>Classes are blueprints for creating objects.</p>
<p><strong>Example:</strong></p>
<pre><code>class Person
{
    public string Name;
    public int Age;
    
    public void Greet()
    {
        Console.WriteLine($"Hello, I'm {Name}");
    }
}

// Creating an object
Person p1 = new Person();
p1.Name = "Alice";
p1.Greet();</code></pre>`,
                        duration: "12 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [],
                    },
                    {
                        id: 13,
                        title: "Constructors",
                        type: "text",
                        content: `<p>Constructors initialize objects when they're created.</p>
<p><strong>Example:</strong></p>
<pre><code>class Person
{
    public string Name;
    public int Age;
    
    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }
}

// Using the constructor
Person p1 = new Person("Alice", 25);</code></pre>`,
                        duration: "10 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [],
                    },
                    {
                        id: 14,
                        title: "Properties",
                        type: "text",
                        content: `<p>Properties provide controlled access to class fields.</p>
<p><strong>Example:</strong></p>
<pre><code>class Person
{
    private string name;
    
    public string Name
    {
        get { return name; }
        set { name = value; }
    }
}

// Using the property
Person p = new Person();
p.Name = "Bob";
Console.WriteLine(p.Name);</code></pre>`,
                        duration: "10 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [],
                    },
                    {
                        id: 15,
                        title: "Quiz",
                        type: "text",
                        content: `<p>Test your knowledge of methods and classes!</p>`,
                        duration: "12 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [
                            {
                                type: "mcq",
                                question: "What defines a method's return type?",
                                options: ["The type before the name", "The first parameter", "The last parameter", "The access modifier"],
                                correctAnswer: "The type before the name",
                            },
                            {
                                type: "fill",
                                question: "Fill in the blank: The ____ keyword sends a value back from a method.",
                                correctAnswer: "return",
                            },
                            {
                                type: "mcq",
                                question: "What is a class?",
                                options: ["A blueprint for objects", "A type of variable", "A collection of methods", "A namespace"],
                                correctAnswer: "A blueprint for objects",
                            },
                            {
                                type: "mcq",
                                question: "What keyword creates a new object?",
                                options: ["new", "create", "object", "make"],
                                correctAnswer: "new",
                            },
                            {
                                type: "fill",
                                question: "Fill in the blank: A ____ is a special method that initializes an object.",
                                correctAnswer: "constructor",
                            },
                            {
                                type: "mcq",
                                question: "What is the default constructor?",
                                options: ["A parameterless constructor", "The first method in a class", "A constructor with default parameters", "A static constructor"],
                                correctAnswer: "A parameterless constructor",
                            },
                            {
                                type: "mcq",
                                question: "What do properties provide?",
                                options: ["Controlled access to fields", "Automatic memory management", "Inheritance capabilities", "Static methods"],
                                correctAnswer: "Controlled access to fields",
                            },
                            {
                                type: "fill",
                                question: "Fill in the blank: The ____ keyword defines a property setter.",
                                correctAnswer: "set",
                            },
                            {
                                type: "mcq",
                                question: "What does 'static' mean in a method?",
                                options: ["It belongs to the class, not instances", "It can't be changed", "It's always public", "It returns a constant value"],
                                correctAnswer: "It belongs to the class, not instances",
                            },
                            {
                                type: "mcq",
                                question: "Which is NOT a method part?",
                                options: ["return type", "name", "parameters", "object type"],
                                correctAnswer: "object type",
                            },
                            {
                                type: "fill",
                                question: "Fill in the blank: The ____ keyword defines a property getter.",
                                correctAnswer: "get",
                            },
                            {
                                type: "mcq",
                                question: "What is 'this' keyword used for?",
                                options: ["Referring to current object", "Creating new objects", "Calling static methods", "Accessing namespaces"],
                                correctAnswer: "Referring to current object",
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 4,
        title: "Arrays and Collections",
        description: "Learn about arrays, lists, dictionaries, and other collection types.",
        xp: 10,
        chapters: [
            {
                id: 4,
                title: "Arrays and Collections",
                isExpanded: false,
                lessons: [
                    {
                        id: 16,
                        title: "Arrays",
                        type: "text",
                        content: `<p>Arrays store multiple values of the same type.</p>
<p><strong>Declaration:</strong></p>
<pre><code>int[] numbers = new int[5];</code></pre>
<p><strong>Initialization:</strong></p>
<pre><code>int[] nums = {1, 2, 3, 4, 5};</code></pre>
<p><strong>Accessing elements:</strong></p>
<pre><code>int first = nums[0];</code></pre>
<p><strong>Key points:</strong></p>
<ul>
  <li>Fixed size</li>
  <li>Zero-based indexing</li>
</ul>`,
                        duration: "10 min",
                        isCompleted: false,
                        isLocked: false,
                        quiz: [],
                    },
                    {
                        id: 17,
                        title: "Lists",
                        type: "text",
                        content: `<p>Lists are dynamic collections (size can change).</p>
<pre><code>using System.Collections.Generic;

List<string> names = new List<string>();
names.Add("Alice");
names.Add("Bob");

// Access
string first = names[0];

// Count
int total = names.Count;</code></pre>
<p><strong>Key points:</strong></p>
<ul>
  <li>Flexible size</li>
  <li>Many useful methods (Add, Remove, etc.)</li>
</ul>`,
                        duration: "10 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [],
                    },
                    {
                        id: 18,
                        title: "Dictionaries",
                        type: "text",
                        content: `<p>Dictionaries store key-value pairs.</p>
<pre><code>Dictionary<string, int> ages = new Dictionary<string, int>();
ages["Alice"] = 25;
ages["Bob"] = 30;

// Access
int aliceAge = ages["Alice"];</code></pre>
<p><strong>Key points:</strong></p>
<ul>
  <li>Fast lookups by key</li>
  <li>Keys must be unique</li>
</ul>`,
                        duration: "10 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [],
                    },
                    {
                        id: 19,
                        title: "Iterating Collections",
                        type: "text",
                        content: `<p>Ways to iterate collections:</p>
<p><strong>1. for loop:</strong></p>
<pre><code>for (int i = 0; i < nums.Length; i++)
{
    Console.WriteLine(nums[i]);
}</code></pre>
<p><strong>2. foreach loop:</strong></p>
<pre><code>foreach (string name in names)
{
    Console.WriteLine(name);
}</code></pre>
<p>foreach is simpler for collections.</p>`,
                        duration: "8 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [],
                    },
                    {
                        id: 20,
                        title: "Quiz",
                        type: "text",
                        content: `<p>Test your knowledge of arrays and collections!</p>`,
                        duration: "12 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [
                            {
                                type: "mcq",
                                question: "What is an array?",
                                options: ["Fixed-size collection", "Dynamic collection", "Key-value pairs", "Single variable"],
                                correctAnswer: "Fixed-size collection",
                            },
                            {
                                type: "fill",
                                question: "Fill in the blank: Array indices start at ____.",
                                correctAnswer: "0",
                            },
                            {
                                type: "mcq",
                                question: "Which collection has dynamic size?",
                                options: ["List", "Array", "Tuple", "Struct"],
                                correctAnswer: "List",
                            },
                            {
                                type: "mcq",
                                question: "What namespace contains List<T>?",
                                options: ["System.Collections.Generic", "System.Collections", "System.Data", "System.Linq"],
                                correctAnswer: "System.Collections.Generic",
                            },
                            {
                                type: "fill",
                                question: "Fill in the blank: The ____ method adds an item to a List.",
                                correctAnswer: "Add",
                            },
                            {
                                type: "mcq",
                                question: "What does Dictionary<TKey, TValue> store?",
                                options: ["Key-value pairs", "Single values", "Fixed-size collections", "Only numbers"],
                                correctAnswer: "Key-value pairs",
                            },
                            {
                                type: "mcq",
                                question: "Which loop is best for collections?",
                                options: ["foreach", "for", "while", "do-while"],
                                correctAnswer: "foreach",
                            },
                            {
                                type: "fill",
                                question: "Fill in the blank: Dictionary keys must be ____.",
                                correctAnswer: "unique",
                            },
                            {
                                type: "mcq",
                                question: "How do you get array length?",
                                options: [".Length property", ".Count method", ".Size property", ".Length() method"],
                                correctAnswer: ".Length property",
                            },
                            {
                                type: "mcq",
                                question: "What is the advantage of List over array?",
                                options: ["Dynamic size", "Faster access", "Uses less memory", "Only stores numbers"],
                                correctAnswer: "Dynamic size",
                            },
                            {
                                type: "fill",
                                question: "Fill in the blank: The ____ property gets the number of items in a List.",
                                correctAnswer: "Count",
                            },
                            {
                                type: "mcq",
                                question: "Which is NOT a collection type?",
                                options: ["struct", "List", "Array", "Dictionary"],
                                correctAnswer: "struct",
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 5,
        title: "Object-Oriented Programming",
        description: "Learn about inheritance, polymorphism, interfaces, and encapsulation.",
        xp: 10,
        chapters: [
            {
                id: 5,
                title: "Object-Oriented Programming",
                isExpanded: false,
                lessons: [
                    {
                        id: 21,
                        title: "Inheritance",
                        type: "text",
                        content: `<p>Inheritance allows classes to share behavior.</p>
<pre><code>class Animal
{
    public void Eat()
    {
        Console.WriteLine("Eating");
    }
}

class Dog : Animal
{
    public void Bark()
    {
        Console.WriteLine("Barking");
    }
}

// Usage
Dog d = new Dog();
d.Eat();  // Inherited
d.Bark();</code></pre>`,
                        duration: "12 min",
                        isCompleted: false,
                        isLocked: false,
                        quiz: [],
                    },
                    {
                        id: 22,
                        title: "Polymorphism",
                        type: "text",
                        content: `<p>Polymorphism allows objects to take many forms.</p>
<pre><code>class Shape
{
    public virtual void Draw()
    {
        Console.WriteLine("Drawing shape");
    }
}

class Circle : Shape
{
    public override void Draw()
    {
        Console.WriteLine("Drawing circle");
    }
}

// Usage
Shape s = new Circle();
s.Draw();  // Calls Circle's Draw()</code></pre>`,
                        duration: "12 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [],
                    },
                    {
                        id: 23,
                        title: "Interfaces",
                        type: "text",
                        content: `<p>Interfaces define contracts that classes must implement.</p>
<pre><code>interface ILogger
{
    void Log(string message);
}

class ConsoleLogger : ILogger
{
    public void Log(string message)
    {
        Console.WriteLine(message);
    }
}

// Usage
ILogger logger = new ConsoleLogger();
logger.Log("Hello");</code></pre>`,
                        duration: "10 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [],
                    },
                    {
                        id: 24,
                        title: "Encapsulation",
                        type: "text",
                        content: `<p>Encapsulation protects data by controlling access.</p>
<pre><code>class BankAccount
{
    private decimal balance;
    
    public decimal GetBalance()
    {
        return balance;
    }
    
    public void Deposit(decimal amount)
    {
        if (amount > 0) balance += amount;
    }
}</code></pre>
<p><strong>Key points:</strong></p>
<ul>
  <li>Hide implementation details</li>
  <li>Expose controlled access</li>
</ul>`,
                        duration: "10 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [],
                    },
                    {
                        id: 25,
                        title: "Quiz",
                        type: "text",
                        content: `<p>Test your knowledge of object-oriented programming!</p>`,
                        duration: "12 min",
                        isCompleted: false,
                        isLocked: true,
                        quiz: [
                            {
                                type: "mcq",
                                question: "What is inheritance?",
                                options: ["Sharing behavior between classes", "Hiding implementation details", "Multiple forms for objects", "Defining contracts"],
                                correctAnswer: "Sharing behavior between classes",
                            },
                            {
                                type: "fill",
                                question: "Fill in the blank: The ____ symbol indicates inheritance.",
                                correctAnswer: ":",
                            },
                            {
                                type: "mcq",
                                question: "What is polymorphism?",
                                options: ["Objects taking many forms", "Hiding data", "Code reuse", "Defining requirements"],
                                correctAnswer: "Objects taking many forms",
                            },
                            {
                                type: "mcq",
                                question: "Which keyword enables method overriding?",
                                options: ["virtual", "new", "static", "const"],
                                correctAnswer: "virtual",
                            },
                            {
                                type: "fill",
                                question: "Fill in the blank: The ____ keyword overrides a method.",
                                correctAnswer: "override",
                            },
                            {
                                type: "mcq",
                                question: "What is an interface?",
                                options: ["A contract for classes", "A base class", "A collection of methods", "A type of variable"],
                                correctAnswer: "A contract for classes",
                            },
                            {
                                type: "mcq",
                                question: "What does encapsulation do?",
                                options: ["Protects data through controlled access", "Enables code reuse", "Allows multiple forms", "Defines requirements"],
                                correctAnswer: "Protects data through controlled access",
                            },
                            {
                                type: "fill",
                                question: "Fill in the blank: The ____ access modifier provides the most restriction.",
                                correctAnswer: "private",
                            },
                            {
                                type: "mcq",
                                question: "Which is NOT an OOP principle?",
                                options: ["iteration", "inheritance", "polymorphism", "encapsulation"],
                                correctAnswer: "iteration",
                            },
                            {
                                type: "mcq",
                                question: "What does 'base' keyword refer to?",
                                options: ["Parent class", "Current object", "Interface", "Namespace"],
                                correctAnswer: "Parent class",
                            },
                            {
                                type: "fill",
                                question: "Fill in the blank: Interfaces contain method ____ but not implementations.",
                                correctAnswer: "signatures",
                            },
                            {
                                type: "mcq",
                                question: "Why use properties instead of public fields?",
                                options: ["Better control over access", "They're faster", "Required for inheritance", "They use less memory"],
                                correctAnswer: "Better control over access",
                            },
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
        name: "C# Novice",
        description: "Completed first C# lesson",
        xpRequired: 10,
        icon: "🎓"
    },
    {
        id: 2,
        name: "C# Explorer",
        description: "Earned 50 XP in C# programming",
        xpRequired: 50,
        icon: "🔍"
    },
    {
        id: 3,
        name: "C# Champion",
        description: "Earned 100 XP in C# programming",
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
                🚀 C# Programming Interactive Course
            </h2>
            <h1>"C# is a modern, object-oriented programming language developed by Microsoft. It's widely used for developing desktop applications, web services, and games using Unity. This course will teach you the fundamentals of C# programming, from basic syntax to object-oriented concepts. Whether you're interested in application development, game programming, or backend services, C# is a great language to learn!"</h1>

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

// DynamicQuizPage Component
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
                console.log("Generating C# programming quiz for:", lesson.title);

                // Call the backend Gemini API to generate quiz questions
                console.log("Calling API endpoint:", "http://localhost:3000/api/generate-question");
                console.log("Request payload:", { lessonContent: lesson.title });

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
                        lessonContent: lesson.title + " - C# Programming",
                        courseName: "C# Programming"
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
                    <p className="text-white text-xl font-semibold mb-2">Generating your C# programming quiz...</p>
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

// === MAIN APP ===
function CSharpCourseApp() {
    const [currentPage, setCurrentPage] = useState("home");
    const [currentLesson, setCurrentLesson] = useState(null);
    const [xp, setXp] = useState(0);
    const [badgesEarned, setBadgesEarned] = useState([]);
    const [completedLessons, setCompletedLessons] = useState([]);
    const [showPreTest, setShowPreTest] = useState(true);

    // Load progress from localStorage
    useEffect(() => {
        const saved = localStorage.getItem("csharpCourseProgress");
        if (saved) {
            const { xp: savedXp, completedLessons: savedLessons } = JSON.parse(saved);
            setXp(savedXp);
            setCompletedLessons(savedLessons);
        }
    }, []);

    // Save progress to localStorage
    useEffect(() => {
        localStorage.setItem(
            "csharpCourseProgress",
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
        console.log(`PreTest completed! Level: ${level}, Score: ${finalScore}`);
    };

    return (
        <div className="bg-gradient-to-br from-gray-100 via-purple-50 to-pink-50 min-h-screen py-10">
            <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-6 sm:p-8 transition-all duration-500 animate-fade-in">
                {showPreTest && (
                    <PreTest
                        courseName="C# Programming"
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

export default CSharpCourseApp;
