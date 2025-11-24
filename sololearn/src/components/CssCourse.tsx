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
const CssIcon: React.FC = () => (
  <svg width="64" height="64" viewBox="0 0 128 128">
              <g>
                <path fill="#1572B6" d="M19.1 116.1L8.1 0h111.8l-11 116.1L63.9 128"/>
                <path fill="#33A9DC" d="M64 119.2l36.6-10.1 9.4-105H64"/>
                <path fill="#fff" d="M64 66.7H50.8l-1-11.2H64V45.2H36.3l.3 3.7 3.4 38.2H64z"/>
                <path fill="#EBEBEB" d="M64 66.7v10.3h13.2l-1.2 13.5L64 93.2v10.3l22.9-6.4.2-2.3 3.3-36.9.3-3.7H64z"/>
              </g>

            </svg>
);

const CssCourseData: CourseData = {
  title: "Css Interactive Course",
  description:
"  CSS is the language that makes the web beautiful. It's essential for anyone working in web development, design, or digital content. With CSS, you control colors, layouts, fonts, and responsiveness. This course is beginner-friendly-no coding experience needed. Once you finish, you'll be ready to dive deeper into advanced CSS, animations, and frameworks!"  ,
  icon: <CssIcon />,
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
          content: `CSS (Cascading Style Sheets) is the language used to style HTML documents. It allows you to control colors, fonts, layouts, spacing, and more. CSS separates content (HTML) from presentation (design).
  
  Benefits of CSS:
  - Consistent look and feel across pages
  - Easier maintenance and updates
  - Responsive design for different devices
  
  A simple CSS rule:
  h1 {
    color: blue;
    font-size: 32px;
  }
  
  /* This makes all <h1> elements blue and 32px tall. */
  `,
          duration: "15 min",
          isCompleted: false,
          isLocked: false,
          quiz: [
            
          ]
        },
        {
          id: 2,
          title: "CSS Syntax and Selectors",
          type: "text",
          content: `A CSS rule has three parts:
  1. Selector: which HTML element(s) to style
  2. Property: what to change (e.g., color)
  3. Value: the new setting (e.g., red)
  
  Example:
  p {
    color: red;
    font-size: 18px;
  }
  
  Types of selectors:
  - Element selector: h1, p, div
  - Class selector: .menu, .active
  - ID selector: #header, #main
  - Attribute selector: input[type="text"]
  
  Specificity: IDs > Classes > Elements
  
  You can group selectors:
  h1, h2, h3 {
    color: navy;
  }
  `,
          duration: "20 min",
          isCompleted: false,
          isLocked: false,
          quiz: [
            
          ]
        },
        {
          id: 3,
          title: "Including CSS in HTML",
          type: "text",
          content: `There are three ways to use CSS in HTML:
  
  1. Inline: Directly on an element (not recommended for large projects)
     <p style="color: red;">Hello</p>
  
  2. Internal: Inside a <style> tag in the <head>
     <style>
       p { color: blue; }
     </style>
  
  3. External: Link a .css file (best practice)
     <link rel="stylesheet" href="styles.css">
  
  External CSS keeps code organized and reusable.
  `,
          duration: "15 min",
          isCompleted: false,
          isLocked: false,
          quiz: [
            
          ]
        },
        {
          id: 4,
          title: "Colors and Units",
          type: "text",
          content: `CSS supports many color formats:
  - Named colors: red, blue, green
  - Hex codes: #ff0000, #00ff00
  - RGB: rgb(255,0,0)
  - RGBA: rgba(255,0,0,0.5)
  - HSL: hsl(0, 100%, 50%)
  
  Units:
  - px: pixels (absolute)
  - em, rem: relative to font size
  - %, vw, vh: relative to parent or viewport
  
  Example:
  body {
    background-color: #f0f0f0;
  }
  h1 {
    color: rgb(0, 128, 255);
    font-size: 2em;
  }
  `,
          duration: "18 min",
          isCompleted: false,
          isLocked: false,
          quiz: [
            
          ]
        },
        {
          id: 5,
          title: "Quiz",
          type: "text",
          content: `
  `,
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
            },
            {
              type: "mcq",
              question: "Which method is best for large websites?",
              options: [
                "External CSS",
                "Inline CSS",
                "Internal CSS",
                "JavaScript"
              ],
              correctAnswer: "External CSS"
            },
            {
              type: "fill",
              question: "Fill in the blank: To link a CSS file, use <link rel='stylesheet' ____='styles.css'>.",
              correctAnswer: "href"
            },
            {
              type: "mcq",
              question: "Where should the <style> tag be placed in HTML?",
              options: [
                "Inside <head>",
                "Inside <body>",
                "At the end of the file",
                "Inside <footer>"
              ],
              correctAnswer: "Inside <head>"
            },
            {
              type: "fill",
              question: "Fill in the blank: Inline CSS uses the ____ attribute.",
              correctAnswer: "style"
            },
            {
              type: "mcq",
              question: "What is the file extension for a CSS file?",
              options: [
                ".css",
                ".scss",
                ".html",
                ".js"
              ],
              correctAnswer: ".css"
            },
            {
              type: "mcq",
              question: "Which is a valid CSS hex color?",
              options: ["#ff0000", "ff0000", "rgb(255,0,0)", "#red"],
              correctAnswer: "#ff0000"
            },
            {
              type: "fill",
              question: "Fill in the blank: The unit 'em' is relative to the ____.",
              correctAnswer: "font size"
            },
            {
              type: "mcq",
              question: "Which format supports transparency?",
              options: ["rgba()", "rgb()", "hex", "named color"],
              correctAnswer: "rgba()"
            },
            {
              type: "mcq",
              question: "What does 'vw' stand for?",
              options: [
                "viewport width",
                "vertical width",
                "view width",
                "variable width"
              ],
              correctAnswer: "viewport width"
            },
            {
              type: "fill",
              question: "Fill in the blank: To set a background color, use ____-color.",
              correctAnswer: "background"
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "The CSS Box Model",
      isExpanded: false,
      lessons: [
        {
          id: 6,
          title: "Understanding the Box Model",
          type: "text",
          content: `Every HTML element is a box with:
  - Content: text or image
  - Padding: space around content
  - Border: line around padding
  - Margin: space outside border
  
  Order (inside out): Content → Padding → Border → Margin
  
  Visualizing:
  [Margin]
    [Border]
      [Padding]
        [Content]
  
  Example:
  .box {
    margin: 20px;
    padding: 10px;
    border: 2px solid #333;
  }
  `,
          duration: "20 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ]
        },
        {
          id: 7,
          title: "Box Sizing and Borders",
          type: "text",
          content: `By default, width/height apply to content only. Use box-sizing to include padding/border:
  
  .box {
    box-sizing: border-box;
  }
  
  Border properties:
  - border-width
  - border-style
  - border-color
  
  You can set all at once:
  border: 1px solid #000;
  
  Rounded corners:
  border-radius: 8px;
  `,
          duration: "15 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ]
        },
        {
          id: 8,
          title: "Quiz",
          type: "text",
          content: `You can control the size of boxes with width and height:
  
  .box {
    width: 200px;
    height: 100px;
  }
  
  Overflow controls content that doesn't fit:
  - visible (default)
  - hidden
  - scroll
  - auto
  
  Example:
  .box {
    overflow: auto;
  }
  `,
          duration: "15 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ]
        },
        {
          id: 9,
          title: "Margin and Padding Shorthand",
          type: "text",
          content: `You can set all sides at once:
  
  margin: 10px;        /* all sides */
  margin: 10px 20px;   /* top/bottom, left/right */
  margin: 10px 20px 5px 15px; /* top, right, bottom, left */
  
  Same for padding.
  
  Negative margins pull elements closer.
  
  Example:
  .box {
    margin: 10px 5px;
    padding: 20px 15px 10px 5px;
  }
  `,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ]
        },
        {
          id: 10,
          title: "Quiz",
          type: "text",
          content: `You can set all sides at once:
  
  margin: 10px;        /* all sides */
  margin: 10px 20px;   /* top/bottom, left/right */
  margin: 10px 20px 5px 15px; /* top, right, bottom, left */
  
  Same for padding.
  
  Negative margins pull elements closer.
  
  Example:
  .box {
    margin: 10px 5px;
    padding: 20px 15px 10px 5px;
  }
  `,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              type: "mcq",
              question: "Which is the innermost part of the box model?",
              options: ["Content", "Padding", "Border", "Margin"],
              correctAnswer: "Content"
            },
            {
              type: "fill",
              question: "Fill in the blank: The space between content and border is called ____.",
              correctAnswer: "padding"
            },
            {
              type: "mcq",
              question: "Which property sets space outside the border?",
              options: ["margin", "padding", "border", "outline"],
              correctAnswer: "margin"
            },
            {
              type: "fill",
              question: "Fill in the blank: To set a border, use the ____ property.",
              correctAnswer: "border"
            },
            {
              type: "mcq",
              question: "Which CSS property sets the space inside the border?",
              options: ["padding", "margin", "content", "outline"],
              correctAnswer: "padding"
            },
            {
              type: "mcq",
              question: "Which value for box-sizing includes padding and border in width?",
              options: ["border-box", "content-box", "box-border", "full-box"],
              correctAnswer: "border-box"
            },
            {
              type: "fill",
              question: "Fill in the blank: To make corners round, use ____-radius.",
              correctAnswer: "border"
            },
            {
              type: "mcq",
              question: "Which property sets the border style?",
              options: ["border-style", "border-width", "border-color", "border-radius"],
              correctAnswer: "border-style"
            },
            {
              type: "fill",
              question: "Fill in the blank: The default value for box-sizing is ____-box.",
              correctAnswer: "content"
            },
            {
              type: "mcq",
              question: "How do you set a red, 2px solid border?",
              options: [
                "border: 2px solid red;",
                "border: solid 2px red;",
                "border: red 2px solid;",
                "border: 2px red solid;"
              ],
              correctAnswer: "border: 2px solid red;"
            },
            {
              type: "mcq",
              question: "Which property sets the width of an element?",
              options: ["width", "height", "size", "length"],
              correctAnswer: "width"
            },
            {
              type: "fill",
              question: "Fill in the blank: To hide overflowing content, set overflow to ____.",
              correctAnswer: "hidden"
            },
            {
              type: "mcq",
              question: "Which overflow value adds scrollbars only when needed?",
              options: ["auto", "scroll", "hidden", "visible"],
              correctAnswer: "auto"
            },
            {
              type: "fill",
              question: "Fill in the blank: The default value for overflow is ____.",
              correctAnswer: "visible"
            },
            {
              type: "mcq",
              question: "Which property sets the height of an element?",
              options: ["height", "width", "size", "length"],
              correctAnswer: "height"
            },
            {
              type: "mcq",
              question: "How many values does margin: 10px 20px 5px 15px; set?",
              options: ["4", "2", "3", "1"],
              correctAnswer: "4"
            },
            {
              type: "fill",
              question: "Fill in the blank: margin: 10px 20px; sets top/bottom to 10px and left/right to ____.",
              correctAnswer: "20px"
            },
            {
              type: "mcq",
              question: "Which property can have negative values?",
              options: ["margin", "padding", "border", "width"],
              correctAnswer: "margin"
            },
            {
              type: "fill",
              question: "Fill in the blank: To set padding on all sides, use ____: 10px;",
              correctAnswer: "padding"
            },
            {
              type: "mcq",
              question: "Which is the correct order for margin: top right bottom left?",
              options: [
                "top right bottom left",
                "left right top bottom",
                "top left right bottom",
                "right top left bottom"
              ],
              correctAnswer: "top right bottom left"
            },
            {
              type: "mcq",
              question: "How many values does margin: 10px 20px 5px 15px; set?",
              options: ["4", "2", "3", "1"],
              correctAnswer: "4"
            },
            {
              type: "fill",
              question: "Fill in the blank: margin: 10px 20px; sets top/bottom to 10px and left/right to ____.",
              correctAnswer: "20px"
            },
            {
              type: "mcq",
              question: "Which property can have negative values?",
              options: ["margin", "padding", "border", "width"],
              correctAnswer: "margin"
            },
            {
              type: "fill",
              question: "Fill in the blank: To set padding on all sides, use ____: 10px;",
              correctAnswer: "padding"
            },
            {
              type: "mcq",
              question: "Which is the correct order for margin: top right bottom left?",
              options: [
                "top right bottom left",
                "left right top bottom",
                "top left right bottom",
                "right top left bottom"
              ],
              correctAnswer: "top right bottom left"
            }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "CSS Positioning and Display",
      isExpanded: false,
      lessons: [
        {
          id: 11,
          title: "Position Property",
          type: "text",
          content: `The position property controls how elements are positioned in the document flow.
  
  Values:
  - static (default): normal flow
  - relative: offset from normal position
  - absolute: positioned relative to nearest ancestor
  - fixed: positioned relative to viewport
  - sticky: toggles between relative and fixed
  
  Example:
  .box {
    position: absolute;
    top: 10px;
    left: 20px;
  }
  `,
          duration: "18 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ]
        },
        {
          id: 12,
          title: "Display Property",
          type: "text",
          content: `The display property defines how elements are rendered.
  
  Common values:
  - block: starts on a new line, takes full width
  - inline: flows with text, only as wide as content
  - inline-block: like inline, but can set width/height
  - none: hides the element
  
  Example:
  span {
    display: inline-block;
    width: 100px;
  }
  `,
          duration: "15 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ]
        },
        {
          id: 13,
          title: "Z-Index and Stacking Context",
          type: "text",
          content: `z-index controls the stacking order of positioned elements.
  
  - Only works on positioned elements (not static)
  - Higher z-index = in front
  
  Stacking context: a group of elements with a common stacking order.
  
  Example:
  .box1 { position: relative; z-index: 10; }
  .box2 { position: relative; z-index: 5; }
  `,
          duration: "12 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ]
        },
        {
          id: 14,
          title: "Float and Clear",
          type: "text",
          content: `The float property moves elements to the left or right, allowing text and inline elements to wrap around.
  
  Values: left, right, none
  
  Clear property stops elements from wrapping around floated elements.
  
  Example:
  img {
    float: left;
    margin-right: 10px;
  }
  p {
    clear: both;
  }
  `,
          duration: "14 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ]
        },
        {
          id: 15,
          title: "Quiz",
          type: "text",
          content: `  `,
          duration: "18 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              type: "mcq",
              question: "Which is the default value for position?",
              options: ["static", "relative", "absolute", "fixed"],
              correctAnswer: "static"
            },
            {
              type: "fill",
              question: "Fill in the blank: To fix an element to the viewport, use position: ____.",
              correctAnswer: "fixed"
            },
            {
              type: "mcq",
              question: "Which position value removes an element from normal flow?",
              options: ["absolute", "relative", "static", "sticky"],
              correctAnswer: "absolute"
            },
            {
              type: "fill",
              question: "Fill in the blank: To offset an element 20px from the top, use ____: 20px;",
              correctAnswer: "top"
            },
            {
              type: "mcq",
              question: "Which position value toggles between relative and fixed?",
              options: ["sticky", "absolute", "relative", "static"],
              correctAnswer: "sticky"
            },
            {
              type: "mcq",
              question: "Which display value hides an element?",
              options: ["none", "block", "inline", "inline-block"],
              correctAnswer: "none"
            },
            {
              type: "fill",
              question: "Fill in the blank: <div> elements are ____ by default.",
              correctAnswer: "block"
            },
            {
              type: "mcq",
              question: "Which display value allows width/height on inline elements?",
              options: ["inline-block", "inline", "block", "none"],
              correctAnswer: "inline-block"
            },
            {
              type: "fill",
              question: "Fill in the blank: <span> elements are ____ by default.",
              correctAnswer: "inline"
            },
            {
              type: "mcq",
              question: "Which display value starts a new line?",
              options: ["block", "inline", "inline-block", "none"],
              correctAnswer: "block"
            },
            {
              type: "mcq",
              question: "Which property controls stacking order?",
              options: ["z-index", "order", "stack", "level"],
              correctAnswer: "z-index"
            },
            {
              type: "fill",
              question: "Fill in the blank: z-index only works on ____ elements.",
              correctAnswer: "positioned"
            },
            {
              type: "mcq",
              question: "Which element will appear in front if z-index is higher?",
              options: [
                "The one with higher z-index",
                "The one with lower z-index",
                "The static element",
                "The element with no z-index"
              ],
              correctAnswer: "The one with higher z-index"
            },
            {
              type: "fill",
              question: "Fill in the blank: The default value for z-index is ____.",
              correctAnswer: "auto"
            },
            {
              type: "mcq",
              question: "Does z-index work on static elements?",
              options: ["No", "Yes"],
              correctAnswer: "No"
            },
            {
              type: "mcq",
              question: "Which property moves elements to the left or right?",
              options: ["float", "position", "align", "display"],
              correctAnswer: "float"
            },
            {
              type: "fill",
              question: "Fill in the blank: To stop wrapping around floats, use clear: ____.",
              correctAnswer: "both"
            },
            {
              type: "mcq",
              question: "Which float value removes floating?",
              options: ["none", "left", "right", "auto"],
              correctAnswer: "none"
            },
            {
              type: "fill",
              question: "Fill in the blank: To float an image to the right, use float: ____;",
              correctAnswer: "right"
            },
            {
              type: "mcq",
              question: "Which property is used to prevent overlap with floated elements?",
              options: ["clear", "overflow", "display", "align"],
              correctAnswer: "clear"
            }
          ]
        },
      ]
    },
    {
      id: 4,
      title: "CSS Flexbox",
      isExpanded: false,
      lessons: [
        {
          id: 13,
          title: "Flex Container Basics",
          type: "text",
          content: `Flexbox is a layout model for arranging items in a row or column.
  
  To start, set display: flex on a container.
  
  .container {
    display: flex;
  }
  
  Main properties:
  - flex-direction: row | column
  - justify-content: alignment on main axis
  - align-items: alignment on cross axis
  - flex-wrap: wrap items to next line
  
  Example:
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  `,
          duration: "18 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              type: "mcq",
              question: "Which property makes an element a flex container?",
              options: ["display: flex", "flex: 1", "flex-item", "flex-wrap"],
              correctAnswer: "display: flex"
            },
            {
              type: "fill",
              question: "Fill in the blank: To arrange items in a column, set flex-direction: ____;",
              correctAnswer: "column"
            },
            {
              type: "mcq",
              question: "Which property aligns items along the main axis?",
              options: ["justify-content", "align-items", "flex-direction", "flex-wrap"],
              correctAnswer: "justify-content"
            },
            {
              type: "fill",
              question: "Fill in the blank: To wrap items to the next line, use flex-: wrap;",
              correctAnswer: "wrap"
            },
            {
              type: "mcq",
              question: "Which property aligns items on the cross axis?",
              options: ["align-items", "justify-content", "flex-direction", "flex-wrap"],
              correctAnswer: "align-items"
            }
          ]
        },
        {
          id: 17,
          title: "Flex Items and Order",
          type: "text",
          content: `Flex items are the children of a flex container.
  
  Key properties:
  - flex-grow: how much an item grows relative to others
  - flex-shrink: how much an item shrinks
  - flex-basis: initial size
  - order: controls order of items
  
  Example:
  .item {
    flex-grow: 2;
    order: 1;
  }
  `,
          duration: "15 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ]
        },
        {
          id: 18,
          title: "Flexbox Alignment and Spacing",
          type: "text",
          content: `Flexbox makes alignment and spacing easy.
  
  - justify-content: start, end, center, space-between, space-around, space-evenly
  - align-items: stretch, flex-start, flex-end, center, baseline
  - gap: sets space between flex items
  
  Example:
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }
  `,
          duration: "15 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ]
        },
        {
          id: 19,
          title: "Flexbox Practical Layouts",
          type: "text",
          content: `Common layouts with Flexbox:
  
  - Navigation bars
  - Card grids
  - Centering content
  - Responsive columns
  
  Example: Center a box
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  `,
          duration: "16 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ]
        },
        {
          id: 20,
          title: "Quiz",
          type: "text",
          content: `  }
  `,
          duration: "18 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              type: "mcq",
              question: "Which property makes an element a flex container?",
              options: ["display: flex", "flex: 1", "flex-item", "flex-wrap"],
              correctAnswer: "display: flex"
            },
            {
              type: "fill",
              question: "Fill in the blank: To arrange items in a column, set flex-direction: ____;",
              correctAnswer: "column"
            },
            {
              type: "mcq",
              question: "Which property aligns items along the main axis?",
              options: ["justify-content", "align-items", "flex-direction", "flex-wrap"],
              correctAnswer: "justify-content"
            },
            {
              type: "fill",
              question: "Fill in the blank: To wrap items to the next line, use flex-: wrap;",
              correctAnswer: "wrap"
            },
            {
              type: "mcq",
              question: "Which property aligns items on the cross axis?",
              options: ["align-items", "justify-content", "flex-direction", "flex-wrap"],
              correctAnswer: "align-items"
            },
            {
              type: "mcq",
              question: "Which property controls how much an item grows?",
              options: ["flex-grow", "flex-shrink", "flex-basis", "order"],
              correctAnswer: "flex-grow"
            },
            {
              type: "fill",
              question: "Fill in the blank: To set the initial size of a flex item, use flex-.",
              correctAnswer: "basis"
            },
            {
              type: "mcq",
              question: "Which property controls the order of flex items?",
              options: ["order", "flex-order", "flex-index", "z-index"],
              correctAnswer: "order"
            },
            {
              type: "fill",
              question: "Fill in the blank: To prevent an item from shrinking, set flex-shrink: ____;",
              correctAnswer: "0"
            },
            {
              type: "mcq",
              question: "What is the default value for flex-grow?",
              options: ["0", "1", "auto", "none"],
              correctAnswer: "0"
            },
            {
              type: "mcq",
              question: "Which property sets space between flex items?",
              options: ["gap", "margin", "padding", "space"],
              correctAnswer: "gap"
            },
            {
              type: "fill",
              question: "Fill in the blank: To center items horizontally, use justify-content: ____;",
              correctAnswer: "center"
            },
            {
              type: "mcq",
              question: "Which align-items value stretches items to fill the container?",
              options: ["stretch", "center", "flex-end", "baseline"],
              correctAnswer: "stretch"
            },
            {
              type: "fill",
              question: "Fill in the blank: To align items at the bottom, use align-items: ____;",
              correctAnswer: "flex-end"
            },
            {
              type: "mcq",
              question: "Which justify-content value puts equal space between items?",
              options: ["space-between", "space-around", "center", "flex-end"],
              correctAnswer: "space-between"
            },
            {
              type: "mcq",
              question: "Which two properties center items both ways?",
              options: [
                "justify-content and align-items",
                "margin and padding",
                "flex-direction and order",
                "gap and flex-wrap"
              ],
              correctAnswer: "justify-content and align-items"
            },
            {
              type: "fill",
              question: "Fill in the blank: To make columns, set flex-direction: ____;",
              correctAnswer: "column"
            },
            {
              type: "mcq",
              question: "Which layout is Flexbox best for?",
              options: [
                "1-dimensional (row or column)",
                "2-dimensional grids",
                "Absolute positioning",
                "Stacking order"
              ],
              correctAnswer: "1-dimensional (row or column)"
            },
            {
              type: "fill",
              question: "Fill in the blank: To create a responsive navbar, use display: ____ on the container.",
              correctAnswer: "flex"
            },
            {
              type: "mcq",
              question: "Which property wraps items to the next line?",
              options: ["flex-wrap", "flex-direction", "order", "gap"],
              correctAnswer: "flex-wrap"
            }
          ]
        },
      ]
    },
    {
      id: 5,
      title: "CSS Grid and Advanced Topics",
      isExpanded: false,
      lessons: [
        {
          id: 21,
          title: "Introduction to CSS Grid",
          type: "text",
          content: `CSS Grid is a 2-dimensional layout system for web pages.
  
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 16px;
  }
  
  - grid-template-columns/rows: defines the structure
  - grid-gap: space between items
  - grid-column/row: place items
  
  Example:
  .item {
    grid-column: 1 / 3;
  }
  `,
          duration: "18 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ]
        },
        {
          id: 22,
          title: "Grid Placement and Areas",
          type: "text",
          content: `You can place items in specific grid cells using:
  
  - grid-column-start / grid-column-end
  - grid-row-start / grid-row-end
  
  Or use grid-area to name regions.
  
  .container {
    grid-template-areas:
      "header header"
      "sidebar main";
  }
  
  .item {
    grid-area: header;
  }
  `,
          duration: "15 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ]
        },
        {
          id: 23,
          title: "Responsive Design with Grid",
          type: "text",
          content: `CSS Grid makes responsive layouts easy.
  
  - Use fr units for flexible columns
  - Use media queries to change grid structure
  
  @media (max-width: 600px) {
    .container {
      grid-template-columns: 1fr;
    }
  }
  
  - minmax() for flexible sizing
  - auto-fit and auto-fill for dynamic grids
  
  Example:
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  `,
          duration: "16 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ]
        },
        {
          id: 24,
          title: "Transitions, Animations, and Variables",
          type: "text",
          content: `CSS can animate properties and use variables.
  
  Transitions:
  .button {
    transition: background 0.3s;
  }
  
  Animations:
  @keyframes slide {
    from { left: 0; }
    to { left: 100px; }
  }
  .box {
    animation: slide 2s infinite;
  }
  
  Variables:
  :root {
    --main-color: #3498db;
  }
  h1 {
    color: var(--main-color);
  }
  `,
          duration: "18 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            
          ]
        },
        {
          id: 25,
          title: "Quiz",
          type: "text",
          content: ``,
          duration: "18 min",
          isCompleted: false,
          isLocked: true,
          quiz: [
            {
              type: "mcq",
              question: "Which property enables CSS Grid?",
              options: ["display: grid", "grid-template", "grid-gap", "grid-area"],
              correctAnswer: "display: grid"
            },
            {
              type: "fill",
              question: "Fill in the blank: grid-template-____ sets the columns.",
              correctAnswer: "columns"
            },
            {
              type: "mcq",
              question: "How many dimensions does CSS Grid handle?",
              options: ["2", "1", "3", "4"],
              correctAnswer: "2"
            },
            {
              type: "fill",
              question: "Fill in the blank: To span two columns, set grid-column: 1 / ____;",
              correctAnswer: "3"
            },
            {
              type: "mcq",
              question: "Which property sets the gap between grid items?",
              options: ["grid-gap", "gap", "margin", "padding"],
              correctAnswer: "grid-gap"
            },
            {
              type: "mcq",
              question: "Which property names a region in a grid?",
              options: ["grid-area", "grid-name", "area", "region"],
              correctAnswer: "grid-area"
            },
            {
              type: "fill",
              question: "Fill in the blank: grid-template-____ defines named areas.",
              correctAnswer: "areas"
            },
            {
              type: "mcq",
              question: "Which property sets where a grid item starts horizontally?",
              options: ["grid-column-start", "grid-row-start", "grid-area", "grid-gap"],
              correctAnswer: "grid-column-start"
            },
            {
              type: "fill",
              question: "Fill in the blank: To place an item in the 'sidebar' area, use grid-area: ____;",
              correctAnswer: "sidebar"
            },
            {
              type: "mcq",
              question: "Which property sets where a grid item ends vertically?",
              options: ["grid-row-end", "grid-column-end", "grid-area", "gap"],
              correctAnswer: "grid-row-end"
            },
            {
              type: "mcq",
              question: "Which unit is best for flexible grid columns?",
              options: ["fr", "px", "em", "%"],
              correctAnswer: "fr"
            },
            {
              type: "fill",
              question: "Fill in the blank: To make a single column on mobile, use grid-template-: 1fr;",
              correctAnswer: "columns"
            },
            {
              type: "mcq",
              question: "Which function creates flexible column sizes?",
              options: ["minmax()", "repeat()", "auto-fit", "fr()"],
              correctAnswer: "minmax()"
            },
            {
              type: "fill",
              question: "Fill in the blank: Use @____ to write media queries.",
              correctAnswer: "media"
            },
            {
              type: "mcq",
              question: "Which property allows dynamic number of columns?",
              options: ["auto-fit", "minmax()", "grid-gap", "grid-row"],
              correctAnswer: "auto-fit"
            },
            {
              type: "mcq",
              question: "Which property animates changes smoothly?",
              options: ["transition", "animation", "keyframes", "transform"],
              correctAnswer: "transition"
            },
            {
              type: "fill",
              question: "Fill in the blank: CSS variables start with two ____.",
              correctAnswer: "dashes"
            },
            {
              type: "mcq",
              question: "Which rule defines an animation sequence?",
              options: ["@keyframes", "@media", "@import", "@font-face"],
              correctAnswer: "@keyframes"
            },
            {
              type: "fill",
              question: "Fill in the blank: To use a variable, write var().",
              correctAnswer: "--main-color"
            },
            {
              type: "mcq",
              question: "Which property sets the animation to repeat forever?",
              options: ["infinite", "repeat", "loop", "forever"],
              correctAnswer: "infinite"
            }
          ]
        },
      ]
    }
  ],
};

export default function CssCoursePage() {
  return <CoursePlayer courseId="Css" courseData={CssCourseData} />;
}