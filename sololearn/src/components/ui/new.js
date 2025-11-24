import React from "react";
import MainScreen from "./MainScreen";  // Ensure MainScreen is imported
import TextAnimation from "./TextAnimation";  
import WhyCodeSection from "./WhyCodeSection";

function App() {
  return (
    <div>
      <MainScreen />
      <TextAnimation />
      <WhyCodeSection />
    </div>
  );
}

export default App;
