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
const CSharpIcon: React.FC = () => (
  <svg width="64" height="64" viewBox="0 0 128 128">
    <path fill="#9B4F96" d="M115.4 30.7l-48.3-27.8c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"></path>
    <path fill="#68217A" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4v-55.7c0-.9-.1-1.9-.6-2.8l-106.6 62z"></path>
    <path fill="#fff" d="M85.3 76.1c-4.2 7.4-12.2 12.4-21.3 12.4-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"></path>
    <path fill="#fff" d="M82.1 61.8h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4zM100.6 61.8h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4z"></path>
  </svg>
);

const csharpCourseData: CourseData = {
  title: "C# Interactive Course",
  description:
    "C# is a modern, object-oriented programming language developed by Microsoft. It's widely used for developing desktop applications, web services, and games using Unity. This course will teach you the fundamentals of C# programming, from basic syntax to object-oriented concepts. Whether you're interested in application development, game programming, or backend services, C# is a great language to learn!",
  icon: <CSharpIcon />,
  chapters: [
    {
      id: 1,
      title: "C# Fundamentals",
      isExpanded: true,
      lessons: [
        {
          id: 1,
          title: "Introduction to C#",
          type: "text",
          content: `C# (pronounced "C Sharp") is a modern, object-oriented programming language developed by Microsoft. It runs on the .NET framework and is widely used for various types of applications.

Key features:
- Object-oriented
- Strongly typed
- Simple and modern syntax
- Versatile (desktop, web, mobile, games)

Example:
Console.WriteLine("Hello, World!");
`,
          duration: "10 min",
          isCompleted: false,
          isLocked: false,
          quiz: [],
        },
        {
          id: 2,
          title: "Basic Syntax",
          type: "text",
          content: `A basic C# program structure:

using System;

class Program
{
    static void Main()
    {
        // Your code here
        Console.WriteLine("Hello C#");
    }
}

Key elements:
- using directives (like 'using System;')
- class declaration
- Main method (entry point)
- Statements end with semicolons
`,
          duration: "12 min",
          isCompleted: false,
          isLocked: false,
          quiz: [],
        },
        {
          id: 3,
          title: "Variables and Data Types",
          type: "text",
          content: `C# is strongly typed, meaning variables must have a declared type.

Common data types:
- int: integer numbers (e.g., 42)
- double: floating-point numbers (e.g., 3.14)
- bool: boolean (true/false)
- string: text (e.g., "Hello")

Example:
int age = 25;
string name = "Alice";
bool isStudent = true;
`,
          duration: "10 min",
          isCompleted: false,
          isLocked: false,
          quiz: [],
        },
        {
          id: 4,
          title: "Comments and Whitespace",
          type: "text",
          content: `C# supports single-line and multi-line comments:

// This is a single-line comment

/*
This is a multi-line
comment
*/

Whitespace (spaces, tabs, newlines) is ignored by the compiler but improves readability.

Example:
int x = 5;  // This is a comment
int y = x + 2;
`,
          duration: "8 min",
          isCompleted: false,
          isLocked: false,
          quiz: [],
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
              question: "Who developed C#?",
              options: [
                "Microsoft",
                "Apple",
                "Google",
                "Oracle"
              ],
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
              options: [
                "Main() method",
                "Start() method",
                "Init() method",
                "Program() method"
              ],
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
              options: [
                "//",
                "#",
                "/*",
                "--"
              ],
              correctAnswer: "//",
            },
            {
              type: "mcq",
              question: "What is the correct way to output text in C#?",
              options: [
                "Console.WriteLine()",
                "print()",
                "System.out.println()",
                "echo"
              ],
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
              options: [
                "class",
                "struct",
                "object",
                "type"
              ],
              correctAnswer: "class",
            },
            {
              type: "mcq",
              question: "What is the correct syntax for a multi-line comment?",
              options: [
                "/* comment */",
                "// comment",
                "-- comment --",
                "# comment #"
              ],
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
              options: [
                "int",
                "double",
                "string",
                "number"
              ],
              correctAnswer: "number",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Control Flow",
      isExpanded: false,
      lessons: [
        {
          id: 6,
          title: "Conditional Statements",
          type: "text",
          content: `C# provides if, else if, and else for conditional logic:

int age = 18;

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
}

Key points:
- Conditions must be boolean expressions
- Braces {} define code blocks
`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [],
        },
        {
          id: 7,
          title: "Switch Statements",
          type: "text",
          content: `Switch statements simplify multiple conditions:

string day = "Monday";

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
}

Key points:
- Each case must end with 'break'
- 'default' handles all other cases
`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [],
        },
        {
          id: 8,
          title: "Loops",
          type: "text",
          content: `C# provides several loop types:

1. for loop:
for (int i = 0; i < 5; i++)
{
    Console.WriteLine(i);
}

2. while loop:
int x = 0;
while (x < 5)
{
    Console.WriteLine(x);
    x++;
}

3. do-while loop:
int y = 0;
do {
    Console.WriteLine(y);
    y++;
} while (y < 5);
`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [],
        },
        {
          id: 9,
          title: "Break and Continue",
          type: "text",
          content: `'break' exits a loop completely, while 'continue' skips to the next iteration.

Example with break:
for (int i = 0; i < 10; i++)
{
    if (i == 5) break;
    Console.WriteLine(i);
}

Example with continue:
for (int i = 0; i < 10; i++)
{
    if (i % 2 == 0) continue;
    Console.WriteLine(i);
}
`,
          duration: "8 min",
          isCompleted: false,
          isLocked: true,
          quiz: [],
        },
        {
          id: 10,
          title: "Quiz",
          type: "text",
          content: `Quiz`,
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
              options: [
                "Exits the loop",
                "Skips to next iteration",
                "Restarts the loop",
                "Pauses execution"
              ],
              correctAnswer: "Exits the loop",
            },
            {
              type: "mcq",
              question: "What does 'continue' do in a loop?",
              options: [
                "Skips to next iteration",
                "Exits the loop",
                "Restarts the loop",
                "Pauses execution"
              ],
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
    {
      id: 3,
      title: "Methods and Classes",
      isExpanded: false,
      lessons: [
        {
          id: 11,
          title: "Methods",
          type: "text",
          content: `Methods are blocks of code that perform specific tasks.

Example:
static int Add(int a, int b)
{
    return a + b;
}

// Calling the method
int result = Add(5, 3);

Key points:
- 'static' means it belongs to the class
- Parameters are inputs
- 'return' sends back a result
`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [],
        },
        {
          id: 12,
          title: "Classes and Objects",
          type: "text",
          content: `Classes are blueprints for creating objects.

Example:
class Person
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
p1.Greet();
`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [],
        },
        {
          id: 13,
          title: "Constructors",
          type: "text",
          content: `Constructors initialize objects when they're created.

Example:
class Person
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
Person p1 = new Person("Alice", 25);
`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [],
        },
        {
          id: 14,
          title: "Properties",
          type: "text",
          content: `Properties provide controlled access to class fields.

Example:
class Person
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
Console.WriteLine(p.Name);
`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [],
        },
        {
          id: 15,
          title: "Quiz",
          type: "text",
          content: `Quiz`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              type: "mcq",
              question: "What defines a method's return type?",
              options: [
                "The type before the name",
                "The first parameter",
                "The last parameter",
                "The access modifier"
              ],
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
              options: [
                "A blueprint for objects",
                "A type of variable",
                "A collection of methods",
                "A namespace"
              ],
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
              options: [
                "A parameterless constructor",
                "The first method in a class",
                "A constructor with default parameters",
                "A static constructor"
              ],
              correctAnswer: "A parameterless constructor",
            },
            {
              type: "mcq",
              question: "What do properties provide?",
              options: [
                "Controlled access to fields",
                "Automatic memory management",
                "Inheritance capabilities",
                "Static methods"
              ],
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
              options: [
                "It belongs to the class, not instances",
                "It can't be changed",
                "It's always public",
                "It returns a constant value"
              ],
              correctAnswer: "It belongs to the class, not instances",
            },
            {
              type: "mcq",
              question: "Which is NOT a method part?",
              options: [
                "return type",
                "name",
                "parameters",
                "object type"
              ],
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
              options: [
                "Referring to current object",
                "Creating new objects",
                "Calling static methods",
                "Accessing namespaces"
              ],
              correctAnswer: "Referring to current object",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Arrays and Collections",
      isExpanded: false,
      lessons: [
        {
          id: 16,
          title: "Arrays",
          type: "text",
          content: `Arrays store multiple values of the same type.

// Declaration
int[] numbers = new int[5];

// Initialization
int[] nums = {1, 2, 3, 4, 5};

// Accessing elements
int first = nums[0];

Key points:
- Fixed size
- Zero-based indexing
`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [],
        },
        {
          id: 17,
          title: "Lists",
          type: "text",
          content: `Lists are dynamic collections (size can change).

using System.Collections.Generic;

List<string> names = new List<string>();
names.Add("Alice");
names.Add("Bob");

// Access
string first = names[0];

// Count
int total = names.Count;

Key points:
- Flexible size
- Many useful methods (Add, Remove, etc.)
`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [],
        },
        {
          id: 18,
          title: "Dictionaries",
          type: "text",
          content: `Dictionaries store key-value pairs.

Dictionary<string, int> ages = new Dictionary<string, int>();
ages["Alice"] = 25;
ages["Bob"] = 30;

// Access
int aliceAge = ages["Alice"];

Key points:
- Fast lookups by key
- Keys must be unique
`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [],
        },
        {
          id: 19,
          title: "Iterating Collections",
          type: "text",
          content: `Ways to iterate collections:

1. for loop:
for (int i = 0; i < nums.Length; i++)
{
    Console.WriteLine(nums[i]);
}

2. foreach loop:
foreach (string name in names)
{
    Console.WriteLine(name);
}

foreach is simpler for collections.
`,
          duration: "8 min",
          isCompleted: false,
          isLocked: true,
          quiz: [],
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
              question: "What is an array?",
              options: [
                "Fixed-size collection",
                "Dynamic collection",
                "Key-value pairs",
                "Single variable"
              ],
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
              options: [
                "System.Collections.Generic",
                "System.Collections",
                "System.Data",
                "System.Linq"
              ],
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
              options: [
                "Key-value pairs",
                "Single values",
                "Fixed-size collections",
                "Only numbers"
              ],
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
              options: [
                ".Length property",
                ".Count method",
                ".Size property",
                ".Length() method"
              ],
              correctAnswer: ".Length property",
            },
            {
              type: "mcq",
              question: "What is the advantage of List over array?",
              options: [
                "Dynamic size",
                "Faster access",
                "Uses less memory",
                "Only stores numbers"
              ],
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
    {
      id: 5,
      title: "Object-Oriented Programming",
      isExpanded: false,
      lessons: [
        {
          id: 21,
          title: "Inheritance",
          type: "text",
          content: `Inheritance allows classes to share behavior.

class Animal
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
d.Bark();
`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [],
        },
        {
          id: 22,
          title: "Polymorphism",
          type: "text",
          content: `Polymorphism allows objects to take many forms.

class Shape
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
s.Draw();  // Calls Circle's Draw()
`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [],
        },
        {
          id: 23,
          title: "Interfaces",
          type: "text",
          content: `Interfaces define contracts that classes must implement.

interface ILogger
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
logger.Log("Hello");
`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [],
        },
        {
          id: 24,
          title: "Encapsulation",
          type: "text",
          content: `Encapsulation protects data by controlling access.

class BankAccount
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
}

Key points:
- Hide implementation details
- Expose controlled access
`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [],
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
              question: "What is inheritance?",
              options: [
                "Sharing behavior between classes",
                "Hiding implementation details",
                "Multiple forms for objects",
                "Defining contracts"
              ],
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
              options: [
                "Objects taking many forms",
                "Hiding data",
                "Code reuse",
                "Defining requirements"
              ],
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
              options: [
                "A contract for classes",
                "A base class",
                "A collection of methods",
                "A type of variable"
              ],
              correctAnswer: "A contract for classes",
            },
            {
              type: "mcq",
              question: "What does encapsulation do?",
              options: [
                "Protects data through controlled access",
                "Enables code reuse",
                "Allows multiple forms",
                "Defines requirements"
              ],
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
              options: [
                "Parent class",
                "Current object",
                "Interface",
                "Namespace"
              ],
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
              options: [
                "Better control over access",
                "They're faster",
                "Required for inheritance",
                "They use less memory"
              ],
              correctAnswer: "Better control over access",
            },
          ],
        },
      ],
    },
  ],
};

export default function CSharpCoursePage() {
  return <CoursePlayer courseId="csharp" courseData={csharpCourseData} />;
}