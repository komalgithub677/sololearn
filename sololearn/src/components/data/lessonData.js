// src/components/data/lessonData.js

export const lessons = [
  {
    id: 1,
    title: "The Core Web Technology",
    description: "HTML is the standard markup language for creating web pages.",
    xp: 10,
    quizQuestions: [
      { type: "multiple-choice", question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"], correctAnswer: "Hyper Text Markup Language", xp: 5 },
      { type: "code-completion", question: "Complete the paragraph element tag", placeholder: "<p>___", correctAnswer: "</p>", xp: 5 },
      { type: "multiple-choice", question: "Which tag is used to start an HTML document?", options: ["<html>", "<start>", "<head>"], correctAnswer: "<html>", xp: 5 },
      { type: "code-completion", question: "Add the HTML5 doctype declaration", placeholder: "___", correctAnswer: "<!DOCTYPE html>", xp: 5 },
      { type: "multiple-choice", question: "Which tag is used to define metadata?", options: ["<meta>", "<head>", "<data>"], correctAnswer: "<meta>", xp: 5 },
      { type: "code-completion", question: "Complete the head section tag", placeholder: "<head>___", correctAnswer: "</head>", xp: 5 },
      { type: "multiple-choice", question: "Which tag wraps the visible content of a web page?", options: ["<body>", "<main>", "<view>"], correctAnswer: "<body>", xp: 5 },
      { type: "code-completion", question: "Wrap the visible content of your webpage", placeholder: "___", correctAnswer: "<body></body>", xp: 5 },
      { type: "multiple-choice", question: "Which tag defines the document’s title shown in browser tab?", options: ["<title>", "<head>", "<meta>"], correctAnswer: "<title>", xp: 5 },
      { type: "code-completion", question: "Set a webpage title", placeholder: "<title>My Site ___", correctAnswer: "</title>", xp: 5 }
    ]
  },
  {
    id: 2,
    title: "Elements and Structure",
    description: "HTML documents are structured using elements and tags.",
    xp: 10,
    quizQuestions: [
      { type: "multiple-choice", question: "Which of the following is a void element?", options: ["<img>", "<p>", "<div>"], correctAnswer: "<img>", xp: 5 },
      { type: "code-completion", question: "Complete the image element tag", placeholder: '<img src="image.jpg" ___>', correctAnswer: "/>", xp: 5 },
      { type: "multiple-choice", question: "Which tag is used to group block elements?", options: ["<div>", "<span>", "<section>"], correctAnswer: "<div>", xp: 5 },
      { type: "code-completion", question: "Create a section element", placeholder: "___", correctAnswer: "<section></section>", xp: 5 },
      { type: "multiple-choice", question: "What does semantic HTML mean?", options: ["Tags that describe content", "Tags that work with JavaScript", "Tags with styling"], correctAnswer: "Tags that describe content", xp: 5 },
      { type: "code-completion", question: "Write a semantic header tag", placeholder: "___", correctAnswer: "<header></header>", xp: 5 },
      { type: "multiple-choice", question: "Which tag is used for inline content?", options: ["<span>", "<div>", "<section>"], correctAnswer: "<span>", xp: 5 },
      { type: "code-completion", question: "Open and close a nav element", placeholder: "___", correctAnswer: "<nav></nav>", xp: 5 },
      { type: "multiple-choice", question: "Which element is used to define a footer?", options: ["<footer>", "<bottom>", "<end>"], correctAnswer: "<footer>", xp: 5 },
      { type: "code-completion", question: "Add a main content section", placeholder: "___", correctAnswer: "<main></main>", xp: 5 }
    ]
  },
  {
    id: 3,
    title: "Text Elements",
    description: "HTML provides various elements to format and structure text.",
    xp: 10,
    quizQuestions: [
      { type: "multiple-choice", question: "Which tag makes text bold?", options: ["<b>", "<bold>", "<strong>"], correctAnswer: "<b>", xp: 5 },
      { type: "multiple-choice", question: "Which tag defines emphasized text?", options: ["<em>", "<i>", "<italic>"], correctAnswer: "<em>", xp: 5 },
      { type: "code-completion", question: "Complete the heading element", placeholder: "<h1>Title ___", correctAnswer: "</h1>", xp: 5 },
      { type: "code-completion", question: "Wrap a short quote in HTML", placeholder: "___", correctAnswer: "<q>Quote</q>", xp: 5 },
      { type: "multiple-choice", question: "Which tag inserts a line break?", options: ["<br>", "<lb>", "<break>"], correctAnswer: "<br>", xp: 5 },
      { type: "code-completion", question: "Create a bold strong element", placeholder: "___", correctAnswer: "<strong>Important</strong>", xp: 5 },
      { type: "multiple-choice", question: "Which tag is used to define preformatted text?", options: ["<pre>", "<code>", "<p>"], correctAnswer: "<pre>", xp: 5 },
      { type: "code-completion", question: "Use code formatting", placeholder: "___", correctAnswer: "<code>let x = 5;</code>", xp: 5 },
      { type: "multiple-choice", question: "Which tag shows deleted text?", options: ["<del>", "<remove>", "<strike>"], correctAnswer: "<del>", xp: 5 },
      { type: "code-completion", question: "Add superscript text", placeholder: "___", correctAnswer: "<sup>2</sup>", xp: 5 }
    ]
  },
  {
    id: 4,
    title: "Links and Images",
    description: "Learn how to add links and images to your HTML page.",
    xp: 10,
    quizQuestions: [
      { type: "multiple-choice", question: "Which tag is used to create a hyperlink?", options: ["<a>", "<link>", "<url>"], correctAnswer: "<a>", xp: 5 },
      { type: "code-completion", question: "Complete the anchor tag", placeholder: '<a href="___">Link</a>', correctAnswer: "https://example.com", xp: 5 },
      { type: "multiple-choice", question: "Which attribute opens a link in a new tab?", options: ["target='_blank'", "href='_new'", "open='newtab'"], correctAnswer: "target='_blank'", xp: 5 },
      { type: "code-completion", question: "Add alt text to the image tag", placeholder: '<img src="logo.png" ___>', correctAnswer: 'alt="Logo">', xp: 5 },
      { type: "multiple-choice", question: "Which tag adds an image?", options: ["<img>", "<image>", "<pic>"], correctAnswer: "<img>", xp: 5 },
      { type: "code-completion", question: "Create a clickable image", placeholder: "___", correctAnswer: '<a href="https://site.com"><img src="img.jpg" alt="pic"></a>', xp: 5 },
      { type: "multiple-choice", question: "Which attribute defines the link destination?", options: ["href", "src", "link"], correctAnswer: "href", xp: 5 },
      { type: "code-completion", question: "Insert an image with width attribute", placeholder: "___", correctAnswer: '<img src="photo.jpg" width="300">', xp: 5 },
      { type: "multiple-choice", question: "Which tag is used to link to an external CSS file?", options: ["<link>", "<a>", "<style>"], correctAnswer: "<link>", xp: 5 },
      { type: "code-completion", question: "Link a stylesheet", placeholder: "___", correctAnswer: '<link rel="stylesheet" href="style.css">', xp: 5 }
    ]
  },
  {
    id: 5,
    title: "Lists in HTML",
    description: "Use HTML to create ordered and unordered lists.",
    xp: 10,
    quizQuestions: [
      { type: "multiple-choice", question: "Which tag creates an unordered list?", options: ["<ul>", "<ol>", "<list>"], correctAnswer: "<ul>", xp: 5 },
      { type: "code-completion", question: "Complete the list item tag", placeholder: "<li>Item ___", correctAnswer: "</li>", xp: 5 },
      { type: "multiple-choice", question: "Which tag is used for numbered lists?", options: ["<ol>", "<ul>", "<li>"], correctAnswer: "<ol>", xp: 5 },
      { type: "code-completion", question: "Start an ordered list", placeholder: "___", correctAnswer: "<ol>", xp: 5 },
      { type: "multiple-choice", question: "What tag is used to define each item in a list?", options: ["<li>", "<ul>", "<item>"], correctAnswer: "<li>", xp: 5 },
      { type: "code-completion", question: "Create a basic unordered list", placeholder: "___", correctAnswer: "<ul><li>One</li><li>Two</li></ul>", xp: 5 },
      { type: "multiple-choice", question: "Which tag creates a description list?", options: ["<dl>", "<ol>", "<ul>"], correctAnswer: "<dl>", xp: 5 },
      { type: "code-completion", question: "Define a term in a description list", placeholder: "___", correctAnswer: "<dt>HTML</dt><dd>Markup Language</dd>", xp: 5 },
      { type: "multiple-choice", question: "What is the parent tag of <li>?", options: ["<ul> or <ol>", "<li>", "<list>"], correctAnswer: "<ul> or <ol>", xp: 5 },
      { type: "code-completion", question: "Finish a description list", placeholder: "<dl>...</dl>", correctAnswer: "</dl>", xp: 5 }
    ]
  },
  {
    id: 6,
    title: "Forms and Input",
    description: "Create interactive forms with input fields using HTML.",
    xp: 10,
    quizQuestions: [
      { type: "multiple-choice", question: "Which tag is used to create a form?", options: ["<form>", "<input>", "<field>"], correctAnswer: "<form>", xp: 5 },
      { type: "code-completion", question: "Complete the input tag for a text box", placeholder: '<input type="___" name="username">', correctAnswer: "text", xp: 5 },
      { type: "multiple-choice", question: "Which input type is used for password fields?", options: ["text", "password", "secure"], correctAnswer: "password", xp: 5 },
      { type: "code-completion", question: "Create a submit button", placeholder: "___", correctAnswer: '<input type="submit" value="Submit">', xp: 5 },
      { type: "multiple-choice", question: "Which tag groups form elements?", options: ["<fieldset>", "<group>", "<formset>"], correctAnswer: "<fieldset>", xp: 5 },
      { type: "code-completion", question: "Label a text input", placeholder: "___", correctAnswer: '<label for="name">Name:</label><input id="name" type="text">', xp: 5 },
      { type: "multiple-choice", question: "Which input type allows selecting one of many options?", options: ["radio", "checkbox", "text"], correctAnswer: "radio", xp: 5 },
      { type: "code-completion", question: "Create a checkbox", placeholder: "___", correctAnswer: '<input type="checkbox" name="subscribe">', xp: 5 },
      { type: "multiple-choice", question: "Which tag defines a drop-down list?", options: ["<select>", "<option>", "<dropdown>"], correctAnswer: "<select>", xp: 5 },
      { type: "code-completion", question: "Create a select element", placeholder: "___", correctAnswer: '<select><option>One</option><option>Two</option></select>', xp: 5 }
    ]
  },
  {
    id: 7,
    title: "Tables",
    description: "Organize data using HTML tables.",
    xp: 10,
    quizQuestions: [
      { type: "multiple-choice", question: "Which tag defines a table row?", options: ["<tr>", "<td>", "<th>"], correctAnswer: "<tr>", xp: 5 },
      { type: "code-completion", question: "Complete the table cell tag", placeholder: "<td>Data ___", correctAnswer: "</td>", xp: 5 },
      { type: "multiple-choice", question: "Which tag is used to define table header cells?", options: ["<th>", "<tr>", "<head>"], correctAnswer: "<th>", xp: 5 },
      { type: "code-completion", question: "Start a table element", placeholder: "___", correctAnswer: "<table>", xp: 5 },
      { type: "multiple-choice", question: "Which tag groups the body content of a table?", options: ["<tbody>", "<trow>", "<tablebody>"], correctAnswer: "<tbody>", xp: 5 },
      { type: "code-completion", question: "Add a table heading row", placeholder: "___", correctAnswer: "<tr><th>Name</th><th>Age</th></tr>", xp: 5 },
      { type: "multiple-choice", question: "What tag defines a caption for a table?", options: ["<caption>", "<title>", "<label>"], correctAnswer: "<caption>", xp: 5 },
      { type: "code-completion", question: "Add a table caption", placeholder: "___", correctAnswer: "<caption>Student Info</caption>", xp: 5 },
      { type: "multiple-choice", question: "Which tag creates a table cell?", options: ["<td>", "<tr>", "<th>"], correctAnswer: "<td>", xp: 5 },
      { type: "code-completion", question: "Close a table element", placeholder: "___", correctAnswer: "</table>", xp: 5 }
    ]
  }
];
