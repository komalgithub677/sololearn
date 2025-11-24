import React from 'react';
import { Code2, Facebook, Twitter, Instagram, Linkedin, Youtube, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="col-span-2">
            <div className="flex items-center mb-6">
              <Code2 className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-2xl font-bold text-white">Sololearn</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Join millions of learners worldwide and transform your career with our mobile-first learning platform.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Facebook, href: 'https://facebook.com/sololearn', color: 'hover:text-blue-500' },
                { Icon: Twitter, href: 'https://twitter.com/sololearn', color: 'hover:text-blue-400' },
                { Icon: Instagram, href: 'https://instagram.com/sololearn', color: 'hover:text-pink-500' },
                { Icon: Linkedin, href: 'https://linkedin.com/company/sololearn', color: 'hover:text-blue-600' },
                { Icon: Youtube, href: 'https://youtube.com/sololearn', color: 'hover:text-red-600' },
                { Icon: Github, href: 'https://github.com/sololearn', color: 'hover:text-white' }
              ].map(({ Icon, href, color }, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${color} transition-colors`}
                >
                  <Icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Learn</h3>
            <ul className="space-y-3">
              {['Web Development', 'Python', 'Java', 'C++', 'Data Science', 'Machine Learning'].map((item, index) => (
                <li key={index}><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {['About', 'Careers', 'Blog', 'Press', 'Partners', 'Contact Us'].map((item, index) => (
                <li key={index}><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {['Code Playground', 'Community', 'Blog', 'Mobile App', 'Help Center'].map((item, index) => (
                <li key={index}><a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">{item}</a></li>
              ))}
              
            </ul>
          </div>
        </div>

            <div>
  <h3 className="text-lg font-semibold text-white mb-4">Aadhaar Verification</h3>
  <ul className="space-y-3">
    <li>
      <a
        href="http://localhost:5173/RegisterAadhaar"
        className="hover:text-white transition-colors"
      >
        Register Aadhaar
      </a>
    </li>
    <li>
      <a
        href="http://localhost:5173/AadhaarKycForm"
        className="hover:text-white transition-colors"
      >
        Verify Aadhaar
      </a>
    </li>
  </ul>
</div>


        <div className="border-t border-gray-800 mt-12 pt-8 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 Sololearn. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {['Terms of Use', 'Privacy Policy', 'Cookie Policy', 'Accessibility'].map((item, index) => (
                <a key={index} href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">{item}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
