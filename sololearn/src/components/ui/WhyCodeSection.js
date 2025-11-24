import React from "react";
import "./TextAnimation.css";
import imgPopular from "./assets/home-why-code-1.svg";
import imgPromising from "./assets/home-why-code-2.svg";
import imgFun from "./assets/home-why-code-3.svg";


const WhyCodeSection = () => {
    const features = [
      {
        image: imgPopular,
        imageClass: "svg-popular",
        title: "<b>It's popular</b>",
        description: "<b>Technical skills are in high demand.</b> Over 60% of new jobs worldwide will require tech skills.",
      },
      {
        image: imgPromising,
        imageClass: "svg-promising",
        title: "<b>It's promising</b>",
        description: "Unlock your earning potential! Entry-level programmers in the U.S. earn on <b> average over $78,000 in salary.</b>",
      },
      {
        image: imgFun,
        imageClass: "svg-fun",
        title: "<b>It's fun</b>",
        description: "Imagine combining your passion and skill with creativity,<b> making something new every day!</b>",
      },
    ];
  
    return (
      <section className="why-code">
        <h2 className="title">
          Why <span className="highlight">code</span>?
        </h2>
        <div className="cards-container">
          {features.map((feature, index) => (
            <div key={index} className="card">
              <img src={feature.image} alt={feature.title} className={`card-image ${feature.imageClass}`} />
              <h3 className="card-title" dangerouslySetInnerHTML={{ __html: feature.title }}></h3>
              <p className="card-description" dangerouslySetInnerHTML={{ __html: feature.description }}></p>
            </div>
          ))}
        </div>
        <button className="cta-button">I Want to Code</button>
      </section>
    );
  };
  
  export default WhyCodeSection;