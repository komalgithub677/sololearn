import Navbar from './Navbar';
import Hero from './Hero';
import Courses from './Courses';
import Features from './Features';
import CTA from './CTA';
import Footer from './Footer';
import Chatbot from './Chatbot';

function App() {

  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <Features />
        <CTA />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;













