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
const JavaScriptIcon: React.FC = () => (
  <svg width="64" height="64" viewBox="0 0 128 128">
              <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path>
              <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
            </svg>
);

const JavaScriptCourseData: CourseData = {
  title: "Java Interactive Course",
  description:
    "Ever wanted to make websites interactive, code fun mobile apps, or work with artificial intelligence? JavaScript lets you do all of that! No wonder it's one of the most popular programming languages out there. This course is perfect for beginners — no coding experience is needed. By the end of this course, you'll know the basics of using JavaScript to make an interactive website.",
  icon: <JavaScriptIcon />,
  chapters: [
    {
      id: 1,
      title: "Welcome to JavaScript",
      isExpanded: true,
      lessons: [
        {
          id: 1,
          title: "What is JavaScript?",
          type: "text",
          content: `JavaScript is a programming language that adds interactivity to your website. It works in web browsers and can also be used on servers (Node.js) and in mobile apps. Unlike HTML (which structures content) and CSS (which styles content), JavaScript makes web pages dynamic and interactive.`,
          duration: "10 min",
          isCompleted: false,
          isLocked: false,
          quiz: [
            
          ],
        },
        {
          id: 2,
          title: "JavaScript Code Basics",
          type: "text",
          content: `JavaScript code can be written directly in HTML files using <script> tags or in separate .js files. Example:\n\n<script>\n  // Your JavaScript code here\n  alert('Hello World!');\n</script>\n\nBest practice is to use external files for larger projects.`,
          duration: "12 min",
          isCompleted: false,
          isLocked: false,
          quiz: [
            
          ],
        },
        {
          id: 3,
          title: "Data & Variables",
          type: "text",
          content: `Variables store data values. JavaScript has three ways to declare variables:\n\n1. var (old way)\n2. let (block-scoped)\n3. const (constant, can't be changed)\n\nExample:\nlet name = 'Alice';\nconst age = 30;`,
          duration: "10 min",
          isCompleted: false,
          isLocked: false,
          quiz: [
            
          ],
        },
        {
          id: 4,
          title: "Working with Variables",
          type: "text",
          content: `Variables can hold different data types:\n\n- Strings: 'Hello'\n- Numbers: 42\n- Booleans: true/false\n- Arrays: [1, 2, 3]\n- Objects: {name: 'Alice'}\n\nYou can perform operations like:\nlet x = 5;\nlet y = x + 2; // y is now 7`,  
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
              question: "What is the primary use of JavaScript?",
              options: [
                "To structure web content",
                "To style web pages",
                "To add interactivity to websites",
                "To create database tables"
              ],
              correctAnswer: "To add interactivity to websites"
            },
            {
              type: "mcq",
              question: "Where can JavaScript code be written?",
              options: [
                "Only in HTML files",
                "Only in .js files",
                "In both HTML and .js files",
                "Neither HTML nor .js files"
              ],
              correctAnswer: "In both HTML and .js files"
            },
            {
              type: "mcq",
              question: "Which variable type cannot be changed after declaration?",
              options: ["var", "let", "const", "all of them"],
              correctAnswer: "const"
            },
            {
              type: "mcq",
              question: "Which is NOT a JavaScript data type?",
              options: ["String", "Number", "Boolean", "Float"],
              correctAnswer: "Float"
            }
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Standard and Best Practices",
      isExpanded: false,
      lessons: [
        {
          id: 6,
          title: "JavaScript Functions",
          type: "text",
          content: `Functions are reusable blocks of code. They can take parameters and return values.\n\nExample:\nfunction greet(name) {\n  return 'Hello ' + name;\n}\n\n// Call the function\ngreet('Alice'); // Returns 'Hello Alice'`,
          duration: "8 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 7,
          title: "Paragraphs and Line Breaks",
          type: "text",
          content: `JavaScript best practices include:\n\n- Using const by default, let when needed\n- Using meaningful variable names\n- Adding comments for complex code\n- Using strict equality (===) instead of (==)\n- Following consistent indentation`,
          duration: "8 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 8,
          title: "Writing JS Code",
          type: "text",
          content: `JavaScript statements end with semicolons (though they're optional). Code is executed from top to bottom.\n\nExample:\nlet x = 5;\nlet y = 10;\nlet sum = x + y;\nconsole.log(sum); // Outputs 15 to console`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 9,
          title: "User Input",
          type: "text",
          content: `You can get user input using:\n\n1. prompt() - displays a dialog box\n2. HTML form inputs\n\nExample:\nlet name = prompt('What is your name?');\nconsole.log('Hello ' + name);`,
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
              question: "What is the purpose of a function?",
              options: [
                "To store data",
                "To create reusable code blocks",
                "To style elements",
                "To structure HTML"
              ],
              correctAnswer: "To create reusable code blocks"
            },
            {
              type: "mcq",
              question: "Which equality operator is preferred in JavaScript?",
              options: ["==", "===", "=", "!=="],
              correctAnswer: "==="
            },
            {
              type: "mcq",
              question: "How is JavaScript code executed?",
              options: [
                "Random order",
                "Bottom to top",
                "Top to bottom",
                "Only functions are executed"
              ],
              correctAnswer: "Top to bottom"
            },
            {
              type: "mcq",
              question: "Which method displays a dialog box for user input?",
              options: ["alert()", "prompt()", "console.log()", "input()"],
              correctAnswer: "prompt()"
            },
            
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Objects and Dot Notation",
      isExpanded: false,
      lessons: [
        {
          id: 11,
          title: "Comparison Operations",
          type: "text",
          content: `JavaScript has comparison operators:\n\n- Equal: == or ===\n- Not equal: != or !==\n- Greater than: >\n- Less than: <\n\nExample:\n5 > 3 // true\n'5' === 5 // false (different types)`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 12,
          title: "Images",
          type: "text",
    content: `Objects store key-value pairs:\n\nlet person = {\n  name: 'Alice',\n  age: 30\n};\n\nAccess properties with dot notation:\nperson.name // 'Alice'\n\nOr bracket notation:\nperson['age'] // 30`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 13,
          title: "Logical Operations",
          type: "text",
          content: `Logical operators:\n\n- AND: &&\n- OR: ||\n- NOT: !\n\nExample:\nlet age = 25;\nage > 18 && age < 30 // true\n\nThese are often used in conditional statements.`,
          duration: "8 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 14,
          title: "Data Types",
          type: "text",
          content: `JavaScript has dynamic types. The same variable can hold different types:\n\nlet x = 5; // Number\nx = 'hello'; // String\nx = true; // Boolean\n\nUse typeof to check a variable's type:\ntypeof x // 'boolean'`,
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
              question: "Which comparison checks both value and type?",
              options: ["==", "===", "=", ">"],
              correctAnswer: "==="
            },
            {
              type: "mcq",
              question: "How do you access object properties?",
              options: [
                "Only with dot notation",
                "Only with bracket notation",
                "With either dot or bracket notation",
                "Objects don't have properties"
              ],
              correctAnswer: "With either dot or bracket notation"
            },
            {
              type: "mcq",
              question: "Which operator represents logical AND?",
              options: ["||", "&&", "!", "AND"],
              correctAnswer: "&&"
            },
            {
              type: "mcq",
              question: "How do you check a variable's type?",
              options: ["type()", "typeof", "checkType()", "variable.type"],
              correctAnswer: "typeof"
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
          title: "Control Flow Basics",
          type: "text",
          content: `Control flow determines the order in which code executes. JavaScript has:\n\n- Conditionals (if/else)\n- Loops (for, while)\n- Switch statements\n\nThese let you make decisions and repeat actions.`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 17,
          title: "Conditional Statements",
          type: "text",
          content: `if/else statements execute code based on conditions:\n\nlet age = 20;\nif (age >= 18) {\n  console.log('Adult');\n} else {\n  console.log('Minor');\n}\n\n// Outputs 'Adult'`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 18,
          title: "Verification",
          type: "text",
          content: `You can verify values before using them:\n\nlet name = '';\nif (!name) {\n  name = 'Guest';\n}\n\n// Falsy values: false, 0, '', null, undefined, NaN\n// Truthy values: everything else`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 19,
          title: "While Loops",
          type: "text",
          content: `while loops repeat code while a condition is true:\n\nlet count = 0;\nwhile (count < 5) {\n  console.log(count);\n  count++;\n}\n\n// Outputs 0, 1, 2, 3, 4\n\nBe careful to avoid infinite loops!`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 20,
          title: "For Loops",
          type: "text",
          content: `for loops are often used when you know how many times to repeat:\n\nfor (let i = 0; i < 5; i++) {\n  console.log(i);\n}\n\n// Outputs 0, 1, 2, 3, 4\n\nStructure:\n1. Initialization (let i = 0)\n2. Condition (i < 5)\n3. Increment (i++)`,
          duration: "10 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ],
        },
        {
          id: 21,
          title: "Quiz",
          type: "text",
          content: `Quiz`,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              type: "mcq",
              question: "What controls the order of code execution?",
              options: [
                "Control flow",
                "Variable declarations",
                "Comments",
                "Functions"
              ],
              correctAnswer: "Control flow"
            },
            {
              type: "mcq",
              question: "What does an if statement check?",
              options: [
                "Variable types",
                "Conditions",
                "Function returns",
                "Loop counts"
              ],
              correctAnswer: "Conditions"
            },
            {
              type: "mcq",
              question: "Which is NOT a falsy value in JavaScript?",
              options: ["0", "''", "null", "'false'"],
              correctAnswer: "'false'"
            },
            {
              type: "mcq",
              question: "When does a while loop stop?",
              options: [
                "After a set number of iterations",
                "When the condition becomes false",
                "When it reaches a return statement",
                "Never, it runs forever"
              ],
              correctAnswer: "When the condition becomes false"
            },
            {
              type: "mcq",
              question: "What are the three parts of a for loop?",
              options: [
                "if, else, end",
                "start, middle, end",
                "initialization, condition, increment",
                "variable, function, return"
              ],
              correctAnswer: "initialization, condition, increment"
            },
            
          ],
        },
      ],
    },
    
  ],
};

function JavaScriptCourseContent(){

    return(
      <div>
      <h1>{JavaScriptCourseData.title}</h1>
      <p>{JavaScriptCourseData.description}</p>
      {JavaScriptCourseData.chapters.map((chapter) => (
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



export default function JavaScriptCoursePage() {

  return (
    <div>
    <CoursePlayer courseId="JavaScript" courseData={JavaScriptCourseData}/> 
    </div>
  );
}