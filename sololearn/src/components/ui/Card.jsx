import React from "react";

export const Card = ({ children, className = "" }) => {
  return (
    <div className={`p-5 bg-white shadow-md rounded-xl ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = "" }) => {
  return (
    <div className={`mt-4 ${className}`}>
      {children}
    </div>
  );
};
