import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 text-white font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
