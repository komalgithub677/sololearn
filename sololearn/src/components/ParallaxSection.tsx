
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from '@/lib/animations';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  fadeIn?: boolean;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className,
  speed = 0.2,
  direction = 'up',
  fadeIn = true,
}) => {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inViewRef, isInView] = useInView({
    threshold: 0.1,
    rootMargin: '0px 0px -10% 0px'
  });
  
  // Combine refs
  const setRefs = (element: HTMLDivElement | null) => {
    // Set the sectionRef
    sectionRef.current = element;
    
    // Set the inViewRef
    if (element) {
      // @ts-ignore - This is fine as we're just using the ref callback
      inViewRef(element);
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const { top } = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the element is from the center of the viewport
      const distanceFromCenter = top - windowHeight / 2;
      
      setOffset(distanceFromCenter * speed);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
  
  const getTransform = () => {
    switch (direction) {
      case 'up':
        return `translateY(${-offset}px)`;
      case 'down':
        return `translateY(${offset}px)`;
      case 'left':
        return `translateX(${-offset}px)`;
      case 'right':
        return `translateX(${offset}px)`;
      default:
        return `translateY(${-offset}px)`;
    }
  };
  
  return (
    <div
      ref={setRefs}
      className={cn(
        'transition-opacity duration-1000 ease-out',
        fadeIn && !isInView ? 'opacity-0' : 'opacity-100',
        className
      )}
      style={{
        transform: getTransform(),
        transition: 'transform 0.1s ease-out, opacity 1s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;
