import React, { useState, useEffect } from "react";
import "./blog.css";
import sololearnLogo from "../sololearnLogo.jpg";
import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaApple,
  FaGooglePlay,
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
  FaRegHeart,
  FaHeart,
  FaSpinner,
  FaBookmark,
  FaRegBookmark,
  FaExternalLinkAlt,
  FaCode,
  FaLightbulb,
  FaArrowRight
} from "react-icons/fa";
import NavBarP from "./NavBarP";
import FooterP from "./FooterP";

// Enhanced question data with icons
const questions = [
  { text: "What are the top trends in full-stack development? 💻", icon: <FaCode /> },
  { text: "How is AI changing software development? 🤖", icon: <FaLightbulb /> },
  { text: "What are the benefits of microservices? 🔗", icon: <FaCode /> },
  { text: "How do PWAs improve user experience? 📱", icon: <FaLightbulb /> },
  { text: "What role do APIs play today? 🔐", icon: <FaCode /> },
  { text: "How does DevOps impact software delivery? 🚀", icon: <FaCode /> },
  { text: "What is the future of cloud computing? ☁", icon: <FaLightbulb /> },
  { text: "How does cybersecurity shape modern applications? 🔒", icon: <FaCode /> },
  { text: "What are the advantages of serverless architecture? ⚡", icon: <FaLightbulb /> },
  { text: "How does blockchain impact software security? ⛓", icon: <FaCode /> },
  { text: "What are the best practices for database scaling? 🗄", icon: <FaLightbulb /> },
  { text: "How does AI enhance data analytics? 📊", icon: <FaCode /> },
  { text: "What are the key skills for a backend developer? 🖥", icon: <FaLightbulb /> },
  { text: "How does IoT impact software development? 🌐", icon: <FaCode /> },
  { text: "What is the role of UX/UI in web applications? 🎨", icon: <FaLightbulb /> },
  { text: "How to optimize website performance? ⚡", icon: <FaCode /> },
  { text: "How does React compare with Vue.js? ⚛", icon: <FaLightbulb /> },
  { text: "What are the benefits of GraphQL over REST? 📡", icon: <FaCode /> },
  { text: "How does Kubernetes help with app deployment? 📦", icon: <FaLightbulb /> },
  { text: "What are the latest trends in mobile app development? 📲", icon: <FaCode /> },
  { text: "How does machine learning impact automation? 🤖", icon: <FaLightbulb /> },
  { text: "What is the importance of API testing? 🛠", icon: <FaCode /> },
  { text: "How does AI impact cybersecurity? 🔐", icon: <FaLightbulb /> },
  { text: "What are the benefits of hybrid cloud computing? ☁", icon: <FaCode /> },
];

// Enhanced popular blogs with more interactive content
const popularBlogs = [
  {
    title: "How To Add Comments In HTML?",
    readTime: "4 min",
    excerpt: "Comments in HTML are notes that are used to explain your code, and they are ignored by the browser. Learn the different ways to include comments in your HTML code.",
    category: "HTML",
    tags: ["HTML", "Web Development", "Beginners"],
    views: 2543,
    imageUrl: "/assets/images/html-comments.jpg"
  },
  {
    title: "How To Create HTML Lists",
    readTime: "5 min",
    excerpt: "HTML offers various list types to organize and structure your content. This guide explains ordered lists, unordered lists, and definition lists with examples.",
    category: "HTML",
    tags: ["HTML", "Lists", "Web Development"],
    views: 1892,
    imageUrl: "/assets/images/html-lists.jpg"
  },
  {
    title: "What is a server and how does it work?",
    readTime: "7 min",
    excerpt: "Servers are the backbone of the internet. This blog explains the different types of servers, their architecture, and how they handle client requests.",
    category: "Networking",
    tags: ["Server", "Networking", "Backend"],
    views: 3245,
    imageUrl: "/assets/images/servers.jpg"
  },
  {
    title: "The Complete Guide to CSS Flexbox",
    readTime: "9 min",
    excerpt: "Flexbox is a powerful CSS layout module that makes designing responsive layouts simpler. Learn all about flex containers, items, and alignment properties.",
    category: "CSS",
    tags: ["CSS", "Flexbox", "Responsive Design"],
    views: 4128,
    imageUrl: "/assets/images/css-flexbox.jpg"
  },
];

export const EnhancedBlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [times, setTimes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCard, setActiveCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeBlog, setActiveBlog] = useState(null);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [likedCards, setLikedCards] = useState({});
  const [savedBlogs, setSavedBlogs] = useState({});
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [hoveredBlog, setHoveredBlog] = useState(null);
  const [blogAnimation, setBlogAnimation] = useState(null);

  const itemsPerPage = 9;

  // Generate categories based on question topics
  const categories = ["All", "AI", "Security", "Development", "Cloud", "Mobile"];

  useEffect(() => {
    // Generate random reading times
    const generateRandomTimes = () => {
      return Array.from({ length: questions.length }, () =>
        `${Math.floor(Math.random() * (20 - 2 + 1)) + 2} mins`
      );
    };
    setTimes(generateRandomTimes());

    // Add icon animation effect
    const iconAnimation = () => {
      const randomIndex = Math.floor(Math.random() * questions.length);
      setHoveredIcon(randomIndex);
      setTimeout(() => {
        setHoveredIcon(null);
      }, 1000);
    };

    // Set interval to animate random icons periodically
    const iconAnimationInterval = setInterval(iconAnimation, 3000);
    
    // Add blog animation effect
    const blogAnimation = () => {
      const randomBlogIndex = Math.floor(Math.random() * popularBlogs.length);
      setBlogAnimation(randomBlogIndex);
      setTimeout(() => {
        setBlogAnimation(null);
      }, 800);
    };
    
    // Set interval to animate random blogs periodically
    const blogAnimationInterval = setInterval(blogAnimation, 5000);

    return () => {
      clearInterval(iconAnimationInterval);
      clearInterval(blogAnimationInterval);
    };
  }, []);

  // Filter questions based on search and category
  const filteredQuestions = questions.filter((question) => {
    const matchesSearch = question.text.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" ||
      (selectedCategory === "AI" && question.text.includes("AI")) ||
      (selectedCategory === "Security" &&
        (question.text.includes("security") || question.text.includes("cybersecurity"))) ||
      (selectedCategory === "Development" &&
        (question.text.includes("development") || question.text.includes("developer"))) ||
      (selectedCategory === "Cloud" && question.text.includes("cloud")) ||
      (selectedCategory === "Mobile" && (question.text.includes("mobile") || question.text.includes("PWA")));

    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredQuestions.length / itemsPerPage);

  const currentQuestions = filteredQuestions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const toggleLike = (index) => {
    setLikedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleSave = (index) => {
    setSavedBlogs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const openModal = (index) => {
    setActiveCard(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const openBlogModal = (index) => {
    setActiveBlog(index);
    setIsBlogModalOpen(true);
  };
  
  const closeBlogModal = () => {
    setIsBlogModalOpen(false);
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage((prev) => Math.min(prev + 1, totalPages));
      setIsLoading(false);
    }, 1000); // Simulate loading delay
  };

  return (
    <>
    <NavBarP/>
    <style>
      {`
      .aa{
        margin-top: 80px;
      }
      `}
    </style>
    <div className="container">
      {/* Header */}
      

      {/* Main Content */}
      <main className="content">
        <div className="main-layout">
          {/* Question Grid */}
          <div className="question-section">
            {/* Search & Filters */}
            <div className="search-container">
              <input
                type="text"
                placeholder="Search topics..."
                className="search-box"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1); // Reset to first page when searching
                }}
              />
              <FaSearch className="search-icon" />
            </div>

            {/* Category filters */}
            <div className="category-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-button ${
                    selectedCategory === category ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1); // Reset to first page when changing category
                  }}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Question Grid */}
            <div className="question-grid">
              {currentQuestions.length > 0 ? (
                currentQuestions.map((question, index) => {
                  const realIndex = filteredQuestions.indexOf(question);
                  return (
                    <div
                      key={index}
                      className="question-card"
                      onClick={() => openModal(realIndex)}
                    >
                      <div className="question-content">
                        <div className={`question-icon-container ${hoveredIcon === realIndex ? 'icon-animate' : ''}`}>
                          {question.icon}
                        </div>
                        <p>{question.text}</p>
                        <button
                          className={`heart-button ${likedCards[realIndex] ? 'liked' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleLike(realIndex);
                          }}
                        >
                          {likedCards[realIndex] ? <FaHeart /> : <FaRegHeart />}
                        </button>
                      </div>
                      <div className="question-footer">
                        <span className="time">{times[realIndex]}</span>
                        <span className="tag">
                          {question.text.includes("AI")
                            ? "AI"
                            : question.text.includes("security")
                            ? "Security"
                            : question.text.includes("cloud")
                            ? "Cloud"
                            : question.text.includes("mobile")
                            ? "Mobile"
                            : "Development"}
                        </span>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="no-results">
                  No results found. Try adjusting your search or filters.
                </div>
              )}
            </div>

            {/* Load More Button */}
            {filteredQuestions.length > 0 && currentPage < totalPages && (
              <div className="load-more-container">
                <button
                  className="load-more-button"
                  onClick={handleLoadMore}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <FaSpinner className="spinner" />
                  ) : (
                    "Load More"
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Popular Blogposts Section - Interactive Version */}
          <div className="popular-blogs">
            <h2>Popular Blogposts</h2>
            {popularBlogs.map((blog, index) => (
              <div 
                key={index} 
                className={`blog-card ${hoveredBlog === index ? 'hovered' : ''} ${blogAnimation === index ? 'pulse' : ''}`}
                onMouseEnter={() => setHoveredBlog(index)}
                onMouseLeave={() => setHoveredBlog(null)}
                onClick={() => openBlogModal(index)}
              >
                <div className="blog-header">
                  <h3>{blog.title}</h3>
                  <button
                    className={`blog-bookmark ${savedBlogs[index] ? 'saved' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSave(index);
                    }}
                  >
                    {savedBlogs[index] ? <FaBookmark /> : <FaRegBookmark />}
                  </button>
                </div>
                
                {/* Blog preview content */}
                <div className="blog-preview">
                  <p className="blog-excerpt">{blog.excerpt}</p>
                  <div className="blog-meta">
                    <span className="blog-category">{blog.category}</span>
                    <span className="blog-time">{blog.readTime}</span>
                    <span className="blog-views">{blog.views} views</span>
                  </div>
                  
                  {/* Blog tags */}
                  <div className="blog-tags">
                    {blog.tags && blog.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="blog-tag">{tag}</span>
                    ))}
                  </div>
                  
                  {/* Read more button that appears on hover */}
                  {hoveredBlog === index && (
                    <div className="blog-read-more">
                      <span>Read Article <FaArrowRight /></span>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div className="view-all-blogs">
              <button>View All Blog Posts</button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* <footer className="footer">
        <div className="footer-content">
          <div className="social-links">
            <a href="#" className="social-link linkedin">
              <FaLinkedin size={20} color="#0A66C2" /> LinkedIn
            </a>
            <a href="#" className="social-link facebook">
              <FaFacebook size={20} color="#1877F2" /> Facebook
            </a>
            <a href="#" className="social-link twitter">
              <FaTwitter size={20} color="#1DA1F2" /> Twitter
            </a>
            <a href="#" className="social-link instagram">
              <FaInstagram size={20} color="#E4405F" /> Instagram
            </a>
            <a href="#" className="social-link youtube">
              <FaYoutube size={20} color="#FF0000" /> YouTube
            </a>
            <a href="#" className="store-link app-store-link">
              <FaApple size={24} color="#A2AAAD" /> App Store
            </a>
            <a href="#" className="store-link play-store-link">
              <FaGooglePlay size={20} color="#0F9D58" /> Google Play
            </a>
          </div>
          <div className="footer-links">
            <a href="#">Home</a>
            <a href="#">Top Learners</a>
            <a href="#">Pro</a>
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
            <a href="#">Bug Bounty Program</a>
            <a href="#">Careers</a>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Sololearn Mobile</a>
            <a href="#">Code Bits</a>
          </div>
        </div>
        <div className="footer-copyright">
          Made with <span className="sololearn-heart">❤</span> by <strong>Sololearn</strong> ©2025
        </div>
      </footer> */}

      {/* Question Modal */}
      {isModalOpen && activeCard !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{filteredQuestions[activeCard].text}</h2>
              <button className="modal-close-button" onClick={closeModal}>
                ✕
              </button>
            </div>
            <div className="modal-body">
              <p>
                This would be the full article content for the topic "
                {filteredQuestions[activeCard].text}". The article would discuss
                various perspectives, best practices, and real-world examples.
              </p>
              <p>
                The content would be rich with code samples, diagrams, and expert
                insights to help developers understand the concept thoroughly and
                apply it in their projects.
              </p>
              <div className="code-sample">
                <pre>
                  {`function exampleCode() {
  console.log("This is a code sample related to ${
    filteredQuestions[activeCard].text.split("?")[0]
  }");
}`}
                </pre>
              </div>
              <p>
                Further sections would explore advanced applications, performance
                considerations, and the future outlook for this technology trend.
              </p>
            </div>
            <div className="modal-footer">
              <button
                className="heart-button"
                onClick={() => toggleLike(activeCard)}
              >
                {likedCards[activeCard] ? <FaHeart /> : <FaRegHeart />}
              </button>
              <span className="time">{times[activeCard]}</span>
            </div>
          </div>
        </div>
      )}
      
      {/* Blog Modal */}
      {isBlogModalOpen && activeBlog !== null && (
        <div className="modal-overlay" onClick={closeBlogModal}>
          <div className="modal-content blog-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{popularBlogs[activeBlog].title}</h2>
              <button className="modal-close-button" onClick={closeBlogModal}>
                ✕
              </button>
            </div>
            <div className="modal-body">
              <div className="blog-meta-full">
                <span className="blog-category">{popularBlogs[activeBlog].category}</span>
                <span className="blog-time">{popularBlogs[activeBlog].readTime} read</span>
                <span className="blog-views">{popularBlogs[activeBlog].views} views</span>
              </div>
              
              <div className="blog-content">
                <p>{popularBlogs[activeBlog].excerpt}</p>
                <p>This would be the full blog content that expands on the excerpt and provides comprehensive information on the topic.</p>
                
                {popularBlogs[activeBlog].category === "HTML" && (
                  <div className="code-sample">
                    <pre>{`<!DOCTYPE html>
<html>
<head>
    <title>Example for ${popularBlogs[activeBlog].title}</title>
</head>
<body>
    <!-- This is an HTML comment -->
    <h1>Welcome to my page</h1>
    <p>This demonstrates the concepts discussed in the blog post.</p>
</body>
</html>`}</pre>
                  </div>
                )}
                
                <p>The article would continue with more detailed explanations, examples, and best practices.</p>
              </div>
              
              <div className="blog-tags-full">
                {popularBlogs[activeBlog].tags && popularBlogs[activeBlog].tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="blog-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="blog-bookmark-button"
                onClick={() => toggleSave(activeBlog)}
              >
                {savedBlogs[activeBlog] ? <FaBookmark /> : <FaRegBookmark />}
                {savedBlogs[activeBlog] ? " Saved" : " Save for later"}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
      <FooterP/>

    </>
  );
};

export default EnhancedBlogPage;