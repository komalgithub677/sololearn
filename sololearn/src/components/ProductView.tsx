
import React, { useState, useRef, useEffect } from 'react';
import { useInView } from '@/lib/animations';
import { cn } from '@/lib/utils';
import ParallaxSection from './ParallaxSection';

const ProductView: React.FC = () => {
  const [titleRef, isTitleInView] = useInView({ threshold: 0.1 });
  const [productRef, isProductInView] = useInView({ threshold: 0.2 });
  const productWrapperRef = useRef<HTMLDivElement>(null);
  
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isMouseOver, setIsMouseOver] = useState(false);
  
  // 3D rotation effect on mouse move
  useEffect(() => {
    if (!productWrapperRef.current || !isMouseOver) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!productWrapperRef.current) return;
      
      const rect = productWrapperRef.current.getBoundingClientRect();
      
      // Calculate mouse position relative to the center of the element
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate rotation based on mouse position
      // Max rotation +/- 10 degrees
      const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 10;
      const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * -10;
      
      setRotation({ x: rotateX, y: rotateY });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMouseOver]);
  
  // Reset rotation when mouse leaves
  const handleMouseLeave = () => {
    setIsMouseOver(false);
    setRotation({ x: 0, y: 0 });
  };
  
  // Specs array
  const specs = [
    { label: "Display", value: "Super Retina XDR" },
    { label: "Processor", value: "A15 Bionic chip" },
    { label: "Camera", value: "Pro 48MP system" },
    { label: "Battery", value: "All-day battery life" },
    { label: "Storage", value: "Up to 1TB" },
    { label: "Design", value: "Aerospace-grade aluminum" },
  ];
  
  return (
    <section id="product" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Product Display with 3D rotation */}
          <div 
            ref={productRef}
            className={cn(
              "w-full lg:w-1/2 relative transition-all duration-1000 ease-out",
              isProductInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <div
              ref={productWrapperRef}
              className="relative w-full aspect-[3/4] max-w-lg mx-auto perspective-container"
              onMouseEnter={() => setIsMouseOver(true)}
              onMouseLeave={handleMouseLeave}
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Product Image with 3D Transform */}
              <div
                className="w-full h-full rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                  transition: isMouseOver ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Placeholder for product image */}
                <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-100 flex items-center justify-center">
                  <div className="text-4xl font-light text-slate-400">Product</div>
                </div>
              </div>
              
              {/* Ambient light effect */}
              <div 
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at ${50 + rotation.y/2}% ${50 - rotation.x/2}%, rgba(255,255,255,0.1) 0%, transparent 70%)`,
                  pointerEvents: 'none',
                }}
              ></div>
            </div>
            
            {/* Interactive cues */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm text-slate-400 opacity-30 pointer-events-none select-none">
              <div className="animate-pulse">Hover to interact</div>
            </div>
          </div>
          
          {/* Product Info */}
          <ParallaxSection 
            className="w-full lg:w-1/2" 
            speed={0.1} 
            direction="right"
          >
            <div 
              ref={titleRef}
              className={cn(
                "max-w-xl transition-all duration-1000 ease-out",
                isTitleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Engineered to perfection</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every detail has been meticulously considered. From the materials we use to the technology we include, our product is designed to provide the best possible experience.
              </p>
              
              {/* Product Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {specs.map((spec, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-sm text-muted-foreground">{spec.label}</span>
                    <span className="text-base font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-primary-foreground rounded-full px-8 py-3 text-base font-medium hover:bg-primary/90 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
                  Purchase Now
                </button>
                <button className="border border-primary/20 text-primary rounded-full px-8 py-3 text-base font-medium hover:bg-primary/5 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </ParallaxSection>
        </div>
      </div>
    </section>
  );
};

export default ProductView;
