import React, { useState } from "react";
import "./flipCard.css"; // Importing the CSS file

const FlipCard = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    console.log("Clicked!");
    setFlipped(!flipped);
  };

  return (
    <div className="flip-card" onClick={handleClick}>
      <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
        <div className="flip-card-front">
          <p>{question}</p>
        </div>
        <div className="flip-card-back">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
