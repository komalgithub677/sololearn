export interface Footer { 
    id: number; 
    link: string;
    title: string; 
    icon: string; 
    bgColor: string; 
    description?: string;  // ✅ Make sure description exists
  }
  
  export const Footer: Footer[] = [
    {
      id: 1,
      link:'/HtmlCourseui',
      title: 'Introduction to HTML',
      description: 'Our HTML Tutorial covers the essentials of HTML, including basic structure, elements, attributes, forms, multimedia integration, and semantic HTML. Learn to build structured web pages from scratch, style them with CSS, and make them interactive with JavaScript. Whether you are a beginner or looking to polish your skills, this course will guide you through the fundamentals of web development. Start your journey to becoming a web developer today!',
      icon: 'HTML',
      bgColor: 'bg-orange-500',
    },
    {
      id: 2,
      link:'/CssCourseui',
      title: 'Introduction to CSS',
      description: "CSS is the language that makes the web beautiful. It's essential for anyone working in web development, design, or digital content. With CSS, you control colors, layouts, fonts, and responsiveness. This course is beginner-friendly-no coding experience needed. Once you finish, you'll be ready to dive deeper into advanced CSS, animations, and frameworks!",
      icon: 'CSS',
      bgColor: 'bg-blue-600',
    },
    {
      id: 3,
      link:'/SqlCourseui',
      title: 'Introduction to SQL',
      description: 'Want to work with SQL but don\'t know how to start? That\'s where SQL comes in! In this course, you\'ll learn SQL basics and how to use SQL statements! Database concepts, syntax and real-world data stored in databases. Once you know how to use SQL, you\'ll be able to work with databases from many different platforms and tools. Learn about SQL queries and how to manage data in databases. This course will give you practical skills and prepare you for everything from small projects to database administration. So what are you waiting for? If you\'re interested in database experience for this course, so dive right in!',
      icon: 'SQL',
      bgColor: 'bg-green-500',
    },
    {
      id: 4,
      link:'/GenAICourseui',
      title: 'Generative AI and practices',
      description: 'Learn to interact with GenAI tools to create, automate, and be more productive. This course will teach you how to use AI to organize and analyze data so you make smarter decisions.',
      icon: 'AI',
      bgColor: 'bg-purple-600',
    },
    {
      id: 5,
      link: '/JavaCourseui',
      title: 'Java Programming Essentials',
      description: 'Master the fundamentals of Java programming, including OOP concepts, data structures, algorithms, and real-world applications. Build a strong foundation for software development and backend engineering.',
      icon: 'Java',
      bgColor: 'bg-orange-500',
    },
    {
      id: 6,
      link: '/PythonCourseui',
      title: 'Python for Data Science and Automation',
      description: 'Explore Python for data analysis, automation, and machine learning. Learn to work with libraries like NumPy, pandas, and Matplotlib, and develop the skills to solve real-world problems efficiently.',
      icon: 'Python',
      bgColor: 'bg-blue-500',
    },
    {
      id: 7,
      link: '/JavaScriptCourseui',
      title: 'JavaScript Programming',
      description: " Ever wanted to make websites interactive, code fun mobile apps, or work with artificial intelligence? JavaScript lets you do all of that! No wonder it's one of the most popular programming languages out there. This course is perfect for beginners — no coding experience is needed. By the end of this course, you'll know the basics of using JavaScript to make an interactive website.",
      icon: 'JavaScript',
      bgColor: 'bg-green-500',
    },
    {
      id: 8,
      link: '/CCourseui',
      title: 'C Programming',
      description: "C is a general-purpose, procedural programming language developed in the early 1970s by Dennis Ritchie at Bell Labs. It was designed to develop system software and operating systems, notably the Unix operating system. C has had a powerful influence on many other languages, such as C++, Java, C#, and even Python, due to its simplicity, performance, and close-to-hardware capabilities.",
      icon: 'C',
      bgColor: 'bg-purple-500',
    }
  ];