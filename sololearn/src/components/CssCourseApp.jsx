import React, { useState, useEffect } from "react";
import axios from "axios";
import PreTest from "./PreTest.tsx";

// === EMBEDDED DATA ===
const lessons = [
  {
    id: 1,
    title: "CSS Fundamentals",
    description: "CSS is the language that makes the web beautiful. It's essential for styling web pages.",
    xp: 10,
    chapters: [
      {
        id: 1,
        title: "CSS Fundamentals",
        isExpanded: true,
        lessons: [
          {
            id: 1,
            title: "Introduction to CSS",
            type: "text",
            content: `<p>CSS (Cascading Style Sheets) is the language used to style HTML documents. It allows you to control colors, fonts, layouts, spacing, and more. CSS separates content (HTML) from presentation (design).</p>
<p><strong>Benefits of CSS:</strong></p>
<ul>
  <li>Consistent look and feel across pages</li>
  <li>Easier maintenance and updates</li>
  <li>Responsive design for different devices</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code>h1 {
  color: blue;
  font-size: 32px;
}</code></pre>
<p>/* This makes all &lt;h1&gt; elements blue and 32px tall. */</p>`,
            duration: "15 min",
            isCompleted: false,
            isLocked: false,
            quiz: [],
          },
          {
            id: 2,
            title: "CSS Syntax and Selectors",
            type: "text",
            content: `<p>A CSS rule has three parts:</p>
<ol>
  <li>Selector: which HTML element(s) to style</li>
  <li>Property: what to change (e.g., color)</li>
  <li>Value: the new setting (e.g., red)</li>
</ol>
<p><strong>Example:</strong></p>
<pre><code>p {
  color: red;
  font-size: 18px;
}</code></pre>
<p><strong>Types of selectors:</strong></p>
<ul>
  <li>Element selector: h1, p, div</li>
  <li>Class selector: .menu, .active</li>
  <li>ID selector: #header, #main</li>
  <li>Attribute selector: input[type="text"]</li>
</ul>
<p><strong>Specificity:</strong> IDs > Classes > Elements</p>
<p>You can group selectors:</p>
<pre><code>h1, h2, h3 {
  color: navy;
}</code></pre>`,
            duration: "20 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 3,
            title: "Including CSS in HTML",
            type: "text",
            content: `<p>There are three ways to use CSS in HTML:</p>
<ol>
  <li><strong>Inline:</strong> Directly on an element (not recommended for large projects)
    <pre><code>&lt;p style="color: red;"&gt;Hello&lt;/p&gt;</code></pre>
  </li>
  <li><strong>Internal:</strong> Inside a &lt;style&gt; tag in the &lt;head&gt;
    <pre><code>&lt;style&gt;
  p { color: blue; }
&lt;/style&gt;</code></pre>
  </li>
  <li><strong>External:</strong> Link a .css file (best practice)
    <pre><code>&lt;link rel="stylesheet" href="styles.css"&gt;</code></pre>
  </li>
</ol>
<p>External CSS keeps code organized and reusable.</p>`,
            duration: "15 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 4,
            title: "Colors and Units",
            type: "text",
            content: `<p>CSS supports many color formats:</p>
<ul>
  <li>Named colors: red, blue, green</li>
  <li>Hex codes: #ff0000, #00ff00</li>
  <li>RGB: rgb(255,0,0)</li>
  <li>RGBA: rgba(255,0,0,0.5)</li>
  <li>HSL: hsl(0, 100%, 50%)</li>
</ul>
<p><strong>Units:</strong></p>
<ul>
  <li>px: pixels (absolute)</li>
  <li>em, rem: relative to font size</li>
  <li>%, vw, vh: relative to parent or viewport</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code>body {
  background-color: #f0f0f0;
}
h1 {
  color: rgb(0, 128, 255);
  font-size: 2em;
}</code></pre>`,
            duration: "18 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          // QUIZ ADDED HERE
          {
            id: 5,
            title: "Quiz",
            type: "quiz",
            content: `<p>Test your knowledge of CSS Fundamentals!</p>`,
            duration: "15 min",
            isCompleted: false,
            isLocked: false,
            quiz: [
              {
                type: "mcq",
                question: "What does CSS stand for?",
                options: [
                  "Cascading Style Sheets",
                  "Computer Style Sheets",
                  "Creative Style Syntax",
                  "Colorful Style Sheets"
                ],
                correctAnswer: "Cascading Style Sheets"
              },
              {
                type: "fill",
                question: "Fill in the blank: CSS is used to ____ web pages.",
                correctAnswer: "style"
              },
              {
                type: "mcq",
                question: "Which of the following is a benefit of CSS?",
                options: [
                  "Separates content from design",
                  "Makes HTML files larger",
                  "Reduces website speed",
                  "Removes the need for HTML"
                ],
                correctAnswer: "Separates content from design"
              },
              {
                type: "mcq",
                question: "Which tag is styled by the rule: h1 { color: blue; }?",
                options: ["<h1>", "<h2>", "<p>", "<div>"],
                correctAnswer: "<h1>"
              },
              {
                type: "fill",
                question: "Fill in the blank: In CSS, comments are written using /* ____ */.",
                correctAnswer: "comment"
              },
              {
                type: "mcq",
                question: "Where should you place CSS for the best maintainability?",
                options: [
                  "In an external .css file",
                  "Inline on every element",
                  "Inside JavaScript",
                  "In the HTML <title> tag"
                ],
                correctAnswer: "In an external .css file"
              },
              {
                type: "mcq",
                question: "Which selector targets all elements with class 'menu'?",
                options: [".menu", "#menu", "menu", "*menu"],
                correctAnswer: ".menu"
              },
              {
                type: "mcq",
                question: "Which selector has the highest specificity?",
                options: [
                  "#main",
                  ".main",
                  "main",
                  "*"
                ],
                correctAnswer: "#main"
              },
              {
                type: "fill",
                question: "Fill in the blank: To select an element with id 'header', use ____.",
                correctAnswer: "#header"
              },
              {
                type: "mcq",
                question: "How would you select all <input> elements of type 'text'?",
                options: [
                  "input[type='text']",
                  ".input[text]",
                  "#input[text]",
                  "input.text"
                ],
                correctAnswer: "input[type='text']"
              },
              {
                type: "fill",
                question: "Fill in the blank: The part of a CSS rule that sets what to style is called the ____.",
                correctAnswer: "selector"
              },
              {
                type: "mcq",
                question: "Which selector would style all <h1>, <h2>, and <h3> tags together?",
                options: [
                  "h1, h2, h3",
                  ".h1 .h2 .h3",
                  "#h1 #h2 #h3",
                  "*h1 *h2 *h3"
                ],
                correctAnswer: "h1, h2, h3"
              }
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "The CSS Box Model",
    description: "Understand how elements are structured and sized in CSS.",
    xp: 10,
    chapters: [
      {
        id: 2,
        title: "The CSS Box Model",
        isExpanded: false,
        lessons: [
          {
            id: 6,
            title: "Understanding the Box Model",
            type: "text",
            content: `<p>Every HTML element is a box with:</p>
<ul>
  <li>Content: text or image</li>
  <li>Padding: space around content</li>
  <li>Border: line around padding</li>
  <li>Margin: space outside border</li>
</ul>
<p><strong>Order (inside out):</strong> Content → Padding → Border → Margin</p>
<p><strong>Visualizing:</strong></p>
<pre>[Margin]
  [Border]
    [Padding]
      [Content]</pre>
<p><strong>Example:</strong></p>
<pre><code>.box {
  margin: 20px;
  padding: 10px;
  border: 2px solid #333;
}</code></pre>`,
            duration: "20 min",
            isCompleted: false,
            isLocked: false,
            quiz: [],
          },
          {
            id: 7,
            title: "Box Sizing and Borders",
            type: "text",
            content: `<p>By default, width/height apply to content only. Use box-sizing to include padding/border:</p>
<pre><code>.box {
  box-sizing: border-box;
}</code></pre>
<p><strong>Border properties:</strong></p>
<ul>
  <li>border-width</li>
  <li>border-style</li>
  <li>border-color</li>
</ul>
<p>You can set all at once:</p>
<pre><code>border: 1px solid #000;</code></pre>
<p><strong>Rounded corners:</strong></p>
<pre><code>border-radius: 8px;</code></pre>`,
            duration: "15 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 8,
            title: "Width, Height, and Overflow",
            type: "text",
            content: `<p>You can control the size of boxes with width and height:</p>
<pre><code>.box {
  width: 200px;
  height: 100px;
}</code></pre>
<p><strong>Overflow controls content that doesn't fit:</strong></p>
<ul>
  <li>visible (default)</li>
  <li>hidden</li>
  <li>scroll</li>
  <li>auto</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code>.box {
  overflow: auto;
}</code></pre>`,
            duration: "15 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 9,
            title: "Margin and Padding Shorthand",
            type: "text",
            content: `<p>You can set all sides at once:</p>
<pre><code>margin: 10px;        /* all sides */
margin: 10px 20px;   /* top/bottom, left/right */
margin: 10px 20px 5px 15px; /* top, right, bottom, left */</code></pre>
<p>Same for padding.</p>
<p>Negative margins pull elements closer.</p>
<p><strong>Example:</strong></p>
<pre><code>.box {
  margin: 10px 5px;
  padding: 20px 15px 10px 5px;
}</code></pre>`,
            duration: "12 min",
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
    title: "CSS Positioning and Display",
    description: "Learn how to control element positioning and layout.",
    xp: 10,
    chapters: [
      {
        id: 3,
        title: "CSS Positioning and Display",
        isExpanded: false,
        lessons: [
          {
            id: 11,
            title: "Position Property",
            type: "text",
            content: `<p>The position property controls how elements are positioned in the document flow.</p>
<p><strong>Values:</strong></p>
<ul>
  <li>static (default): normal flow</li>
  <li>relative: offset from normal position</li>
  <li>absolute: positioned relative to nearest ancestor</li>
  <li>fixed: positioned relative to viewport</li>
  <li>sticky: toggles between relative and fixed</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code>.box {
  position: absolute;
  top: 10px;
  left: 20px;
}</code></pre>`,
            duration: "18 min",
            isCompleted: false,
            isLocked: false,
            quiz: [],
          },
          {
            id: 12,
            title: "Display Property",
            type: "text",
            content: `<p>The display property defines how elements are rendered.</p>
<p><strong>Common values:</strong></p>
<ul>
  <li>block: starts on a new line, takes full width</li>
  <li>inline: flows with text, only as wide as content</li>
  <li>inline-block: like inline, but can set width/height</li>
  <li>none: hides the element</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code>span {
  display: inline-block;
  width: 100px;
}</code></pre>`,
            duration: "15 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 13,
            title: "Z-Index and Stacking Context",
            type: "text",
            content: `<p>z-index controls the stacking order of positioned elements.</p>
<ul>
  <li>Only works on positioned elements (not static)</li>
  <li>Higher z-index = in front</li>
</ul>
<p>Stacking context: a group of elements with a common stacking order.</p>
<p><strong>Example:</strong></p>
<pre><code>.box1 { position: relative; z-index: 10; }
.box2 { position: relative; z-index: 5; }</code></pre>`,
            duration: "12 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 14,
            title: "Float and Clear",
            type: "text",
            content: `<p>The float property moves elements to the left or right, allowing text and inline elements to wrap around.</p>
<p><strong>Values:</strong> left, right, none</p>
<p>Clear property stops elements from wrapping around floated elements.</p>
<p><strong>Example:</strong></p>
<pre><code>img {
  float: left;
  margin-right: 10px;
}
p {
  clear: both;
}</code></pre>`,
            duration: "14 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "CSS Flexbox",
    description: "Learn the modern layout model for creating flexible layouts.",
    xp: 10,
    chapters: [
      {
        id: 4,
        title: "CSS Flexbox",
        isExpanded: false,
        lessons: [
          {
            id: 16,
            title: "Flex Container Basics",
            type: "text",
            content: `<p>Flexbox is a layout model for arranging items in a row or column.</p>
<p>To start, set display: flex on a container.</p>
<pre><code>.container {
  display: flex;
}</code></pre>
<p><strong>Main properties:</strong></p>
<ul>
  <li>flex-direction: row | column</li>
  <li>justify-content: alignment on main axis</li>
  <li>align-items: alignment on cross axis</li>
  <li>flex-wrap: wrap items to next line</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code>.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}</code></pre>`,
            duration: "18 min",
            isCompleted: false,
            isLocked: false,
            quiz: [],
          },
          {
            id: 17,
            title: "Flex Items and Order",
            type: "text",
            content: `<p>Flex items are the children of a flex container.</p>
<p><strong>Key properties:</strong></p>
<ul>
  <li>flex-grow: how much an item grows relative to others</li>
  <li>flex-shrink: how much an item shrinks</li>
  <li>flex-basis: initial size</li>
  <li>order: controls order of items</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code>.item {
  flex-grow: 2;
  order: 1;
}</code></pre>`,
            duration: "15 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 18,
            title: "Flexbox Alignment and Spacing",
            type: "text",
            content: `<p>Flexbox makes alignment and spacing easy.</p>
<ul>
  <li>justify-content: start, end, center, space-between, space-around, space-evenly</li>
  <li>align-items: stretch, flex-start, flex-end, center, baseline</li>
  <li>gap: sets space between flex items</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code>.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}</code></pre>`,
            duration: "15 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 19,
            title: "Flexbox Practical Layouts",
            type: "text",
            content: `<p><strong>Common layouts with Flexbox:</strong></p>
<ul>
  <li>Navigation bars</li>
  <li>Card grids</li>
  <li>Centering content</li>
  <li>Responsive columns</li>
</ul>
<p><strong>Example: Center a box</strong></p>
<pre><code>.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}</code></pre>`,
            duration: "16 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "CSS Grid and Advanced Topics",
    description: "Learn the powerful grid layout system and advanced CSS features.",
    xp: 10,
    chapters: [
      {
        id: 5,
        title: "CSS Grid and Advanced Topics",
        isExpanded: false,
        lessons: [
          {
            id: 21,
            title: "Introduction to CSS Grid",
            type: "text",
            content: `<p>CSS Grid is a 2-dimensional layout system for web pages.</p>
<pre><code>.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
}</code></pre>
<ul>
  <li>grid-template-columns/rows: defines the structure</li>
  <li>grid-gap: space between items</li>
  <li>grid-column/row: place items</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code>.item {
  grid-column: 1 / 3;
}</code></pre>`,
            duration: "18 min",
            isCompleted: false,
            isLocked: false,
            quiz: [],
          },
          {
            id: 22,
            title: "Grid Placement and Areas",
            type: "text",
            content: `<p>You can place items in specific grid cells using:</p>
<ul>
  <li>grid-column-start / grid-column-end</li>
  <li>grid-row-start / grid-row-end</li>
</ul>
<p>Or use grid-area to name regions.</p>
<pre><code>.container {
  grid-template-areas:
    "header header"
    "sidebar main";
}

.item {
  grid-area: header;
}</code></pre>`,
            duration: "15 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 23,
            title: "Responsive Design with Grid",
            type: "text",
            content: `<p>CSS Grid makes responsive layouts easy.</p>
<ul>
  <li>Use fr units for flexible columns</li>
  <li>Use media queries to change grid structure</li>
</ul>
<pre><code>@media (max-width: 600px) {
  .container {
    grid-template-columns: 1fr;
  }
}</code></pre>
<ul>
  <li>minmax() for flexible sizing</li>
  <li>auto-fit and auto-fill for dynamic grids</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code>grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));</code></pre>`,
            duration: "16 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 24,
            title: "Transitions, Animations, and Variables",
            type: "text",
            content: `<p>CSS can animate properties and use variables.</p>
<p><strong>Transitions:</strong></p>
<pre><code>.button {
  transition: background 0.3s;
}</code></pre>
<p><strong>Animations:</strong></p>
<pre><code>@keyframes slide {
  from { left: 0; }
  to { left: 100px; }
}
.box {
  animation: slide 2s infinite;
}</code></pre>
<p><strong>Variables:</strong></p>
<pre><code>:root {
  --main-color: #3498db;
}
h1 {
  color: var(--main-color);
}</code></pre>`,
            duration: "18 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
        ],
      },
    ],
  },
];

const badges = [
  {
    id: 1,
    name: "CSS Novice",
    description: "Completed 1 lesson",
    xpRequired: 10,
    icon: "🎓"
  },
  {
    id: 2,
    name: "CSS Explorer",
    description: "Earned 50 XP",
    xpRequired: 50,
    icon: "🔍"
  },
  {
    id: 3,
    name: "CSS Champion",
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
        🎨 CSS Interactive Course
      </h2>
      <h1 className="text-lg text-gray-700 mb-8">"CSS is the language that makes the web beautiful. It's essential for anyone working in web development, design, or digital content. With CSS, you control colors, layouts, fonts, and responsiveness. This course is beginner-friendly-no coding experience needed. Once you finish, you'll be ready to dive deeper into advanced CSS, animations, and frameworks!"</h1>

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
function CssCourseApp() {
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
             courseName="Css" 
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

export default CssCourseApp;