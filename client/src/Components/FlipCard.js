import React, { useState } from "react";
import "./FLipCard.css"; // Importing the CSS file

const FlipCard = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="flip-card" onCLick={handleClick}>
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
