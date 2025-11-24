
import React, { useState, useEffect, useRef } from 'react';
import { useMagneticEffect } from '@/lib/animations';
import { cn } from '@/lib/utils';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logoRef = useRef<HTMLDivElement>(null);
  
  // Apply magnetic effect to logo
  useMagneticEffect(logoRef, 30);
  
  // Navigation items
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'Product', href: '#product' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];
  
  // Change header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-10 transition-all duration-500',
        scrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div
          ref={logoRef}
          className="font-bold text-2xl cursor-pointer relative group transition-all duration-300 z-10"
        >
          <span className="absolute top-0 left-0 right-0 h-full bg-primary/10 -z-10 rounded-full origin-left scale-x-0 group-hover:scale-x-110 transition-transform duration-300"></span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Essence
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                'relative text-sm font-medium inline-block py-2 transition-all duration-300',
                'after:content-[""] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0',
                'after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300',
                'hover:after:scale-x-100 hover:after:origin-bottom-left',
                scrolled ? 'text-primary' : 'text-primary/90'
              )}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="transition-all duration-300 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-2 text-sm font-medium hover:translate-y-[-2px] hover:shadow-md active:translate-y-[0px]">
            Get Started
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span
            className={cn(
              'w-6 h-0.5 bg-primary rounded-full transition-all duration-300',
              mobileMenuOpen ? 'rotate-45 translate-y-[0.3rem]' : 'mb-1.5'
            )}
          />
          <span
            className={cn(
              'w-6 h-0.5 bg-primary rounded-full transition-all duration-300',
              mobileMenuOpen ? '-rotate-45' : ''
            )}
          />
        </button>
        
        {/* Mobile Menu */}
        <div
          className={cn(
            'fixed inset-0 bg-white/95 dark:bg-black/95 flex flex-col justify-center items-center z-40 backdrop-blur-lg transition-all duration-500 md:hidden',
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          )}
        >
          <nav className="flex flex-col space-y-8 items-center">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  'text-2xl font-medium hover:text-primary/70 transition-all duration-300',
                  'animate-fade-in'
                )}
                style={{ animationDelay: `${mobileMenuOpen ? 0.2 + index * 0.1 : 0}s` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="mt-6 bg-primary text-primary-foreground rounded-full px-8 py-3 text-base font-medium hover:bg-primary/90 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Get Started
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
