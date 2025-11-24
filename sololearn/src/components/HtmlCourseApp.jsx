import React, { useState, useEffect } from "react";
import CoursePlayer from "./me";
import axios from "axios";
import PreTest from "./PreTest.tsx";

// === EMBEDDED DATA ===
const lessons = [
  {
    id: 1,
    title: "HTML Fundamentals",
    description: "HTML is the standard markup language for creating web pages.",
    xp: 10,
    chapters: [
      {
        id: 1,
        title: "HTML Fundamentals",
        isExpanded: true,
        lessons: [
          {
            id: 1,
            title: "What is HTML?",
            type: "text",
            content: `<p>HTML stands for HyperText Markup Language. It is the standard language used to create and design web pages. HTML uses 'tags' to mark up content so browsers know how to display it.</p>
<ul>
  <li><strong>HTML structures content on the web</strong></li>
  <li>Tags define elements like headings, paragraphs, and links</li>
  <li>It works alongside CSS and JavaScript</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code><p>This is a paragraph.</p></code></pre>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: false,
            quiz: [],
          },
          {
            id: 2,
            title: "HTML Document Structure",
            type: "text",
            content: `<p>A basic HTML document has a specific structure:</p>
<pre><code><!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <!-- Content goes here -->
  </body>
</html></code></pre>
<p><strong>Key elements:</strong></p>
<ul>
  <li><code><!DOCTYPE html></code>: Declares the document as HTML5</li>
  <li><code><html></code>: Root element</li>
  <li><code><head></code>: Contains metadata</li>
  <li><code><body></code>: Contains visible content</li>
</ul>`,
            duration: "12 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 3,
            title: "HTML Tags and Elements",
            type: "text",
            content: `<p>HTML uses tags like <code><p></code>, <code><h1></code>, <code><a></code>, etc. Tags usually come in pairs: an opening tag <code><tag></code> and a closing tag <code></tag></code>.</p>
<p><strong>Example:</strong></p>
<pre><code><p>This is a paragraph.</p></code></pre>
<p>Some tags are self-closing, like <code><img /></code> and <code><br /></code>.</p>
<p><strong>Key points:</strong></p>
<ul>
  <li>Tags define the type of content</li>
  <li>Attributes provide additional information (e.g., <code>src</code>, <code>href</code>)</li>
</ul>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 4,
            title: "Comments and Whitespace",
            type: "text",
            content: `<p>You can add comments in HTML using <code><!-- Comment here --></code>. Comments are not displayed in the browser.</p>
<p>Whitespace (spaces, tabs, and line breaks) is ignored by browsers, but can make your code more readable.</p>
<p><strong>Example:</strong></p>
<pre><code><!-- This is a comment -->
<p>Paragraph with    extra   spaces.</p></code></pre>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          // QUIZ ADDED HERE
          {
            id: 5,
            title: "Quiz",
            type: "quiz",
            content: `<p>Test your knowledge of HTML Fundamentals!</p>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
            quiz: [
              {
                type: "mcq",
                question: "What does HTML stand for?",
                options: [
                  "HyperText Markup Language",
                  "Home Tool Markup Language",
                  "Hyperlinks and Text Markup Language",
                  "Hyper Tool Markup Language",
                ],
                correctAnswer: "HyperText Markup Language",
              },
              {
                type: "fill",
                question: "Fill in the blank: HTML uses ____ to structure content.",
                correctAnswer: "tags",
              },
              {
                type: "mcq",
                question: "What is the purpose of HTML?",
                options: [
                  "To style web pages",
                  "To structure content",
                  "To add interactivity",
                  "To manage databases",
                ],
                correctAnswer: "To structure content",
              },
              {
                type: "mcq",
                question: "Where does the visible content of a web page go?",
                options: ["<head>", "<body>", "<html>", "<title>"],
                correctAnswer: "<body>",
              },
              {
                type: "fill",
                question: "Fill in the blank: The ____ tag contains metadata.",
                correctAnswer: "head",
              },
              {
                type: "mcq",
                question: "What does <!DOCTYPE html> declare?",
                options: [
                  "HTML4 document",
                  "HTML5 document",
                  "CSS document",
                  "JavaScript document",
                ],
                correctAnswer: "HTML5 document",
              },
              {
                type: "mcq",
                question: "Which of these is a self-closing tag?",
                options: ["<p>", "<img />", "<h1>", "<div>"],
                correctAnswer: "<img />",
              },
              {
                type: "fill",
                question: "Fill in the blank: Tags usually come in ____ (opening and closing).",
                correctAnswer: "pairs",
              },
              {
                type: "mcq",
                question: "What do attributes provide in HTML tags?",
                options: [
                  "Additional information",
                  "Styling",
                  "Interactivity",
                  "Database connections",
                ],
                correctAnswer: "Additional information",
              },
              {
                type: "mcq",
                question: "How do you write a comment in HTML?",
                options: [
                  "// comment",
                  "# comment",
                  "<!-- comment -->",
                  "/* comment */",
                ],
                correctAnswer: "<!-- comment -->",
              },
              {
                type: "fill",
                question: "Fill in the blank: HTML comments start with ____.",
                correctAnswer: "<!--",
              },
              {
                type: "mcq",
                question: "What happens to extra whitespace in HTML?",
                options: [
                  "It is ignored by browsers",
                  "It creates errors",
                  "It adds extra spacing",
                  "It changes the layout",
                ],
                correctAnswer: "It is ignored by browsers",
              },
            ],
          },
        ],
      },
    ],
  },
  
  {
    id: 2,
    title: "Text and Headings",
    description: "HTML provides various elements to format and structure text.",
    xp: 10,
    chapters: [
      {
        id: 2,
        title: "Text and Headings",
        isExpanded: false,
        lessons: [
          {
            id: 6,
            title: "Headings",
            type: "text",
            content: `<p>HTML provides six levels of headings: <code><h1></code> (largest) through <code><h6></code> (smallest).</p>
<p><strong>Example:</strong></p>
<pre><code><h1>Main Title</h1>
<h2>Subtitle</h2></code></pre>
<p>Use headings to organize your content hierarchically for better readability and SEO.</p>`,
            duration: "8 min",
            isCompleted: false,
            isLocked: false,
            quiz: [],
          },
          {
            id: 7,
            title: "Paragraphs and Line Breaks",
            type: "text",
            content: `<p>Use <code><p></code> for paragraphs. To add a line break within text, use <code><br /></code>.</p>
<p><strong>Example:</strong></p>
<pre><code><p>This is a paragraph.<br />This is a new line.</p></code></pre>
<p>Paragraphs create block-level content, while <code><br /></code> adds a single line break.</p>`,
            duration: "8 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 8,
            title: "Text Formatting",
            type: "text",
            content: `<p>HTML offers tags for formatting text:</p>
<ul>
  <li><code><strong></code> for bold</li>
  <li><code><em></code> for italics</li>
  <li><code><u></code> for underline</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code><p>This is <strong>bold</strong> and <em>italic</em> text.</p></code></pre>
<p>Use semantic tags like <code><strong></code> and <code><em></code> for accessibility.</p>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 9,
            title: "Lists",
            type: "text",
            content: `<p>HTML supports:</p>
<ul>
  <li>Ordered lists: <code><ol></code></li>
  <li>Unordered lists: <code><ul></code></li>
  <li>List items: <code><li></code></li>
</ul>
<p><strong>Example:</strong></p>
<pre><code><ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul></code></pre>
<p>Ordered lists use numbers; unordered lists use bullets.</p>`,
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
    title: "Links and Images",
    description: "Learn how to add links and images to your HTML page.",
    xp: 10,
    chapters: [
      {
        id: 3,
        title: "Links and Images",
        isExpanded: false,
        lessons: [
          {
            id: 11,
            title: "Links",
            type: "text",
            content: `<p>Use the <code><a></code> tag to create hyperlinks.</p>
<p><strong>Example:</strong></p>
<pre><code><a href="https://example.com">Visit Example</a></code></pre>
<p><strong>Key points:</strong></p>
<ul>
  <li>The <code>href</code> attribute specifies the link destination</li>
  <li>Use <code>target="_blank"</code> to open in a new tab</li>
</ul>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: false,
            quiz: [],
          },
          {
            id: 12,
            title: "Images",
            type: "text",
            content: `<p>Use the <code><img></code> tag to display images.</p>
<p><strong>Example:</strong></p>
<pre><code><img src="image.jpg" alt="Description" /></code></pre>
<p><strong>Key points:</strong></p>
<ul>
  <li><code>src</code> specifies the image file</li>
  <li><code>alt</code> provides accessibility text</li>
</ul>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 13,
            title: "Linking Images",
            type: "text",
            content: `<p>You can make images clickable by wrapping them in <code><a></code> tags.</p>
<p><strong>Example:</strong></p>
<pre><code><a href="https://example.com"><img src="logo.png" alt="Logo" /></a></code></pre>
<p>This combines the functionality of links and images.</p>`,
            duration: "8 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 14,
            title: "Image Attributes",
            type: "text",
            content: `<p>Common <code><img></code> attributes:</p>
<ul>
  <li><code>width</code> and <code>height</code>: Set image size</li>
  <li><code>alt</code> provides accessibility text</li>
  <li><code>title</code>: Tooltip text</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code><img src="cat.jpg" alt="A cat" width="200" height="100" /></code></pre>`,
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
    id: 4,
    title: "Tables and Forms",
    description: "Learn how to create tables and forms to display data and collect user input.",
    xp: 10,
    chapters: [
      {
        id: 4,
        title: "Tables and Forms",
        isExpanded: false,
        lessons: [
          {
            id: 16,
            title: "Tables",
            type: "text",
            content: `<p>Tables organize data in rows and columns.</p>
<p><strong>Basic structure:</strong></p>
<pre><code><table>
  <tr>
    <th>Header</th>
    <th>Header</th>
  </tr>
  <tr>
    <td>Data</td>
    <td>Data</td>
  </tr>
</table></code></pre>
<p><strong>Key tags:</strong></p>
<ul>
  <li><code><table></code>: Defines the table</li>
  <li><code><tr></code>: Table row</li>
  <li><code><th></code>: Header cell</li>
  <li><code><td></code>: Data cell</li>
</ul>`,
            duration: "12 min",
            isCompleted: false,
            isLocked: false,
            quiz: [],
          },
          {
            id: 17,
            title: "Table Elements",
            type: "text",
            content: `<p><strong>Key table elements:</strong></p>
<ul>
  <li><code><table></code>: Table container</li>
  <li><code><tr></code>: Table row</li>
  <li><code><th></code>: Header cell</li>
  <li><code><td></code>: Data cell</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code><tr>
  <th>Name</th>
  <th>Age</th>
</tr></code></pre>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 18,
            title: "Forms and Inputs",
            type: "text",
            content: `<p>Forms collect user input.</p>
<p><strong>Example:</strong></p>
<pre><code><form>
  <input type="text" name="username" />
  <input type="submit" value="Send" />
</form></code></pre>
<p><strong>Key points:</strong></p>
<ul>
  <li><code><form></code>: Container for inputs</li>
  <li><code><input></code>: Collects user data</li>
</ul>`,
            duration: "12 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 19,
            title: "Input Types",
            type: "text",
            content: `<p><strong>Common input types:</strong></p>
<ul>
  <li>text</li>
  <li>password</li>
  <li>email</li>
  <li>checkbox</li>
  <li>radio</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code><input type="email" name="useremail" /></code></pre>
<p>Each type serves a specific purpose for user input.</p>`,
            duration: "10 min",
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
    title: "Semantic HTML & Multimedia",
    description: "Learn how to use semantic elements and multimedia tags to build accessible and meaningful web pages.",
    xp: 10,
    chapters: [
      {
        id: 5,
        title: "Semantic HTML & Multimedia",
        isExpanded: false,
        lessons: [
          {
            id: 21,
            title: "Semantic Elements",
            type: "text",
            content: `<p>Semantic elements describe their meaning:</p>
<ul>
  <li><code><header></code></li>
  <li><code><nav></code></li>
  <li><code><main></code></li>
  <li><code><section></code></li>
  <li><code><article></code></li>
  <li><code><footer></code></li>
</ul>
<p>They help with accessibility and SEO.</p>
<p><strong>Example:</strong></p>
<pre><code><main>
  <article>Content</article>
</main></code></pre>`,
            duration: "12 min",
            isCompleted: false,
            isLocked: false,
            quiz: [],
          },
          {
            id: 22,
            title: "Audio and Video",
            type: "text",
            content: `<p>HTML5 supports audio and video:</p>
<p><strong>Example:</strong></p>
<pre><code><audio controls>
  <source src="audio.mp3" type="audio/mpeg">
</audio>

<video controls width="320">
  <source src="movie.mp4" type="video/mp4">
</video></code></pre>
<p>The <code>controls</code> attribute adds playback controls.</p>`,
            duration: "10 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 23,
            title: "The <div> and <span> Elements",
            type: "text",
            content: `<p><code><div></code> is a block-level container for grouping content. <code><span></code> is an inline container.</p>
<p><strong>Example:</strong></p>
<pre><code><div class="container">
  <span>Text</span>
</div></code></pre>
<p>Use them for styling or scripting purposes.</p>`,
            duration: "8 min",
            isCompleted: false,
            isLocked: true,
            quiz: [],
          },
          {
            id: 24,
            title: "HTML Best Practices",
            type: "text",
            content: `<p><strong>Best practices:</strong></p>
<ul>
  <li>Use semantic tags for clarity</li>
  <li>Add alt text to images</li>
  <li>Indent nested elements</li>
  <li>Close all tags properly</li>
  <li>Keep code readable and organized</li>
</ul>
<p><strong>Example:</strong></p>
<pre><code><section>
  <h1>Title</h1>
  <p>Content</p>
</section></code></pre>`,
            duration: "10 min",
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
    name: "HTML Novice",
    description: "Completed 1 lesson",
    xpRequired: 10,
    icon: "🎓"
  },
  {
    id: 2,
    name: "HTML Explorer",
    description: "Earned 50 XP",
    xpRequired: 50,
    icon: "🔍"
  },
  {
    id: 3,
    name: "HTML Champion",
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
        🚀 HTML Interactive Course
      </h2>
      <h1>"HTML is at the core of every web page. It's beginner-friendly and knowing the basics is useful for everyone who works in digital design, marketing, content, and more. If you're interested in front-end web development, this course is a great place to start! You don't need any previous coding experience, and we have plenty of other courses for you to deepen your knowledge once you're finished, including CSS and JavaScript."</h1>

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
function HtmlCourseApp() {
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
             courseName="HTML" 
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

export default HtmlCourseApp;