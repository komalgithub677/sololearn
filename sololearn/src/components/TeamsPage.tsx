import React, { useState, useEffect } from "react";
import { Menu, ChevronRight, Code, Brain, Rocket } from "lucide-react";
import Navbar from "./Navbar";
import "./TeamsPage.css"

const cn = (...classes) => classes.filter(Boolean).join(" ");

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";
    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      ghost: "hover:bg-gray-100 dark:hover:bg-gray-800",
    };
    const sizes = {
      default: "h-10 px-4 py-2",
      icon: "h-10 w-10",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6", className)} {...props} />
));
CardContent.displayName = "CardContent";

const TeamsPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const topNavbarClass = cn(
    "fixed top-0 left-0 right-0 transition-all duration-500 backdrop-blur-lg z-50",
    scrollY > 100 ? "bg-white dark:bg-black shadow-lg" : "bg-transparent"
  );

  // Bottom Navbar with solid black background and white text
  const bottomNavbarClass = cn(
    "fixed bottom-0 left-0 right-0 bg-black text-white backdrop-blur-lg z-50 shadow-2xl border-t border-white/10 h-16",
    "transition-all duration-500 transform",
    scrollY > 100 ? "translate-y-0" : "translate-y-20"
  );

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-gray-100 dark:from-black dark:to-gray-900 transition-colors duration-1000">
      {/* Top Navbar */}
      <nav className={topNavbarClass}>
        <Navbar />
      </nav>

      <div className="relative space-y-20 pb-32 pt-20">
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-gradient" />
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 animate-text-shine">
              Tech Training Your Employees Love
            </h1>
            <p className="text-xl mt-6 text-gray-300 leading-relaxed">
              Equip your people with the latest coding, data, and tech skills in
              5-minute mobile lessons that fit perfectly into breaks, commutes, and free time.
            </p>
            <Button className="mt-8 px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 animate-bounce-subtle">
            Start Login 
            </Button>
            
          </div>
        </div>

        {/* Trusted Companies Section */}
        <div className="trusted-companies text-center px-6">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 dark:text-gray-200">
            Trusted by Industry Leaders
          </h2>
          <div className="flex flex-wrap justify-center gap-12 items-center">
            {[
              "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
              "https://upload.wikimedia.org/wikipedia/commons/d/de/SpaceX-Logo.svg",
            ].map((logo, index) => (
              <div
                key={index}
                className="w-32 h-20 flex items-center justify-center filter dark:invert hover:scale-110 transition-transform duration-300 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img className="max-w-full max-h-full" src={logo} alt="Company Logo" />
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-gray-200">
            Why Teams Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Learn by Doing",
                description: "Interactive coding exercises with real-world applications",
              },
              {
                icon: <Brain className="w-8 h-8" />,
                title: "AI-Powered Learning",
                description: "Personalized learning paths adapted to each employee",
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Rapid Skill Growth",
                description: "Measurable progress with micro-learning approach",
              },
            ].map((benefit, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 bg-white/10 backdrop-blur-sm border-none shadow-xl hover:shadow-2xl dark:bg-gray-800/50">
                <CardContent className="p-8">
                  <div className="mb-6 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Navbar */}
      {/* <nav className={`teamsNavBalack ${bottomNavbarClass}`}>
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between  h-full">
            <Navbar className="teamsNavBalack text-white hover:text-gray-300" />
            <div className="flex items-center space-x-6">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Contact Sales
              </Button>
              <Button className="bg-white text-black hover:bg-gray-100">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav> */}
    </div>
  );
};

export default TeamsPage;
