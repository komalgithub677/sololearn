
import React from 'react';
import { cn } from '@/lib/utils';
import { useParallax } from '@/lib/animations';

interface FloatingElementProps {
  className?: string;
  children?: React.ReactNode;
  delay?: number;
  duration?: number;
  parallaxFactor?: number;
  shape?: 'circle' | 'square' | 'blob';
}

const FloatingElement: React.FC<FloatingElementProps> = ({
  className,
  children,
  delay = 0,
  duration = 6,
  parallaxFactor = 0.1,
  shape = 'circle',
}) => {
  const parallax = useParallax(parallaxFactor);
  
  const getShapeStyles = () => {
    switch (shape) {
      case 'square':
        return 'rounded-lg';
      case 'blob':
        return 'rounded-[40%_60%_60%_40%/50%_50%_50%_50%]';
      case 'circle':
      default:
        return 'rounded-full';
    }
  };
  
  return (
    <div
      className={cn(
        'absolute pointer-events-none backdrop-blur-sm',
        getShapeStyles(),
        className
      )}
      style={{
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        transform: `translateY(${parallax.y}px)`,
      }}
    >
      {children}
    </div>
  );
};

const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden z-[-1]">
      <FloatingElement
        className="w-64 h-64 top-[10%] left-[10%] bg-gradient-to-br from-blue-100/10 to-purple-100/10 glass"
        delay={0}
        parallaxFactor={0.2}
        shape="blob"
      />
      
      <FloatingElement
        className="w-96 h-96 top-[40%] right-[5%] bg-gradient-to-tr from-pink-100/10 to-blue-100/10 glass"
        delay={1.5}
        parallaxFactor={0.1}
        shape="circle"
      />
      
      <FloatingElement
        className="w-48 h-48 bottom-[15%] left-[20%] bg-gradient-to-bl from-green-100/10 to-blue-100/10 glass"
        delay={1}
        parallaxFactor={0.3}
        shape="square"
      />
      
      <FloatingElement
        className="w-32 h-32 top-[30%] left-[40%] bg-gradient-to-r from-amber-100/10 to-orange-100/10 glass"
        delay={2}
        parallaxFactor={0.15}
        shape="blob"
      />
      
      <FloatingElement
        className="w-64 h-64 bottom-[10%] right-[20%] bg-gradient-to-tl from-blue-100/10 to-indigo-100/10 glass"
        delay={0.5}
        parallaxFactor={0.25}
        shape="circle"
      />
    </div>
  );
};

export default FloatingElements;
